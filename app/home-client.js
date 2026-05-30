'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import ReviewSlider from '@/components/ReviewSlider';
import Link from 'next/link';

export default function Home() {
  const { isDark } = useTheme();
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='page-enter'
      style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        minHeight: '100vh',
        transition:
          'opacity .8s ease, transform .8s ease',
        opacity: pageVisible ? 1 : 0,
        transform: pageVisible
          ? 'translateY(0)'
          : 'translateY(30px)',
      }}
    >
      {/* Hero Section */}
      <section className="hero-section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '140px 20px 120px',
          background:
            isDark
              ? 'linear-gradient(180deg,#020617,#0F172A)'
              : 'linear-gradient(180deg,#F8FAFC,#FFFFFF)',
        }}
      >
        {/* Gradient Blobs */}

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

        <div className='why-content'
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          {/* Badge */}

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 18px',
              borderRadius: '999px',
              background: 'rgba(59,130,246,.12)',
              border: '1px solid rgba(59,130,246,.25)',
              marginBottom: '25px',
              color: '#3B82F6',
              fontWeight: '600',
            }}
          >
            🚀 AI • SaaS • Automation
          </div>

          {/* Heading */}

          <h1
            style={{
              fontSize: 'clamp(42px,8vw,78px)',
              fontWeight: '900',
              lineHeight: '1.05',
              marginBottom: '25px',
              color: 'var(--text-color)',
            }}
          >
            Transform Your Business
            <br />
            With Smart Digital Solutions
          </h1>

          {/* Description */}

          <p
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              fontSize: 'clamp(18px,2.5vw,24px)',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
            }}
          >
            We build AI automation systems, custom SaaS
            platforms, websites, mobile applications and
            business solutions that help companies grow
            faster and operate smarter.
          </p>

          {/* Buttons */}

          <div className="cta-buttons"
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
                textDecoration: 'none',
                background:
                  'linear-gradient(135deg,#3B82F6,#06B6D4)',
                color: '#fff',
                fontWeight: '700',
                boxShadow:
                  '0 20px 40px rgba(59,130,246,.3)',
              }}
            >
              Talk to an Expert
            </a>

            <Link
              href="/services"
              style={{
                padding: '16px 28px',
                borderRadius: '14px',
                textDecoration: 'none',
                border:
                  '1px solid rgba(255,255,255,.15)',
                color: 'var(--text-color)',
                fontWeight: '700',
                background: 'var(--card-bg)',
              }}
            >
              Explore Services
            </Link>
          </div>

          {/* Trust Badges */}

          <div className="trust-grid"
            style={{
              marginTop: '70px',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(180px,1fr))',
              gap: '20px',
            }}
          >
            {[
              'AI Automation',
              'Custom SaaS',
              'Web Development',
              'Mobile Apps',
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: '20px',
                  borderRadius: '18px',
                  background: 'var(--card-bg)',
                  border:
                    '1px solid var(--border-color)',
                  fontWeight: '600',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          padding: '120px 20px',
          background: 'var(--secondary-bg)',
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
              We help businesses automate operations,
              build scalable software and create digital
              experiences that drive measurable growth.
            </p>
          </div>

          <div className="services-grid"
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(320px,1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'AI Automation',
                desc: 'Automate repetitive workflows, lead management, customer support and business operations.',
              },
              {
                title: 'Custom SaaS Development',
                desc: 'Subscription-based software platforms built specifically for your business model.',
              },
              {
                title: 'Business Management Systems',
                desc: 'Custom ERP, CRM and operational systems tailored to your workflow.',
              },
              {
                title: 'Website Development',
                desc: 'Modern websites focused on performance, trust and conversion.',
              },
              {
                title: 'Mobile Applications',
                desc: 'Scalable Android and cross-platform applications for growing businesses.',
              },
              {
                title: 'Cybersecurity Solutions',
                desc: 'Security assessments, consulting and protection for digital assets.',
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--card-bg)',
                  border:
                    '1px solid rgba(15,23,42,.08)',
                  borderRadius: '24px',
                  padding: '32px',
                  transition: '.3s',
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
                    color: 'var(--text-color)',
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
                  Learn More →
                </a>
              </div>
            ))}
          </div>

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
                padding: '16px 28px',
                borderRadius: '14px',
                background:
                  'linear-gradient(135deg,#2563EB,#06B6D4)',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: '700',
              }}
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section
        style={{
          padding: '140px 20px',
          background: 'var(--card-bg)',
        }}
      >
        <div className='why-container'
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns:'1.1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Side */}

          <div>
            <div
              style={{
                color: '#2563EB',
                fontWeight: '700',
                marginBottom: '12px',
                letterSpacing: '1px',
              }}
            >
              WHY ASH SOLUTIONS
            </div>

            <h2
              style={{
                fontSize: 'clamp(36px,6vw,58px)',
                fontWeight: '900',
                color: 'var(--text-color)',
                marginBottom: '20px',
                lineHeight: '1.1',
              }}
            >
              We Build Solutions,
              Not Just Software
            </h2>

            <p
              style={{
                color: '#64748B',
                lineHeight: '1.9',
                fontSize: '18px',
                marginBottom: '20px',
              }}
            >
              Most agencies focus on delivering a website.
              We focus on helping businesses improve efficiency,
              automate processes and create scalable systems.
            </p>

            <p
              style={{
                color: '#64748B',
                lineHeight: '1.9',
                fontSize: '18px',
                marginBottom: '35px',
              }}
            >
              Every solution is approached with business goals,
              growth potential and long-term scalability in mind.
            </p>

            <a
              href="https://wa.me/918652768171"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
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

            {/* Stats */}
          </div>

          {/* Right Side */}

          <div className='why-right'
            style={{
              display: 'grid',
              gap: '20px',
            }}
          >
            {[
              {
                title: 'AI-Powered Solutions',
                desc:
                  'Automation and intelligent workflows that save time and improve productivity.',
              },
              {
                title: 'Business-Focused Approach',
                desc:
                  'Every solution is aligned with business growth and operational efficiency.',
              },
              {
                title: 'Scalable Architecture',
                desc:
                  'Built to grow with your business without costly rebuilds later.',
              },
              {
                title: 'Long-Term Partnership',
                desc:
                  'Continuous support, upgrades and future enhancements.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'var(--card-bg)',
                  border:
                    '1px solid rgba(15,23,42,.08)',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow:
                    '0 8px 25px rgba(15,23,42,.04)',
                }}
              >
                <h3
                  style={{
                    color: 'var(--text-color)',
                    fontWeight: '700',
                    marginBottom: '10px',
                    fontSize: '20px',
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
           <div className="why-stats"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gap: '16px',
                marginTop: '40px',
              }}
            >
              {[
                {
                  value: '7+',
                  label: 'Core Services',
                },
                {
                  value: 'AI',
                  label: 'Powered Solutions',
                },
                {
                  value: '24/7',
                  label: 'Support',
                },
                {
                  value: '100%',
                  label: 'Custom Built',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'var(--secondary-bg)',
                    border:
                      '1px solid rgba(15,23,42,.08)',
                    borderRadius: '18px',
                    padding: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '30px',
                      fontWeight: '800',
                      color: '#2563EB',
                      marginBottom: '6px',
                    }}
                  >
                    {item.value}
                  </div>

                  <div
                    style={{
                      color: '#64748B',
                      fontSize: '14px',
                      lineHeight: '1.5',
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
      {/* how we work  */}
      <section
        style={{
          padding: '140px 20px',
          background: 'var(--secondary-bg)',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: '90px',
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
              OUR PROCESS
            </div>

            <h2
              style={{
                fontSize: 'clamp(36px,6vw,58px)',
                fontWeight: '900',
                color: 'var(--text-color)',
                marginBottom: '18px',
              }}
            >
              From Idea To Deployment
            </h2>

            <p
              style={{
                maxWidth: '700px',
                margin: '0 auto',
                color: '#64748B',
                lineHeight: '1.9',
                fontSize: '18px',
              }}
            >
              Every project follows a structured roadmap
              focused on quality, scalability and business outcomes.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '24px',
            }}
          >
            {[
              {
                step: '01',
                title: 'Discovery',
                desc: 'Understand goals, business challenges and project requirements.',
              },
              {
                step: '02',
                title: 'Strategy',
                desc: 'Create the roadmap, architecture and implementation plan.',
              },
              {
                step: '03',
                title: 'Development',
                desc: 'Build the solution using modern technologies and best practices.',
              },
              {
                step: '04',
                title: 'Launch',
                desc: 'Deploy, test and optimize for performance and reliability.',
              },
              {
                step: '05',
                title: 'Support',
                desc: 'Continuous maintenance, improvements and future scaling.',
              },
            ].map((item, index) => (
              <div className='process-card'
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '30px',
                  background: 'var(--card-bg)',
                  border: '1px solid rgba(15,23,42,.08)',
                  borderRadius: '24px',
                  padding: '28px',
                  boxShadow: '0 8px 25px rgba(15,23,42,.04)',
                }}
              >
                <div
                  style={{
                    minWidth: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    background:
                      'linear-gradient(135deg,#2563EB,#06B6D4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: '900',
                    fontSize: '26px',
                  }}
                >
                  {item.step}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: '24px',
                      color: 'var(--text-color)',
                      fontWeight: '700',
                      marginBottom: '10px',
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* premium stats section */}

      <ReviewSlider />

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
        {/* Glow Effects */}

        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: '#3B82F6',
            borderRadius: '50%',
            filter: 'blur(120px)',
            opacity: 0.15,
            top: '-120px',
            right: '-100px',
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
              color: '#60A5FA',
              fontWeight: '700',
              marginBottom: '15px',
              letterSpacing: '1px',
            }}
          >
            LET'S BUILD SOMETHING AMAZING
          </div>

          <h2
            style={{
              fontSize: 'clamp(36px,7vw,64px)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '25px',
            }}
          >
            Your Next Growth Engine
            <br />
            Starts Here
          </h2>

          <p
            style={{
              maxWidth: '750px',
              margin: '0 auto',
              fontSize: '18px',
              lineHeight: '1.9',
              color: '#CBD5E1',
            }}
          >
            Whether you need AI automation,
            a custom SaaS platform,
            a business management system,
            a website or a mobile app,
            we're ready to help you scale.
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
                textDecoration: 'none',
                background:
                  'linear-gradient(135deg,#3B82F6,#06B6D4)',
                color: '#fff',
                fontWeight: '700',
                boxShadow:
                  '0 20px 40px rgba(59,130,246,.3)',
              }}
            >
              Talk to an Expert
            </a>

            <Link
              href="/contact"
              style={{
                padding: '16px 28px',
                borderRadius: '14px',
                textDecoration: 'none',
                background:
                  'rgba(255,255,255,.08)',
                border:
                  '1px solid rgba(255,255,255,.15)',
                color: '#fff',
                fontWeight: '700',
                backdropFilter: 'blur(20px)',
              }}
            >
              Get Custom Quote
            </Link>
          </div>

          {/* Trust Line */}

          <div
            style={{
              marginTop: '40px',
              color: '#94A3B8',
              fontSize: '14px',
            }}
          >
            AI Automation • SaaS Development • Websites • Apps • Cybersecurity
          </div>
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
  @media(max-width:768px){
  .process-card{
    flex-direction:column;
    text-align:center;
  }
}
  @media(max-width:768px){
  .process-card{
    flex-direction:column;
    text-align:center;
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
}
  @media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr !important;
  }
      }
  @media (max-width: 640px) {
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-buttons a {
    width: 100%;
    max-width: 320px;
    text-align: center;
  }
}
  @media (max-width: 768px) {
  .process-card {
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 24px !important;
  }

  .process-card div:first-child {
    min-width: 70px !important;
    width: 70px !important;
    height: 70px !important;
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
      `}</style>
    </div>
  );
}