'use client';
import { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function Contact() {
  const { isDark } = useTheme();
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

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', transition: 'background-color 0.3s, color 0.3s' }}>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '140px 20px',
          background:
            isDark
              ? 'linear-gradient(180deg,#020617,#0F172A)'
              : 'linear-gradient(180deg,#F8FAFC,#FFFFFF)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '450px',
            height: '450px',
            background: '#3B82F6',
            borderRadius: '50%',
            filter: 'blur(120px)',
            opacity: 0.18,
            top: '-100px',
            right: '-120px',
          }}
        />

        <div
          style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            background: '#06B6D4',
            borderRadius: '50%',
            filter: 'blur(120px)',
            opacity: 0.15,
            bottom: '-120px',
            left: '-120px',
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
              display: 'inline-flex',
              padding: '10px 18px',
              borderRadius: '999px',
              background: 'rgba(59,130,246,.12)',
              border: '1px solid rgba(59,130,246,.25)',
              color: '#2563EB',
              fontWeight: '600',
              marginBottom: '25px',
            }}
          >
            🚀 START YOUR PROJECT
          </div>

          <h1
            style={{
              fontSize: 'clamp(42px,8vw,78px)',
              fontWeight: '900',
              lineHeight: '1.05',
              marginBottom: '25px',
            }}
          >
            Let's Build
            <br />
            Something Amazing
          </h1>

          <p
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              fontSize: '22px',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
            }}
          >
            Tell us about your project and we'll help
            transform your idea into a scalable digital solution.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section
        style={{
          padding: '120px 20px',
          background: '#F8FAFC',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px' }}>
            {/* Contact Form */}
            <div
              style={{
                background:
                  'rgba(255,255,255,.75)',

                backdropFilter: 'blur(25px)',

                WebkitBackdropFilter: 'blur(25px)',

                border:
                  '1px solid rgba(255,255,255,.5)',

                boxShadow:
                  '0 25px 80px rgba(15,23,42,.08)',

                border:
                  '1px solid rgba(37,99,235,.08)',

                boxShadow:
                  '0 30px 80px rgba(15,23,42,.08)',
                padding: '40px',
                borderRadius: '30px',
                border: '1px solid rgba(15,23,42,.08)',
                boxShadow: '0 20px 50px rgba(15,23,42,.06)',
              }}
            >
              <h2
                style={{
                  fontSize: '36px',
                  fontWeight: '800',
                  marginBottom: '30px',
                  color: '#0F172A',
                }}
              >
                Request A Quote
              </h2>
              <p
                style={{
                  color: '#64748B',
                  lineHeight: '1.8',
                  marginBottom: '30px'
                }}
              >
                Tell us about your goals and requirements.
                Our team will review your project and get
                back with the best solution.
              </p>
              {isSubmitted ? (
                <div style={{
                  backgroundColor: isDark ? '#064e3b' : '#D1FAE5',
                  border: `1px solid ${isDark ? '#059669' : '#10B981'}`,
                  color: isDark ? '#6ee7b7' : '#065F46',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  marginBottom: '24px'
                }}>
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : null}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', color: 'var(--text-color)', fontWeight: '500', marginBottom: '8px' }}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '16px 20px',
                        border: '1px solid rgba(15,23,42,.08)',
                        borderRadius: '14px',
                        background: '#FFFFFF',
                        color: '#0F172A',
                        fontSize: '15px',
                        transition: 'all .3s ease',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', color: 'var(--text-color)', fontWeight: '500', marginBottom: '8px' }}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '16px 20px',
                        border: '1px solid rgba(15,23,42,.08)',
                        borderRadius: '14px',
                        background: '#FFFFFF',
                        color: '#0F172A',
                        fontSize: '15px',
                        transition: 'all .3s ease',
                      }}
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '16px' }}>
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', color: 'var(--text-color)', fontWeight: '500', marginBottom: '8px' }}>Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '16px 20px',
                        border: '1px solid rgba(15,23,42,.08)',
                        borderRadius: '14px',
                        background: '#FFFFFF',
                        color: '#0F172A',
                        fontSize: '15px',
                        transition: 'all .3s ease',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={{ display: 'block', color: 'var(--text-color)', fontWeight: '500', marginBottom: '8px' }}>Business Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '16px 20px',
                        border: '1px solid rgba(15,23,42,.08)',
                        borderRadius: '14px',
                        background: '#FFFFFF',
                        color: '#0F172A',
                        fontSize: '15px',
                        transition: 'all .3s ease',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" style={{ display: 'block', color: 'var(--text-color)', fontWeight: '500', marginBottom: '8px' }}>Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: `1px solid var(--border-color)`,
                      borderRadius: '6px',
                      backgroundColor: 'var(--input-bg)',
                      color: 'var(--text-color)',
                      transition: 'all 0.3s'
                    }}
                  >
                    <option value="">Select Service</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="saas-development">Custom SaaS Development</option>
                    <option value="crm-erp">Business Management System</option>
                    <option value="website">Website Development</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="cybersecurity">Cybersecurity</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    style={{
                      display: 'block',
                      color: 'var(--text-color)',
                      fontWeight: '500',
                      marginBottom: '8px',
                    }}
                  >
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      background: 'var(--input-bg)',
                      color: 'var(--text-color)',
                    }}
                  >
                    <option value="">Select Budget</option>
                    <option>Under ₹25K</option>
                    <option>₹25K - ₹50K</option>
                    <option>₹50K - ₹1L</option>
                    <option>₹1L - ₹3L</option>
                    <option>₹3L+</option>
                    <option>Not Sure</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    style={{
                      display: 'block',
                      color: 'var(--text-color)',
                      fontWeight: '500',
                      marginBottom: '8px',
                    }}
                  >
                    Project Timeline
                  </label>

                  <select
                    id="timeline"
                    name="timeline"
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      background: 'var(--input-bg)',
                      color: 'var(--text-color)',
                    }}
                  >
                    <option value="">Select Timeline</option>
                    <option>Immediately</option>
                    <option>Within 1 Month</option>
                    <option>1-3 Months</option>
                    <option>3-6 Months</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', color: 'var(--text-color)', fontWeight: '500', marginBottom: '8px' }}>Tell Us About Your Project *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '16px 20px',
                      border: '1px solid rgba(15,23,42,.08)',
                      borderRadius: '14px',
                      background: '#FFFFFF',
                      color: '#0F172A',
                      fontSize: '15px',
                      minHeight: '160px',
                      resize: 'vertical',
                      transition: 'all .3s ease',
                    }}
                  ></textarea>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '20px',
                  }}
                >
                  {[
                    '✓ Free Consultation',
                    '✓ Custom Proposal',
                    '✓ No Commitment',
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '999px',
                        background: '#EFF6FF',
                        color: '#2563EB',
                        fontSize: '14px',
                        fontWeight: '600',
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',

                    padding: '18px',

                    borderRadius: '16px',

                    background:
                      'linear-gradient(135deg,#0F172A,#1E293B)',

                    color: '#fff',

                    fontWeight: '700',

                    fontSize: '16px',

                    border: 'none',

                    cursor: 'pointer',

                    transition: 'all .3s ease',
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div>
  <h2
    style={{
      fontSize: '36px',
      fontWeight: '800',
      marginBottom: '18px',
      color: '#0F172A',
    }}
  >
    Let's Talk
  </h2>

  <p
    style={{
      color: '#64748B',
      lineHeight: '1.8',
      marginBottom: '40px',
    }}
  >
    Have a project in mind? Reach out and we'll discuss
    the best strategy, timeline and solution.
  </p>

  <div
    style={{
      display: 'grid',
      gap: '20px',
    }}
  >
    {[
      {
        icon: '📍',
        title: 'Office Location',
        value:
          'Vatsala Tai Naik Nagar, S.G. Barve Marg, Chembur, Mumbai - 400071',
      },
      {
        icon: '📞',
        title: 'Phone',
        value: '+91 8652768171',
      },
      {
        icon: '✉️',
        title: 'Email',
        value: 'contact@ashsolutions.site',
      },
      {
        icon: '🕒',
        title: 'Business Hours',
        value:
          'Mon - Fri: 10AM - 7PM | Sat: 10AM - 4PM',
      },
    ].map((item) => (
      <div
        key={item.title}
        style={{
          background: '#FFFFFF',
          padding: '24px',
          borderRadius: '24px',
          border: '1px solid rgba(15,23,42,.08)',
          boxShadow:
            '0 10px 30px rgba(15,23,42,.04)',
          display: 'flex',
          gap: '18px',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '18px',
            background: '#EFF6FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            flexShrink: 0,
          }}
        >
          {item.icon}
        </div>

        <div>
          <h3
            style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0F172A',
              marginBottom: '6px',
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: '#64748B',
              lineHeight: '1.7',
            }}
          >
            {item.value}
          </p>
        </div>
      </div>
    ))}

    <div
      style={{
        background:
          'linear-gradient(135deg,#0F172A,#1E293B)',
        padding: '30px',
        borderRadius: '24px',
        color: '#fff',
      }}
    >
      <div
        style={{
          fontSize: '14px',
          opacity: 0.8,
          marginBottom: '10px',
        }}
      >
        RESPONSE TIME
      </div>

      <div
        style={{
          fontSize: '30px',
          fontWeight: '800',
          marginBottom: '8px',
        }}
      >
        Within 24 Hours
      </div>

      <p
        style={{
          color: '#CBD5E1',
          lineHeight: '1.7',
        }}
      >
        Most inquiries receive a response within a few
        hours during business days.
      </p>
    </div>

    <a
      href="https://wa.me/918652768171"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        textAlign: 'center',
        padding: '18px',
        borderRadius: '18px',
        background:
          'linear-gradient(135deg,#2563EB,#06B6D4)',
        color: '#fff',
        textDecoration: 'none',
        fontWeight: '700',
      }}
    >
      Chat On WhatsApp →
    </a>
  </div>
</div>

              {/* Map Placeholder
              <div style={{ marginTop: '32px' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '16px', color: 'var(--text-color)' }}>Find Us on Map</h3>
                <div style={{ 
                  backgroundColor: isDark ? '#1e293b' : '#E5E7EB', 
                  height: '256px', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: `1px solid var(--border-color)`
                }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Interactive Map</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section
  style={{
    position: 'relative',
    overflow: 'hidden',
    padding: '120px 20px',
    background:
      'linear-gradient(135deg,#0F172A,#1E293B)',
    color: '#fff',
  }}
>
  <div
    style={{
      position: 'absolute',
      width: '400px',
      height: '400px',
      background: '#3B82F6',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.12,
      top: '-100px',
      right: '-100px',
    }}
  />

  <div
    style={{
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
    }}
  >
    <div
      style={{
        color: '#60A5FA',
        fontWeight: '700',
        marginBottom: '15px',
      }}
    >
      READY TO START?
    </div>

    <h2
      style={{
        fontSize: 'clamp(36px,7vw,64px)',
        fontWeight: '900',
        lineHeight: '1.1',
        marginBottom: '25px',
      }}
    >
      Let's Turn Your Idea
      <br />
      Into Reality
    </h2>

    <p
      style={{
        color: '#CBD5E1',
        fontSize: '18px',
        lineHeight: '1.9',
        maxWidth: '750px',
        margin: '0 auto',
      }}
    >
      Whether you're building a website,
      SaaS platform, AI automation system,
      CRM, ERP or mobile app —
      we're ready to help.
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
          padding: '16px 28px',
          borderRadius: '14px',
          background:
            'linear-gradient(135deg,#2563EB,#06B6D4)',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: '700',
        }}
      >
        Talk To An Expert
      </a>

      <a
        href="mailto:contact@ashsolutions.site"
        style={{
          padding: '16px 28px',
          borderRadius: '14px',
          background: 'rgba(255,255,255,.08)',
          border:
            '1px solid rgba(255,255,255,.15)',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: '700',
        }}
      >
        Email Us
      </a>
    </div>
  </div>
</section>

      <style jsx>{`
        @media (min-width: 768px) {
          section:nth-of-type(2) > div > div {
            grid-template-columns: repeat(2, 1fr);
          }
          form > div:nth-of-type(1),
          form > div:nth-of-type(2) {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (hover: hover) {
          button:hover {
            background-color: var(--hover-bg);
          }
          input:focus,
          select:focus,
          textarea:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
        }
      `}</style>
    </div>
  );
}