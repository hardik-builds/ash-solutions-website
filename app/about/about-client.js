'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiBriefcase } from 'react-icons/fi';
import CTASection from '@/components/CTASection';

const team = [
  {
    name: 'Hardik L. Singh',
    role: 'Founder & Full-Stack Developer',
    bio: 'Hardik Singh is a veteran Full-Stack Developer and technical architect who specializes in designing enterprise-grade SaaS applications, advanced business automation systems, and high-performance system architectures. With a focus on scalability and security, he translates business objectives into robust software solutions.',
    image: '/images/hardik-singh.jpeg'
  },
  {
    name: 'Anshu Rajkagoria',
    role: 'CEO & Security Architect',
    bio: 'Anshu Rajkagoria is the CEO and Principal Security Architect at ASH Solutions. She drives the company’s strategic vision, overseeing corporate growth and product delivery. Possessing deep expertise in security engineering, threat analysis, and risk management, she ensures that all custom client systems adhere to elite security standards and compliance frameworks.',
    image: '/images/Anshu-Rajkagoria.jpeg'
  }
];

const achievements = [
  { title: 'System Architecture', value: 'Custom', description: 'Tailored software solutions designed around your precise business workflows' },
  { title: 'Deployment Model', value: 'Cloud Native', description: 'Containerized, scalable cloud environments with automated CI/CD pipelines' },
  { title: 'Security Standard', value: 'Enterprise', description: 'Encrypted communications, JWT authorization, and strict compliance controls' },
  { title: 'Engineering Approach', value: 'Agile', description: 'Rapid development cycles focused on measurable business outcomes' }
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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

export default function About() {
  return (
    <div className="about-page-wrapper" style={{ position: 'relative', background: 'transparent', color: 'var(--text-color)', overflow: 'hidden' }}>
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
          overflow: 'hidden',
          background: 'transparent',
        }}
      >
        {/* Background Glow */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
            filter: 'blur(140px)',
            top: '-200px',
            right: '-150px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'left',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            style={{
              color: '#D4AF37', fontWeight: '700', letterSpacing: '2px', marginBottom: '14px', textTransform: 'uppercase', fontFamily: 'monospace', fontSize: '12px',
            }}
          >
            // ABOUT ASH SOLUTIONS
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(32px, 6vw, 76px)',
              fontWeight: '950',
              lineHeight: '1.02',
              letterSpacing: '-2px',
              color: 'var(--title-color)',
              marginBottom: '20px',
            }}
          >
            Technology.<br />
            Automation.<br />
            <span className="text-gradient-purple-cyan">Growth.</span>
          </motion.h1>

          <p
            style={{
              color: 'var(--body-text)',
              fontSize: '18px',
              lineHeight: '1.8',
              marginBottom: '32px',
              maxWidth: '680px',
            }}
          >
            We build AI-powered software, automation systems and scalable digital solutions that help businesses operate smarter, grow faster and stay future-ready.
          </p>

          <div
            className="about-hero-buttons"
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '14px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/contact"
              className="cta-primary-btn"
              style={{
                padding: '0 28px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: '#0B1F3A',
                border: '1px solid #0B1F3A',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                letterSpacing: '-0.2px',
                boxShadow: '0 2px 8px rgba(11, 31, 58, 0.12)',
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
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
              <FiArrowRight className="arrow-icon" style={{ fontSize: '16px' }} />
            </Link>

            <Link
              href="/services"
              className="cta-secondary-btn"
              style={{
                padding: '0 28px',
                height: '48px',
                borderRadius: '10px',
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--title-color)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                letterSpacing: '-0.2px',
                boxShadow: '0 1px 3px rgba(11, 31, 58, 0.04)',
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
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
              <FiBriefcase style={{ fontSize: '16px' }} />
              Explore Services
            </Link>
          </div>

          {/* Ribbon */}
          <div
            style={{
              marginTop: '90px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              borderTop: '1px solid var(--card-border)',
              borderBottom: '1px solid var(--card-border)',
              padding: '24px 0',
              background: 'var(--card-bg)',
            }}
          >
            <div className="about-ribbon">
              AI AUTOMATION • CUSTOM SAAS • CRM SYSTEMS • ERP PLATFORMS • WEB DEVELOPMENT • MOBILE APPLICATIONS • BUSINESS SYSTEMS • AI INTEGRATION • CLOUD SOLUTIONS • AI AUTOMATION • CUSTOM SAAS • CRM SYSTEMS • ERP PLATFORMS • WEB DEVELOPMENT • MOBILE APPLICATIONS • BUSINESS SYSTEMS • AI INTEGRATION • CLOUD SOLUTIONS
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--section-bg)',
          overflow: 'hidden',
        }}
      >
        <div
          className="story-grid"
          style={{
            maxWidth: '1280px', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          {/* Left Side */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              style={{
                color: '#D4AF37',
                fontWeight: '800',
                letterSpacing: '2px',
                marginBottom: '20px',
                textTransform: 'uppercase',
              }}
            >
              Our Story
            </div>

            <h2
              style={{
                fontSize: 'clamp(44px, 6vw, 78px)',
                fontWeight: '900',
                lineHeight: '.95',
                color: 'var(--title-color)',
                letterSpacing: '-2px',
              }}
            >
              Building <br />
              Systems <br />
              <span className="text-gold-gradient">That Scale.</span>
            </h2>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              style={{
                color: 'var(--body-text)',
                fontSize: '18px',
                lineHeight: '1.9',
                marginBottom: '24px',
              }}
            >
              ASH Solutions was founded with a vision of helping businesses leverage software, automation and AI to operate more efficiently and scale sustainably.
            </motion.p>

            <motion.p
              variants={itemVariants}
              style={{
                color: 'var(--body-text)',
                fontSize: '18px',
                lineHeight: '1.9',
                marginBottom: '24px',
              }}
            >
              We focus on building custom systems that eliminate manual work, improve visibility and create long-term operational advantages.
            </motion.p>

            <motion.p
              variants={itemVariants}
              style={{
                color: 'var(--body-text)',
                fontSize: '18px',
                lineHeight: '1.9',
              }}
            >
              Every solution we build is designed around real business outcomes, not just technology.
            </motion.p>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '100px auto 0',
          }}
        >
          <div
            style={{
              position: 'relative',
              padding: '40px 0',
            }}
            className="about-metrics-timeline"
          >
            {/* Horizontal glowing connector line */}
            <div className="metrics-flow-line" />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                gap: '40px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="metric-timeline-node"
                  style={{
                    textAlign: 'left',
                    position: 'relative',
                  }}
                >
                  {/* The glowing junction point */}
                  <div className="metric-dot" />

                  <div
                    style={{
                      fontSize: '54px',
                      fontWeight: '900',
                      color: 'var(--title-color)',
                      marginBottom: '12px',
                      textShadow: '0 0 20px rgba(11, 31, 58, 0.25)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {item.value}
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '800',
                      color: 'var(--title-color)',
                      marginBottom: '10px',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--body-text)', fontSize: '14.5px', lineHeight: '1.6', margin: '0 0 25px 0', maxWidth: '280px' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--bg-color)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px', margin: '0 auto',
          }}
        >
          {/* Heading */}
          <div
            style={{
              textAlign: 'left',
              marginBottom: '100px',
            }}
          >
            <div
              style={{
                color: 'var(--title-color)',
                fontWeight: '700',
                letterSpacing: '2px',
                marginBottom: '15px',
                textTransform: 'uppercase',
              }}
            >
              Leadership Team
            </div>

            <h2
              style={{
                fontSize: 'clamp(38px, 6vw, 64px)',
                fontWeight: '900',
                lineHeight: '.95',
                color: 'var(--title-color)',
                letterSpacing: '-1.5px',
              }}
            >
              The People Behind ASH
            </h2>
          </div>

          {/* Leaders Showcase */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {/* Hardik */}
            <div
              className="leader-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '80px',
                alignItems: 'center',
              }}
            >
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <div
                  className="photo-frame"
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    maxWidth: '320px',
                    width: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="/images/hardik-singh.jpeg"
                    alt="Hardik L. Singh - Founder"
                    style={{
                      width: '100%',
                      height: '380px',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      borderRadius: '20px',
                      display: 'block',
                    }}
                  />
                </div>
              </div>

              <div>
                <div
                  style={{
                    color: 'var(--title-color)',
                    fontWeight: '700',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontSize: '13px'
                  }}
                >
                  Founder & Full-Stack Developer
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(28px, 4vw, 44px)',
                    fontWeight: '900',
                    color: 'var(--title-color)',
                    marginBottom: '20px',
                    lineHeight: '1.1',
                    letterSpacing: '-1px',
                  }}
                >
                  {team[0].name}
                </h3>

                <p
                  style={{
                    color: 'var(--body-text)',
                    lineHeight: '1.8',
                    fontSize: '16.5px',
                  }}
                >
                  {team[0].bio}
                </p>
              </div>
            </div>

            {/* Anshu */}
            <div
              className="leader-row reverse"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: '80px',
                alignItems: 'center',
              }}
            >
              <div>
                <div
                  style={{
                    color: 'var(--title-color)',
                    fontWeight: '700',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontSize: '13px'
                  }}
                >
                  CEO & Security Architect
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(28px, 4vw, 44px)',
                    fontWeight: '900',
                    color: 'var(--title-color)',
                    marginBottom: '20px',
                    lineHeight: '1.1',
                    letterSpacing: '-1px',
                  }}
                >
                  {team[1].name}
                </h3>

                <p
                  style={{
                    color: 'var(--body-text)',
                    lineHeight: '1.8',
                    fontSize: '16.5px',
                  }}
                >
                  {team[1].bio}
                </p>
              </div>

              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <div
                  className="photo-frame"
                  style={{
                    borderRadius: '20px',
                    boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    maxWidth: '320px',
                    width: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="/images/Anshu-Rajkagoria.jpeg"
                    alt="Anshu Rajkagoria - CEO"
                    style={{
                      width: '100%',
                      height: '380px',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      borderRadius: '20px',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--section-bg)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px', margin: '0 auto',
          }}
        >
          <div
            style={{
              textAlign: 'left',
              marginBottom: '100px',
            }}
          >
            <div
              style={{
                color: 'var(--title-color)',
                fontWeight: '700',
                letterSpacing: '2px',
                marginBottom: '15px',
                textTransform: 'uppercase',
              }}
            >
              Core Principles
            </div>

            <h2
              style={{
                fontSize: 'clamp(38px, 6vw, 64px)',
                fontWeight: '900',
                lineHeight: '.95',
                color: 'var(--title-color)',
                letterSpacing: '-1.5px',
              }}
            >
              How We Think.
            </h2>
          </div>

          {[
            {
              number: '01',
              title: 'Business First',
              desc: 'Technology should solve business problems, not create new ones. Every solution starts with understanding goals and outcomes.',
            },
            {
              number: '02',
              title: 'Innovation With Purpose',
              desc: 'We embrace AI and emerging technologies only when they create measurable value for our clients.',
            },
            {
              number: '03',
              title: 'Execution Matters',
              desc: 'Ideas are valuable, but execution creates results. We focus on delivering reliable and scalable systems.',
            },
            {
              number: '04',
              title: 'Long-Term Partnerships',
              desc: 'We build relationships, not projects. Our success grows when our clients continue to grow.',
            },
          ].map((item) => (
            <div
              key={item.number}
              className="value-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: '40px',
                padding: '50px 0',
                borderTop: '1px solid rgba(15, 23, 42, 0.05)',
              }}
            >
              <div
                style={{
                  fontSize: '64px',
                  fontWeight: '950',
                  color: 'var(--title-color)',
                  lineHeight: '1',
                }}
              >
                {item.number}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '26px',
                    fontWeight: '800',
                    color: 'var(--title-color)',
                    marginBottom: '14px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    maxWidth: '800px',
                    color: 'var(--body-text)',
                    fontSize: '17px',
                    lineHeight: '1.8',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />

      <style jsx>{`
        @media (max-width: 900px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        .about-ribbon {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #4b5563;
          animation: ribbonMove 24s linear infinite;
        }

        @keyframes ribbonMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (hover: hover) {
          .photo-frame:hover {
            transform: translateY(-6px) scale(1.025);
            box-shadow: 0 30px 60px rgba(11, 31, 58, 0.25) !important;
          }
          .photo-frame img {
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
          .photo-frame:hover img {
            transform: scale(1.04) !important;
          }
        }

        @media (max-width: 900px) {
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .leader-row {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .leader-row img {
            height: 340px !important;
          }
          .photo-frame {
            max-width: 350px !important;
            margin: 0 auto !important;
          }
          .reverse {
            display: flex !important;
            flex-direction: column-reverse !important;
          }
        }

        @media (max-width: 600px) {
          .leader-row img {
            height: 260px !important;
          }
          .photo-frame {
            max-width: 280px !important;
          }
          .value-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 768px) {
          :global(.about-hero-buttons), :global(.about-cta-buttons) {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: flex-start !important;
            gap: 12px !important;
            flex-wrap: wrap !important;
            width: 100% !important;
          }
          :global(.about-hero-buttons a), :global(.about-cta-buttons a) {
            flex: 1 1 140px !important;
            min-width: 130px !important;
            max-width: 220px !important;
            height: 46px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}