'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const duration = 1600;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextPercent = Math.min(Math.round((currentStep / steps) * 100), 100);
      setPercent(nextPercent);

      if (nextPercent >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setComplete(true);
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            filter: 'blur(15px)',
            transition: { duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'var(--bg-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Radial Glows */}
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
              borderRadius: '50%',
              top: '-15%',
              right: '-10%',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(11, 31, 58, 0.08) 0%, transparent 70%)',
              borderRadius: '50%',
              bottom: '-15%',
              left: '-10%',
              pointerEvents: 'none',
            }}
          />

          {/* Grid Pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(11, 31, 58, 0.03) 1px, transparent 1px), 
                linear-gradient(90deg, rgba(11, 31, 58, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '45px 45px',
              opacity: 0.6,
              zIndex: 1,
            }}
          />

          {/* Center Card */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              maxWidth: '480px',
              width: '100%',
            }}
          >
            {/* Spinning HUD Graphic container */}
            <div
              style={{
                position: 'relative',
                width: '160px',
                height: '160px',
                marginBottom: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Outer Dashed Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: '1px dashed rgba(11, 31, 58, 0.25)',
                  borderRadius: '50%',
                }}
              />

              {/* Inner Glowing Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: '12px',
                  border: '1px solid transparent',
                  borderTop: '2px solid #0B1F3A',
                  borderBottom: '2px solid #D4AF37',
                  borderRadius: '50%',
                  filter: 'drop-shadow(0 0 6px rgba(212, 175, 55, 0.3))',
                }}
              />

              {/* Center Counter */}
              <div
                style={{
                  fontSize: '38px',
                  fontFamily: 'monospace',
                  fontWeight: '800',
                  color: 'var(--title-color)',
                  letterSpacing: '-1px',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'center',
                }}
              >
                <span>{String(percent).padStart(3, '0')}</span>
                <span style={{ fontSize: '18px', color: '#D4AF37', marginLeft: '2px' }}>%</span>
              </div>
            </div>

            {/* Glowing Brand Logo */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontSize: '44px',
                fontWeight: '900',
                lineHeight: '1.1',
                letterSpacing: '-1.5px',
                background: 'linear-gradient(135deg, #0B1F3A 10%, #183A66 50%, #D4AF37 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '8px',
              }}
            >
              ASH
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 0.9 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                color: 'var(--title-color)',
                fontWeight: '800',
                letterSpacing: '8px',
                fontSize: '12px',
                textTransform: 'uppercase',
                textIndent: '8px',
                marginBottom: '30px',
              }}
            >
              SOLUTIONS
            </motion.div>

            {/* Loading Bar Track */}
            <div
              style={{
                width: '180px',
                height: '4px',
                background: 'rgba(11, 31, 58, 0.1)',
                borderRadius: '999px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${percent}%`,
                  borderRadius: '999px',
                  background: 'linear-gradient(90deg, #0B1F3A, #183A66, #D4AF37)',
                  transition: 'width 0.1s linear',
                }}
              />
            </div>

            {/* System Status message */}
            <div
              style={{
                marginTop: '15px',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: '#0B1F3A',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {percent < 30 ? 'Loading dependencies...' : percent < 70 ? 'Initializing automation module...' : percent < 100 ? 'Configuring neural nodes...' : 'Ready.'}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}