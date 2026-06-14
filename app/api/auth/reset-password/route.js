import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import PasswordReset from '@/lib/models/PasswordReset';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    await connectDB();
    const { email, code, newPassword } = await req.json();

    if (!email || !code || !newPassword) {
      return new Response(JSON.stringify({ error: 'Please provide email, code, and new password' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (newPassword.length < 6) {
      return new Response(JSON.stringify({ error: 'Password must be at least 6 characters long' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const trimmedEmail = email.toLowerCase().trim();

    // Verify code
    const resetRecord = await PasswordReset.findOne({ email: trimmedEmail });
    if (!resetRecord || resetRecord.code !== code.trim()) {
      return new Response(JSON.stringify({ error: 'Invalid or expired validation code' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password in user document
    const user = await User.findOneAndUpdate(
      { email: trimmedEmail },
      { password: hashedPassword }
    );

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Delete verified reset record
    await PasswordReset.deleteOne({ email: trimmedEmail });

    return new Response(JSON.stringify({ success: true, message: 'Password reset successfully. Please log in with your new password.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Reset password error:', error);
    return new Response(JSON.stringify({ error: 'Server error while resetting password' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
