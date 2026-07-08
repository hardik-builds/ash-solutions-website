import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import limiter, { getClientIp } from '@/lib/rateLimit';
import { validateLoginPayload } from '@/lib/validation';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured in .env.local');
}

export async function POST(req) {
  try {
    // 1. Rate Limiting (5 requests per 1 minute)
    const ip = getClientIp();
    if (limiter.isLimitReached(ip, 5, 60000)) {
      console.warn(`Rate limit exceeded for IP: ${ip} on login`);
      return new Response(JSON.stringify({ error: 'Too many login attempts. Please try again in a minute.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Parse request JSON
    const body = await req.json();

    // 3. Server-side payload validation and sanitization
    const validation = validateLoginPayload(body);
    if (!validation.isValid) {
      return new Response(JSON.stringify({ error: 'Validation failed', errors: validation.errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { email, password } = validation.sanitized;

    await connectDB();
    console.log('Database connected successfully');

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
