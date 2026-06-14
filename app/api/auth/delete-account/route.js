import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import Review from '@/lib/models/Review';
import jwt from 'jsonwebtoken';

import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not configured in .env.local');
}

export async function DELETE(req) {
  try {
    let token = cookies().get('token')?.value;

    if (!token) {
      const authHeader = req.headers.get('Authorization');
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
      }
    }

    if (!token) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Invalid token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await connectDB();

    // Check if the user is an admin. If so, let's warning/prevent if they are the only admin.
    const user = await User.findById(decoded.id);
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (user.role === 'admin') {
      const adminCount = await User.countDocuments({ role: 'admin' });
      if (adminCount <= 1) {
        return new Response(JSON.stringify({ error: 'Cannot delete the only administrator account. Please promote another admin first.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Delete user's reviews (DPDP data erasure compliance)
    const reviewsDeleted = await Review.deleteMany({ user: decoded.id });
    console.log(`Deleted ${reviewsDeleted.deletedCount} reviews for user: ${user.email}`);

    // Delete user account
    await User.findByIdAndDelete(decoded.id);
    console.log(`Successfully deleted user account: ${user.email}`);

    return new Response(JSON.stringify({ success: true, message: 'Account and all associated personal data have been completely erased.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Delete account error:', error);
    return new Response(JSON.stringify({ error: 'Server error while erasing data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
