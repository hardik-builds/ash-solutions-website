import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import PasswordReset from '@/lib/models/PasswordReset';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const trimmedEmail = email.toLowerCase().trim();

    // Check if user exists
    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
      // Return 200 for security reasons to prevent user enumeration
      return new Response(JSON.stringify({ success: true, message: 'If the email is registered, a password reset code has been sent.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate 6-digit verification code
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Upsert reset code (expires in 10 minutes)
    await PasswordReset.findOneAndUpdate(
      { email: trimmedEmail },
      { code: resetCode, createdAt: new Date() },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    // Create mail transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_PORT === '465',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"ASH Solutions" <${process.env.EMAIL_USER}>`,
      to: trimmedEmail,
      subject: `Reset Your Password: Code ${resetCode}`,
      html: `
        <div style="font-family: 'Outfit', 'Inter', -apple-system, sans-serif; background: #fafafa; padding: 40px 20px; text-align: center; color: #1e293b;">
          <div style="max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 24px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #e2e8f0; text-align: left;">
            
            <!-- Logo area -->
            <div style="margin-bottom: 30px; text-align: center;">
              <span style="font-size: 20px; font-weight: 950; letter-spacing: -1px; color: #4f46e5; text-transform: uppercase;">
                ASH <span style="color: #06b6d4;">Solutions</span>
              </span>
            </div>
            
            <h2 style="font-size: 22px; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 15px; letter-spacing: -0.5px;">
              Password Reset Request
            </h2>
            
            <p style="font-size: 15px; color: #64748b; line-height: 1.6; margin-bottom: 25px;">
              Hello ${user.name},<br/>
              We received a request to reset your password for your ASH Solutions account. Please use the 6-digit validation code below to set a new password.
            </p>
            
            <!-- Code Display block -->
            <div style="background: rgba(239, 68, 68, 0.02); border: 1px dashed rgba(239, 68, 68, 0.2); border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 25px;">
              <span style="font-size: 32px; font-weight: 900; letter-spacing: 6px; color: #ef4444; font-family: monospace;">
                ${resetCode}
              </span>
            </div>
            
            <p style="font-size: 13px; color: #94a3b8; line-height: 1.5; margin-bottom: 30px; text-align: center;">
              This code is valid for <strong>10 minutes</strong>. If you did not request a password reset, you can safely ignore this email.
            </p>
            
            <div style="border-top: 1px solid #f1f5f9; padding-top: 20px; text-align: center;">
              <span style="font-size: 12px; color: #94a3b8;">
                © 2026 ASH Solutions. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Password reset code has been sent to your email.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return new Response(JSON.stringify({ error: 'Server error while sending password reset code' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
