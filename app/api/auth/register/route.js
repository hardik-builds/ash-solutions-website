import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import OTP from '@/lib/models/OTP';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import limiter, { getClientIp } from '@/lib/rateLimit';
import { validateRegisterPayload } from '@/lib/validation';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured in .env.local');
}

export async function POST(req) {
  try {
    // 1. Rate Limiting (3 requests per 5 minutes)
    const ip = getClientIp();
    const limitWindowMs = 5 * 60 * 1000;
    if (limiter.isLimitReached(ip, 3, limitWindowMs)) {
      console.warn(`Rate limit exceeded for IP: ${ip} on registration`);
      return new Response(JSON.stringify({ error: 'Too many registration requests. Please try again in 5 minutes.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Parse request JSON
    const body = await req.json();

    // 3. Server-side payload validation and sanitization
    const validation = validateRegisterPayload(body);
    if (!validation.isValid) {
      return new Response(JSON.stringify({ error: 'Validation failed', errors: validation.errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { name, email, password, otp } = validation.sanitized;
    const inviteCode = typeof body.inviteCode === 'string' ? body.inviteCode.trim() : '';

    await connectDB();
    console.log('Database connected successfully');

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return new Response(JSON.stringify({ error: 'User already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verify OTP
    const otpRecord = await OTP.findOne({ email });
    if (!otpRecord || otpRecord.otp !== otp) {
      return new Response(JSON.stringify({ error: 'Invalid or expired email verification code' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Role assignment:
    // If inviteCode matches ADMIN_INVITE_CODE, assign 'admin'. If wrong, throw error.
    // If no inviteCode is provided, assign 'admin' if first registrant, otherwise 'user'.
    let role = 'user';
    const envInviteCode = process.env.ADMIN_INVITE_CODE || 'ash_admin_secret_9981';

    if (inviteCode) {
      if (inviteCode === envInviteCode) {
        role = 'admin';
      } else {
        return new Response(JSON.stringify({ error: 'Invalid admin invite code' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } else {
      const isFirstUser = (await User.countDocuments({})) === 0;
      if (isFirstUser) {
        role = 'admin';
      }
    }

    // Delete verified OTP document
    await OTP.deleteOne({ email });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

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
        status: 201,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': cookieString,
        },
      }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
