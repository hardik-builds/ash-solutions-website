'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhone, FiClock, FiUser, FiBriefcase, FiMessageSquare, FiZap, FiCheckCircle, FiSend } from 'react-icons/fi';
import CTASection from '@/components/CTASection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
          });
        }, 3000);
      } else {
        alert(`Failed to send message: ${data.message}`);
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    paddingLeft: '48px',
    border: 'none',
    background: 'transparent',
    color: 'var(--input-text)',
    outline: 'none',
    fontSize: '15px',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  };

  return (
    <div
      className="contact-page-wrapper"
      style={{
        position: 'relative',
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
          top: '40%',
          left: '-150px',
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
          padding: '160px 24px 100px',
          background: 'radial-gradient(circle at 50% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 60%)',
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
            top: '-100px',
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
              color: '#4f46e5',
              fontWeight: '700',
              letterSpacing: '2px',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            <FaRocket style={{ marginRight: '8px', fontSize: '14px' }} /> Start Your Project
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
              marginBottom: '25px',
            }}
          >
            Let's Build <br />
            <span className="text-gradient-purple-cyan">Something Amazing</span>
          </motion.h1>

          <p
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              fontSize: '20px',
              lineHeight: '1.8',
              color: 'var(--body-text)',
            }}
          >
            Tell us about your project and we'll help transform your idea into a scalable website, AI automation system, SaaS platform or business management solution.
          </p>

          <div
            className="contact-hero-buttons"
            style={{
              marginTop: '50px',
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
              className="cta-primary-btn"
              style={{
                padding: '16px 32px',
                borderRadius: '14px',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                color: '#fff',
                fontWeight: '700',
                boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Talk To An Expert
            </a>

            <a
              href="#contact-form"
              className="cta-secondary-btn"
              style={{
                padding: '16px 32px',
                borderRadius: '14px',
                textDecoration: 'none',
                background: 'var(--cta-secondary-bg)',
                border: '1px solid var(--cta-secondary-border)',
                color: 'var(--text-color)',
                fontWeight: '700',
                boxShadow: 'var(--cta-secondary-shadow)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Request A Quote
            </a>
          </div>

          {/* Stats frame */}
          <div
            className="hero-stats"
            style={{
              marginTop: '80px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '20px',
            }}
          >
            {['No high-pressure sales calls', 'Zero obligation consultations', 'Direct developer collaboration', 'NDAs signed upon request'].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '16px 24px',
                  borderRadius: '100px',
                  fontWeight: '700',
                  color: 'var(--title-color)',
                  fontSize: '14.5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: 'rgba(99, 102, 241, 0.05)',
                  border: '1px solid rgba(99, 102, 241, 0.15)',
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.05)'
                }}
              >
                <FiCheckCircle style={{ color: '#4f46e5', fontSize: '18px', flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        style={{
          padding: '120px 24px',
          background: 'var(--section-bg)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <div
              style={{
                color: '#4f46e5',
                fontWeight: '700',
                marginBottom: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              Contact Us
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px, 6vw, 54px)',
                fontWeight: '900',
                color: 'var(--title-color)',
                marginBottom: '18px',
                letterSpacing: '-1px',
              }}
            >
              Let's Discuss Your Project
            </h2>

            <p style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--body-text)', lineHeight: '1.8' }}>
              Tell us about your goals and we'll help you choose the right solution for your business.
            </p>
          </div>

          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.9fr', gap: '40px', alignItems: 'start' }}>
            {/* Form card */}
            <div
              id="contact-form"
              style={{
                background: 'transparent',
                padding: '10px 0',
              }}
            >
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 120,
                        damping: 14,
                      },
                    }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      color: '#16a34a',
                      padding: '16px',
                      borderRadius: '14px',
                      marginBottom: '25px',
                      fontSize: '15px',
                      textAlign: 'center',
                      fontWeight: '700',
                    }}
                  >
                    Thank you! We have received your inquiry.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="input-wrapper">
                    <FiUser className="input-icon" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none', fontSize: '18px', transition: 'all 0.3s ease' }} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>

                  <div className="input-wrapper">
                    <FiMail className="input-icon" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none', fontSize: '18px', transition: 'all 0.3s ease' }} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="input-wrapper">
                    <FiPhone className="input-icon" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none', fontSize: '18px', transition: 'all 0.3s ease' }} />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  <div className="input-wrapper">
                    <FiBriefcase className="input-icon" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none', fontSize: '18px', transition: 'all 0.3s ease' }} />
                    <input
                      type="text"
                      name="company"
                      placeholder="Business Name"
                      value={formData.company}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="input-wrapper">
                  <FiZap className="input-icon" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none', fontSize: '18px', zIndex: 3, transition: 'all 0.3s ease' }} />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      color: formData.service ? 'var(--input-text)' : '#64748b',
                    }}
                  >
                    <option value="" style={{ background: 'var(--input-bg)', color: '#64748b' }}>Select Service</option>
                    <option value="website" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>Website Development</option>
                    <option value="saas" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>Custom SaaS Development</option>
                    <option value="automation" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>AI Automation</option>
                    <option value="crm" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>Business Management System</option>
                    <option value="mobile" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>Mobile App Development</option>
                    <option value="cloud" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>Cloud & DevOps Integration</option>
                  </select>
                </div>

                <div className="input-wrapper" style={{ alignItems: 'flex-start' }}>
                  <FiMessageSquare className="input-icon" style={{ position: 'absolute', left: '16px', top: '18px', color: '#64748b', pointerEvents: 'none', fontSize: '18px', transition: 'all 0.3s ease' }} />
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Tell Us About Your Project *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      ...inputStyle,
                      minHeight: '160px',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-primary-btn"
                  style={{
                    width: '100%',
                    padding: '18px',
                    border: 'none',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                    color: '#FFFFFF',
                    fontWeight: '800',
                    fontSize: '16px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)';
                    e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(6, 182, 212, 0.35)';
                    const icon = e.currentTarget.querySelector('.btn-icon');
                    if (icon) icon.style.transform = 'translate(3px, -3px) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(79, 70, 229, 0.25)';
                    const icon = e.currentTarget.querySelector('.btn-icon');
                    if (icon) icon.style.transform = 'translate(0, 0) scale(1)';
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                  {!isSubmitting && <FiSend className="btn-icon" style={{ fontSize: '18px', transition: 'transform 0.3s ease' }} />}
                </button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div
              style={{
                position: 'sticky',
                top: '120px',
                background: 'transparent',
                padding: '10px 0 10px 24px',
                borderLeft: '2px solid rgba(99, 102, 241, 0.25)',
              }}
            >
              <div
                style={{
                  color: '#4f46e5',
                  fontWeight: '700',
                  marginBottom: '12px',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Quick Contact
              </div>

              <h3 style={{ fontSize: '28px', fontWeight: '850', color: 'var(--title-color)', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                Chat On WhatsApp
              </h3>

              <p style={{ color: 'var(--body-text)', lineHeight: '1.7', marginBottom: '24px', fontSize: '15px' }}>
                Need a faster response? Connect directly with our team and discuss your project instantly.
              </p>

              <a
                href="https://wa.me/918652768171"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-whatsapp cta-whatsapp-pulse"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                  marginBottom: '35px',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(34, 197, 94, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.2)';
                }}
              >
                <FaWhatsapp style={{ fontSize: '20px' }} /> Open WhatsApp
              </a>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  borderTop: '1px solid var(--card-border)',
                  paddingTop: '25px',
                }}
              >
                {/* Email Item */}
                <div className="contact-info-item">
                  <div className="info-icon-wrapper">
                    <FiMail />
                  </div>
                  <div>
                    <div className="info-label">
                      Email Address
                    </div>
                    <a
                      href="mailto:contact@ashsolutions.site"
                      className="info-link"
                    >
                      contact@ashsolutions.site
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="contact-info-item">
                  <div className="info-icon-wrapper">
                    <FiPhone />
                  </div>
                  <div>
                    <div className="info-label">
                      Phone Call
                    </div>
                    <a
                      href="tel:+918652768171"
                      className="info-link"
                    >
                      +91 86527 68171
                    </a>
                  </div>
                </div>

                {/* Clock Item */}
                <div className="contact-info-item">
                  <div className="info-icon-wrapper">
                    <FiClock />
                  </div>
                  <div>
                    <div className="info-label">
                      Response Time
                    </div>
                    <div className="info-text">
                      Within 24 Hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <style jsx>{`
        .input-wrapper {
          position: relative;
          width: 100%;
          border: 1px solid var(--input-border);
          border-radius: 14px;
          background: var(--input-bg);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
        }

        .input-wrapper:hover {
          border-color: rgba(99, 102, 241, 0.25);
          background: var(--card-bg);
        }

        .input-wrapper:focus-within {
          border-color: #4f46e5;
          background: var(--card-bg) !important;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15), 0 8px 20px -5px rgba(79, 70, 229, 0.1);
          transform: translateY(-1px);
        }

        .input-wrapper:focus-within .input-icon {
          color: #4f46e5 !important;
          transform: translateY(-50%) scale(1.1) !important;
        }

        /* Message textarea icon positioning */
        .input-wrapper[style*="alignItems: flex-start"] .input-icon,
        .input-wrapper[style*="align-items: flex-start"] .input-icon {
          transform: none !important;
          top: 18px !important;
        }
        
        .input-wrapper[style*="alignItems: flex-start"]:focus-within .input-icon,
        .input-wrapper[style*="align-items: flex-start"]:focus-within .input-icon {
          transform: scale(1.1) !important;
        }

        [data-theme="dark"] .input-wrapper:focus-within {
          border-color: #38bdf8;
          background: var(--card-bg) !important;
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15), 0 8px 20px -5px rgba(56, 189, 248, 0.1);
        }

        [data-theme="dark"] .input-wrapper:focus-within .input-icon {
          color: #38bdf8 !important;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 10px;
          border-radius: 16px;
          cursor: pointer;
        }

        .contact-info-item:hover {
          background: rgba(99, 102, 241, 0.04);
          transform: translateX(4px);
        }

        [data-theme="dark"] .contact-info-item:hover {
          background: rgba(56, 189, 248, 0.04);
        }

        .info-icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.08);
          display: flex;
          align-items: center;
          justifyContent: center;
          margin-right: 14px;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-info-item:hover .info-icon-wrapper {
          background: #4f46e5 !important;
          transform: scale(1.1);
        }

        [data-theme="dark"] .contact-info-item:hover .info-icon-wrapper {
          background: #38bdf8 !important;
        }

        .info-icon-wrapper :global(svg) {
          color: #4f46e5;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        [data-theme="dark"] .info-icon-wrapper :global(svg) {
          color: #38bdf8;
        }

        .contact-info-item:hover .info-icon-wrapper :global(svg) {
          color: #ffffff !important;
        }

        .info-label {
          font-size: 10px;
          color: #64748b;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }

        .info-link, .info-text {
          font-size: 15px;
          color: var(--title-color);
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-info-item:hover .info-link {
          color: #4f46e5;
        }

        [data-theme="dark"] .contact-info-item:hover .info-link {
          color: #38bdf8;
        }

        @keyframes whatsapp-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }

        .cta-whatsapp-pulse {
          animation: whatsapp-pulse 2s infinite;
        }

        @media (hover: hover) {
          .cta-primary-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.4);
          }
          .cta-secondary-btn:hover {
            background: var(--cta-secondary-bg);
            border-color: var(--cta-secondary-border);
            opacity: 0.9;
            transform: translateY(-2px);
          }
          .cta-whatsapp:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
          }
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          #contact-form {
            padding: var(--card-padding) !important;
          }
          :global(.contact-hero-buttons), :global(.contact-cta-buttons) {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            width: 100% !important;
          }
          :global(.contact-hero-buttons a), :global(.contact-cta-buttons a) {
            width: 100% !important;
            max-width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
}