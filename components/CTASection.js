'use client';

import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function CTASection() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 20px',
        background: 'var(--bg-color)',
        backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.015) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
        borderTop: '1px solid var(--card-border)',
        color: 'var(--text-color)',
        zIndex: 2,
        width: '100%'
      }}
    >
      {/* Glow Effects */}
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          top: '-120px',
          right: '-100px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.03) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          bottom: '-100px',
          left: '-100px',
          pointerEvents: 'none',
        }}
      />

            <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            color: '#D4AF37',
            fontWeight: '700',
            marginBottom: '14px',
            letterSpacing: '2px',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            fontSize: '12px',
            textAlign: 'center'
          }}
        >
          {"// LET'S BUILD SOMETHING AMAZING"}
        </div>

        <h2
          style={{
            fontSize: 'clamp(32px, 5.5vw, 56px)',
            fontWeight: '900',
            fontFamily: "'Manrope', 'Inter', -apple-system, sans-serif",
            lineHeight: '1.1',
            marginBottom: '20px',
            letterSpacing: '-1.5px',
            color: 'var(--title-color)',
            textAlign: 'center'
          }}
        >
          Your Next Growth Engine Starts Here
        </h2>

        <p
          style={{
            maxWidth: '720px',
            margin: '0 auto 32px auto',
            fontSize: '17px',
            lineHeight: '1.7',
            color: 'var(--body-text)',
            textAlign: 'center'
          }}
        >
          Whether you need AI automation, a custom SaaS platform, a business management system, a website or a mobile app, we&apos;re ready to help you scale.
        </p>

        <div
          className="cta-button-group"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://wa.me/918652768171"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              height: '48px',
              padding: '0 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              color: '#FFFFFF',
              backgroundColor: '#0B1F3A',
              border: '1px solid #0B1F3A',
              fontSize: '15px',
              fontWeight: '600',
              letterSpacing: '-0.2px',
              boxShadow: '0 2px 8px rgba(11, 31, 58, 0.12)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#183A66';
              e.currentTarget.style.borderColor = '#183A66';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 31, 58, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0B1F3A';
              e.currentTarget.style.borderColor = '#0B1F3A';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 31, 58, 0.12)';
            }}
          >
            <FaWhatsapp className="wa-icon" style={{ fontSize: '18px' }} />
            Talk to an Expert
          </a>

          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              height: '48px',
              padding: '0 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              color: 'var(--title-color)',
              fontSize: '15px',
              fontWeight: '600',
              letterSpacing: '-0.2px',
              boxShadow: '0 1px 3px rgba(11, 31, 58, 0.04)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg-color)';
              e.currentTarget.style.borderColor = 'var(--title-color)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 31, 58, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--card-bg)';
              e.currentTarget.style.borderColor = 'var(--card-border)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(11, 31, 58, 0.04)';
            }}
          >
            Get Custom Quote
            <FiArrowRight className="arrow-icon" style={{ fontSize: '16px' }} />
          </Link>
        </div>

        <div
          style={{
            marginTop: '36px',
            color: 'var(--body-text)',
            fontSize: '13px',
            fontWeight: '500',
            fontFamily: 'monospace',
            letterSpacing: '0.5px',
            textAlign: 'center'
          }}
        >
          // AI AUTOMATION • SAAS PLATFORMS • WEBSITES • MOBILE APPS • CLOUD
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .cta-button-group {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 10px !important;
            width: 100% !important;
          }
          .cta-button-group a {
            flex: 1 1 140px !important;
            min-width: 130px !important;
            max-width: 220px !important;
            height: 46px !important;
            padding: 0 16px !important;
            font-size: 14px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
