'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let storedTheme = null;
    try {
      storedTheme = localStorage.getItem('theme');
    } catch (e) {
      console.warn('localStorage is blocked/unsupported in this environment:', e);
    }
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      let currentStored = null;
      try {
        currentStored = localStorage.getItem('theme');
      } catch (err) {
        console.warn('localStorage is blocked/unsupported in this environment:', err);
      }
      if (!currentStored) {
        const nextSystemTheme = e.matches ? 'dark' : 'light';
        setTheme(nextSystemTheme);
        document.documentElement.setAttribute('data-theme', nextSystemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {
      console.warn('localStorage setItem failed:', e);
    }
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    setIsOpen(false);
    setIsMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          zIndex: 9999,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: scrolled
            ? 'var(--header-bg-scrolled)'
            : 'var(--header-bg)',
          borderBottom: scrolled
            ? '1px solid var(--header-border-scrolled)'
            : '1px solid var(--header-border)',
          boxShadow: scrolled
            ? 'var(--card-shadow)'
            : 'none',
          transition: 'all .4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div className="header-container">
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontSize: '26px',
                fontWeight: '900',
                letterSpacing: '-0.5px',
                background: 'var(--logo-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              ASH Solutions
            </span>
            <span
              style={{
                fontSize: '9px',
                color: 'var(--body-text)',
                fontWeight: '700',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginTop: '2px',
                opacity: 0.9,
              }}
            >
              AI • SaaS • Automation
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              const isServices = item.name === 'Services';
              return (
                <div
                  key={item.href}
                  onMouseEnter={isServices ? handleMouseEnter : undefined}
                  onMouseLeave={isServices ? handleMouseLeave : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '80px',
                    position: 'relative'
                  }}
                >
                  <Link
                    href={item.href}
                    style={{
                      textDecoration: 'none',
                      color: active ? '#4f46e5' : 'var(--text-color)',
                      fontWeight: '700',
                      fontSize: '13px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      position: 'relative',
                      padding: '28px 4px',
                      transition: 'color .3s ease',
                    }}
                    className="nav-link-hover"
                  >
                    {item.name}
                    {active && (
                      <motion.div
                        layoutId="activeUnderline"
                        style={{
                          position: 'absolute',
                          bottom: '16px',
                          left: 0,
                          right: 0,
                          height: '3px',
                          background: 'linear-gradient(90deg, #4f46e5, #0891b2)',
                          borderRadius: '999px',
                          boxShadow: '0 0 8px rgba(99, 102, 241, 0.5)',
                        }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Side */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Link
              href="/contact"
              className="desktop-cta"
              style={{
                textDecoration: 'none',
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Free Consultation
            </Link>

            <button
              className="menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mobile-menu"
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {navLinks.map((item, index) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.href}
                    >
                      <Link
                        href={item.href}
                        style={{
                          textDecoration: 'none',
                          color: active ? '#4f46e5' : 'var(--text-color)',
                          fontWeight: active ? '700' : '600',
                          fontSize: '16px',
                          display: 'block',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease',
                          background: active ? 'rgba(99, 102, 241, 0.08)' : 'transparent',
                        }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    href="/contact"
                    style={{
                      textDecoration: 'none',
                      textAlign: 'center',
                      display: 'block',
                      background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                      color: 'white',
                      padding: '14px',
                      borderRadius: '12px',
                      fontWeight: '700',
                      fontSize: '15px',
                      marginTop: '10px',
                      boxShadow: '0 4px 15px rgba(79, 70, 229, 0.2)',
                    }}
                  >
                    Free Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {isMegaOpen && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="mega-menu-dropdown"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '100%',
                background: theme === 'dark' ? 'rgba(7, 10, 19, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                borderBottom: '1px solid var(--header-border-scrolled)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                zIndex: 9998,
                padding: '40px 0 30px',
              }}
            >
              <div
                style={{
                  maxWidth: '1280px',
                  margin: '0 auto',
                  padding: '0 24px',
                }}
              >
                {/* 4 Columns for Categories */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '30px',
                    marginBottom: '35px',
                  }}
                  className="mega-menu-grid"
                >
                  {/* Column 1: Web App Development */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#4f46e5'
                      }}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--title-color)' }}>Web Applications</h4>
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'var(--body-text)', lineHeight: '1.6' }}>Custom Next.js frontends, scalable SaaS products, and secure enterprise systems.</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <li>
                        <Link href="/services#web-development" className="mega-menu-link">
                          Next.js & React Apps
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#web-development" className="mega-menu-link">
                          Custom SaaS Products
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#web-development" className="mega-menu-link">
                          E-commerce Systems
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#web-development" className="mega-menu-link">
                          API & Backend Services
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Mobile App Development */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0284c7'
                      }}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--title-color)' }}>Mobile Applications</h4>
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'var(--body-text)', lineHeight: '1.6' }}>High-performance iOS, Android, and cross-platform hybrid apps.</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <li>
                        <Link href="/services#app-development" className="mega-menu-link">
                          iOS Apps (Swift)
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#app-development" className="mega-menu-link">
                          Android Apps (Kotlin)
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#app-development" className="mega-menu-link">
                          Flutter Cross-Platform
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#app-development" className="mega-menu-link">
                          React Native Apps
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Cloud & DevOps */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(168, 85, 247, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#a855f7'
                      }}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--title-color)' }}>Cloud & DevOps</h4>
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'var(--body-text)', lineHeight: '1.6' }}>Modern container environments and cloud infrastructure.</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <li>
                        <Link href="/services" className="mega-menu-link">
                          AWS & Azure Architecture
                        </Link>
                      </li>
                      <li>
                        <Link href="/services" className="mega-menu-link">
                          CI/CD Pipelines & DevOps
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 4: SEO & Analytics */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(234, 179, 8, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#eab308'
                      }}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <h4 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--title-color)' }}>SEO & Analytics</h4>
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'var(--body-text)', lineHeight: '1.6' }}>Search visibility tactics and data reporting to track business growth.</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <li>
                        <Link href="/services#seo-optimization" className="mega-menu-link">
                          Technical & On-Page SEO
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#seo-optimization" className="mega-menu-link">
                          Google Analytics & Reports
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Mega Menu Footer with Tech Stack */}
                <div
                  style={{
                    borderTop: '1px solid var(--header-border)',
                    paddingTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  className="mega-menu-footer"
                >
                  <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--title-color)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Modernization Technology Stack
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    {/* React */}
                    <div style={{ color: '#61dafb', cursor: 'pointer' }} title="React">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1c2.19 0 4.17.78 5.73 2.07c-1.3-.4-3-.62-4.87-.62C10.74 4.45 8.94 4.8 7.39 5.4c.04-.01.07-.02.11-.03C8.98 4 10.42 3.65 12 3.65zm-2 .24c-1.44.38-2.68 1.07-3.61 2.03C5.64 6.7 5.12 7.72 4.86 8.8c.28-.27.59-.5.92-.7c1.33-.8 2.94-1.25 4.67-1.25c.34 0 .68.02 1 .05c-1.32.74-2.5 1.76-3.46 2.97c-.96 1.2-1.67 2.6-2.07 4.11c-.02.09-.04.18-.06.27c-.24-1.12-.36-2.29-.36-3.5c0-2.82.68-5.32 1.83-7.25c.2-.33.42-.64.67-.93V3.89zM12 4.45c1.61 0 3.12.21 4.5.58c-1.4 1-2.58 2.29-3.4 3.79c-.83 1.5-1.34 3.14-1.48 4.8c-.37-.02-.74-.02-1.12-.02c-1.89 0-3.65.23-5.22.64c.24-1.45.83-2.81 1.72-3.99c.9-1.18 2.05-2.12 3.39-2.76C10.72 4.5 11.35 4.45 12 4.45zm5.11.96c.64.44 1.2.98 1.67 1.61c.47.63.83 1.34 1.08 2.1c-.26-.14-.54-.26-.83-.37C17.76 8.24 16.36 7.7 14.8 7.4c.73-.83 1.58-1.5 2.52-2.01c-.07.01-.14.02-.21.02zm-8.8 3.82c.98-.82 2.14-1.44 3.42-1.8c.23.49.42 1 .58 1.53c-1.25.75-2.31 1.76-3.14 2.95c-.83 1.18-1.41 2.51-1.72 3.93c-.47-.46-.98-.86-1.52-1.2c.43-1.63 1.23-3.13 2.38-4.41z" opacity="0.3"/>
                        <path d="M12 10.2c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8zm6.05-2.04c-.38-.99-.95-1.89-1.67-2.63c.48.51.89 1.1 1.2 1.74c.16.3.31.62.47.94V8.16zm.83 4.19c.12-.51.18-1.04.18-1.58c0-1.32-.32-2.56-.9-3.66c-.01.03-.02.05-.03.08c-.28.84-.71 1.62-1.27 2.32c-.56.7-1.27 1.3-2.08 1.77c.46 1.01.76 2.09.89 3.22c.28-.21.57-.45.86-.71c.96-.86 1.74-1.92 2.3-3.09c.02-.04.03-.09.05-.13l.02-.32zM12 13.55c.42 0 .83.05 1.22.14c.26 1.02.41 2.11.41 3.23c0 2.21-.59 4.23-1.63 5.92c-.22.36-.48.69-.76 1c-.88-.73-1.61-1.62-2.14-2.63c.89-.31 1.71-.8 2.42-1.44c.48-.44.91-.94 1.27-1.49c-.26.03-.52.05-.79.05c-1.6 0-3.08-.44-4.34-1.2c.7-.6 1.31-1.33 1.82-2.15c.51-.83.88-1.74 1.11-2.71c.36.08.73.13 1.11.13c.43 0 .86-.06 1.27-.17c-.24.58-.55 1.12-.92 1.61c-.37.49-.8.92-1.27 1.28c.41-.04.81-.11 1.2-.22z" opacity="0.5"/>
                        <circle cx="12" cy="12" r="2" />
                        <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                      </svg>
                    </div>

                    {/* Next.js */}
                    <div style={{ color: theme === 'dark' ? '#ffffff' : '#0f172a', cursor: 'pointer' }} title="Next.js">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.27 16.27l-5.69-7.25v5.7h-1.48V8.76h1.41l5.24 6.67V8.76h1.52v9.51h-.96z" />
                      </svg>
                    </div>

                    {/* Node.js */}
                    <div style={{ color: '#339933', cursor: 'pointer' }} title="Node.js">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.8 14.12l-6.8 4v-8.12l6.8-4v8.12zm-8.3 4v-8.12l-6.8-4v8.12l6.8 4z" />
                      </svg>
                    </div>

                    {/* AWS */}
                    <div style={{ color: '#ff9900', cursor: 'pointer' }} title="Amazon Web Services">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 12.38c-.37.38-.85.57-1.43.57-.61 0-1.12-.22-1.52-.66-.4-.44-.6-1.07-.6-1.89v-2.07c0-.82.2-1.45.6-1.89.4-.44.91-.66 1.52-.66.58 0 1.06.19 1.43.57.37.38.56.93.56 1.66h-1.18c0-.42-.09-.73-.26-.93-.17-.2-.42-.3-.75-.3-.33 0-.58.11-.75.34-.17.23-.26.6-.26 1.12v2.33c0 .52.09.89.26 1.12.17.23.42.34.75.34.33 0 .58-.1.75-.3.17-.2.26-.51.26-.93h1.18c0 .73-.19 1.28-.56 1.66z" />
                      </svg>
                    </div>

                    {/* Docker */}
                    <div style={{ color: '#2496ed', cursor: 'pointer' }} title="Docker">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.962 10.475h-2.408a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243v-2.408a.242.242 0 0 0-.243-.243zm-2.924 0H8.63a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243v-2.408a.242.242 0 0 0-.243-.243zm-2.924 0H5.706a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243v-2.408a.242.242 0 0 0-.243-.243zm5.849-2.924h-2.408a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243V7.794a.242.242 0 0 0-.243-.243zm-2.924 0H8.63a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243V7.794a.242.242 0 0 0-.243-.243zm5.849 0h-2.408a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243V7.794a.242.242 0 0 0-.243-.243zm2.925 2.924h-2.408a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243v-2.408a.242.242 0 0 0-.243-.243zm2.925 0h-2.408a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243v-2.408a.243.243 0 0 0-.243-.243zm-2.925-2.924h-2.408a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243V7.794a.243.243 0 0 0-.243-.243z" />
                        <path d="M22.047 12.871c-.244-.457-.655-.838-1.189-1.072a7.35 7.35 0 0 0-.583-.232l-.121-.044c-.313-.092-.544-.24-.712-.454-.25-.316-.328-.718-.225-1.164.084-.361.272-.733.56-1.107l.115-.147a.238.238 0 0 0-.02-.31l-.226-.21a.24.24 0 0 0-.323-.016l-.167.14c-.452.378-.934.62-1.436.723a3.527 3.527 0 0 1-1.636-.118c-.461-.16-.84-.456-1.127-.88a3.17 3.17 0 0 1-.444-1.378l-.014-.143a.24.24 0 0 0-.242-.218h-.308a.24.24 0 0 0-.241.229l-.008.118c-.035.53-.198 1.028-.485 1.482a2.82 2.82 0 0 1-1.184 1.111c-.482.228-1.009.324-1.57.283a4.26 4.26 0 0 1-1.583-.497l-.15-.084a.24.24 0 0 0-.317.056l-.18.231c-.048.061-.039.148.02.199l.119.102c.42.36.728.773.916 1.228.21.508.233 1.054.07 1.624a3.532 3.532 0 0 1-1.288 1.954c-.5.39-.938.569-1.312.569H2.4a.24.24 0 0 0-.24.24v.667c0 .126.098.231.223.24 1.44.1 2.658-.337 3.621-1.298a6.386 6.386 0 0 0 1.574-2.617c.074-.294.137-.585.187-.872h14.072a.24.24 0 0 0 .239-.24c-.001-.482-.097-.905-.289-1.272z" />
                      </svg>
                    </div>

                    {/* Python */}
                    <div style={{ color: '#3776ab', cursor: 'pointer' }} title="Python">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.002 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm2.844 14.545c0 .48-.39.864-.864.864H9.42a.864.864 0 0 1-.864-.864v-1.728h4.29v1.728zm-3.41-3.155h-2.01v-1.73H10.1c.477 0 .864.388.864.865v.865zm4.846-1.728H14.28V9.927c0-.477-.388-.864-.864-.864h-.865v2.593h2.89v1.727zm-3.411-3.456h-2.01V6.478H10.1c.477 0 .864.388.864.864v.864z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <style jsx>{`
        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          height: 80px;
          padding: 0 24px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 36px;
        }

        .menu-btn {
          display: none;
          border: none;
          background: transparent;
          cursor: pointer;
          color: var(--text-color);
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 8px;
          transition: background-color 0.2s;
        }

        .menu-btn:hover {
          background-color: var(--cta-secondary-bg);
        }

        .mobile-menu {
          display: none;
        }

        :global(.mega-menu-link) {
          font-size: 13.5px !important;
          font-weight: 600 !important;
          color: var(--text-color) !important;
          text-decoration: none !important;
          display: flex !important;
          align-items: center !important;
          padding: 6px 10px !important;
          margin-left: -10px !important;
          border-radius: 8px !important;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        :global(.mega-menu-link):hover {
          color: #4f46e5 !important;
          background: rgba(99, 102, 241, 0.06) !important;
          transform: translateX(4px) !important;
          text-decoration: none !important;
        }

        .mega-menu-footer div div svg {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease;
          filter: grayscale(80%) opacity(65%);
        }

        .mega-menu-footer div div:hover svg {
          transform: scale(1.2) translateY(-2px);
          filter: grayscale(0%) opacity(100%);
        }

        @media (hover: hover) {
          .nav-link-hover:hover {
            color: #4f46e5 !important;
          }
          .desktop-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
            background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%);
          }
        }

        @media (max-width: 900px) {
          :global(.desktop-nav),
          :global(.desktop-cta),
          .mega-menu-dropdown {
            display: none !important;
          }

          .menu-btn {
            display: flex;
          }

          .mobile-menu {
            display: block;
            background: var(--bg-color);
            border-top: 1px solid var(--card-border);
            padding: 28px 24px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
          }

          .mobile-link {
            text-decoration: none;
            font-size: 18px;
            display: block;
            padding: 8px 0;
            transition: color 0.2s;
          }

          .mobile-cta {
            text-decoration: none;
            text-align: center;
            display: block;
            background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
            color: white;
            padding: 14px;
            border-radius: 12px;
            font-weight: 700;
            margin-top: 10px;
            box-shadow: 0 4px 15px rgba(79, 70, 229, 0.2);
          }
        }

        @media (max-width: 600px) {
          .header-container {
            height: 72px;
            padding: 0 16px;
          }
        }
      `}</style>
    </>
  );
}