'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CTASection from '@/components/CTASection';

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
    color: 'var(--title-color)'
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
    color: '#D4AF37'
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
  const servicesData = [
    {
      title: "AI Automation",
      desc: "Automate workflows and operations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="url(#ai-grad)" />
          <path d="M9 9h6v6H9z" fill="url(#ai-grad-fill)" stroke="url(#ai-grad)" />
          <path d="M9 12h6M12 9v6M3 9h3M3 15h3M18 9h3M18 15h3M9 3v3M15 3v3M9 18v3M15 18v3" />
          <defs>
            <linearGradient id="ai-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#14c9e1" />
            </linearGradient>
            <linearGradient id="ai-grad-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(14, 165, 233, 0.15)" />
              <stop offset="100%" stopColor="rgba(20, 201, 225, 0.15)" />
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "var(--s1-color)",
      glow: "var(--s1-glow)",
      bg: "var(--s1-bg)",
      gradient: "var(--s1-gradient)",
      index_tag: "01 • AI AUTOMATION",
      serviceParam: "automation"
    },
    {
      title: "Custom SaaS",
      desc: "Subscription software platforms.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 6l8-4 8 4-8 4-8-4z" fill="url(#saas-grad-fill)" stroke="url(#saas-grad)" />
          <path d="M4 12l8 4 8-4M4 17l8 4 8-4" stroke="url(#saas-grad)" />
          <defs>
            <linearGradient id="saas-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="saas-grad-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(79, 70, 229, 0.15)" />
              <stop offset="100%" stopColor="rgba(14, 165, 233, 0.15)" />
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "var(--s2-color)",
      glow: "var(--s2-glow)",
      bg: "var(--s2-bg)",
      gradient: "var(--s2-gradient)",
      index_tag: "02 • CUSTOM SAAS",
      serviceParam: "saas"
    },
    {
      title: "Cloud & DevOps",
      desc: "AWS cloud setups and secure pipelines.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="6" rx="2" fill="url(#cloud-grad-fill)" stroke="url(#cloud-grad)" />
          <rect x="3" y="15" width="18" height="6" rx="2" fill="url(#cloud-grad-fill)" stroke="url(#cloud-grad)" />
          <circle cx="7" cy="6" r="1.5" fill="var(--s3-color)" />
          <circle cx="7" cy="18" r="1.5" fill="var(--s3-color)" />
          <path d="M12 9v6" stroke="url(#cloud-grad)" />
          <defs>
            <linearGradient id="cloud-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9e3cec" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="cloud-grad-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(158, 60, 236, 0.15)" />
              <stop offset="100%" stopColor="rgba(217, 70, 239, 0.15)" />
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "var(--s3-color)",
      glow: "var(--s3-glow)",
      bg: "var(--s3-bg)",
      gradient: "var(--s3-gradient)",
      index_tag: "03 • CLOUD & DEVOPS",
      serviceParam: "cloud"
    },
    {
      title: "Website Development",
      desc: "Modern high-performance web products.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="3" fill="url(#web-grad-fill)" stroke="url(#web-grad)" />
          <path d="M3 8h18M8 3v18" stroke="url(#web-grad)" />
          <circle cx="5.5" cy="5.5" r="1" fill="#ef4444" />
          <circle cx="10.5" cy="5.5" r="1" fill="#eab308" />
          <defs>
            <linearGradient id="web-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
            <linearGradient id="web-grad-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(16, 185, 129, 0.15)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0.15)" />
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "var(--s4-color)",
      glow: "var(--s4-glow)",
      bg: "var(--s4-bg)",
      gradient: "var(--s4-gradient)",
      index_tag: "04 • WEB DEV",
      serviceParam: "website"
    },
    {
      title: "Mobile Applications",
      desc: "Scalable iOS & Android builds.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="4" fill="url(#mob-grad-fill)" stroke="url(#mob-grad)" />
          <path d="M12 18h.01" stroke="url(#mob-grad)" strokeWidth="2" strokeLinecap="round" />
          <rect x="8" y="5" width="3" height="3" rx="1" fill="var(--s5-color)" />
          <rect x="13" y="5" width="3" height="3" rx="1" fill="var(--s5-color)" />
          <rect x="8" y="10" width="3" height="3" rx="1" fill="var(--s5-color)" />
          <rect x="13" y="10" width="3" height="3" rx="1" fill="var(--s5-color)" />
          <defs>
            <linearGradient id="mob-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#14c9e1" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <linearGradient id="mob-grad-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(20, 201, 225, 0.15)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.15)" />
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "var(--s5-color)",
      glow: "var(--s5-glow)",
      bg: "var(--s5-bg)",
      gradient: "var(--s5-gradient)",
      index_tag: "05 • MOBILE APPS",
      serviceParam: "mobile"
    },
    {
      title: "Business Systems",
      desc: "Tailored CRM and custom ERP setups.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="5" rx="7" ry="2" fill="url(#sys-grad-fill)" stroke="url(#sys-grad)" />
          <path d="M5 5v5c0 1.1 3.1 2 7 2s7-.9 7-2V5M5 10v5c0 1.1 3.1 2 7 2s7-.9 7-2v-5" fill="url(#sys-grad-fill)" stroke="url(#sys-grad)" />
          <ellipse cx="12" cy="15" rx="7" ry="2" fill="url(#sys-grad-fill)" stroke="url(#sys-grad)" />
          <defs>
            <linearGradient id="sys-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97315" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="sys-grad-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(249, 115, 21, 0.15)" />
              <stop offset="100%" stopColor="rgba(217, 70, 239, 0.15)" />
            </linearGradient>
          </defs>
        </svg>
      ),
      color: "var(--s6-color)",
      glow: "var(--s6-glow)",
      bg: "var(--s6-bg)",
      gradient: "var(--s6-gradient)",
      index_tag: "06 • BUSINESS SYS",
      serviceParam: "crm"
    }
  ];
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <div className="services-page-wrapper" style={{ position: 'relative', background: 'transparent', color: 'var(--text-color)', overflow: 'hidden' }}>
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
          position: 'relative',
          background: 'transparent',
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
              color: 'var(--title-color)',
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
                background: 'linear-gradient(135deg, #0B1F3A 0%, #183A66 100%)',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 4px 15px rgba(11, 31, 58, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
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
              AI AUTOMATION • CUSTOM SAAS • CRM • ERP • MOBILE APPS • WEB DEVELOPMENT • AI INTEGRATION • AI AUTOMATION • CUSTOM SAAS • CRM • ERP • MOBILE APPS • WEB DEVELOPMENT • AI INTEGRATION
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
                color: 'var(--title-color)',
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

          {/* Static Service Cards Grid */}
          {/* Bento Grid Showcase */}
          <div className="services-bento-grid">
            {servicesData.map((node, index) => {
              const isSpan2 = index === 0 || index === 5;
              return (
                <div
                  key={index}
                  className={`bento-card ${isSpan2 ? 'span-2' : ''}`}
                  onMouseMove={handleMouseMove}
                  style={{
                    '--service-theme-color': node.color,
                    '--service-theme-glow': node.glow,
                    '--service-theme-bg': node.bg,
                    '--service-gradient': node.gradient
                  }}
                >
                  {isSpan2 ? (
                    <div>
                      <div className="bento-content">
                        <div>
                          <span className="card-index">{node.index_tag}</span>
                          <div className="icon-wrap">
                            {node.icon}
                          </div>
                          <h3>{node.title}</h3>
                          <p>{node.desc}</p>
                        </div>
                        <Link
                          href={`/contact?service=${node.serviceParam}`}
                          className="card-action"
                          style={{ textDecoration: 'none' }}
                        >
                          <span>Explore Service</span>
                          <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                      <div className="bento-visual">
                        {index === 0 ? (
                          <div className="sleek-terminal">
                            <div className="terminal-header">
                              <span className="dot red"></span>
                              <span className="dot yellow"></span>
                              <span className="dot green"></span>
                            </div>
                            <div className="terminal-body">
                              <div className="line"><span className="keyword">import</span> {'{ agent }'} <span className="keyword">from</span> <span className="string">"@ash/ai"</span>;</div>
                              <div className="line">agent.init(<span className="string">"workflows"</span>);</div>
                              <div className="line"><span className="comment">// active pipelines...</span></div>
                              <div className="line success">✓ 14 tasks running</div>
                            </div>
                          </div>
                        ) : (
                          <div className="sleek-schema">
                            <div className="schema-row">
                              <span className="label">CRM Portal</span>
                              <span className="connector">
                                <svg width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                                  <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M3 12h18" />
                                </svg>
                              </span>
                              <span className="label">ERP Sync</span>
                            </div>
                            <div className="schema-row">
                              <span className="label">Enterprise APIs</span>
                              <span className="connector">
                                <svg width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                                  <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M3 12h18" />
                                </svg>
                              </span>
                              <span className="label">Database</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <span className="card-index">{node.index_tag}</span>
                        <div className="icon-wrap">
                          {node.icon}
                        </div>
                        <h3>{node.title}</h3>
                        <p>{node.desc}</p>
                      </div>
                      <Link
                        href={`/contact?service=${node.serviceParam}`}
                        className="card-action"
                        style={{ textDecoration: 'none' }}
                      >
                        <span>Explore Service</span>
                        <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Custom CTA Bento Card (7th block) */}
            <div
              className="bento-card cta-card"
              style={{
                '--service-theme-color': 'var(--primary-glow)',
                '--service-theme-glow': 'rgba(158, 60, 236, 0.15)',
                '--service-theme-bg': 'rgba(158, 60, 236, 0.08)',
                '--service-gradient': 'var(--cyber-gradient)'
              }}
            >
              <div>
                <div>
                  <span className="card-index">07 // CONSULTATION</span>
                  <h3 style={{ marginBottom: '8px' }}>Let's Build Together</h3>
                  <p>Have an idea or custom requirement? Let's consult and scale your business automation.</p>
                </div>
                <Link
                  href="/contact"
                  className="card-action"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Book a Consultation</span>
                  <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
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
                color: 'var(--title-color)',
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
              gap: '30px',
            }}
          >
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                style={{
                  padding: '24px 20px',
                  background: 'transparent',
                  borderLeft: `3px solid ${ind.color}`,
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
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
                <p style={{ color: 'var(--body-text)', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  {ind.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

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