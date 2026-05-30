'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hide, setHide] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const hideTimer = setTimeout(() => {
      setHide(true);
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hide) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          background: '#020617',
          zIndex: 999999,

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          opacity: fadeOut ? 0 : 1,
          transition: 'opacity .6s ease',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            background: '#2563EB',
            borderRadius: '50%',
            filter: 'blur(120px)',
            opacity: 0.15,
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '20px',
            width: '100%',
            maxWidth: '500px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              padding: '8px 16px',
              borderRadius: '999px',
              background: 'rgba(59,130,246,.12)',
              border: '1px solid rgba(59,130,246,.25)',
              color: '#60A5FA',
              fontWeight: '600',
              fontSize: '13px',
              marginBottom: '24px',
            }}
          >
            🚀 Loading Experience
          </div>

          <h1
            style={{
              fontSize: 'clamp(30px,8vw,58px)',
              fontWeight: '900',
              color: '#FFFFFF',
              marginBottom: '12px',
              lineHeight: '1.1',
            }}
          >
            ASH SOLUTIONS
          </h1>

          <p
            style={{
              color: '#94A3B8',
              letterSpacing: '2px',
              marginBottom: '35px',
              fontSize: '14px',
            }}
          >
            AI • SAAS • AUTOMATION
          </p>

          {/* Progress Bar */}
          <div
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '999px',
              background: '#1E293B',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                background:
                  'linear-gradient(90deg,#2563EB,#06B6D4)',
                animation: 'loadingBar 2.2s ease forwards',
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </>
  );
}