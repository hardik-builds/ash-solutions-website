'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaGithub, FaDribbble, FaRocket, FaHandshake } from 'react-icons/fa';
import { FiUsers, FiTarget, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';
import CTASection from '@/components/CTASection';

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

export default function TeamClient({ teamData }) {
  return (
    <div
      className="team-page-wrapper"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'transparent',
        color: 'var(--text-color)',
        overflow: 'hidden',
      }}
    >
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
        <div
          style={{
            position: 'absolute',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(120px)',
            top: '-120px',
            right: '-120px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(120px)',
            bottom: '-120px',
            left: '-120px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
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
            <FiUsers style={{ marginRight: '8px', fontSize: '14px' }} /> Our Team
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(32px, 8vw, 78px)',
              fontWeight: '950',
              lineHeight: '1.05',
              color: 'var(--title-color)',
              letterSpacing: '-2px',
              marginBottom: '24px',
            }}
          >
            Meet The Team <br />
            Behind <span className="text-gradient-purple-cyan">ASH Solutions</span>
          </motion.h1>

          <p
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '20px',
              lineHeight: '1.8',
              color: 'var(--body-text)',
            }}
          >
            A passionate team focused on building AI-powered software, automation systems, SaaS products and business solutions designed for growth.
          </p>

          <div
            style={{
              marginTop: '60px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '24px',
            }}
          >
            {[
              { number: 'AI', label: 'Automation Solutions' },
              { number: 'SaaS', label: 'Platform Development' },
              { number: '24/7', label: 'Support Mindset' },
              { number: '100%', label: 'Client Focused' },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  borderRadius: '24px',
                  padding: 'var(--card-padding)',
                }}
              >
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: '900',
                    color: 'var(--title-color)',
                    marginBottom: '8px',
                  }}
                >
                  {item.number}
                </div>

                <div
                  style={{
                    color: 'var(--title-color)',
                    fontWeight: '700',
                    fontSize: '15px',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
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
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '999px',
                background: 'rgba(99, 102, 241, 0.08)',
                border: '1px solid rgba(99, 102, 241, 0.15)',
                color: 'var(--title-color)',
                fontWeight: '700',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px',
              }}
            >
              Leadership Team
            </div>

            <h2
              style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: '900',
                color: 'var(--title-color)',
                lineHeight: '1.1',
                marginBottom: '18px',
                letterSpacing: '-1.5px',
              }}
            >
              Meet The People Behind <span className="text-gold-gradient">The Vision</span>
            </h2>

            <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--body-text)', fontSize: '18px', lineHeight: '1.8' }}>
              Combining technology, innovation and business strategy to build scalable digital solutions for modern businesses.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '30px',
            }}
          >
            {teamData.teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="glass-panel glass-panel-hover premium-card-sheen"
                style={{
                  borderRadius: '32px',
                  padding: 'var(--card-padding)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {/* Profile Image Wrapper */}
                <div
                  className="photo-frame"
                  style={{
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '28px',
                    border: '5px solid #ffffff',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(99, 102, 241, 0.15)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                    }}
                  />
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontSize: '26px',
                    fontWeight: '800',
                    color: 'var(--title-color)',
                    marginBottom: '6px',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <div
                  style={{
                    color: 'var(--title-color)',
                    fontWeight: '800',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '20px',
                  }}
                >
                  {member.role}
                </div>

                {/* Bio */}
                <p
                  style={{
                    color: 'var(--body-text)',
                    lineHeight: '1.7',
                    fontSize: '15px',
                    marginBottom: '24px',
                    flexGrow: 1,
                  }}
                >
                  {member.bio}
                </p>

                {/* Skills Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: 'auto',
                  }}
                >
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="member-skill-tag"
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        background: 'rgba(99, 102, 241, 0.08)',
                        border: '1px solid rgba(99, 102, 241, 0.15)',
                        color: 'var(--title-color)',
                        fontSize: '12px',
                        fontWeight: '700',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                {member.social && (
                  <div style={{ display: 'flex', gap: '14px', marginTop: '20px' }}>
                    {Object.entries(member.social).map(([platform, link]) => {
                      const getIcon = () => {
                        switch (platform) {
                          case 'linkedin': return <FaLinkedin />;
                          case 'twitter': return <FaTwitter />;
                          case 'github': return <FaGithub />;
                          case 'dribbble': return <FaDribbble />;
                          default: return <FaRocket />;
                        }
                      };
                      return (
                        <a
                          key={platform}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link-item"
                          style={{
                            color: 'var(--body-text)',
                            fontSize: '18px',
                            transition: 'color 0.2s',
                          }}
                        >
                          {getIcon()}
                        </a>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '999px',
                background: 'rgba(99, 102, 241, 0.08)',
                border: '1px solid rgba(99, 102, 241, 0.15)',
                color: 'var(--title-color)',
                fontWeight: '700',
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px',
              }}
            >
              Why Choose Us
            </div>

            <h2
              style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: '900',
                color: 'var(--title-color)',
                lineHeight: '1.1',
                letterSpacing: '-1.5px',
              }}
            >
              The ASH Advantage
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '28px',
            }}
          >
            {[
              {
                icon: <FaRocket size={28} style={{ color: 'var(--title-color)' }} />,
                title: 'Innovation First',
                desc: 'We leverage modern technologies, AI automation and scalable architectures to keep businesses ahead of the competition.',
              },
              {
                icon: <FiTarget size={28} style={{ color: 'var(--title-color)' }} />,
                title: 'Business Focused',
                desc: 'Every solution is designed around business goals, efficiency and measurable growth outcomes.',
              },
              {
                icon: <FiZap size={28} style={{ color: 'var(--title-color)' }} />,
                title: 'Fast Execution',
                desc: 'Agile development processes help us deliver high-quality solutions quickly without sacrificing quality.',
              },
              {
                icon: <FaHandshake size={28} style={{ color: 'var(--title-color)' }} />,
                title: 'Long-Term Partnership',
                desc: 'We support businesses beyond launch with continuous improvements, maintenance and strategic guidance.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  borderRadius: '28px',
                  padding: 'var(--card-padding)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'rgba(99, 102, 241, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  {item.icon}
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
                  {item.title}
                </h3>

                <p style={{ color: 'var(--body-text)', lineHeight: '1.7', fontSize: '15px' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Anchor dark block */}
      <CTASection />

      <style jsx>{`
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
            border-color: rgba(99, 102, 241, 0.25);
            box-shadow: 0 20px 40px -15px rgba(99, 102, 241, 0.12);
            transform: translateY(-6px);
          }
          .glass-panel-hover:hover .photo-frame {
            box-shadow: 0 20px 40px rgba(79, 70, 229, 0.2) !important;
            border-color: #0B1F3A !important;
            transform: scale(1.06) rotate(1.5deg);
          }
          .glass-panel-hover:hover span {
            background: rgba(99, 102, 241, 0.16) !important;
            border-color: rgba(99, 102, 241, 0.35) !important;
            transform: scale(1.06) translateY(-1px);
          }
          .social-link-item:hover {
            color: #4f46e5 !important;
          }
        }

        @media (max-width: 900px) {
          .leader-row {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .reverse {
            display: flex !important;
            flex-direction: column-reverse !important;
          }
        }

        @media (max-width: 768px) {
          :global(.team-cta) {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            width: 100% !important;
          }
          :global(.team-cta a) {
            width: 100% !important;
            max-width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}