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
  { title: 'Global Clients Served', value: '10+', description: 'Delivering tailored digital systems for clients across regions' },
  { title: 'Enterprise Deployments', value: '25+', description: 'Production-ready software architectures successfully launched' },
  { title: 'Security Audits Passed', value: '100%', description: 'Fully compliant software design with zero vulnerability leaks' },
  { title: 'System Uptime Guarantee', value: '99.9%', description: 'Ensuring reliable cloud operations and continuous monitoring' }
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
          padding: '170px 24px 100px',
          background: 'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 60%)',
          position: 'relative',
          overflow: 'hidden',
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
            maxWidth: '1300px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
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
            About ASH Solutions
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(32px, 8vw, 100px)',
              fontWeight: '950',
              lineHeight: '.95',
              letterSpacing: '-2px',
              color: 'var(--title-color)',
              marginBottom: '30px',
            }}
          >
            Technology.<br />
            Automation.<br />
            <span className="text-gradient-purple-cyan">Growth.</span>
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
            We build AI-powered software, automation systems and scalable digital solutions that help businesses operate smarter, grow faster and stay future-ready.
          </p>

          {/* Buttons */}
          <div
            className="about-hero-buttons"
            style={{
              marginTop: '55px',
              display: 'flex',
              justifyContent: 'center',
              gap: '18px',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/contact"
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
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(79, 70, 229, 0.4)';
                const arrow = e.currentTarget.querySelector('.arrow-icon');
                if (arrow) arrow.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 70, 229, 0.25)';
                const arrow = e.currentTarget.querySelector('.arrow-icon');
                if (arrow) arrow.style.transform = 'translateX(0)';
              }}
            >
              Start A Project
              <FiArrowRight className="arrow-icon" style={{ fontSize: '18px', transition: 'transform 0.3s ease' }} />
            </Link>

            <Link
              href="/services"
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
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.05)';
                e.currentTarget.style.borderColor = isDark ? 'rgba(56, 189, 248, 0.25)' : 'rgba(99, 102, 241, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.backgroundColor = 'var(--cta-secondary-bg)';
                e.currentTarget.style.borderColor = 'var(--cta-secondary-border)';
              }}
            >
              <FiBriefcase style={{ fontSize: '18px' }} />
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
            maxWidth: '1280px',
            margin: '0 auto',
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
                color: '#4f46e5',
                fontWeight: '700',
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
                color: '#0f172a',
                letterSpacing: '-2px',
              }}
            >
              Building <br />
              Systems <br />
              That Scale.
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
                color: '#1e293b',
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
                color: '#1e293b',
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
                color: '#1e293b',
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
            className="principles-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '24px',
            }}
          >
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: 'var(--card-padding)',
                  borderRadius: '24px',
                  borderTop: '2px solid #4f46e5',
                }}
              >
                <div
                  style={{
                    fontSize: '44px',
                    fontWeight: '900',
                    color: '#4f46e5',
                    marginBottom: '10px',
                  }}
                >
                  {item.value}
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#1e293b', fontSize: '14px', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
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
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {/* Heading */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '100px',
            }}
          >
            <div
              style={{
                color: '#4f46e5',
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
                color: '#0f172a',
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
                    color: '#4f46e5',
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
                    color: '#4f46e5',
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
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: '100px',
            }}
          >
            <div
              style={{
                color: '#4f46e5',
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
                color: '#0f172a',
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
                  color: '#4f46e5',
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
                    color: '#0f172a',
                    marginBottom: '14px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    maxWidth: '800px',
                    color: '#1e293b',
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
            box-shadow: 0 30px 60px rgba(79, 70, 229, 0.25) !important;
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
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            width: 100% !important;
          }
          :global(.about-hero-buttons a), :global(.about-cta-buttons a) {
            width: 100% !important;
            max-width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}