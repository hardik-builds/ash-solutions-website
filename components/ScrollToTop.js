'use client';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        backgroundColor: '#0B1F3A',
        color: '#D4AF37',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: '1.5px solid #D4AF37',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 25px rgba(11, 31, 58, 0.3), 0 0 15px rgba(212, 175, 55, 0.25)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        zIndex: 1000,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
        e.currentTarget.style.backgroundColor = '#183A66';
        e.currentTarget.style.borderColor = '#E6C65B';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(11, 31, 58, 0.4), 0 0 20px rgba(212, 175, 55, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.backgroundColor = '#0B1F3A';
        e.currentTarget.style.borderColor = '#D4AF37';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(11, 31, 58, 0.3), 0 0 15px rgba(212, 175, 55, 0.25)';
      }}
    >
      <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="#D4AF37" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}