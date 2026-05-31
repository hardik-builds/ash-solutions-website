'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Get Quote', href: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 9999,
          padding: '12px 16px',
          transition: 'all .3s ease'
        }}
      >
        <nav
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '14px 22px',

            background: scrolled
              ? 'rgba(255,255,255,.92)'
              : 'rgba(255,255,255,.75)',

            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',

            border: '1px solid rgba(15,23,42,.08)',

            borderRadius: '20px',

            boxShadow: scrolled
              ? '0 15px 40px rgba(15,23,42,.12)'
              : '0 10px 30px rgba(15,23,42,.06)',

            transition: '.3s ease'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            {/* Logo */}

            <Link
              href="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                lineHeight: '1'
              }}
            >
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: '900',
                  background:
                    'linear-gradient(135deg,#3B82F6,#06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                ASH
              </span>

              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '5px',
                  color: '#64748B',
                  fontWeight: '600',
                  marginTop: '3px'
                }}
              >
                SOLUTIONS
              </span>
            </Link>

            {/* Desktop Navigation */}

            <div className="desktop-menu">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      color: active
                        ? '#2563EB'
                        : '#475569',

                      fontWeight: active
                        ? '700'
                        : '500',

                      padding: '10px 14px',

                      borderRadius: '999px',

                      background: active
                        ? 'rgba(37,99,235,.08)'
                        : 'transparent',

                      transition: '.3s ease'
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}

            <div className="desktop-right">
              <a
                href="https://wa.me/918652768171"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',

                  padding: '12px 20px',

                  borderRadius: '12px',

                  background:
                    'linear-gradient(135deg,#3B82F6,#06B6D4)',

                  color: '#FFFFFF',

                  fontWeight: '700',

                  boxShadow:
                    '0 10px 25px rgba(59,130,246,.25)',

                  transition: '.3s ease'
                }}
              >
                Talk To An Expert
              </a>
            </div>

            {/* Mobile Button */}

            <button
              className="mobile-btn"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                width: '42px',
                height: '42px',

                borderRadius: '12px',

                border:
                  '1px solid rgba(15,23,42,.08)',

                background: '#FFFFFF',

                alignItems: 'center',
                justifyContent: 'center',

                cursor: 'pointer',

                color: '#0F172A'
              }}
            >
              {isOpen ? (
                <FiX size={22} />
              ) : (
                <FiMenu size={22} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}

          {isOpen && (
            <div
              style={{
                marginTop: '18px',

                background: '#FFFFFF',

                border:
                  '1px solid rgba(15,23,42,.08)',

                borderRadius: '18px',

                padding: '18px'
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    display: 'block',

                    padding: '14px',

                    borderRadius: '12px',

                    marginBottom: '8px',

                    textDecoration: 'none',

                    color:
                      pathname === link.href
                        ? '#2563EB'
                        : '#475569',

                    background:
                      pathname === link.href
                        ? 'rgba(37,99,235,.08)'
                        : 'transparent',

                    fontWeight:
                      pathname === link.href
                        ? '700'
                        : '500'
                  }}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="https://wa.me/918652768171"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',

                  textAlign: 'center',

                  textDecoration: 'none',

                  marginTop: '14px',

                  padding: '14px',

                  borderRadius: '12px',

                  background:
                    'linear-gradient(135deg,#3B82F6,#06B6D4)',

                  color: '#FFFFFF',

                  fontWeight: '700'
                }}
              >
                Talk To An Expert
              </a>
            </div>
          )}
        </nav>

        <style jsx>{`
          .desktop-menu {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .desktop-right {
            display: flex;
            align-items: center;
          }

          .mobile-btn {
            display: none;
          }

          @media (max-width: 900px) {
            .desktop-menu,
            .desktop-right {
              display: none !important;
            }

            .mobile-btn {
              display: flex !important;
            }
          }

          @media (max-width: 500px) {
            header {
              padding: 10px !important;
            }

            nav {
              padding: 14px 16px !important;
            }
          }
        `}</style>
      </header>
    </>
  );
}