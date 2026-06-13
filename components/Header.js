'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
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
                background: 'linear-gradient(135deg, #0f172a 0%, #4f46e5 50%, #0891b2 100%)',
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
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                    color: active ? '#4f46e5' : 'var(--text-color)',
                    fontWeight: '700',
                    fontSize: '13px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    padding: '8px 4px',
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
                        bottom: '-2px',
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
          :global(.desktop-cta) {
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