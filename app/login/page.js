'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          { theme: 'outline', size: 'large', width: '340', shape: 'pill', text: 'signin_with' }
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
        throw new Error(data.error || 'Google sign-in failed');
      }
      
      window.dispatchEvent(new Event('auth-change'));
      router.push('/insights');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
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
            Welcome Back
          </h1>
          <p style={{ color: 'var(--body-text)', fontSize: '14px', lineHeight: '1.5' }}>
            Login to your account to post reviews, case studies, or blogs.
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

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '13px', fontWeight: '700', color: 'var(--title-color)' }}>
                Password
              </label>
              <Link
                href="/forgot-password"
                style={{
                  fontSize: '12px',
                  color: 'var(--title-color)',
                  fontWeight: '700',
                  textDecoration: 'none',
                }}
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={inputStyle}
              className="login-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={submitButtonStyle(loading)}
          >
            {loading ? 'Logging in...' : 'Sign In'}
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

        <div style={{ marginTop: '28px', textAlign: 'center', fontSize: '13px', color: 'var(--body-text)' }}>
          Don't have an account?{' '}
          <Link href="/register" style={{ color: 'var(--title-color)', fontWeight: '700', textDecoration: 'none' }}>
            Create one free
          </Link>
        </div>
      </div>

      <style jsx>{`
        .login-input:focus {
          border-color: #0B1F3A !important;
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
  background: 'linear-gradient(135deg, #0B1F3A 0%, #183A66 100%)',
  color: '#FFFFFF',
  fontWeight: '700',
  border: 'none',
  cursor: loading ? 'not-allowed' : 'pointer',
  opacity: loading ? 0.7 : 1,
  boxShadow: '0 4px 15px rgba(11, 31, 58, 0.3)',
  fontSize: '14px',
  transition: 'all 0.3s ease',
});
