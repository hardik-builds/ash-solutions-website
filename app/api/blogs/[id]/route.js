import connectDB from '@/lib/mongodb';
import Blog from '@/lib/models/Blog';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured in .env.local');
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
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

    // Role verification: Only admin can delete blogs
    if (decoded.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Forbidden, admin role required' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await connectDB();
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return new Response(JSON.stringify({ error: 'Blog post not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, message: 'Blog post deleted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Delete blog error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
