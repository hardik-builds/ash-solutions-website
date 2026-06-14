'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [consent, setConsent] = useState(false);
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('form'); // 'form' or 'otp'
  const [timer, setTimer] = useState(300); // 5 minutes
  const [error, setError] = useState('');
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

  // Load Google Identity Services script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
      if (window.google && googleClientId) {
        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: handleGoogleCredentialResponse,
        });
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-btn'),
          { theme: 'outline', size: 'large', width: '340', shape: 'pill', text: 'signup_with' }
        );
      } else {
        console.warn('Google Client ID is not configured.');
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleGoogleCredentialResponse = async (response) => {
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential: response.credential }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Google signup failed');
      }
      
      window.dispatchEvent(new Event('auth-change'));
      router.push('/insights');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Countdown timer for OTP
  useEffect(() => {
    let interval = null;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');

    // DPDP Active Consent Check
    if (!consent) {
      setError('You must consent to the privacy policy to register.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/register/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send verification code');
      }

      setStep('otp');
      setTimer(300); // Reset countdown timer to 5 minutes
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAndRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, inviteCode, otp }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Verification failed');
      }

      // Dispatch auth change event so other components update instantly
      window.dispatchEvent(new Event('auth-change'));

      router.push('/insights');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to resend verification code');
      }

      setTimer(300); // Reset countdown
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
        {step === 'form' ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h1
                style={{
                  fontSize: '32px',
                  fontWeight: '900',
                  color: 'var(--title-color)',
                  letterSpacing: '-1px',
                  marginBottom: '10px',
                }}
              >
                Create Account
              </h1>
              <p style={{ color: 'var(--body-text)', fontSize: '14px', lineHeight: '1.5' }}>
                Register as a client to add project reviews.
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

            <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--title-color)' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  style={inputStyle}
                  className="register-input"
                />
              </div>

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
                  className="register-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--title-color)' }}>
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  style={inputStyle}
                  className="register-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--title-color)' }}>
                  Admin Invite Code (Optional)
                </label>
                <input
                  type="password"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  placeholder="Enter code to register as admin"
                  style={inputStyle}
                  className="register-input"
                />
              </div>

              {/* DPDP Consent Notice */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '12px', marginTop: '4px' }}>
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  style={{ marginTop: '3px', cursor: 'pointer' }}
                />
                <label htmlFor="consent" style={{ color: 'var(--body-text)', cursor: 'pointer', lineHeight: '1.4' }}>
                  I consent to the collection and processing of my personal data (name, email, and password) in accordance with the{' '}
                  <Link href="/privacy-policy" target="_blank" style={{ color: '#4f46e5', fontWeight: '700', textDecoration: 'underline' }}>
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/terms" target="_blank" style={{ color: '#4f46e5', fontWeight: '700', textDecoration: 'underline' }}>
                    Terms
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={submitButtonStyle(loading)}
              >
                {loading ? 'Sending code...' : 'Send Verification Code'}
              </button>
            </form>

            <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0 15px', gap: '10px' }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--card-border)' }} />
              <span style={{ fontSize: '12px', color: 'var(--body-text)', fontWeight: '700' }}>OR</span>
              <div style={{ flex: 1, height: '1px', background: 'var(--card-border)' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div id="google-signin-btn" />
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '13px', color: 'var(--body-text)' }}>
              Already have an account?{' '}
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
                Verify Email
              </h1>
              <p style={{ color: 'var(--body-text)', fontSize: '14px', lineHeight: '1.5' }}>
                We've sent a 6-digit verification code to <strong style={{ color: 'var(--title-color)' }}>{email}</strong>
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

            <form onSubmit={handleVerifyAndRegister} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--title-color)' }}>
                  6-Digit Verification Code
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder="123456"
                  style={{
                    ...inputStyle,
                    letterSpacing: '8px',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: '800',
                  }}
                  className="register-input"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                <span style={{ color: 'var(--body-text)' }}>
                  {timer > 0 ? (
                    `Expires in ${formatTime(timer)}`
                  ) : (
                    <span style={{ color: '#ef4444', fontWeight: '600' }}>Code expired</span>
                  )}
                </span>
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={timer > 0 || loading}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: timer > 0 || loading ? 'var(--body-text)' : '#4f46e5',
                    fontWeight: '700',
                    cursor: timer > 0 || loading ? 'not-allowed' : 'pointer',
                    opacity: timer > 0 || loading ? 0.5 : 1,
                    padding: 0,
                  }}
                >
                  Resend Code
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={submitButtonStyle(loading)}
              >
                {loading ? 'Verifying...' : 'Verify & Create Account'}
              </button>
            </form>

            <div style={{ marginTop: '28px', textAlign: 'center', fontSize: '13px' }}>
              <button
                type="button"
                onClick={() => {
                  setStep('form');
                  setError('');
                  setOtp('');
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
        .register-input:focus {
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
