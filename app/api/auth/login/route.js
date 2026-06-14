import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured in .env.local');
}

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Please provide email and password' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Find User
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Sign Token
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
    console.error('Login error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
