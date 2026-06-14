import connectDB from '@/lib/mongodb';
import CaseStudy from '@/lib/models/CaseStudy';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured in .env.local');
}

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = params;

    const caseStudy = await CaseStudy.findById(id);
    if (!caseStudy) {
      return new Response(JSON.stringify({ error: 'Case Study not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ caseStudy }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Fetch single case study error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
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

    // Role verification: Only admin can delete case studies
    if (decoded.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Forbidden, admin role required' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await connectDB();
    const deletedCaseStudy = await CaseStudy.findByIdAndDelete(id);

    if (!deletedCaseStudy) {
      return new Response(JSON.stringify({ error: 'Case Study not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, message: 'Case Study deleted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Delete case study error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
