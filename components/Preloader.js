'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [hide, setHide] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  if (!mounted) return null;

  if (hide) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: '#0F172A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#fff',

        opacity: fadeOut ? 0 : 1,
        transform: fadeOut
          ? 'translateY(-20px)'
          : 'translateY(0px)',
        transition: 'all .6s ease',
      }}
    >
      <div
        style={{
          fontSize: '46px',
          fontWeight: '900',
          letterSpacing: '3px',
          animation: 'fadeInUp .8s ease',
        }}
      >
        ASH SOLUTIONS
      </div>

      <div
        style={{
          marginTop: '12px',
          color: '#94A3B8',
          letterSpacing: '2px',
          fontSize: '14px',
        }}
      >
        AI • SAAS • AUTOMATION
      </div>

      <div
        style={{
          marginTop: '40px',
          width: '240px',
          height: '4px',
          background: '#1E293B',
          borderRadius: '999px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(90deg,#2563EB,#06B6D4)',
            animation:
              'loadingBar 2.2s ease forwards',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loadingBar {
          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}