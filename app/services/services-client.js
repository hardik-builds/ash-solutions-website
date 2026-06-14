'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building responsive, scalable, and visually appealing websites tailored to your business needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    features: [
      'Responsive Design',
      'Custom Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'Progressive Web Apps',
      'API Integration'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with advanced security solutions and proactive threat management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    features: [
      'Security Audits',
      'Penetration Testing',
      'Firewall Configuration',
      'Data Encryption',
      'Security Training',
      '24/7 Monitoring'
    ]
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Boosting your online visibility with strategic SEO techniques that drive organic traffic.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Content Strategy',
      'Link Building',
      'Analytics & Reporting'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Driving business growth with data-driven strategies and innovative digital campaigns.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    features: [
      'Search-Engine optimization(SEO)',
      'Pay-Per Click Advertising(PPC)',
      'Social Media Marketing',
      'Content Marketing',
      'Analytics & Reporting'
    ]
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Developing custom mobile applications that deliver exceptional user experiences across all platforms.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '32px', width: '32px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'UI/UX Design',
      'App Store Optimization',
      'Maintenance & Support'
    ]
  }
];

const industries = [
  {
    title: 'Healthcare & Biotech',
    desc: 'Patient dashboards, secure record keeping, and scheduling bots designed to streamline operations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: '#4f46e5'
  },
  {
    title: 'Finance & Banking',
    desc: 'SaaS platforms, secure payment processing solutions, and customized account reporting systems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#0ea5e9'
  },
  {
    title: 'Real Estate & Properties',
    desc: 'Lead tracking, pipeline automation, custom client matching systems, and listing directories.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: '#7c3aed'
  },
  {
    title: 'Retail & E-commerce',
    desc: 'Interactive shopping dashboards, custom CMS databases, sitemaps, and optimized payment gateways.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: '#0891b2'
  },
  {
    title: 'Logistics & Supply Chain',
    desc: 'Asset management dashboards, track and trace notifications, and workflow automations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    color: '#6366f1'
  },
  {
    title: 'Startups & SaaS',
    desc: 'Custom product builds, metrics tracking interfaces, CRM hubs, and API integrations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '24px', width: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: '#d946ef'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 14,
    },
  },
};

export default function Services() {
  return (
    <div style={{ position: 'relative', background: 'transparent', color: 'var(--text-color)', overflow: 'hidden' }}>
      <div
        className="mesh-glow-indigo"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '-150px',
          right: '-100px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        className="mesh-glow-cyan"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          top: '30%',
          left: '-150px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        className="mesh-glow-purple"
        style={{
          position: 'absolute',
          width: '550px',
          height: '550px',
          bottom: '10%',
          right: '-120px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          padding: '160px 24px 100px',
          background: 'radial-gradient(circle at 50% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 60%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              color: '#4f46e5',
              fontWeight: '700',
              letterSpacing: '2px',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            Services
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(32px, 8vw, 100px)',
              fontWeight: '950',
              lineHeight: '.95',
              color: 'var(--title-color)',
              letterSpacing: '-2px',
              marginBottom: '25px',
            }}
          >
            Building <br />
            <span className="text-gradient-purple-cyan">Digital Systems</span>
          </motion.h1>

          <p
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              color: 'var(--body-text)',
              fontSize: '20px',
              lineHeight: '1.9',
            }}
          >
            From AI Automation and SaaS platforms to Websites, Mobile Apps, CRM and ERP systems — we build technology designed for growth.
          </p>

          <div
            className="services-cta-buttons"
            style={{
              marginTop: '50px',
              display: 'flex',
              justifyContent: 'center',
              gap: '18px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://wa.me/918652768171"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary-btn"
              style={{
                padding: '18px 36px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Discuss Project
            </a>

            <Link
              href="/contact"
              className="cta-secondary-btn"
              style={{
                padding: '18px 36px',
                borderRadius: '16px',
                border: '1px solid var(--cta-secondary-border)',
                color: 'var(--text-color)',
                textDecoration: 'none',
                fontWeight: '700',
                background: 'var(--cta-secondary-bg)',
                boxShadow: 'var(--cta-secondary-shadow)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Request Proposal
            </Link>
          </div>

          {/* Service Ribbon */}
          <div
            style={{
              marginTop: '90px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              borderTop: '1px solid var(--card-border)',
              borderBottom: '1px solid var(--card-border)',
              padding: '18px 0',
              background: 'var(--card-bg)',
            }}
          >
            <div className="service-ribbon">
              AI AUTOMATION • CUSTOM SAAS • CRM • ERP • MOBILE APPS • WEB DEVELOPMENT • CYBERSECURITY • AI INTEGRATION • AI AUTOMATION • CUSTOM SAAS • CRM • ERP • MOBILE APPS • WEB DEVELOPMENT • CYBERSECURITY • AI INTEGRATION
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--section-bg)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div
              style={{
                color: '#4f46e5',
                fontWeight: '700',
                letterSpacing: '2px',
                marginBottom: '15px',
                textTransform: 'uppercase',
              }}
            >
              What We Build
            </div>

            <h2
              style={{
                fontSize: 'clamp(38px, 6vw, 64px)',
                fontWeight: '900',
                color: 'var(--title-color)',
                lineHeight: '1.1',
                marginBottom: '20px',
                letterSpacing: '-1.5px',
              }}
            >
              Solutions Built For Growth
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="glass-panel glass-panel-hover premium-card-sheen"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1.5fr 1fr',
                  gap: '40px',
                  alignItems: 'start',
                  padding: '50px 40px',
                  borderRadius: '28px',
                }}
              >
                {/* Icon Circle */}
                <div
                  className="service-icon"
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '18px',
                    background: 'rgba(99, 102, 241, 0.08)',
                    border: '1px solid rgba(99, 102, 241, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4f46e5',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {service.icon}
                </div>

                {/* Left - Main Info */}
                <div>
                  <h3
                    style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: '#0f172a',
                      marginBottom: '12px',
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: '#1e293b', lineHeight: '1.7', fontSize: '15px', marginBottom: '24px' }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {service.features.map((feat, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '8px',
                          background: 'rgba(15, 23, 42, 0.02)',
                          border: '1px solid rgba(15, 23, 42, 0.08)',
                          fontSize: '13px',
                          color: '#0f172a',
                          fontWeight: '700',
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Pricing & Timeline Removed, display custom quote helper */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    height: '100%',
                    gap: '8px',
                    alignSelf: 'center',
                    textAlign: 'right',
                  }}
                  className="pricing-block"
                >
                  <div style={{ fontSize: '13px', color: '#4f46e5', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Custom Proposal
                  </div>
                  <div style={{ fontSize: '15px', color: 'var(--body-text)', fontWeight: '700', lineHeight: '1.4' }}>
                    Pricing & timeline tailored to your scope
                  </div>

                  <a
                    href="https://wa.me/918652768171"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary-btn service-card-btn"
                    style={{
                      marginTop: '15px',
                      textDecoration: 'none',
                      padding: '12px 24px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontWeight: '700',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(79, 70, 229, 0.2)',
                    }}
                  >
                    Discuss project &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve Section - Premium Card Grid */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--bg-color)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div
              style={{
                color: '#4f46e5',
                fontWeight: '700',
                letterSpacing: '2px',
                marginBottom: '15px',
                textTransform: 'uppercase',
              }}
            >
              Industries We Serve
            </div>

            <h2
              style={{
                fontSize: 'clamp(38px, 6vw, 64px)',
                fontWeight: '900',
                lineHeight: '1.1',
                color: 'var(--title-color)',
                letterSpacing: '-1.5px',
                marginBottom: '20px',
              }}
            >
              Solutions For Every Industry
            </h2>
            <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--body-text)', fontSize: '18px', lineHeight: '1.8' }}>
              We build scalable software and workflows optimized to solve sector-specific challenges.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px',
            }}
          >
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-panel"
                style={{
                  borderRadius: '24px',
                   background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--card-shadow), var(--card-sheen)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  e.currentTarget.style.borderColor = `${ind.color}35`;
                  e.currentTarget.style.boxShadow = `0 20px 40px -15px ${ind.color}25, var(--card-sheen)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.boxShadow = 'var(--card-shadow), var(--card-sheen)';
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: `${ind.color}15`,
                    color: ind.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  {ind.icon}
                </div>

                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '800',
                    color: 'var(--title-color)',
                    marginBottom: '12px',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {ind.title}
                </h3>
                <p style={{ color: 'var(--body-text)', fontSize: '15px', lineHeight: '1.7' }}>
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Anchor dark block */}
      <section
        style={{
          padding: '160px 24px',
          background: '#070b13',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)',
            filter: 'blur(150px)',
            top: '-250px',
            right: '-250px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              color: '#818cf8',
              fontWeight: '700',
              letterSpacing: '2px',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            READY TO BUILD?
          </div>

          <h2
            style={{
              fontSize: 'clamp(50px, 8vw, 110px)',
              fontWeight: '900',
              lineHeight: '.95',
              color: '#FFFFFF',
              marginBottom: '30px',
              letterSpacing: '-2px',
            }}
          >
            Let's Create <br />
            Something Exceptional
          </h2>

          <p
            style={{
              maxWidth: '760px',
              margin: '0 auto',
              color: '#cbd5e1',
              lineHeight: '1.9',
              fontSize: '18px',
            }}
          >
            Whether you need AI Automation, a Custom SaaS Platform, CRM/ERP Software, Mobile Applications, Websites or Enterprise Solutions — we're ready to help you scale.
          </p>

          <div
            className="services-cta-buttons"
            style={{
              marginTop: '50px',
              display: 'flex',
              justifyContent: 'center',
              gap: '18px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://wa.me/918652768171"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary-btn"
              style={{
                textDecoration: 'none',
                padding: '18px 34px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                color: '#FFFFFF',
                fontWeight: '800',
                boxShadow: '0 4px 15px rgba(79, 70, 229, 0.35)',
              }}
            >
              Start Your Project
            </a>

            <Link
              href="/contact"
              className="cta-secondary-btn"
              style={{
                textDecoration: 'none',
                padding: '18px 34px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,.12)',
                background: 'rgba(255,255,255,.04)',
                color: '#FFFFFF',
                fontWeight: '800',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}
            >
              Request Proposal
            </Link>
          </div>

          {/* Metrics */}
          <div
            style={{
              marginTop: '90px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '30px',
            }}
          >
            {[
              { value: 'AI', label: 'Automation Ready' },
              { value: '24/7', label: 'Support Setup' },
              { value: '100%', label: 'Custom Built' },
              { value: '∞', label: 'Scalable System' },
            ].map((item, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontSize: 'clamp(38px, 6vw, 64px)',
                    fontWeight: '900',
                    color: '#ffffff',
                  }}
                >
                  {item.value}
                </div>
                <div style={{ color: '#cbd5e1', marginTop: '8px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .service-ribbon {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--body-text);
          animation: ribbonMove 24s linear infinite;
        }

        @keyframes ribbonMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .industry-marquee {
          display: inline-block;
          font-size: clamp(28px, 4vw, 54px);
          font-weight: 900;
          color: rgba(255, 255, 255, 0.08);
          animation: marqueeMove 32s linear infinite;
        }

        .industry-marquee span {
          color: #6366f1;
          margin: 0 24px;
          opacity: 0.3;
        }

        .reverse {
          animation-direction: reverse;
        }

        @keyframes marqueeMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (hover: hover) {
          .cta-primary-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.45);
          }
          .cta-secondary-btn:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
          .glass-panel-hover:hover {
            border-color: rgba(79, 70, 229, 0.2);
            box-shadow: 0 20px 40px -15px rgba(79, 70, 229, 0.12);
            transform: translateY(-4px);
          }
          .glass-panel-hover:hover .cta-primary-btn {
            background: linear-gradient(135deg, #4338ca 0%, #3730a3 100%) !important;
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.45);
          }
          .glass-panel-hover:hover .service-icon {
            transform: scale(1.12) rotate(4deg) !important;
            background: rgba(99, 102, 241, 0.12) !important;
            border-color: rgba(99, 102, 241, 0.25) !important;
          }
        }

        @media (max-width: 992px) {
          .glass-panel-hover {
            grid-template-columns: 80px 1fr !important;
            gap: 20px !important;
          }
          .pricing-block {
            grid-column: span 2;
            align-items: flex-start !important;
            text-align: left !important;
            margin-top: 15px;
            border-top: 1px solid var(--card-border);
            padding-top: 20px;
          }
          .pricing-block .cta-primary-btn {
            max-width: 100% !important;
          }
        }

        @media (max-width: 768px) {
          .glass-panel-hover {
            grid-template-columns: 1fr !important;
            padding: 30px 24px !important;
          }
          .pricing-block {
            grid-column: span 1;
          }
          :global(.services-cta-buttons) {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            width: 100% !important;
          }
          :global(.services-cta-buttons a) {
            width: 100% !important;
            max-width: 100% !important;
            text-align: center !important;
          }
        }

        .service-card-btn {
          width: 100%;
          max-width: 180px;
        }

        @media (max-width: 768px) {
          .service-card-btn {
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}