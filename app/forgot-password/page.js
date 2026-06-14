'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState('request'); // 'request' or 'reset'
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Redirect if already logged in
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me');
        if (res.ok) {
          router.push('/insights');
        }
      } catch (err) {
        console.error('Auth check error:', err);
      }
    };
    checkAuth();
  }, [router]);

  const handleRequestCode = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send reset code');
      }

      setSuccess(data.message || 'If registered, a 6-digit verification code was sent.');
      setStep('reset');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code, newPassword }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Password reset failed');
      }

      setSuccess('Password updated successfully! Redirecting to login...');
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="contact-page-wrapper"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        color: 'var(--text-color)',
        overflow: 'hidden',
      }}
    >
      {/* Background Glows */}
      <div
        className="mesh-glow-indigo"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          top: '-100px',
          right: '-100px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        className="mesh-glow-cyan"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          bottom: '-100px',
          left: '-100px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        className="glass-panel"
        style={{
          maxWidth: '440px',
          width: '100%',
          borderRadius: '32px',
          padding: '40px',
          position: 'relative',
          zIndex: 2,
          boxShadow: 'var(--card-shadow), var(--card-sheen)',
        }}
      >
        {step === 'request' ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: '900',
                  color: 'var(--title-color)',
                  letterSpacing: '-1px',
                  marginBottom: '10px',
                }}
              >
                Reset Password
              </h1>
              <p style={{ color: 'var(--body-text)', fontSize: '14px', lineHeight: '1.5' }}>
                Enter your registered email address to receive a 6-digit password reset code.
              </p>
            </div>

            {error && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '12px',
                  color: '#ef4444',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleRequestCode} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--title-color)' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  style={inputStyle}
                  className="login-input"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={submitButtonStyle(loading)}
              >
                {loading ? 'Sending code...' : 'Send Reset Code'}
              </button>
            </form>

            <div style={{ marginTop: '28px', textAlign: 'center', fontSize: '13px', color: 'var(--body-text)' }}>
              Remember password?{' '}
              <Link href="/login" style={{ color: '#4f46e5', fontWeight: '700', textDecoration: 'none' }}>
                Sign In
              </Link>
            </div>
          </>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: '900',
                  color: 'var(--title-color)',
                  letterSpacing: '-1px',
                  marginBottom: '10px',
                }}
              >
                Enter New Password
              </h1>
              <p style={{ color: 'var(--body-text)', fontSize: '14px', lineHeight: '1.5' }}>
                Verify the code sent to <strong style={{ color: 'var(--title-color)' }}>{email}</strong> and set your new password.
              </p>
            </div>

            {error && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '12px',
                  color: '#ef4444',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                {error}
              </div>
            )}

            {success && (
              <div
                style={{
                  background: 'rgba(34, 197, 94, 0.08)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: '12px',
                  color: '#22c55e',
                  padding: '12px 16px',
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}
              >
                {success}
              </div>
            )}

            <form onSubmit={handleResetPassword} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--title-color)' }}>
                  6-Digit Verification Code
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="123456"
                  style={{
                    ...inputStyle,
                    letterSpacing: '8px',
                    textAlign: 'center',
                    fontSize: '18px',
                    fontWeight: '800',
                  }}
                  className="login-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--title-color)' }}>
                  New Password
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  style={inputStyle}
                  className="login-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--title-color)' }}>
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  style={inputStyle}
                  className="login-input"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={submitButtonStyle(loading)}
              >
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </form>

            <div style={{ marginTop: '28px', textAlign: 'center', fontSize: '13px' }}>
              <button
                type="button"
                onClick={() => {
                  setStep('request');
                  setError('');
                  setCode('');
                  setNewPassword('');
                  setConfirmPassword('');
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--body-text)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                ← Back / Change Email
              </button>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .login-input:focus {
          border-color: #4f46e5 !important;
          background: rgba(99, 102, 241, 0.01) !important;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  borderRadius: '12px',
  border: '1px solid var(--input-border)',
  background: 'var(--input-bg)',
  color: 'var(--input-text)',
  outline: 'none',
  fontSize: '14px',
  transition: 'all 0.3s ease',
};

const submitButtonStyle = (loading) => ({
  marginTop: '10px',
  width: '100%',
  padding: '15px',
  borderRadius: '14px',
  background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
  color: '#FFFFFF',
  fontWeight: '700',
  border: 'none',
  cursor: loading ? 'not-allowed' : 'pointer',
  opacity: loading ? 0.7 : 1,
  boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)',
  fontSize: '14px',
  transition: 'all 0.3s ease',
});
