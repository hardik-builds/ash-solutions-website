'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import ReviewSlider from '@/components/ReviewSlider';
import Link from 'next/link';

function TiltCard({ children, className = '', style = {}, ...props }) {
  const cardRef = useRef(null);
  
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  const springConfig = { damping: 22, stiffness: 180, mass: 0.6 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);
  
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    const rX = -mouseY * 12;
    const rY = mouseX * 12;
    
    rotateX.set(rX);
    rotateY.set(rY);
  };
  
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card-wrapper ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transition: 'box-shadow 0.3s ease',
        ...style
      }}
      {...props}
    >
      <div style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const card3DVariant = {
  hidden: { 
    opacity: 0, 
    y: 60, 
    rotateX: 30, 
    transformPerspective: 1000, 
    z: -80 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    z: 0, 
    transition: { 
      type: 'spring', 
      damping: 20, 
      stiffness: 90, 
      mass: 0.8 
    } 
  }
};

function TechCube({ scrollYProgress }) {
  const rotateXVal = useMotionValue(15);
  const rotateYVal = useMotionValue(0);
  
  const smoothRotateX = useSpring(rotateXVal, { damping: 25, stiffness: 120 });
  const smoothRotateY = useSpring(rotateYVal, { damping: 25, stiffness: 120 });

  const [isPanning, setIsPanning] = useState(false);

  useAnimationFrame(() => {
    if (!isPanning) {
      rotateYVal.set(rotateYVal.get() + 0.3);
    }
  });

  const faces = [
    { name: 'AI & Automation', desc: 'LLMs, Agents, Python', color: '#D4AF37', transform: 'rotateY(0deg) translateZ(120px)' },
    { name: 'SaaS Platforms', desc: 'Next.js, React, Node', color: '#D4AF37', transform: 'rotateY(90deg) translateZ(120px)' },
    { name: 'Cloud Infra', desc: 'AWS, Docker, Kubernetes', color: '#D4AF37', transform: 'rotateY(180deg) translateZ(120px)' },
    { name: 'Mobile Apps', desc: 'Flutter, Swift, iOS', color: '#D4AF37', transform: 'rotateY(270deg) translateZ(120px)' },
    { name: 'Database Systems', desc: 'MongoDB, PostgreSQL', color: '#D4AF37', transform: 'rotateX(90deg) translateZ(120px)' },
    { name: 'API Integrations', desc: 'GraphQL, REST, Webhooks', color: '#D4AF37', transform: 'rotateX(-90deg) translateZ(120px)' },
  ];

  return (
    <div 
      style={{
        width: '280px',
        height: '280px',
        perspective: '1000px',
        margin: '60px auto',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3,
        cursor: isPanning ? 'grabbing' : 'grab',
        touchAction: 'none'
      }}
    >
      <motion.div
        onPanStart={() => setIsPanning(true)}
        onPan={(event, info) => {
          rotateYVal.set(rotateYVal.get() + info.delta.x * 0.6);
          rotateXVal.set(rotateXVal.get() - info.delta.y * 0.6);
        }}
        onPanEnd={() => setIsPanning(false)}
        style={{
          width: '240px',
          height: '240px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
        }}
      >
        {faces.map((face, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: '240px',
              height: '240px',
              background: 'var(--card-bg)',
              border: '2px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              backfaceVisibility: 'hidden',
              boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15), inset 0 1px 0 var(--card-sheen)',
              transform: face.transform,
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: `${face.color}15`,
              color: face.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '20px',
              marginBottom: '15px',
            }}>
              {index + 1}
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--title-color)', marginBottom: '8px' }}>
              {face.name}
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--body-text)', margin: 0, lineHeight: '1.4' }}>
              {face.desc}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
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

  const [pageVisible, setPageVisible] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rawPillsZ = useTransform(scrollYProgress, [0, 0.22], [0, 600]);
  const rawPillsOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const rawHeroTextY = useTransform(scrollYProgress, [0, 0.22], [0, -120]);
  const rawHeroTextOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const rawEditorScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.82]);
  const rawEditorOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  const rawServicesY = useTransform(scrollYProgress, [0.08, 0.28], [120, 0]);
  const rawServicesOpacity = useTransform(scrollYProgress, [0.08, 0.25], [0, 1]);

  const rawTechY = useTransform(scrollYProgress, [0.15, 0.35], [120, 0]);
  const rawTechOpacity = useTransform(scrollYProgress, [0.15, 0.32], [0, 1]);

  const rawWhyY = useTransform(scrollYProgress, [0.22, 0.45], [120, 0]);
  const rawWhyOpacity = useTransform(scrollYProgress, [0.22, 0.42], [0, 1]);

  const rawCasesY = useTransform(scrollYProgress, [0.42, 0.62], [120, 0]);
  const rawCasesOpacity = useTransform(scrollYProgress, [0.42, 0.58], [0, 1]);

  const rawReviewsY = useTransform(scrollYProgress, [0.62, 0.82], [120, 0]);
  const rawReviewsOpacity = useTransform(scrollYProgress, [0.62, 0.78], [0, 1]);

  // Infinite Perspective Grid Parallax
  const rawGridY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const rawGridRotateX = useTransform(scrollYProgress, [0, 1], [60, 72]);

  // Floating Parallax Background Shapes
  const rawShape1Y = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const rawShape1Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rawShape2Y = useTransform(scrollYProgress, [0, 1], [0, -520]);
  const rawShape2Rotate = useTransform(scrollYProgress, [0, 1], [0, -270]);
  const rawShape3Y = useTransform(scrollYProgress, [0, 1], [0, -420]);
  const rawShape3Rotate = useTransform(scrollYProgress, [0, 1], [45, 405]);

  // Spring configurations for ultra premium feel
  const scrollSpringConfig = { damping: 30, stiffness: 140, mass: 0.5 };
  
  const pillsZ = useSpring(rawPillsZ, scrollSpringConfig);
  const pillsOpacity = useSpring(rawPillsOpacity, scrollSpringConfig);
  const heroTextY = useSpring(rawHeroTextY, scrollSpringConfig);
  const heroTextOpacity = useSpring(rawHeroTextOpacity, scrollSpringConfig);
  const editorScale = useSpring(rawEditorScale, scrollSpringConfig);
  const editorOpacity = useSpring(rawEditorOpacity, scrollSpringConfig);

  const servicesY = useSpring(rawServicesY, scrollSpringConfig);
  const servicesOpacity = useSpring(rawServicesOpacity, scrollSpringConfig);

  const techY = useSpring(rawTechY, scrollSpringConfig);
  const techOpacity = useSpring(rawTechOpacity, scrollSpringConfig);

  const whyY = useSpring(rawWhyY, scrollSpringConfig);
  const whyOpacity = useSpring(rawWhyOpacity, scrollSpringConfig);

  const casesY = useSpring(rawCasesY, scrollSpringConfig);
  const casesOpacity = useSpring(rawCasesOpacity, scrollSpringConfig);

  const reviewsY = useSpring(rawReviewsY, scrollSpringConfig);
  const reviewsOpacity = useSpring(rawReviewsOpacity, scrollSpringConfig);

  const gridY = useSpring(rawGridY, scrollSpringConfig);
  const gridRotateX = useSpring(rawGridRotateX, scrollSpringConfig);

  const shape1Y = useSpring(rawShape1Y, scrollSpringConfig);
  const shape1Rotate = useSpring(rawShape1Rotate, scrollSpringConfig);
  const shape2Y = useSpring(rawShape2Y, scrollSpringConfig);
  const shape2Rotate = useSpring(rawShape2Rotate, scrollSpringConfig);
  const shape3Y = useSpring(rawShape3Y, scrollSpringConfig);
  const shape3Rotate = useSpring(rawShape3Rotate, scrollSpringConfig);

  const editorZ = useTransform(scrollYProgress, [0, 0.25], [0, -220]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='page-enter perspective-container'
      ref={containerRef}
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        minHeight: '100vh',
        transition: 'opacity .8s ease, transform .8s ease',
        opacity: pageVisible ? 1 : 0,
        transform: pageVisible ? 'translateY(0)' : 'translateY(30px)',
        position: 'relative',
        overflowX: 'hidden',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Cinematic Cyber Background Grid */}
      <motion.div 
        className="cyber-grid-3d" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          transformOrigin: 'top center',
          rotateX: gridRotateX,
          translateY: gridY,
          transformStyle: 'preserve-3d',
        }}
      />

      {/* Floating 3D Background Parallax Objects */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 1 }}>
         <motion.div 
           style={{
             position: 'absolute',
             top: '20%',
             left: '4%',
             width: '60px',
             height: '60px',
             borderRadius: '16px',
             border: '1px solid var(--card-border)',
             background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))',
             y: shape1Y,
             rotate: shape1Rotate,
           }}
         />
         <motion.div 
           style={{
             position: 'absolute',
             top: '65%',
             right: '6%',
             width: '80px',
             height: '80px',
             borderRadius: '50%',
             border: '1px solid var(--card-border)',
             background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(168, 85, 247, 0.08))',
             y: shape2Y,
             rotate: shape2Rotate,
           }}
         />
         <motion.div 
           style={{
             position: 'absolute',
             top: '45%',
             right: '12%',
             width: '45px',
             height: '45px',
             borderRadius: '8px',
             border: '1px solid var(--card-border)',
             background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(99, 102, 241, 0.1))',
             y: shape3Y,
             rotate: shape3Rotate,
           }}
         />
      </div>
      
      {/* Floating Sparkles/Particles */}
      <div className="glow-particle" style={{ left: '10%', animationDelay: '0s', animationDuration: '24s' }} />
      <div className="glow-particle" style={{ left: '30%', animationDelay: '4s', animationDuration: '18s' }} />
      <div className="glow-particle" style={{ left: '55%', animationDelay: '2s', animationDuration: '28s' }} />
      <div className="glow-particle" style={{ left: '75%', animationDelay: '6s', animationDuration: '20s' }} />
      <div className="glow-particle" style={{ left: '90%', animationDelay: '1s', animationDuration: '22s' }} />
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
          <motion.div
            style={{
              y: heroTextY,
              opacity: heroTextOpacity,
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
               AI • SaaS • Automation
            </div>
            <h1
              style={{
                fontSize: 'clamp(44px, 6.5vw, 78px)',
                fontWeight: '950',
                lineHeight: '1.05',
                color: 'var(--title-color)',
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
                color: 'var(--body-text)',
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
                marginTop: '36px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://wa.me/918652768171"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  height: '48px',
                  padding: '0 28px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  backgroundColor: '#0B1F3A',
                  border: '1px solid #0B1F3A',
                  fontSize: '15px',
                  fontWeight: '600',
                  letterSpacing: '-0.2px',
                  boxShadow: '0 2px 8px rgba(11, 31, 58, 0.12)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#183A66';
                  e.currentTarget.style.borderColor = '#183A66';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 31, 58, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0B1F3A';
                  e.currentTarget.style.borderColor = '#0B1F3A';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 31, 58, 0.12)';
                }}
              >
                Start A Project
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <Link
                href="/services"
                className="btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '48px',
                  padding: '0 28px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--title-color)',
                  fontSize: '15px',
                  fontWeight: '600',
                  letterSpacing: '-0.2px',
                  boxShadow: '0 1px 3px rgba(11, 31, 58, 0.04)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-color)';
                  e.currentTarget.style.borderColor = 'var(--title-color)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 31, 58, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--card-bg)';
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(11, 31, 58, 0.04)';
                }}
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
          {/* RIGHT */}
          <div
            style={{
              position: 'relative',
              padding: '20px',
              transformStyle: 'preserve-3d',
            }}
            className="hero-right-container"
          >

            {/* Code Editor */}
            <motion.div
              style={{
                z: editorZ,
                scale: editorScale,
                opacity: editorOpacity,
                transformStyle: 'preserve-3d',
              }}
            >
              <TiltCard>
                <div
                  className="glass-panel"
                  style={{
                    background: 'var(--editor-bg)',
                    border: '1px solid var(--editor-border)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(15, 23, 42, 0.15), inset 0 1px 0 var(--card-sheen)',
                    position: 'relative',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    transformStyle: 'preserve-3d'
                  }}
                >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  borderBottom: '1px solid var(--editor-border)',
                  background: 'var(--editor-sub-bg)',
                }}
              >
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22C55E' }} />
                </div>
                <div style={{ fontSize: '12px', color: 'var(--editor-text)', fontFamily: 'monospace', fontWeight: '600' }}>
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
                  background: 'var(--editor-sub-bg)',
                  borderRight: '1px solid var(--editor-border)',
                  padding: '16px 12px',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: 'var(--editor-text)',
                  userSelect: 'none'
                }}>
                  <div style={{ textTransform: 'uppercase', fontSize: '10px', fontWeight: '800', letterSpacing: '1px', marginBottom: '12px', color: 'var(--editor-text)' }}>
                    Explorer
                  </div>
                  <div style={{ color: 'var(--editor-folder-text)', fontWeight: '600', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    ▼ MY-APP
                  </div>
                  <div style={{ paddingLeft: '12px' }}>
                    <div style={{ color: 'var(--editor-folder-text)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      ▼ app
                    </div>
                    <div style={{ paddingLeft: '12px' }}>
                      <div style={{ background: 'var(--editor-active-bg)', color: 'var(--code-variable)', padding: '4px 8px', borderRadius: '4px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                        📄 page.js
                      </div>
                      <div style={{ padding: '4px 8px', color: 'var(--editor-text)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                        📄 layout.js
                      </div>
                    </div>
                    <div style={{ color: 'var(--editor-text)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      ▶ components
                    </div>
                    <div style={{ color: 'var(--editor-text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      ▶ public
                    </div>
                  </div>
                </div>

                {/* Main Workspace */}
                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  {/* Editor Tabs */}
                  <div style={{
                    display: 'flex',
                    background: 'var(--editor-sub-bg)',
                    borderBottom: '1px solid var(--editor-border)',
                    fontSize: '11px',
                    fontFamily: 'monospace'
                  }}>
                    <div style={{
                      background: 'var(--editor-bg)',
                      borderRight: '1px solid var(--editor-border)',
                      borderTop: '2px solid #38bdf8',
                      padding: '8px 16px',
                      color: 'var(--editor-active-text)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontWeight: '600'
                    }}>
                      📄 page.js <span style={{ opacity: 0.5 }}>×</span>
                    </div>
                    <div style={{
                      padding: '8px 16px',
                      color: 'var(--editor-text)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      borderRight: '1px solid var(--editor-border)'
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
                    <div style={{ color: 'var(--body-text)', textAlign: 'right', paddingRight: '16px', borderRight: '1px solid var(--editor-border)', userSelect: 'none' }}>
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
                    <pre style={{ margin: 0, paddingLeft: '16px', color: 'var(--editor-code-default)' }}>
                      <code>
                        <span style={{ color: 'var(--code-keyword)' }}>const</span>{' '}
                        <span style={{ color: 'var(--code-variable)' }}>system</span> = {'{\n'}
                        {'  '}
                        <span style={{ color: 'var(--code-key)' }}>name</span>:{' '}
                        <span style={{ color: 'var(--code-string)' }}>&quot;ASH Solutions&quot;</span>,{'\n'}
                        {'  '}
                        <span style={{ color: 'var(--code-key)' }}>aiAutomation</span>:{' '}
                        <span style={{ color: 'var(--code-bool)' }}>true</span>,{'\n'}
                        {'  '}
                        <span style={{ color: 'var(--code-key)' }}>customSaaS</span>:{' '}
                        <span style={{ color: 'var(--code-bool)' }}>true</span>,{'\n'}
                        {'  '}
                        <span style={{ color: 'var(--code-key)' }}>scalability</span>:{' '}
                        <span style={{ color: 'var(--code-string)' }}>&quot;maximum&quot;</span>,{'\n'}
                        {'  '}
                        <span style={{ color: 'var(--code-key)' }}>readyToScale</span>:{' '}
                        <span style={{ color: 'var(--code-bool)' }}>true</span>{'\n'}
                        {'};'}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </div>

        {/* Flowing Service Ribbon */}
        <div
          style={{
            marginTop: '80px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 3
          }}
        >
          <div className="service-ribbon" style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              borderTop: '1px solid var(--card-border)',
              borderBottom: '1px solid var(--card-border)',
              padding: '18px 0',
              background: 'var(--card-bg)',
            }}>
            AI AUTOMATION • CUSTOM SAAS • WEB DEVELOPMENT • MOBILE APPS • CRM • ERP • CLOUD INTEGRATION • AI AUTOMATION • CUSTOM SAAS • WEB DEVELOPMENT • MOBILE APPS • CRM • ERP • CLOUD INTEGRATION
          </div>
        </div>
      </section>
      {/* Services Section */}
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          padding: '120px 20px',
          background: 'transparent',
          position: 'relative',
          zIndex: 2,
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
              textAlign: 'left',
              marginBottom: '50px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              maxWidth: '850px'
            }}
          >
            <div
              style={{
                color: 'var(--title-color)',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontSize: '13px'
              }}
            >
              What We Build
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: '850',
                color: 'var(--title-color)',
                margin: 0,
                letterSpacing: '-1.5px',
                lineHeight: '1.15'
              }}
            >
              Engineered for Real Business Growth
            </h2>

            <p
              style={{
                color: 'var(--body-text)',
                lineHeight: '1.7',
                fontSize: '17px',
                margin: 0,
                maxWidth: '680px'
              }}
            >
              We design and engineer enterprise-grade automation systems, bespoke software platforms, and resilient web & mobile applications.
            </p>
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
                background: 'linear-gradient(135deg, #0B1F3A 0%, #183A66 100%)',
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
      </motion.section>

      {/* Modernization Tech Stack Section */}
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
        id="tech"
        style={{
          position: 'relative',
          padding: '120px 20px',
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {/* Section Heading */}
          <div
            style={{
              textAlign: 'left',
              marginBottom: '50px',
            }}
          >
            <div
              style={{
                color: '#D4AF37',
                fontWeight: '700',
                fontSize: '12px',
                marginBottom: '10px',
                letterSpacing: '2px',
                fontFamily: 'monospace',
                textTransform: 'uppercase'
              }}
            >
              // PRODUCTION STACK & CAPABILITIES
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                fontWeight: '900',
                color: 'var(--title-color)',
                marginBottom: '14px',
                letterSpacing: '-1.5px',
                lineHeight: '1.15'
              }}
            >
              Architected for Performance, Scale & Zero Downtime
            </h2>

            <p
              style={{
                maxWidth: '740px',
                margin: 0,
                color: 'var(--body-text)',
                lineHeight: '1.7',
                fontSize: '16.5px',
              }}
            >
              We engineer with vetted enterprise standards—combining statically compiled client interfaces, resilient distributed backends, auto-scaling cloud topologies, and hardware-accelerated mobile apps.
            </p>
          </div>

          {/* Interactive 3D Spinning Tech Cube */}
          <TechCube scrollYProgress={scrollYProgress} />

          {/* 4-Pillar Enterprise Architecture Matrix */}
          <div className="tech-matrix-grid">
            {/* Pillar 1: Frontend & Interface Systems */}
            <div className="tech-matrix-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', color: '#D4AF37' }}>
                    [ SYSTEM 01 // FRONTEND ]
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--body-text)', fontWeight: '600' }}>Client Tier</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--title-color)', marginBottom: '8px' }}>
                  Interface & Web Systems
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--body-text)', lineHeight: '1.6', marginBottom: '20px' }}>
                  Sub-second Core Web Vitals, server components, and edge-cached static distribution for global audience reach.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#00d8ff' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="2" />
                        <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>React 18 & Next.js 14</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        Server Components (RSC), Incremental Static Regeneration (ISR), and automated SEO metadata.
                      </div>
                    </div>
                  </div>

                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#dd0031' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 6l2 12 8 4 8-4 2-12L12 2zm5 14H7l-1.5-4h13L17 16zm-5-9.5L16.2 12H7.8L12 6.5z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>Angular Enterprise</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        Component trees, RxJS reactive state management, and large-scale administrative dashboards.
                      </div>
                    </div>
                  </div>

                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#3178c6' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 8h10v2H7V8zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>TypeScript & Modern CSS</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        Type-safe design contracts, strict runtime boundary validation, and zero-runtime CSS layouts.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--card-border)' }}>
                <span className="tech-spec-tag">NEXT.JS 14</span>
                <span className="tech-spec-tag">ANGULAR</span>
                <span className="tech-spec-tag">TYPESCRIPT</span>
                <span className="tech-spec-tag">RSC & ISR</span>
                <span className="tech-spec-tag">EDGE CDN</span>
              </div>
            </div>

            {/* Pillar 2: Core Backend & Distributed APIs */}
            <div className="tech-matrix-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', color: '#D4AF37' }}>
                    [ SYSTEM 02 // SERVICES & APIS ]
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--body-text)', fontWeight: '600' }}>Service Layer</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--title-color)', marginBottom: '8px' }}>
                  Distributed Backend & APIs
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--body-text)', lineHeight: '1.6', marginBottom: '20px' }}>
                  Event-driven microservices, high-throughput asynchronous execution, and unified API contracts.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#339933' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm6.8 14.12l-6.8 4v-8.12l6.8-4v8.12zm-8.3 4v-8.12l-6.8-4v8.12l6.8 4z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>Node.js & NestJS</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        Non-blocking asynchronous I/O, WebSockets, microservices, and GraphQL federation.
                      </div>
                    </div>
                  </div>

                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#3776ab' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.002 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm2.844 14.545c0 .48-.39.864-.864.864H9.42a.864.864 0 0 1-.864-.864v-1.728h4.29v1.728zm-3.41-3.155h-2.01v-1.73H10.1c.477 0 .864.388.864.865v.865zm4.846-1.728H14.28V9.927c0-.477-.388-.864-.864-.864h-.865v2.593h2.89v1.727zm-3.411-3.456h-2.01V6.478H10.1c.477 0 .864.388.864.864v.864z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>Python & AI Pipelines</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        FastAPI services, autonomous agent pipelines, web data extraction, and machine learning models.
                      </div>
                    </div>
                  </div>

                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#ff2d20' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-6h2v6zm0-8h-2V7h2v1z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>Laravel & PHP 8.2</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        Robust MVC frameworks, relational ORM schemas, and transactional business portals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--card-border)' }}>
                <span className="tech-spec-tag">NODE.JS</span>
                <span className="tech-spec-tag">PYTHON 3.12</span>
                <span className="tech-spec-tag">FASTAPI</span>
                <span className="tech-spec-tag">GRAPHQL</span>
                <span className="tech-spec-tag">WEBSOCKETS</span>
              </div>
            </div>

            {/* Pillar 3: Cloud Infrastructure & DevOps */}
            <div className="tech-matrix-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', color: '#D4AF37' }}>
                    [ SYSTEM 03 // INFRASTRUCTURE ]
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--body-text)', fontWeight: '600' }}>Cloud Tier</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--title-color)', marginBottom: '8px' }}>
                  Cloud, Edge & Container Systems
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--body-text)', lineHeight: '1.6', marginBottom: '20px' }}>
                  Zero-downtime rolling deploys, multi-zone database replication, and automated CI/CD pipelines.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#ff9900' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 12.38c-.37.38-.85.57-1.43.57-.61 0-1.12-.22-1.52-.66-.4-.44-.6-1.07-.6-1.89v-2.07c0-.82.2-1.45.6-1.89.4-.44.91-.66 1.52-.66.58 0 1.06.19 1.43.57.37.38.56.93.56 1.66h-1.18c0-.42-.09-.73-.26-.93-.17-.2-.42-.3-.75-.3-.33 0-.58.11-.75.34-.17.23-.26.6-.26 1.12v2.33c0 .52.09.89.26 1.12.17.23.42.34.75.34.33 0 .58-.1.75-.3.17-.2.26-.51.26-.93h1.18c0 .73-.19 1.28-.56 1.66z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>Amazon Web Services (AWS)</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        EC2 elastic compute, S3 asset buckets, RDS database clusters, and serverless Lambda functions.
                      </div>
                    </div>
                  </div>

                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#0078d4' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="2" width="9" height="9" fill="#f25022" />
                        <rect x="13" y="2" width="9" height="9" fill="#7fba00" />
                        <rect x="2" y="13" width="9" height="9" fill="#00a4ef" />
                        <rect x="13" y="13" width="9" height="9" fill="#ffb900" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>Microsoft Azure</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        Active Directory identity federation, enterprise security governance, and Cosmos DB synchronization.
                      </div>
                    </div>
                  </div>

                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#2496ed' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.962 10.475h-2.408a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243v-2.408a.242.242 0 0 0-.243-.243zm-2.924 0H8.63a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243v-2.408a.242.242 0 0 0-.243-.243zm-2.924 0H5.706a.243.243 0 0 0-.243.243v2.408c0 .135.11.243.243.243h2.408a.243.243 0 0 0 .243-.243v-2.408a.242.242 0 0 0-.243-.243z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>Docker & Containers</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        Immutable environment parity, microservice sandboxing, and automated Kubernetes orchestration.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--card-border)' }}>
                <span className="tech-spec-tag">AWS EC2 / S3</span>
                <span className="tech-spec-tag">AZURE</span>
                <span className="tech-spec-tag">DOCKER</span>
                <span className="tech-spec-tag">KUBERNETES</span>
                <span className="tech-spec-tag">AUTO-SCALING</span>
              </div>
            </div>

            {/* Pillar 4: Mobile & Multi-Platform Systems */}
            <div className="tech-matrix-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', color: '#D4AF37' }}>
                    [ SYSTEM 04 // MULTI-PLATFORM ]
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--body-text)', fontWeight: '600' }}>Mobile Tier</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--title-color)', marginBottom: '8px' }}>
                  Mobile & Native Engineering
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--body-text)', lineHeight: '1.6', marginBottom: '20px' }}>
                  Hardware-accelerated mobile apps delivering 60 FPS performance, offline persistence, and biometric security.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#02569B' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.3 2.3L5 11.6l3.7 3.7 9.3-9.3zM18.7 14.3l-3.7-3.7-5.7 5.7 3.7 3.7zM15 15l-3.7 3.7-1.9-1.9 3.7-3.7z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>Flutter Mobile</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        Google SDK compiling directly to ARM machine code for unified, high-fidelity iOS & Android applications.
                      </div>
                    </div>
                  </div>

                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#f05138' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.002 2.002c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10c0-5.524-4.478-10-10-10zm2.748 13.914c-.66.866-1.579 1.346-2.583 1.346-1.892 0-3.328-1.579-3.328-3.52 0-1.942 1.436-3.522 3.328-3.522.95 0 1.83.435 2.502 1.22l-1.076 1.077c-.382-.446-.867-.678-1.393-.678-.89 0-1.53.766-1.53 1.903 0 1.139.64 1.903 1.53 1.903.585 0 1.083-.284 1.488-.799l1.092 1.07z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>Native iOS (Swift)</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        SwiftUI architectures utilizing native Apple Neural Engine, CoreData, and Apple Watch integrations.
                      </div>
                    </div>
                  </div>

                  <div className="tech-item-row">
                    <div className="tech-item-icon" style={{ color: '#10b981' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: '700', color: 'var(--title-color)' }}>Offline-First & Security</div>
                      <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: '1.5', marginTop: '2px' }}>
                        Encrypted local SQLite storage, background sync queues, and biometric hardware authentication.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--card-border)' }}>
                <span className="tech-spec-tag">FLUTTER</span>
                <span className="tech-spec-tag">SWIFTUI</span>
                <span className="tech-spec-tag">IOS & ANDROID</span>
                <span className="tech-spec-tag">OFFLINE-FIRST</span>
                <span className="tech-spec-tag">60 FPS</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          padding: '120px 24px',
          background: 'transparent',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <div className="why-container">
            {/* Left Content */}
            <div>
              <div
                style={{
                  color: 'var(--title-color)',
                  fontWeight: '700',
                  marginBottom: '12px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  fontSize: '13px'
                }}
              >
                Why ASH Solutions
              </div>

              <h2
                style={{
                  fontSize: 'clamp(36px, 5vw, 54px)',
                  fontWeight: '900',
                  color: 'var(--title-color)',
                  lineHeight: '1.05',
                  marginBottom: '22px',
                  letterSpacing: '-1.5px'
                }}
              >
                Technology Built<br />Around Business Growth
              </h2>

              <p
                style={{
                  color: 'var(--body-text)',
                  lineHeight: '1.8',
                  fontSize: '17px',
                  marginBottom: '20px',
                }}
              >
                Most development agencies focus only on writing code. We focus on helping businesses increase efficiency, automate manual operations, and create custom systems that drive revenue.
              </p>

              <p
                style={{
                  color: 'var(--body-text)',
                  lineHeight: '1.8',
                  fontSize: '17px',
                  marginBottom: '35px',
                }}
              >
                Every solution we deliver is designed with long-term business strategy, automation opportunities, and future scalability in mind.
              </p>

              {/* Value Checklist Flow - Cardless */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px', position: 'relative', paddingLeft: '20px', borderLeft: '2px solid rgba(99, 102, 241, 0.2)' }}>
                {[
                  {
                    title: 'AI-Powered Automation',
                    desc: 'We integrate intelligent agents and LLMs to automate repetitive tasks and save manual overhead.',
                    color: 'var(--title-color)'
                  },
                  {
                    title: 'Business-First Integration',
                    desc: 'Every SaaS application or platform we build aligns directly with your key performance metrics.',
                    color: '#0284c7'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'start',
                      gap: '16px',
                      position: 'relative',
                    }}
                  >
                    {/* Glowing timeline node */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-26px',
                        top: '5px',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#D4AF37',
                        border: `2px solid ${item.color}`,
                        boxShadow: `0 0 8px ${item.color}`,
                      }}
                    />

                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '850', color: 'var(--title-color)', marginBottom: '6px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '14.5px', color: 'var(--body-text)', margin: 0, lineHeight: '1.6' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/918652768171"
                target="_blank"
                rel="noopener noreferrer"
                className="why-btn"
              >
                Talk To An Expert &rarr;
              </a>
            </div>

            {/* Right Content - Operations Hub Mock Dashboard */}
            <TiltCard style={{ width: '100%' }}>
              <div className="operations-hub" style={{ transformStyle: 'preserve-3d' }}>
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  borderBottom: '1px solid var(--editor-border)',
                  paddingBottom: '14px'
                }}
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '700', color: 'var(--code-string)', letterSpacing: '0.5px' }}>
                  <span className="pulse-dot" /> LIVE OPERATIONS HUB
                </div>
              </div>

              {/* Status Section */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '20px', marginBottom: '20px', transformStyle: 'preserve-3d' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', transformStyle: 'preserve-3d' }}>
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '16px',
                      padding: '16px',
                      textAlign: 'center',
                      transform: 'translateZ(30px)',
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                    }}
                  >
                    <div style={{ fontSize: '26px', fontWeight: '900', color: 'var(--code-variable)', transform: 'translateZ(10px)' }}>Active</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '800', marginTop: '4px', transform: 'translateZ(5px)' }}>Cloud Monitoring</div>
                  </div>
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--card-border)',
                      borderRadius: '16px',
                      padding: '16px',
                      textAlign: 'center',
                      transform: 'translateZ(40px)',
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                    }}
                  >
                    <div style={{ fontSize: '26px', fontWeight: '900', color: '#a855f7', transform: 'translateZ(10px)' }}>Encrypted</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '800', marginTop: '4px', transform: 'translateZ(5px)' }}>Security Architecture</div>
                  </div>
                </div>

                {/* Operations Feed Log */}
                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '180px',
                    transform: 'translateZ(25px)',
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                  }}
                >
                  <div style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', color: '#a1a1aa', letterSpacing: '0.5px', marginBottom: '8px', transform: 'translateZ(10px)' }}>
                    Activity Logs
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', transform: 'translateZ(5px)' }}>
                    <div className="live-log-item"><span>[11:02:14]</span> AI Agent cluster initiated</div>
                    <div className="live-log-item"><span>[11:02:15]</span> Database replication: OK</div>
                    <div className="live-log-item"><span>[11:02:19]</span> SSL Handshake verification</div>
                    <div className="live-log-item"><span>[11:02:22]</span> Operations optimize: Active</div>
                  </div>
                </div>
              </div>

              {/* Progress Line */}
              <div style={{ marginTop: '10px', transform: 'translateZ(35px)', transformStyle: 'preserve-3d' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700', color: '#a1a1aa', marginBottom: '6px', transform: 'translateZ(5px)' }}>
                  <span>AI SYSTEM EFFICIENCY</span>
                  <span style={{ color: 'var(--code-variable)' }}>92% OPTIMIZED</span>
                </div>
                <div className="performance-line" style={{ transform: 'translateZ(5px)' }}>
                  <div className="performance-fill" />
                </div>
              </div>
            </div>
          </TiltCard>
          </div>
        </div>
      </motion.section>

      {/* Our Process Section */}
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          padding: '120px 20px',
          background: 'transparent',
          position: 'relative',
          zIndex: 2,
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
              textAlign: 'left',
              marginBottom: '60px',
              maxWidth: '850px'
            }}
          >
            <div
              style={{
                color: 'var(--title-color)',
                fontWeight: '700',
                marginBottom: '12px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontSize: '13px'
              }}
            >
              Our Process
            </div>

            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 52px)',
                fontWeight: '850',
                color: 'var(--title-color)',
                marginBottom: '14px',
                letterSpacing: '-1.5px',
                lineHeight: '1.15'
              }}
            >
              From Discovery to Seamless Deployment
            </h2>

            <p
              style={{
                color: 'var(--body-text)',
                lineHeight: '1.7',
                fontSize: '17px',
                margin: 0,
                maxWidth: '680px'
              }}
            >
              A focused, systematic engineering lifecycle designed to eliminate technical debt and deliver measurable results.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <motion.div
            className="timeline-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ position: 'relative', margin: '60px auto 0', maxWidth: '1000px', padding: '20px 0', transformStyle: 'preserve-3d' }}
          >
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
                <motion.div
                  key={index}
                  variants={card3DVariant}
                  className={`timeline-item ${isEven ? 'left' : 'right'}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '60px',
                    width: '100%',
                    position: 'relative',
                    zIndex: 2,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Content Card Side */}
                  <div className="timeline-content-wrapper" style={{
                    width: '44%',
                    order: isEven ? 1 : 3,
                    textAlign: isEven ? 'right' : 'left'
                  }}>
                    <TiltCard style={{ width: '100%' }}>
                      <div className="glass-panel timeline-card" style={{
                        padding: '30px',
                        borderRadius: '24px',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        boxShadow: 'var(--card-shadow)',
                        display: 'block',
                        textAlign: 'left',
                        width: '100%',
                      }}
                      >
                        <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--title-color)', marginBottom: '10px' }}>
                          {item.title}
                        </h3>
                        <p style={{ color: 'var(--body-text)', lineHeight: '1.7', fontSize: '15px' }}>
                          {item.desc}
                        </p>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Central Circle Badge */}
                  <div className="timeline-badge" style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-color)',
                    border: '2px solid #4f46e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--title-color)',
                    fontWeight: '800',
                    fontSize: '18px',
                    boxShadow: '0 0 15px rgba(99, 102, 241, 0.15)',
                    order: 2,
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10
                  }}>
                    {item.step}
                  </div>

                  {/* Spacer for other side */}
                  <div className="timeline-spacer" style={{ width: '44%', order: isEven ? 3 : 1 }} />
                </motion.div>
              );
            })}
          </motion.div>

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
                background: 'linear-gradient(135deg, #0B1F3A 0%, #183A66 100%)',
                boxShadow: '0 4px 15px rgba(11, 31, 58, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
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
      </motion.section>

      {/* Testimonials Slider */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <ReviewSlider />
      </motion.div>

      {/* CTA Section - Styled with Theme Variables */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '120px 20px',
          background: 'var(--bg-color)',
          borderTop: '1px solid var(--card-border)',
          color: 'var(--text-color)',
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
              color: 'var(--title-color)',
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
              color: 'var(--title-color)'
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
              color: 'var(--body-text)',
            }}
          >
            Whether you need AI automation, a custom SaaS platform, a business management system, a website or a mobile app, we&apos;re ready to help you scale.
          </p>

          <div
            className="cta-button-group"
            style={{
              marginTop: '36px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://wa.me/918652768171"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                height: '48px',
                padding: '0 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                color: '#FFFFFF',
                backgroundColor: '#0B1F3A',
                border: '1px solid #0B1F3A',
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '-0.2px',
                boxShadow: '0 2px 8px rgba(11, 31, 58, 0.12)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#183A66';
                e.currentTarget.style.borderColor = '#183A66';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 31, 58, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0B1F3A';
                e.currentTarget.style.borderColor = '#0B1F3A';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(11, 31, 58, 0.12)';
              }}
            >
              Talk to an Expert
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '48px',
                padding: '0 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--title-color)',
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '-0.2px',
                boxShadow: '0 1px 3px rgba(11, 31, 58, 0.04)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-color)';
                e.currentTarget.style.borderColor = 'var(--title-color)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(11, 31, 58, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--card-bg)';
                e.currentTarget.style.borderColor = 'var(--card-border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(11, 31, 58, 0.04)';
              }}
            >
              Get Custom Quote
            </Link>
          </div>

          <div
            style={{
              marginTop: '40px',
              color: 'var(--body-text)',
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '0.5px'
            }}
          >
            AI Automation • SaaS Development • Websites • Apps • Cloud Integration
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
            gap: 40px !important;
            text-align: left !important;
          }
          .cta-buttons {
            justify-content: flex-start !important;
          }
          .floating-pill,
          .tech-orbit-container {
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
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: flex-start !important;
            gap: 10px !important;
            width: 100% !important;
          }

          .cta-buttons a {
            flex: 1 1 140px !important;
            min-width: 130px !important;
            max-width: 200px !important;
            padding: 0 16px !important;
            font-size: 14px !important;
            height: 46px !important;
            text-align: center !important;
          }

          .cta-button-group {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 10px !important;
            width: 100% !important;
          }

          .cta-button-group a {
            flex: 1 1 140px !important;
            min-width: 130px !important;
            max-width: 200px !important;
            padding: 0 16px !important;
            font-size: 14px !important;
            height: 46px !important;
            text-align: center !important;
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
        
        @media (max-width: 640px) {
          .cta-buttons {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: flex-start !important;
            gap: 10px !important;
            width: 100% !important;
          }
          .cta-buttons a {
            flex: 1 1 140px !important;
            max-width: 220px !important;
            text-align: center !important;
          }
        }
        @media (max-width: 640px) {
          .why-btn {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            width: auto !important;
            min-width: 160px !important;
            height: 46px !important;
            padding: 0 24px !important;
            margin: 0 !important;
          }
        }

        .tech-matrix-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 30px;
        }

        .tech-matrix-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 30px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 8px -2px rgba(11, 31, 58, 0.04);
        }

        .tech-matrix-card:hover {
          border-color: rgba(11, 31, 58, 0.28);
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -8px rgba(11, 31, 58, 0.08);
        }

        [data-theme="dark"] .tech-matrix-card:hover {
          border-color: rgba(212, 175, 55, 0.35);
          box-shadow: 0 12px 28px -8px rgba(0, 0, 0, 0.5);
        }

        .tech-item-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 0;
          border-top: 1px solid var(--card-border);
        }

        .tech-item-row:first-of-type {
          border-top: none;
          padding-top: 6px;
        }

        .tech-item-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: var(--bg-color);
          border: 1px solid var(--card-border);
        }

        .tech-spec-tag {
          font-family: monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 4px 10px;
          border-radius: 6px;
          background: var(--bg-color);
          border: 1px solid var(--card-border);
          color: var(--body-text);
        }
        
        @media (max-width: 768px) {
          .tech-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .tech-card {
            padding: 28px 24px;
          }
        }

        /* Flowing Ribbon animation */
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

        /* Why ASH Solutions styles */
        .why-btn {
          display: inline-block;
          padding: 16px 32px;
          border-radius: 14px;
          background: linear-gradient(135deg, #0B1F3A 0%, #183A66 100%);
          color: #ffffff !important;
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .why-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 15px 30px -5px rgba(79, 70, 229, 0.35);
        }

        .why-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
          border-left: 4px solid transparent !important;
          background: rgba(255, 255, 255, 0.75) !important;
          border: 1px solid rgba(15, 23, 42, 0.06) !important;
          box-shadow: 0 8px 32px 0 rgba(15, 23, 42, 0.03) !important;
        }

        .why-card:hover {
          border-color: rgba(99, 102, 241, 0.25) !important;
          border-left-color: #4f46e5 !important;
          transform: translateX(8px) translateY(-2px) !important;
          box-shadow: 0 12px 30px rgba(99, 102, 241, 0.08) !important;
          background: rgba(255, 255, 255, 0.92) !important;
        }

        [data-theme="dark"] .why-card {
          background: rgba(13, 20, 38, 0.65) !important;
          border: 1px solid rgba(56, 189, 248, 0.08) !important;
        }

        [data-theme="dark"] .why-card:hover {
          background: rgba(13, 20, 38, 0.85) !important;
        }
      `}</style>
    </div>
  );
}