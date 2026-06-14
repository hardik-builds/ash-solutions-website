import connectDB from '@/lib/mongodb';
import Review from '@/lib/models/Review';
import jwt from 'jsonwebtoken';

import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured in .env.local');
}

export async function GET() {
  try {
    await connectDB();
    const reviews = await Review.find({}).sort({ createdAt: -1 });
    return new Response(JSON.stringify({ reviews }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Fetch reviews error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(req) {
  try {
    let token = cookies().get('token')?.value;

    if (!token) {
      const authHeader = req.headers.get('Authorization');
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
      }
    }

    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized, no token provided' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Invalid or expired token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Role verification: Only clients ('user' role) can post reviews
    if (decoded.role !== 'user') {
      return new Response(JSON.stringify({ error: 'Forbidden, only clients can submit reviews' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await connectDB();
    const { userName, company, rating, comment } = await req.json();

    if (!userName || !rating || !comment) {
      return new Response(JSON.stringify({ error: 'Please provide name, rating, and review comment' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const review = await Review.create({
      userName,
      company: company || '',
      rating: Number(rating),
      comment,
      user: decoded.id,
    });

    return new Response(JSON.stringify({ review }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Create review error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
