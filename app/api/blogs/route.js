import connectDB from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import cache from '@/lib/cache';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured in .env.local');
}

export async function GET() {
  try {
    const cacheKey = 'blogs_all';
    const cachedBlogs = cache.get(cacheKey);

    if (cachedBlogs) {
      console.log('Serving blogs from cache');
      return new Response(JSON.stringify({ blogs: cachedBlogs }), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'X-Cache': 'HIT'
        },
      });
    }

    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    // Store in cache (5 minutes TTL = 300,000 ms)
    cache.set(cacheKey, blogs, 300000);

    return new Response(JSON.stringify({ blogs }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'X-Cache': 'MISS'
      },
    });
  } catch (error) {
    console.error('Fetch blogs error:', error);
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

    // Role verification
    if (decoded.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Forbidden, admin role required' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await connectDB();
    const { title, content, author, tags } = await req.json();

    if (!title || !content) {
      return new Response(JSON.stringify({ error: 'Please provide title and content' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const blog = await Blog.create({
      title,
      content,
      author: author || 'ASH Solutions',
      tags: tags || [],
    });

    // Invalidate blogs cache on new write
    cache.invalidate('blogs_all');

    return new Response(JSON.stringify({ blog }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Create blog error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
