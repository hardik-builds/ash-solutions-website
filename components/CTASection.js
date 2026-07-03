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
            color: '#4f46e5',
            fontWeight: '700',
            marginBottom: '15px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '13px'
          }}
        >
          {"LET'S BUILD SOMETHING AMAZING"}
        </div>

        <h2
          style={{
            fontSize: 'clamp(36px, 7vw, 64px)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '25px',
            letterSpacing: '-1.5px',
            color: 'var(--title-color)'
          }}
        >
          Your Next Growth Engine<br />Starts Here
        </h2>

        <p
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            fontSize: '18px',
            lineHeight: '1.9',
            color: 'var(--body-text)',
          }}
        >
          Whether you need AI automation, a custom SaaS platform, a business management system, a website or a mobile app, we&apos;re ready to help you scale.
        </p>

        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://wa.me/918652768171"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: '#FFFFFF',
              fontWeight: '700',
              fontSize: '14px',
              padding: '16px 36px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
              boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(79, 70, 229, 0.35)';
              const icon = e.currentTarget.querySelector('.wa-icon');
              if (icon) icon.style.transform = 'scale(1.15) rotate(5deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 70, 229, 0.25)';
              const icon = e.currentTarget.querySelector('.wa-icon');
              if (icon) icon.style.transform = 'scale(1) rotate(0)';
            }}
          >
            <FaWhatsapp className="wa-icon" style={{ fontSize: '18px', transition: 'transform 0.3s ease' }} />
            Talk to an Expert
          </a>

          <Link
            href="/contact"
            style={{
              padding: '16px 36px',
              borderRadius: '14px',
              textDecoration: 'none',
              background: 'var(--cta-secondary-bg)',
              border: '1px solid var(--cta-secondary-border)',
              color: 'var(--title-color)',
              fontWeight: '700',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.background = 'rgba(99, 102, 241, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
              const arrow = e.currentTarget.querySelector('.arrow-icon');
              if (arrow) arrow.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.background = 'var(--cta-secondary-bg)';
              e.currentTarget.style.borderColor = 'var(--cta-secondary-border)';
              const arrow = e.currentTarget.querySelector('.arrow-icon');
              if (arrow) arrow.style.transform = 'translateX(0)';
            }}
          >
            Get Custom Quote
            <FiArrowRight className="arrow-icon" style={{ fontSize: '16px', transition: 'transform 0.3s ease' }} />
          </Link>
        </div>

        <div
          style={{
            marginTop: '40px',
            color: 'var(--body-text)',
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '0.5px'
          }}
        >
          AI Automation • SaaS Development • Websites • Apps • Cybersecurity
        </div>
      </div>
    </section>
  );
}
