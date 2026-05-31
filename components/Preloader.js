'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hide, setHide] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    const hideTimer = setTimeout(() => {
      setHide(true);
    }, 2400);

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
          zIndex: 999999,
          background: '#020617',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',

          opacity: fadeOut ? 0 : 1,
          transform: fadeOut ? 'scale(1.04)' : 'scale(1)',
          filter: fadeOut ? 'blur(10px)' : 'blur(0px)',

          transition: 'all .7s ease',
        }}
      >
        {/* Glow Right */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: '#2563EB',
            borderRadius: '50%',
            filter: 'blur(140px)',
            opacity: 0.15,
            top: '-120px',
            right: '-120px',
            animation: 'float 8s ease-in-out infinite',
          }}
        />

        {/* Glow Left */}
        <div
          style={{
            position: 'absolute',
            width: '420px',
            height: '420px',
            background: '#06B6D4',
            borderRadius: '50%',
            filter: 'blur(130px)',
            opacity: 0.12,
            bottom: '-120px',
            left: '-120px',
            animation: 'float 10s ease-in-out infinite',
          }}
        />

        {/* Center Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(72px,12vw,140px)',
              fontWeight: '900',
              lineHeight: '.9',

              background:
                'linear-gradient(135deg,#2563EB,#38BDF8)',

              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',

              animation: 'logoReveal 1s ease forwards',
            }}
          >
            ASH
          </div>

          <div
            style={{
              color: '#FFFFFF',
              fontWeight: '700',
              letterSpacing: '8px',
              fontSize: 'clamp(14px,2vw,20px)',
              marginTop: '10px',
            }}
          >
            SOLUTIONS
          </div>

          <div
            style={{
              marginTop: '18px',
              color: '#94A3B8',
              fontSize: '12px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            AI • SAAS • AUTOMATION
          </div>

          {/* Loading Bar */}

          <div
            style={{
              width: '220px',
              height: '3px',
              background: 'rgba(255,255,255,.08)',
              borderRadius: '999px',
              overflow: 'hidden',
              margin: '28px auto 0',
            }}
          >
            <div className="loaderLine" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .loaderLine {
          height: 100%;
          width: 0%;
          border-radius: 999px;

          background: linear-gradient(
            90deg,
            #2563eb,
            #38bdf8
          );

          animation: loading 2s ease forwards;
        }

        @keyframes loading {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-25px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @keyframes logoReveal {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            filter: blur(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
        }
      `}</style>
    </>
  );
}