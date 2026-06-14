'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import { FiMail, FiPhone, FiClock } from 'react-icons/fi';

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
    border: '1px solid var(--input-border)',
    borderRadius: '14px',
    boxSizing: 'border-box',
    fontSize: '15px',
    background: 'var(--input-bg)',
    color: 'var(--input-text)',
    outline: 'none',
    transition: 'all 0.3s ease',
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
            {[
              'Free Consultation',
              'Custom Solutions',
              'Fast Response',
              'Long-Term Support',
            ].map((item) => (
              <div
                key={item}
                className="glass-panel"
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  fontWeight: '700',
                  color: 'var(--title-color)',
                  fontSize: '15px',
                }}
              >
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
              className="glass-panel"
              style={{
                borderRadius: '32px',
                padding: 'var(--card-padding)',
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

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    className="contact-input"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    className="contact-input"
                  />
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    className="contact-input"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder="Business Name"
                    value={formData.company}
                    onChange={handleChange}
                    style={inputStyle}
                    className="contact-input"
                  />
                </div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    color: formData.service ? 'var(--input-text)' : '#64748b',
                  }}
                  className="contact-input"
                >
                  <option value="" style={{ background: 'var(--input-bg)', color: '#64748b' }}>Select Service</option>
                  <option value="website" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>Website Development</option>
                  <option value="saas" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>Custom SaaS Development</option>
                  <option value="automation" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>AI Automation</option>
                  <option value="crm" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>Business Management System</option>
                  <option value="mobile" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>Mobile App Development</option>
                  <option value="security" style={{ background: 'var(--input-bg)', color: 'var(--input-text)' }}>Cybersecurity</option>
                </select>

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
                  className="contact-input"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-primary-btn"
                  style={{
                    width: '100%',
                    padding: '18px',
                    border: 'none',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
                    color: '#FFFFFF',
                    fontWeight: '800',
                    fontSize: '16px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(79, 70, 229, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                </button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div
              className="glass-panel"
              style={{
                borderRadius: '32px',
                padding: 'var(--card-padding)',
                position: 'sticky',
                top: '120px',
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
                className="cta-whatsapp"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '16px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                  marginBottom: '30px',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Open WhatsApp
              </a>

              <div
                style={{
                  color: 'var(--title-color)',
                  lineHeight: '2.1',
                  fontSize: '15px',
                  borderTop: '1px solid var(--card-border)',
                  paddingTop: '20px',
                  fontWeight: '700',
                }}
              >
                <div style={{ marginBottom: '6px', display: 'flex', alignItems: 'center' }}>
                  <FiMail style={{ marginRight: '10px', color: '#4f46e5', flexShrink: 0 }} />
                  <span style={{ color: 'var(--body-text)', fontWeight: '600' }}>contact@ashsolutions.site</span>
                </div>
                <div style={{ marginBottom: '6px', display: 'flex', alignItems: 'center' }}>
                  <FiPhone style={{ marginRight: '10px', color: '#4f46e5', flexShrink: 0 }} />
                  <span style={{ color: 'var(--body-text)', fontWeight: '600' }}>+91 86527 68171</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <FiClock style={{ marginRight: '10px', color: '#4f46e5', flexShrink: 0 }} />
                  <span style={{ color: 'var(--body-text)', fontWeight: '600' }}>Response Within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA block - Anchor dark block */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '120px 24px',
          background: '#070b13',
          color: '#fff',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(140px)',
            top: '-150px',
            right: '-120px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '999px',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              color: '#818cf8',
              fontWeight: '600',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '24px',
            }}
          >
            <FaRocket style={{ marginRight: '8px', fontSize: '14px' }} /> Let's Build Together
          </div>

          <h2
            style={{
              fontSize: 'clamp(38px, 6vw, 64px)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '24px',
              letterSpacing: '-1.5px',
            }}
          >
            Ready To Start <br />
            Your Project?
          </h2>

          <p style={{ maxWidth: '700px', margin: '0 auto', color: '#cbd5e1', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
            Whether you need a website, AI automation, SaaS platform, CRM, ERP or mobile application, our team is ready to help turn your vision into reality.
          </p>

          <div
            className="contact-cta-buttons"
            style={{
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
                padding: '16px 30px',
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
              href="mailto:contact@ashsolutions.site"
              className="cta-secondary-btn"
              style={{
                padding: '16px 30px',
                borderRadius: '14px',
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                fontWeight: '700',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
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
          .contact-input:focus {
            border-color: #4f46e5 !important;
            background: rgba(99, 102, 241, 0.01) !important;
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
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