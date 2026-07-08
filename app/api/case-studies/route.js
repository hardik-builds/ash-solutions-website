import connectDB from '@/lib/mongodb';
import CaseStudy from '@/lib/models/CaseStudy';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import cache from '@/lib/cache';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured in .env.local');
}

export async function GET() {
  try {
    const cacheKey = 'case_studies_all';
    const cachedStudies = cache.get(cacheKey);

    if (cachedStudies) {
      console.log('Serving case studies from cache');
      return new Response(JSON.stringify({ caseStudies: cachedStudies }), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'X-Cache': 'HIT'
        },
      });
    }

    await connectDB();
    const caseStudies = await CaseStudy.find({}).sort({ createdAt: -1 });

    // Store in cache (5 minutes TTL)
    cache.set(cacheKey, caseStudies, 300000);

    return new Response(JSON.stringify({ caseStudies }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'X-Cache': 'MISS'
      },
    });
  } catch (error) {
    console.error('Fetch case studies error:', error);
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
    const { title, client, description, outcome, tags } = await req.json();

    if (!title || !client || !description || !outcome) {
      return new Response(JSON.stringify({ error: 'Please provide all required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const caseStudy = await CaseStudy.create({
      title,
      client,
      description,
      outcome,
      tags: tags || [],
    });

    // Invalidate case studies cache on write
    cache.invalidate('case_studies_all');

    return new Response(JSON.stringify({ caseStudy }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Create case study error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
