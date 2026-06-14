import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured in .env.local');
}

export async function POST(req) {
  try {
    const { credential } = await req.json();

    if (!credential) {
      return new Response(JSON.stringify({ error: 'No Google credential provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verify token using Google's tokeninfo API
    const verifyRes = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`);
    if (!verifyRes.ok) {
      return new Response(JSON.stringify({ error: 'Invalid Google token' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const tokenData = await verifyRes.json();
    const { email, name, aud, iss } = tokenData;

    // Verify issuer is Google
    if (iss !== 'accounts.google.com' && iss !== 'https://accounts.google.com') {
      return new Response(JSON.stringify({ error: 'Invalid token issuer' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verify audience matches our Client ID if configured
    const expectedClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (expectedClientId && aud !== expectedClientId) {
      console.warn('Google Client ID mismatch. Expected:', expectedClientId, 'Got:', aud);
      return new Response(JSON.stringify({ error: 'Audience mismatch. Invalid Client ID.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await connectDB();
    const trimmedEmail = email.toLowerCase().trim();

    // Check if user exists
    let user = await User.findOne({ email: trimmedEmail });

    if (!user) {
      // Create a random secure password for the user schema
      const randomPassword = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(randomPassword, salt);

      // Register new user (as client role: 'user')
      user = await User.create({
        name: name || email.split('@')[0],
        email: trimmedEmail,
        password: hashedPassword,
        role: 'user', // standard role
      });
      console.log('Registered new client via Google Auth:', trimmedEmail);
    }

    // Sign custom JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const cookieString = `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`;

    return new Response(
      JSON.stringify({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': cookieString,
        },
      }
    );
  } catch (error) {
    console.error('Google sign-in error:', error);
    return new Response(JSON.stringify({ error: 'Server error during Google Authentication' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
