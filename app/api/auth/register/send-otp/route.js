import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import OTP from '@/lib/models/OTP';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    await connectDB();
    const { email, name } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const trimmedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const userExists = await User.findOne({ email: trimmedEmail });
    if (userExists) {
      return new Response(JSON.stringify({ error: 'User already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate a secure 6-digit numeric OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store/Upsert the OTP in database (updates if document exists, sets expiration TTL)
    await OTP.findOneAndUpdate(
      { email: trimmedEmail },
      { otp: generatedOtp, createdAt: new Date() },
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

    const displayName = name ? name.trim() : 'Valued Client';

    // Premium designed HTML template
    const mailOptions = {
      from: `"ASH Solutions" <${process.env.EMAIL_USER}>`,
      to: trimmedEmail,
      subject: `Verify Your Email: Verification Code ${generatedOtp}`,
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
              Email Verification
            </h2>
            
            <p style="font-size: 15px; color: #64748b; line-height: 1.6; margin-bottom: 25px;">
              Hello ${displayName},<br/>
              Thank you for signing up with ASH Solutions. To complete your registration and verify your email address, please use the 6-digit One-Time Password (OTP) below.
            </p>
            
            <!-- OTP Display block -->
            <div style="background: rgba(99, 102, 241, 0.04); border: 1px dashed rgba(99, 102, 241, 0.3); border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 25px;">
              <span style="font-size: 32px; font-weight: 900; letter-spacing: 6px; color: #4f46e5; font-family: monospace;">
                ${generatedOtp}
              </span>
            </div>
            
            <p style="font-size: 13px; color: #94a3b8; line-height: 1.5; margin-bottom: 30px; text-align: center;">
              This code is valid for <strong>5 minutes</strong>. If you did not request this verification, please ignore this email.
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

    return new Response(JSON.stringify({ success: true, message: 'Verification code sent to your email' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Send OTP error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send verification email. Please check your email address.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
