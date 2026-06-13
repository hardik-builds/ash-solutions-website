'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#070b13',
        color: '#FFFFFF',
        padding: '90px 24px 35px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Premium Glow Blobs */}
      <div
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '-100px',
          right: '-100px',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '-50px',
          left: '-100px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Top Section */}
        <div className="footer-grid">
          {/* Company */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '900',
                letterSpacing: '-1px',
                background: 'linear-gradient(135deg, #ffffff 40%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ASH Solutions
            </h2>

            <p
              style={{
                color: '#e2e8f0',
                lineHeight: '1.8',
                fontSize: '15px',
                maxWidth: '320px',
              }}
            >
              Building AI Automation, SaaS Platforms, Business Systems, Websites and Mobile Apps designed for growth.
            </p>

            <div style={{ marginTop: '10px' }}>
              <a
                href="https://wa.me/918652768171"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-cta"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 26px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '14px',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
                  transition: 'all 0.3s ease',
                }}
              >
                Let's Talk <span style={{ transition: 'transform 0.2s' }}>→</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '22px',
                color: '#ffffff',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Company
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {['Home', 'About', 'Services', 'Team', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="footer-link"
                  style={{
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    fontSize: '15px',
                    width: 'fit-content',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '22px',
                color: '#ffffff',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Services
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                color: '#cbd5e1',
                fontSize: '15px',
              }}
            >
              <span className="footer-service-item">AI Automation</span>
              <span className="footer-service-item">Custom SaaS</span>
              <span className="footer-service-item">CRM Systems</span>
              <span className="footer-service-item">ERP Solutions</span>
              <span className="footer-service-item">Web Development</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '22px',
                color: '#ffffff',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                color: '#cbd5e1',
                fontSize: '15px',
              }}
            >
              <span>Mumbai, India</span>
              <a
                href="mailto:contact@ashsolutions.site"
                className="footer-link"
                style={{ color: '#cbd5e1', textDecoration: 'none' }}
              >
                contact@ashsolutions.site
              </a>
              <a
                href="tel:+918652768171"
                className="footer-link"
                style={{ color: '#cbd5e1', textDecoration: 'none' }}
              >
                +91 86527 68171
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            marginTop: '60px',
            marginBottom: '30px',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            textAlign: 'center',
            color: '#94a3b8',
            fontWeight: '600',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontSize: '11px',
            marginBottom: '20px',
          }}
        >
          AI • SaaS • Automation • Business Systems • Mobile Apps
        </div>

        {/* Bottom */}
        <div
          style={{
            textAlign: 'center',
            color: '#94a3b8',
            fontSize: '13px',
          }}
        >
          © {new Date().getFullYear()} ASH Solutions. All Rights Reserved.
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 60px;
        }

        .footer-service-item {
          display: block;
        }

        @media (hover: hover) {
          .footer-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
            background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
          }
          .footer-cta:hover span {
            transform: translateX(4px);
          }
          .footer-link:hover {
            color: #ffffff !important;
            transform: translateX(4px);
          }
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }
          padding: 60px 16px 30px;
        }
      `}</style>
    </footer>
  );
}