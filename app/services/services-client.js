'use client'
import Link from 'next/link';
import { useState } from 'react';


const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building responsive, scalable, and visually appealing websites tailored to your business needs.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '48px', width: '48px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" /></svg>,
    features: [
      'Responsive Design',
      'Custom Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'Progressive Web Apps',
      'API Integration'
    ],
    pricing: 'Starting at ₹15,000',
    duration: '2-8 weeks'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with advanced security solutions and proactive threat management.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '48px', width: '48px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    features: [
      'Security Audits',
      'Penetration Testing',
      'Firewall Configuration',
      'Data Encryption',
      'Security Training',
      '24/7 Monitoring'
    ],
    pricing: 'Starting at ₹15,000/month',
    duration: 'Ongoing'
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Boosting your online visibility with strategic SEO techniques that drive organic traffic.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '48px', width: '48px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Content Strategy',
      'Link Building',
      'Analytics & Reporting'
    ],
    pricing: 'Starting at ₹8,000/month',
    duration: '3-6 months'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Driving business growth with data-driven strategies and innovative digital campaigns.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '48px', width: '48px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    features: [
      'Search-Engine optimization(SEO)',
      'Pay-Per Click Advertising(PPC)',
      'Social Media Marketing',
      'Content Marketing',
      'Analytics & Reporting'
    ],
    pricing: 'Starting at ₹40,000',
    duration: '2-6 months'
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Developing custom mobile applications that deliver exceptional user experiences across all platforms.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '48px', width: '48px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'UI/UX Design',
      'App Store Optimization',
      'Maintenance & Support'
    ],
    pricing: 'Starting at ₹3,00,000',
    duration: '1-4 months'
  },
  // {
  //   id: 'cloud-solutions',
  //   title: 'Cloud Solutions',
  //   description: 'Implementing scalable cloud infrastructure to optimize performance and reduce operational costs.',
  //   icon: <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '48px', width: '48px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  //   features: [
  //     'Cloud Migration',
  //     'AWS/Azure/GCP Setup',
  //     'Cloud Security',
  //     'Backup Solutions',
  //     'Cost Optimization',
  //     '24/7 Support'
  //   ],
  //   pricing: 'Starting at $1,499/month',
  //   duration: '1-3 months'
  // }
];

export default function Services() {


  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#0F172A', transition: 'background-color 0.3s, color 0.3s', overflow: 'hidden' }}>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '140px 20px 140px',
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
            🚀 SERVICES
          </div>

          <h1
            style={{
              fontSize: 'clamp(42px,8vw,78px)',
              fontWeight: '900',
              lineHeight: '1.05',
              color: 'var(--text-color)',
              marginBottom: '25px',
            }}
          >
            Solutions Built
            <br />
            For Growth
          </h1>

          <p
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              fontSize: '22px',
              lineHeight: '1.8',
              color: '#64748B'
            }}
          >
            From AI automation and SaaS platforms to
            business systems, websites and mobile apps —
            we build technology that helps businesses scale.
          </p>

          <div
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
                padding: '14px 24px',
                width: '100%',
                maxWidth: '280px',
                textAlign: 'center',
                borderRadius: '14px',
                textDecoration: 'none',
                background:
                  'linear-gradient(135deg,#2563EB,#06B6D4)',
                color: '#fff',
                fontWeight: '700',
              }}
            >
              Talk To An Expert
            </a>

            <Link
              href="/contact"
              style={{
                padding: '14px 24px',
                width: '100%',
                maxWidth: '280px',
                textAlign: 'center',
                borderRadius: '14px',
                textDecoration: 'none',
                background: '#FFFFFF',
                color: '#0F172A',
                border: '1px solid #CBD5E1',
                fontWeight: '700',
              }}
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
      {/* Services Grid */}
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
              WHAT WE BUILD
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px,6vw,58px)',
                fontWeight: '900',
                color: '#0F172A',
                marginBottom: '18px',
              }}
            >
              Technology Built For Growth
            </h2>

            <p
              style={{
                maxWidth: '700px',
                margin: '0 auto',
                color: '#64748B',
                lineHeight: '1.8',
              }}
            >
              Solutions designed to automate operations,
              improve efficiency and help businesses scale.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(280px,1fr))',
              gap: '32px',
            }}
          >
            {[
              {
                title: 'AI Automation',
                desc: 'Automate workflows, lead management, customer support and repetitive business tasks.',
              },
              {
                title: 'Custom SaaS Development',
                desc: 'Build scalable SaaS products with subscriptions, dashboards and automation.',
              },
              {
                title: 'Business Management Systems',
                desc: 'Custom ERP, CRM and operational systems tailored to your workflow.',
              },
              {
                title: 'Website Development',
                desc: 'Modern websites built for trust, performance and conversions.',
              },
              {
                title: 'Mobile Applications',
                desc: 'Android and cross-platform apps designed for business growth.',
              },
              {
                title: 'Cybersecurity Solutions',
                desc: 'Security assessments, consulting and protection for digital assets.',
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  background: '#FFFFFF',
                  border:
                    '1px solid rgba(15,23,42,.08)',
                  borderRadius: '28px',
                  padding: '36px',
                  transition: 'all .35s ease',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(-8px)';

                  e.currentTarget.style.boxShadow =
                    '0 20px 40px rgba(15,23,42,.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    'none';
                }}
              >
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '14px',
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: '#64748B',
                    lineHeight: '1.8',
                  }}
                >
                  {service.desc}
                </p>

                <a
                  href="https://wa.me/918652768171"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '20px',
                    color: '#2563EB',
                    textDecoration: 'none',
                    fontWeight: '700',
                  }}
                >
                  Discuss Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Businesses Choose Us */}
      <section
        style={{
          padding: '120px 20px',
          background: '#FFFFFF',
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
              WHY CHOOSE US
            </div>

            <h2
              style={{
                fontSize: 'clamp(34px,6vw,58px)',
                fontWeight: '900',
                color: '#0F172A',
                marginBottom: '18px',
              }}
            >
              Technology With A Business Mindset
            </h2>

            <p
              style={{
                maxWidth: '750px',
                margin: '0 auto',
                color: '#64748B',
                lineHeight: '1.8',
              }}
            >
              We don't just build software. We help businesses
              improve operations, automate workflows and create
              scalable systems for long-term growth.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(240px,1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'Business First',
                desc: 'Every solution is designed around business goals and measurable outcomes.',
              },
              {
                title: 'AI-Driven Innovation',
                desc: 'Leverage automation and AI to reduce manual work and improve efficiency.',
              },
              {
                title: 'Scalable Architecture',
                desc: 'Built to support future growth without requiring complete rebuilds.',
              },
              {
                title: 'Long-Term Partnership',
                desc: 'Ongoing support, maintenance and continuous improvement after launch.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid rgba(15,23,42,.08)',
                  borderRadius: '24px',
                  padding: '32px',
                }}
              >
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '12px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: '#64748B',
                    lineHeight: '1.8',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
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

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', animation: 'fadeInUp 0.8s ease-out' }}>Ready To Scale Your Business?</h2>
          <p style={{ fontSize: '20px', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', opacity: 0.9, animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
            Whether you need AI automation,
            a custom SaaS platform,
            a website, mobile application or
            business management system,
            we're ready to build it.
          </p>
          <Link
            href="/contact"
            style={{
              background:
                'linear-gradient(135deg,#2563EB,#06B6D4)',
              color: '#FFFFFF',
              padding: '16px 32px',
              borderRadius: '14px',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '18px',
              display: 'inline-block',
              boxShadow:
                '0 10px 25px rgba(37,99,235,.25)',
            }}
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      <style jsx>{` 
         @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
    @media (max-width:768px){

  section{
    padding-left:16px !important;
    padding-right:16px !important;
  }

  h1{
    line-height:1.15 !important;
  }

  h2{
    line-height:1.2 !important;
  }

}
      `}</style>
    </div>
  );
} 