'use client';

import { useState, useEffect } from 'react';
import ReviewSlider from '@/components/ReviewSlider';
import Link from 'next/link';

export default function Home() {
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='page-enter'
      style={{
        backgroundColor: '#ffffff',
        color: '#334155',
        minHeight: '100vh',
        transition: 'opacity .8s ease, transform .8s ease',
        opacity: pageVisible ? 1 : 0,
        transform: pageVisible ? 'translateY(0)' : 'translateY(30px)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Watercolor Glows - Highly Subdued for Pure White Page */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          top: '-250px',
          right: '-100px',
          pointerEvents: 'none',
        }}
        className="nebula-glow-1"
      />
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          top: '30%',
          left: '-150px',
          pointerEvents: 'none',
        }}
        className="nebula-glow-2"
      />
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.02) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          bottom: '10%',
          right: '-150px',
          pointerEvents: 'none',
        }}
        className="nebula-glow-3"
      />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '160px 20px 80px',
          background: 'transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.1fr .9fr',
            gap: '60px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
          className="hero-grid"
        >
          {/* LEFT */}
          <div>
            <div
               style={{
              color: '#4f46e5',
              fontWeight: '700',
              letterSpacing: '2px',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
            >
               AI • SaaS • Automation
            </div>
            <h1
              style={{
                fontSize: 'clamp(44px, 6.5vw, 78px)',
                fontWeight: '950',
                lineHeight: '1.05',
                color: '#0f172a',
                marginBottom: '25px',
                letterSpacing: '-2px',
              }}
            >
              Building <br />
              <span className="text-gradient-purple-cyan" style={{
                background: 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Digital Systems</span> <br />
              For Growth
            </h1>
            <p
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                color: '#475569',
                maxWidth: '650px',
              }}
            >
              We build AI automation systems, custom SaaS platforms,
              business management solutions, websites, and mobile applications
              designed to help companies grow faster and operate smarter.
            </p>
            <div
              className="cta-buttons"
              style={{
                marginTop: '40px',
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://wa.me/918652768171"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(79, 70, 229, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(79, 70, 229, 0.2)';
                }}
              >
                Start A Project
              </a>
              <Link
                href="/services"
                className="btn-secondary"
                style={{
                  textDecoration: 'none',
                  border: '1px solid rgba(15, 23, 42, 0.12)',
                  color: '#0f172a',
                  padding: '16px 32px',
                  borderRadius: '14px',
                  fontWeight: '700',
                  background: 'rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                  e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.12)';
                }}
              >
                Explore Services
              </Link>
            </div>
          </div>
          {/* RIGHT */}
          <div
            style={{
              position: 'relative',
              padding: '20px',
            }}
            className="hero-right-container"
          >
            {/* Floating Pills */}
            <div className="floating-pill pill1">React</div>
            <div className="floating-pill pill2">Next.js</div>
            <div className="floating-pill pill3">Node.js</div>
            <div className="floating-pill pill4">MongoDB</div>
            <div className="floating-pill pill5">OpenAI</div>
            <div className="floating-pill pill6">AWS</div>

            {/* Code Editor */}
            <div
              className="glass-panel"
              style={{
                background: 'rgba(9, 13, 26, 0.88)',
                border: '1px solid rgba(15, 23, 42, 0.15)',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(15, 23, 42, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                position: 'relative',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(5, 8, 16, 0.6)',
                }}
              >
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22C55E' }} />
                </div>
                <div style={{ fontSize: '12px', color: '#64748B', fontFamily: 'monospace', fontWeight: '600' }}>
                  ash-solutions.js
                </div>
                <div style={{ width: '52px' }} />
              </div>

              {/* Sidebar + Editor Grid */}
              <div className="editor-grid-wrapper" style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                minHeight: '260px'
              }}>
                {/* Explorer Sidebar */}
                <div className="editor-file-tree" style={{
                  background: 'rgba(5, 8, 16, 0.4)',
                  borderRight: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '16px 12px',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: '#64748b',
                  userSelect: 'none'
                }}>
                  <div style={{ textTransform: 'uppercase', fontSize: '10px', fontWeight: '800', letterSpacing: '1px', marginBottom: '12px', color: '#475569' }}>
                    Explorer
                  </div>
                  <div style={{ color: '#cbd5e1', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    ▼ MY-APP
                  </div>
                  <div style={{ paddingLeft: '12px' }}>
                    <div style={{ color: '#cbd5e1', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      ▼ app
                    </div>
                    <div style={{ paddingLeft: '12px' }}>
                      <div style={{ background: 'rgba(56, 189, 248, 0.08)', color: '#38bdf8', padding: '4px 8px', borderRadius: '4px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                        📄 page.js
                      </div>
                      <div style={{ padding: '4px 8px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                        📄 layout.js
                      </div>
                    </div>
                    <div style={{ color: '#64748b', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      ▶ components
                    </div>
                    <div style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      ▶ public
                    </div>
                  </div>
                </div>

                {/* Main Workspace */}
                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  {/* Editor Tabs */}
                  <div style={{
                    display: 'flex',
                    background: 'rgba(5, 8, 16, 0.2)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: '11px',
                    fontFamily: 'monospace'
                  }}>
                    <div style={{
                      background: 'rgba(9, 13, 26, 0.85)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.06)',
                      borderTop: '2px solid #38bdf8',
                      padding: '8px 16px',
                      color: '#f8fafc',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontWeight: '600'
                    }}>
                      📄 page.js <span style={{ opacity: 0.5 }}>×</span>
                    </div>
                    <div style={{
                      padding: '8px 16px',
                      color: '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      borderRight: '1px solid rgba(255, 255, 255, 0.06)'
                    }}>
                      📄 layout.js
                    </div>
                  </div>
                  
                  {/* Code Content */}
                  <div style={{
                    display: 'flex',
                    padding: '24px 16px',
                    overflowX: 'auto',
                    fontFamily: 'Fira Code, JetBrains Mono, monospace',
                    fontSize: '13px',
                    lineHeight: '1.7',
                    background: 'transparent'
                  }}>
                    {/* Line Numbers */}
                    <div style={{ color: '#334155', textAlign: 'right', paddingRight: '16px', borderRight: '1px solid rgba(255, 255, 255, 0.06)', userSelect: 'none' }}>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                    </div>
                    
                    {/* Code */}
                    <pre style={{ margin: 0, paddingLeft: '16px', color: '#94a3b8' }}>
                      <code>
                        <span style={{ color: '#f43f5e' }}>const</span>{' '}
                        <span style={{ color: '#38bdf8' }}>system</span> = {'{\n'}
                        {'  '}
                        <span style={{ color: '#fb923c' }}>name</span>:{' '}
                        <span style={{ color: '#4ade80' }}>&quot;ASH Solutions&quot;</span>,{'\n'}
                        {'  '}
                        <span style={{ color: '#fb923c' }}>aiAutomation</span>:{' '}
                        <span style={{ color: '#a78bfa' }}>true</span>,{'\n'}
                        {'  '}
                        <span style={{ color: '#fb923c' }}>customSaaS</span>:{' '}
                        <span style={{ color: '#a78bfa' }}>true</span>,{'\n'}
                        {'  '}
                        <span style={{ color: '#fb923c' }}>scalability</span>:{' '}
                        <span style={{ color: '#4ade80' }}>&quot;maximum&quot;</span>,{'\n'}
                        {'  '}
                        <span style={{ color: '#fb923c' }}>readyToScale</span>:{' '}
                        <span style={{ color: '#a78bfa' }}>true</span>{'\n'}
                        {'};'}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flowing Service Ribbon */}
        <div
          style={{
            marginTop: '80px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            borderTop: '1px solid rgba(15, 23, 42, 0.06)',
            borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
            padding: '18px 0',
            background: '#ffffff',
            position: 'relative',
            zIndex: 3
          }}
        >
          <div className="service-ribbon" style={{
              marginTop: '90px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              borderTop: '1px solid var(--card-border)',
              borderBottom: '1px solid var(--card-border)',
              padding: '18px 0',
              background: 'var(--card-bg)',
            }}>
            AI AUTOMATION • CUSTOM SAAS • WEB DEVELOPMENT • MOBILE APPS • CRM • ERP • CYBERSECURITY • AI AUTOMATION • CUSTOM SAAS • WEB DEVELOPMENT • MOBILE APPS • CRM • ERP • CYBERSECURITY
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: '120px 20px',
          background: 'transparent',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Heading */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '70px',
            }}
          >
            <div
              style={{
                color: '#4f46e5',
                fontWeight: '700',
                marginBottom: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              WHAT WE BUILD
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px,6vw,58px)',
                fontWeight: '900',
                color: '#0f172a',
                marginBottom: '18px',
                letterSpacing: '-1.5px'
              }}
            >
              Technology Built For Growth
            </h2>

            <p
              style={{
                maxWidth: '700px',
                margin: '0 auto',
                color: '#475569',
                lineHeight: '1.8',
                fontSize: '18px',
              }}
            >
              We help businesses automate operations, build scalable software and create digital experiences that drive measurable growth.
            </p>
          </div>

          {/* Cards */}
          <div
            className="services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'AI Automation',
                desc: 'Automate repetitive workflows, lead management, customer support and business operations.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M5.5 18.5l2.1-2.1M16.4 7.6l2.1-2.1" />
                    <path d="M8 12a4 4 0 0 1 8 0" strokeOpacity="0.3" />
                  </svg>
                ),
              },
              {
                title: 'Custom SaaS Development',
                desc: 'Subscription-based software platforms built specifically for your business model.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeOpacity="0.3" />
                    <path d="M12 12v6M9 15l3-3 3 3" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: 'Business Management Systems',
                desc: 'Custom ERP, CRM and operational systems tailored to your workflow.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeOpacity="0.3" />
                    <path d="M9 17v-5M12 17V9M15 17v-3" strokeWidth="2" />
                    <path d="M17 6h.01M7 6h.01M12 6h.01" />
                  </svg>
                ),
              },
              {
                title: 'Website Development',
                desc: 'Modern websites focused on performance, trust and conversion.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" strokeOpacity="0.3" />
                    <path d="M8 21h8M12 17v4" strokeOpacity="0.3" />
                    <path d="M10 8l-2 2 2 2M14 8l2 2-2 2" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: 'Mobile Applications',
                desc: 'Scalable Android and cross-platform applications for growing businesses.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="3" strokeOpacity="0.3" />
                    <path d="M12 18h.01" strokeWidth="3" strokeLinecap="round" />
                    <path d="M9 6h6" strokeOpacity="0.3" />
                  </svg>
                ),
              },
              {
                title: 'Cybersecurity Solutions',
                desc: 'Security assessments, consulting and protection for digital assets.',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d946ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeOpacity="0.3" />
                    <rect x="10" y="11" width="4" height="4" rx="1" strokeWidth="2" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  borderRadius: '26px',
                  padding: '32px',
                  transition: 'all .35s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(15, 23, 42, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.06)';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(99, 102, 241, 0.05)',
                    border: '1px solid rgba(99, 102, 241, 0.12)',
                    marginBottom: '20px',
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '14px',
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: '#475569',
                    lineHeight: '1.8',
                  }}
                >
                  {service.desc}
                </p>

                <a
                  href="https://wa.me/918652768171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="services-learn-more"
                  style={{
                    display: 'inline-block',
                    marginTop: '20px',
                    color: '#4f46e5',
                    textDecoration: 'none',
                    fontWeight: '700',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Learn More <span className="arrow-span" style={{ display: 'inline-block', transition: 'transform 0.3s ease' }}>→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '60px',
            }}
          >
            <a
              href="https://wa.me/918652768171"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '16px 36px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 10px 25px -5px rgba(6, 182, 212, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(6, 182, 212, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(6, 182, 212, 0.2)';
              }}
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        style={{
          padding: '120px 20px',
          background: 'transparent',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div
            className="why-container"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  color: '#4f46e5',
                  fontWeight: '700',
                  marginBottom: '12px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                WHY ASH SOLUTIONS
              </div>

              <h2
                style={{
                  fontSize: 'clamp(36px,6vw,58px)',
                  fontWeight: '900',
                  color: '#0f172a',
                  lineHeight: '1.1',
                  marginBottom: '22px',
                  letterSpacing: '-1.5px'
                }}
              >
                Technology Built<br />Around Business Growth
              </h2>

              <p
                style={{
                  color: '#475569',
                  lineHeight: '1.9',
                  fontSize: '18px',
                  marginBottom: '20px',
                }}
              >
                Most development agencies focus only on building software. We focus on helping businesses increase efficiency, automate operations and create systems that scale.
              </p>

              <p
                style={{
                  color: '#475569',
                  lineHeight: '1.9',
                  fontSize: '18px',
                  marginBottom: '35px',
                }}
              >
                Every solution is designed with long-term business goals, automation opportunities and future expansion in mind.
              </p>

              <a
                href="https://wa.me/918652768171"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  boxShadow: '0 10px 25px -5px rgba(6, 182, 212, 0.2)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(6, 182, 212, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(6, 182, 212, 0.2)';
                }}
              >
                Talk To An Expert
              </a>
            </div>

            {/* Right Cards */}
            <div
              style={{
                display: 'grid',
                gap: '18px',
              }}
            >
              {[
                {
                  title: 'AI-Powered Solutions',
                  desc: 'Automate repetitive work and improve productivity through intelligent workflows.',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                  )
                },
                {
                  title: 'Business-First Approach',
                  desc: 'Every project is aligned with measurable business goals and outcomes.',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  )
                },
                {
                  title: 'Scalable Architecture',
                  desc: 'Built to support future growth without costly rebuilds.',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="8" rx="2" />
                      <rect x="2" y="14" width="20" height="8" rx="2" />
                      <line x1="6" y1="10" x2="6" y2="14" />
                      <line x1="18" y1="10" x2="18" y2="14" />
                    </svg>
                  )
                },
                {
                  title: 'Long-Term Partnership',
                  desc: 'Continuous support, maintenance and future enhancements.',
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass-panel why-card"
                  style={{
                    borderRadius: '22px',
                    padding: '24px',
                    background: 'rgba(255, 255, 255, 0.75)',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                    borderLeft: '4px solid transparent',
                    boxShadow: '0 8px 32px 0 rgba(15, 23, 42, 0.03)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'start'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
                    e.currentTarget.style.borderLeftColor = '#4f46e5';
                    e.currentTarget.style.transform = 'translateX(6px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(99, 102, 241, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.06)';
                    e.currentTarget.style.borderLeftColor = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(15, 23, 42, 0.03)';
                  }}
                >
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(99, 102, 241, 0.05)',
                    border: '1px solid rgba(99, 102, 241, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        color: '#0f172a',
                        fontSize: '20px',
                        fontWeight: '800',
                        marginBottom: '8px',
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        color: '#475569',
                        lineHeight: '1.7',
                        fontSize: '15px',
                        margin: 0
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="why-stats"
            style={{
              marginTop: '70px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: '20px',
            }}
          >
            {[
              {
                value: '7+',
                label: 'Core Services',
              },
              {
                value: 'AI',
                label: 'Powered Solutions',
              },
              {
                value: '24/7',
                label: 'Support',
              },
              {
                value: '100%',
                label: 'Custom Built',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-panel"
                style={{
                  borderRadius: '22px',
                  padding: '26px',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.75)',
                  border: '1px solid rgba(15, 23, 42, 0.06)',
                  boxShadow: '0 8px 32px 0 rgba(15, 23, 42, 0.03)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    fontSize: '38px',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                    marginBottom: '8px'
                  }}
                >
                  {item.value}
                </div>

                <div
                  style={{
                    color: '#475569',
                    fontSize: '15px',
                    fontWeight: '600'
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section
        style={{
          padding: '120px 20px',
          background: 'transparent',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Heading */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '80px',
            }}
          >
            <div
              style={{
                color: '#4f46e5',
                fontWeight: '700',
                marginBottom: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              OUR PROCESS
            </div>

            <h2
              style={{
                fontSize: 'clamp(36px,6vw,58px)',
                fontWeight: '900',
                color: '#0f172a',
                marginBottom: '18px',
                letterSpacing: '-1.5px'
              }}
            >
              From Idea To Deployment
            </h2>

            <p
              style={{
                maxWidth: '700px',
                margin: '0 auto',
                color: '#475569',
                lineHeight: '1.9',
                fontSize: '18px',
              }}
            >
              Every project follows a structured roadmap focused on quality, scalability and business outcomes.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="timeline-container" style={{ position: 'relative', margin: '60px auto 0', maxWidth: '1000px', padding: '20px 0' }}>
            {/* Vertical Line */}
            <div className="timeline-line" style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(to bottom, #4f46e5 0%, #0ea5e9 50%, #06b6d4 100%)',
              transform: 'translateX(-50%)',
              zIndex: 1
            }} />
            
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'Understand business goals, challenges and project requirements.',
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'Create architecture, roadmap and execution plan.',
              },
              {
                step: '03',
                title: 'Development',
                desc: 'Build scalable solutions using modern technologies.',
              },
              {
                step: '04',
                title: 'Launch',
                desc: 'Deploy, optimize and ensure reliability.',
              },
              {
                step: '05',
                title: 'Support',
                desc: 'Continuous maintenance, improvements and scaling.',
              },
            ].map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`timeline-item ${isEven ? 'left' : 'right'}`} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '60px',
                  width: '100%',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {/* Content Card Side */}
                  <div className="timeline-content-wrapper" style={{
                    width: '44%',
                    order: isEven ? 1 : 3,
                    textAlign: isEven ? 'right' : 'left'
                  }}>
                    <div className="glass-panel timeline-card" style={{
                      padding: '30px',
                      borderRadius: '24px',
                      background: 'rgba(255, 255, 255, 0.75)',
                      border: '1px solid rgba(15, 23, 42, 0.06)',
                      boxShadow: '0 10px 30px -10px rgba(15, 23, 42, 0.05)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      display: 'inline-block',
                      textAlign: 'left',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(99, 102, 241, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.06)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(15, 23, 42, 0.05)';
                    }}
                    >
                      <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#475569', lineHeight: '1.7', fontSize: '15px' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Central Circle Badge */}
                  <div className="timeline-badge" style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '2px solid #4f46e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4f46e5',
                    fontWeight: '800',
                    fontSize: '18px',
                    boxShadow: '0 0 15px rgba(99, 102, 241, 0.15)',
                    order: 2,
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 5
                  }}>
                    {item.step}
                  </div>

                  {/* Spacer for other side */}
                  <div className="timeline-spacer" style={{ width: '44%', order: isEven ? 3 : 1 }} />
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '60px',
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
                padding: '12px 24px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(6, 182, 212, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(6, 182, 212, 0.2)';
              }}
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <ReviewSlider />

      {/* CTA Section - Converted to Pure White Layout */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '120px 20px',
          background: '#ffffff',
          borderTop: '1px solid rgba(15, 23, 42, 0.06)',
          color: '#0f172a',
          zIndex: 2
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
              textTransform: 'uppercase'
            }}
          >
            {"LET'S BUILD SOMETHING AMAZING"}
          </div>

          <h2
            style={{
              fontSize: 'clamp(36px,7vw,64px)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '25px',
              letterSpacing: '-1.5px',
              color: '#0f172a'
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
              color: '#475569',
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
                padding: '12px 24px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(6, 182, 212, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(6, 182, 212, 0.2)';
              }}
            >
              Talk to an Expert
            </a>

            <Link
              href="/contact"
              style={{
                padding: '16px 36px',
                borderRadius: '14px',
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(15, 23, 42, 0.12)',
                color: '#0f172a',
                fontWeight: '700',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.12)';
              }}
            >
              Get Custom Quote
            </Link>
          </div>

          <div
            style={{
              marginTop: '40px',
              color: '#64748B',
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '0.5px'
            }}
          >
            AI Automation • SaaS Development • Websites • Apps • Cybersecurity
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1) translate(10px, -10px);
            opacity: 1;
          }
        }

        .nebula-glow-1 {
          animation: pulseGlow 12s ease-in-out infinite;
        }
        .nebula-glow-2 {
          animation: pulseGlow 15s ease-in-out infinite 2s;
        }
        .nebula-glow-3 {
          animation: pulseGlow 18s ease-in-out infinite 4s;
        }

        .floating-pill {
          position: absolute;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: #4f46e5;
          font-weight: 600;
          font-size: 14px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
          z-index: 5;
          pointer-events: auto;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }

        .floating-pill:hover {
          transform: translateY(-5px) scale(1.1) !important;
          border-color: rgba(99, 102, 241, 0.5) !important;
          box-shadow: 0 12px 25px rgba(99, 102, 241, 0.15) !important;
          color: #6366f1 !important;
        }

        .service-ribbon {
          display: inline-block;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 2px;
          animation: ribbonMove 24s linear infinite;
        }

        @keyframes ribbonMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .services-learn-more:hover {
          color: #6366f1 !important;
        }
        
        .services-learn-more:hover .arrow-span {
          transform: translateX(4px);
        }

        .pill1 { top: -20px; left: 10px; animation: float1 6s ease-in-out infinite; }
        .pill2 { top: 40px; right: -20px; animation: float2 5s ease-in-out infinite; }
        .pill3 { top: 45%; left: -40px; transform: translateY(-50%); animation: float3 7s ease-in-out infinite; }
        .pill4 { top: 55%; right: -30px; animation: float4 6.5s ease-in-out infinite; }
        .pill5 { bottom: -10px; left: -10px; animation: float5 5.5s ease-in-out infinite; }
        .pill6 { bottom: 20px; right: 20px; animation: float6 8s ease-in-out infinite; }

        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(2deg); }
          50% { transform: translateY(-8px) rotate(-2deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px) translateX(3px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px) translateX(4px); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float6 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px) translateX(-4px); }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            text-align: center;
          }
          .cta-buttons {
            justify-content: center;
          }
          .floating-pill {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 36px !important;
          }
          h2 {
            font-size: 32px !important;
          }
          section {
            padding: 60px 0 !important;
          }
        }
        @media(max-width:900px){
          .why-grid{
            grid-template-columns:1fr !important;
          }
        }
        
        @media (max-width: 900px) {
          .why-content {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .editor-file-tree {
            display: none !important;
          }
          .editor-grid-wrapper {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-buttons a {
            width: 100%;
            max-width: 320px;
            text-align: center;
          }
        }
        
        /* Timeline styling */
        .timeline-container {
          position: relative;
        }
        
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            margin-bottom: 40px !important;
            padding-left: 50px !important;
            width: 100% !important;
          }
          .timeline-content-wrapper {
            width: 100% !important;
            order: 2 !important;
            text-align: left !important;
          }
          .timeline-badge {
            left: 20px !important;
            transform: translateX(-50%) !important;
            order: 1 !important;
            width: 44px !important;
            height: 44px !important;
            font-size: 15px !important;
            margin-bottom: 15px;
            position: absolute !important;
            top: 0 !important;
          }
          .timeline-spacer {
            display: none !important;
          }
          .timeline-card {
            padding: 20px !important;
          }
        }
        
        @media (max-width: 500px) {
          .why-stats {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width:768px){
          .hero-section{
            padding:110px 20px 90px !important;
          }
        }
        @media (max-width: 900px) {
          .why-content{
            grid-template-columns: 1fr !important;
          }

          .why-right{
            margin-top: 10px;
          }

          .why-stats{
            margin-top: 10px !important;
          }
        }

        @media (max-width: 500px){
          .why-stats{
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 900px){
          .why-container{
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }

          .why-right{
            order: 2;
          }

          .why-stats{
            order: 3;
            margin-top: 0 !important;
          }
        }
        @media (max-width: 900px) {
          .why-container {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
          }
        }

        @media (max-width: 640px) {
          .why-stats {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width:640px){
          .cta-buttons{
            flex-direction:column !important;
            align-items:center !important;
            width:100%;
          }

          .cta-buttons a{
            width:100%;
            max-width:320px;
            text-align:center;
          }
        }
        @media (max-width:640px){
          .why-btn{
            display:block !important;
            width:100%;
            max-width:320px;
            text-align:center;
            margin:auto;
          }
        }
      `}</style>
    </div>
  );
}