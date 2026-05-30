'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
// import ThemeToggle from './ThemeToggle';

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
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          background: scrolled
            ? 'rgba(15,23,42,0.85)'
            : 'rgba(15,23,42,0.65)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.08)'
            : '1px solid transparent',
          transition: 'all .3s ease'
        }}
      >
        <nav
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            padding: '14px 20px'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {/* LOGO */}
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background:
                    'linear-gradient(135deg,#3B82F6,#06B6D4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '800',
                  fontSize: '18px',
                  boxShadow:
                    '0 10px 30px rgba(59,130,246,.35)'
                }}
              >
                A
              </div>

              <div>
                <div
                  style={{
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: '18px'
                  }}
                >
                  ASH Solutions
                </div>

                <div
                  style={{
                    fontSize: '11px',
                    color: '#94A3B8',
                    letterSpacing: '.5px'
                  }}
                >
                  Digital Innovation Partner
                </div>
              </div>
            </Link>

            {/* DESKTOP MENU */}
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
                        ? '#60A5FA'
                        : '#E2E8F0',
                      fontWeight: active ? '600' : '500',
                      position: 'relative',
                      transition: '.3s'
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* RIGHT */}
            <div
              className="desktop-right"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              {/* <ThemeToggle /> */}

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
    color: '#fff',
    fontWeight: '600',
    boxShadow:
      '0 10px 25px rgba(59,130,246,.3)',
    transition: 'all .3s ease'
  }}
>
  Talk to an Expert
</a>
              
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="mobile-btn"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                cursor: 'pointer'
              }}
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div
              className="mobile-menu"
              style={{
                marginTop: '20px',
                background: 'rgba(15,23,42,.95)',
                borderRadius: '16px',
                padding: '20px'
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    color: '#fff',
                    textDecoration: 'none'
                  }}
                >
                  {link.name}
                </Link>
              ))}

              <div
                style={{
                  marginTop: '15px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                {/* <ThemeToggle /> */}
              </div>

              <Link
                href="https://wa.me/918652768171"
                style={{
                  display: 'block',
                  marginTop: '15px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  padding: '12px',
                  borderRadius: '12px',
                  background:
                    'linear-gradient(135deg,#3B82F6,#06B6D4)',
                  color: '#fff',
                  fontWeight: '600'
                }}
              >
                Book Discovery Call
              </Link>
            </div>
          )}
        </nav>

        <style jsx>{`
          .desktop-menu {
            display: flex;
            gap: 30px;
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
              display: block !important;
            }
          }
        `}</style>
      </header>
    </>
  );
}