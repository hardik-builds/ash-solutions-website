'use client'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--bg-color)',
      padding: '16px'
    }}>
      <div 
        className="glass-panel"
        style={{ 
          textAlign: 'center', 
          padding: '48px',
          borderRadius: '24px',
          maxWidth: '500px',
          width: '100%'
        }}
      >
        <div style={{ 
          fontSize: '120px', 
          fontWeight: '950', 
          background: 'var(--cyber-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: '1',
          marginBottom: '24px',
          letterSpacing: '-4px'
        }}>
          404
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--title-color)', marginBottom: '16px', letterSpacing: '-0.5px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--body-text)', marginBottom: '32px', lineHeight: '1.6' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            href="/"
            className="cta-primary-btn"
            style={{ 
              backgroundColor: '#4f46e5',
              background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
              color: 'white', 
              padding: '14px 28px', 
              borderRadius: '12px', 
              fontWeight: '700', 
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25)',
              transition: 'all 0.3s ease'
            }}
          >
            Go Home
          </Link>
          <Link 
            href="/contact"
            className="cta-secondary-btn"
            style={{ 
              background: 'var(--cta-secondary-bg)', 
              color: 'var(--text-color)', 
              padding: '14px 28px', 
              borderRadius: '12px', 
              fontWeight: '700', 
              textDecoration: 'none',
              border: '1px solid var(--cta-secondary-border)',
              boxShadow: 'var(--cta-secondary-shadow)',
              transition: 'all 0.3s ease'
            }}
          >
            Contact Support
          </Link>
        </div>
        
        <div style={{ marginTop: '48px', borderTop: '1px solid var(--card-border)', paddingTop: '32px' }}>
          <p style={{ fontSize: '14px', color: 'var(--body-text)', marginBottom: '16px', fontWeight: '600' }}>You might be looking for:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/about" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>About Us</Link>
            <Link href="/services" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>Services</Link>
            <Link href="/team" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>Our Team</Link>
            <Link href="/contact" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>Contact</Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (hover: hover) {
          .cta-primary-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
          }
          .cta-secondary-btn:hover {
            background: var(--cta-secondary-bg);
            border-color: var(--cta-secondary-border);
            opacity: 0.9;
            transform: translateY(-2px);
          }
          div a:hover {
            text-decoration: underline;
          }
        }
      `}</style>
    </div>
  )
}