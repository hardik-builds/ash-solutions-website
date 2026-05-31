'use client';
import { useState } from 'react';

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
  padding: '18px 20px',
  border: '1px solid #E2E8F0',
  borderRadius: '16px',
  boxSizing: 'border-box',
  fontSize: '16px',
  background: '#FFFFFF',
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
      'linear-gradient(180deg,#F8FBFF,#FFFFFF)',
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
        color: '#0F172A',
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
        fontSize: 'clamp(17px,2vw,22px)',
        lineHeight: '1.8',
        color: '#64748B',
      }}
    >
      Tell us about your project and we'll help
      transform your idea into a scalable website,
      AI automation system, SaaS platform or
      business management solution.
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
        style={{
          padding: '16px 28px',
          borderRadius: '14px',
          textDecoration: 'none',
          background:
            'linear-gradient(135deg,#2563EB,#06B6D4)',
          color: '#fff',
          fontWeight: '700',
          boxShadow:
            '0 15px 35px rgba(37,99,235,.25)',
        }}
      >
        Talk To An Expert
      </a>

      <a
        href="#contact-form"
        style={{
          padding: '16px 28px',
          borderRadius: '14px',
          textDecoration: 'none',
          background: '#FFFFFF',
          border: '1px solid #CBD5E1',
          color: '#0F172A',
          fontWeight: '700',
        }}
      >
        Request A Quote
      </a>
    </div>

    <div
      className="hero-stats"
      style={{
        marginTop: '60px',
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(180px,1fr))',
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
          style={{
            padding: '20px',
            borderRadius: '18px',
            background: '#FFFFFF',
            border:
              '1px solid rgba(15,23,42,.08)',
            boxShadow:
              '0 10px 30px rgba(15,23,42,.05)',
            fontWeight: '600',
            color: '#0F172A',
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
    padding: '120px 20px',
    background: '#F8FAFC',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
    }}
  >
    <div
      style={{
        textAlign: 'center',
        marginBottom: '70px',
      }}
    >
      <div
        style={{
          color: '#2563EB',
          fontWeight: '700',
          marginBottom: '12px',
          letterSpacing: '1px',
        }}
      >
        CONTACT US
      </div>

      <h2
        style={{
          fontSize: 'clamp(34px,6vw,58px)',
          fontWeight: '900',
          color: '#0F172A',
          marginBottom: '18px',
        }}
      >
        Let's Discuss Your Project
      </h2>

      <p
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          color: '#64748B',
          lineHeight: '1.8',
        }}
      >
        Tell us about your goals and we'll help you choose the right solution for your business.
      </p>
    </div>

    <div
      className="contact-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 0.9fr',
        gap: '30px',
        alignItems: 'start',
      }}
    >
      {/* FORM CARD */}
      <div
        id="contact-form"
        style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '45px',
          border: '1px solid rgba(15,23,42,.08)',
          boxShadow: '0 25px 80px rgba(15,23,42,.08)',
        }}
      >
        {isSubmitted && (
          <div
            style={{
              background: '#DCFCE7',
              color: '#166534',
              padding: '16px',
              borderRadius: '14px',
              marginBottom: '25px',
            }}
          >
            Thank you! We have received your inquiry.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <div
            className="form-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

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

          <div
            className="form-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="text"
              name="company"
              placeholder="Business Name"
              value={formData.company}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Service</option>
            <option value="website">Website Development</option>
            <option value="saas">Custom SaaS Development</option>
            <option value="automation">AI Automation</option>
            <option value="crm">Business Management System</option>
            <option value="mobile">Mobile App Development</option>
            <option value="security">Cybersecurity</option>
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
              minHeight: '180px',
              resize: 'vertical',
            }}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '20px',
              border: 'none',
              borderRadius: '18px',
              background:
                'linear-gradient(135deg,#2563EB,#06B6D4)',
              color: '#FFFFFF',
              fontWeight: '800',
              fontSize: '16px',
              cursor: 'pointer',
              boxShadow:
                '0 20px 40px rgba(37,99,235,.25)',
            }}
          >
            {isSubmitting
              ? 'Sending...'
              : 'Get Free Consultation'}
          </button>
        </form>
      </div>

      {/* WHATSAPP CARD */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '35px',
          border: '1px solid rgba(15,23,42,.08)',
          boxShadow: '0 25px 80px rgba(15,23,42,.08)',
          position: 'sticky',
          top: '100px',
        }}
      >
        <div
          style={{
            color: '#2563EB',
            fontWeight: '700',
            marginBottom: '12px',
          }}
        >
          QUICK CONTACT
        </div>

        <h3
          style={{
            fontSize: '30px',
            fontWeight: '800',
            color: '#0F172A',
            marginBottom: '16px',
          }}
        >
          Chat On WhatsApp
        </h3>

        <p
          style={{
            color: '#64748B',
            lineHeight: '1.8',
            marginBottom: '25px',
          }}
        >
          Need a faster response? Connect directly with our team and discuss your project instantly.
        </p>

        <a
          href="https://wa.me/918652768171"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '16px',
            borderRadius: '16px',
            background:
              'linear-gradient(135deg,#22C55E,#16A34A)',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '700',
            marginBottom: '30px',
          }}
        >
          Open WhatsApp
        </a>

        <div
          style={{
            color: '#64748B',
            lineHeight: '2',
          }}
        >
          📧 contact@ashsolutions.site
          <br />
          📱 +91 86527 68171
          <br />
          ⏱ Response Within 24 Hours
        </div>
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
      width: '450px',
      height: '450px',
      background: '#2563EB',
      borderRadius: '50%',
      filter: 'blur(140px)',
      opacity: 0.15,
      top: '-150px',
      right: '-120px',
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
        padding: '10px 18px',
        borderRadius: '999px',
        background: 'rgba(37,99,235,.12)',
        border: '1px solid rgba(37,99,235,.25)',
        color: '#60A5FA',
        fontWeight: '600',
        marginBottom: '24px',
      }}
    >
      🚀 LET'S BUILD TOGETHER
    </div>

    <h2
      style={{
        fontSize: 'clamp(38px,6vw,64px)',
        fontWeight: '900',
        lineHeight: '1.1',
        marginBottom: '24px',
      }}
    >
      Ready To Start
      <br />
      Your Project?
    </h2>

    <p
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        color: '#CBD5E1',
        fontSize: '20px',
        lineHeight: '1.8',
      }}
    >
      Whether you need a website, AI automation,
      SaaS platform, CRM, ERP or mobile application,
      our team is ready to help turn your vision into reality.
    </p>

    <div
  className="contact-cta-buttons"
  style={{
    marginTop: '45px',
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
    width: '100%',
  }}
>
      <a
        href="https://wa.me/918652768171"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '16px 30px',
          borderRadius: '14px',
          textDecoration: 'none',
          background:
            'linear-gradient(135deg,#2563EB,#06B6D4)',
          color: '#fff',
          fontWeight: '700',
          boxShadow:
            '0 15px 35px rgba(37,99,235,.25)',
        }}
      >
        Talk To An Expert
      </a>

      <a
        href="mailto:contact@ashsolutions.site"
        style={{
          padding: '16px 30px',
          borderRadius: '14px',
          textDecoration: 'none',
          background: 'rgba(255,255,255,.06)',
          border: '1px solid rgba(255,255,255,.12)',
          color: '#fff',
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
          @media (max-width:768px){

  .hero-stats{
    grid-template-columns:1fr 1fr !important;
  }

}

@media (max-width:480px){

  .contact-hero-buttons a{
    width:100%;
    max-width:320px;
    text-align:center;
  }

}
  @media (max-width:992px){

  .contact-grid{
    grid-template-columns:1fr !important;
  }

}

@media (max-width:768px){

  form > div:nth-of-type(1),
  form > div:nth-of-type(2){
    grid-template-columns:1fr !important;
  }

  #contact-form{
    padding:28px !important;
  }

}
  .contact-grid{
  display:grid;
}

@media (max-width:992px){

  .contact-grid{
    grid-template-columns:1fr !important;
  }

}

@media (max-width:768px){

  .form-row{
    grid-template-columns:1fr !important;
  }

  #contact-form{
    padding:28px !important;
  }

}

 @media (max-width:640px){

  .contact-cta-buttons{
    flex-direction:column;
    align-items:center;
    width:100%;
  }

  .contact-cta-buttons a{
    width:100%;
    max-width:280px;
    text-align:center;
    box-sizing:border-box;
  }

}

}

      `}</style>
    </div>
  );
}