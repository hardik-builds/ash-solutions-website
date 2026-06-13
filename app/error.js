'use client';
import Link from "next/link";

export default function Error({ error, reset }) {
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
          width: '80px', 
          height: '80px', 
          background: 'rgba(239, 68, 68, 0.1)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          margin: '0 auto 24px',
          border: '1px solid rgba(239, 68, 68, 0.2)'
        }}>
          <svg style={{ width: '40px', height: '40px', color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--title-color)', marginBottom: '16px', letterSpacing: '-0.5px' }}>Oops! Something went wrong</h2>
        <p style={{ color: 'var(--body-text)', marginBottom: '32px', lineHeight: '1.6' }}>
          {error.message || 'An unexpected error occurred. Please try again later.'}
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={reset}
            className="cta-primary-btn"
            style={{ 
              backgroundColor: '#4f46e5',
              background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
              color: 'white', 
              padding: '14px 28px', 
              borderRadius: '12px', 
              fontWeight: '700', 
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25)',
              transition: 'all 0.3s ease'
            }}
          >
            Try Again
          </button>
          <Link 
            href="/"
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
            Go Home
          </Link>
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
        }
      `}</style>
    </div>
  )
}