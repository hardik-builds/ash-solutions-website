'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Hardik L. Singh',
    role: 'Founder & Full-Stack Developer',
    bio: 'A recent B.Sc. (IT) graduate with a strong passion for web development, cybersecurity, and digital innovation. This project is a culmination of my academic learning and my first step into the professional world. I am eager to apply my skills to create impactful digital solutions.',
    image: '/images/hardik-singh.jpeg'
  },
  {
    name: 'Anshu Rajkagoria',
    role: 'CEO & Cybersecurity Expert',
    bio: 'As the CEO of the organization, Anshu Rajkagoria brings strong leadership skills and a clear strategic vision to drive innovation and growth. With expertise in Cybersecurity and a solid foundation in Web Development, she focuses on building secure and scalable digital solutions. Along with her technical knowledge, Anshu possesses excellent soft skills including communication, teamwork, leadership, and problem-solving abilities. She has consistently maintained a strong academic performance with a CGPA of 7+, reflecting her dedication, discipline, and commitment toward continuous learning and professional excellence.',
    image: '/images/Anshu-Rajkagoria.jpeg'
  }
];

const achievements = [
  { title: 'Technologies Mastered', value: '15+', description: 'Proficient in a wide range of modern technologies and frameworks' },
  { title: 'Projects Completed', value: '6+', description: 'A portfolio of academic and personal development projects' },
  { title: 'Academic Score', value: '8.5+', description: 'Consistently high performance in IT-related subjects' },
  { title: 'Hours of Learning', value: '1000+', description: 'Dedicated to self-learning and practical application' }
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
              }}
            >
              Start A Project
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
              }}
            >
              Explore Services
            </Link>
          </div>

          {/* Ribbon */}
          <div
            style={{
              marginTop: '90px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              borderTop: '1px solid rgba(15, 23, 42, 0.05)',
              borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
              padding: '24px 0',
              background: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <div className="about-ribbon">
              AI AUTOMATION • CUSTOM SAAS • CRM SYSTEMS • ERP PLATFORMS • WEB DEVELOPMENT • MOBILE APPLICATIONS • CYBERSECURITY • BUSINESS SYSTEMS • AI INTEGRATION • CLOUD SOLUTIONS • AI AUTOMATION • CUSTOM SAAS • CRM SYSTEMS • ERP PLATFORMS • WEB DEVELOPMENT • MOBILE APPLICATIONS • CYBERSECURITY • BUSINESS SYSTEMS • AI INTEGRATION • CLOUD SOLUTIONS
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
                  CEO & Cybersecurity Expert
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

      {/* CTA Section - Anchor dark block */}
      <section
        style={{
          padding: '140px 24px',
          background: '#070b13',
          color: '#FFFFFF',
          overflow: 'hidden',
          position: 'relative',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)',
            filter: 'blur(120px)',
            top: '-200px',
            right: '-150px',
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
            LET'S BUILD TOGETHER
          </div>

          <h2
            style={{
              fontSize: 'clamp(44px, 6vw, 84px)',
              fontWeight: '900',
              lineHeight: '.95',
              letterSpacing: '-2px',
              marginBottom: '35px',
            }}
          >
            Your Vision. <br />
            Our Expertise.
          </h2>

          <p
            style={{
              maxWidth: '760px',
              margin: '0 auto',
              color: '#cbd5e1',
              lineHeight: '1.9',
              fontSize: '18px',
              marginBottom: '45px',
            }}
          >
            Whether you're launching a startup, modernizing operations, automating workflows or building a custom software platform, we're ready to help turn ideas into scalable digital solutions.
          </p>

          <div
            className="about-cta-buttons"
            style={{
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
                background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                color: '#FFFFFF',
                textDecoration: 'none',
                borderRadius: '16px',
                fontWeight: '800',
                boxShadow: '0 4px 15px rgba(79, 70, 229, 0.35)',
                transition: 'all 0.3s ease',
              }}
            >
              Start A Conversation
            </a>

            <Link
              href="/services"
              className="cta-secondary-btn"
              style={{
                padding: '18px 36px',
                border: '1px solid rgba(255,255,255,.15)',
                background: 'rgba(255,255,255,.04)',
                color: '#FFFFFF',
                textDecoration: 'none',
                borderRadius: '16px',
                fontWeight: '800',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

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
          .cta-primary-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
          }
          .cta-secondary-btn:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
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