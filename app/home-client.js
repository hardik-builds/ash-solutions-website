'use client';
import { useState, useEffect } from 'react';
import ReviewSlider from '@/components/ReviewSlider';
import Link from 'next/link';

export default function Home() {
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
        backgroundColor: '#020617',
        color: '#FFFFFF',
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
<section
  className="hero-section"
  style={{
    position: 'relative',
    overflow: 'hidden',
    padding: '140px 20px 120px',
    background:
      'linear-gradient(180deg,#F8FAFC 0%,#FFFFFF 100%)',
  }}
>
  {/* Glow Effects */}

  <div
    style={{
      position: 'absolute',
      width: '450px',
      height: '450px',
      background: '#3B82F6',
      borderRadius: '50%',
      filter: 'blur(140px)',
      opacity: 0.08,
      top: '-150px',
      right: '-150px',
    }}
  />

  <div
    style={{
      position: 'absolute',
      width: '350px',
      height: '350px',
      background: '#06B6D4',
      borderRadius: '50%',
      filter: 'blur(140px)',
      opacity: 0.06,
      bottom: '-150px',
      left: '-150px',
    }}
  />

  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      width: '100%',
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
        background: 'rgba(37,99,235,.08)',
        border: '1px solid rgba(37,99,235,.15)',
        color: '#2563EB',
        fontWeight: '600',
        marginBottom: '25px',
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
        color: '#0F172A',
        letterSpacing: '-2px',
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
        color: '#475569',
      }}
    >
      We build AI automation systems, custom SaaS
      platforms, websites, mobile applications and
      business solutions that help companies grow
      faster and operate smarter.
    </p>

    {/* CTA Buttons */}

    <div
      className="cta-buttons"
      style={{
        marginTop: '40px',
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
          padding: '16px 24px',
          borderRadius: '14px',
          textDecoration: 'none',
          background:
            'linear-gradient(135deg,#2563EB,#06B6D4)',
          color: '#fff',
          fontWeight: '700',
          boxShadow:
            '0 20px 40px rgba(59,130,246,.20)',
          width: '100%',
          maxWidth: '280px',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        Talk To An Expert
      </a>

      <Link
        href="/services"
        style={{
          padding: '16px 24px',
          borderRadius: '14px',
          textDecoration: 'none',
          border:
            '1px solid rgba(15,23,42,.08)',
          color: '#0F172A',
          fontWeight: '700',
          background: '#FFFFFF',
          width: '100%',
          maxWidth: '280px',
          textAlign: 'center',
          boxSizing: 'border-box',
          boxShadow:
            '0 10px 25px rgba(15,23,42,.05)',
        }}
      >
        Explore Services
      </Link>
    </div>

    {/* Trust Cards */}

    <div
      className="trust-grid"
      style={{
        marginTop: '70px',
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(220px,1fr))',
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
            padding: '22px',
            borderRadius: '20px',
            background: '#FFFFFF',
            border:
              '1px solid rgba(15,23,42,.06)',
            boxShadow:
              '0 10px 25px rgba(15,23,42,.04)',
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
   {/* Services Section */}
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
    {/* Heading */}

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
          color: '#475569',
          lineHeight: '1.8',
          fontSize: '18px',
        }}
      >
        We help businesses automate operations,
        build scalable software and create digital
        experiences that drive measurable growth.
      </p>
    </div>

    {/* Cards */}

    <div
      className="services-grid"
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
          icon: '🤖',
        },
        {
          title: 'Custom SaaS Development',
          desc: 'Subscription-based software platforms built specifically for your business model.',
          icon: '🚀',
        },
        {
          title: 'Business Management Systems',
          desc: 'Custom ERP, CRM and operational systems tailored to your workflow.',
          icon: '📊',
        },
        {
          title: 'Website Development',
          desc: 'Modern websites focused on performance, trust and conversion.',
          icon: '🌐',
        },
        {
          title: 'Mobile Applications',
          desc: 'Scalable Android and cross-platform applications for growing businesses.',
          icon: '📱',
        },
        {
          title: 'Cybersecurity Solutions',
          desc: 'Security assessments, consulting and protection for digital assets.',
          icon: '🔒',
        },
      ].map((service, index) => (
        <div
          key={index}
          style={{
            background: 'rgba(255,255,255,.75)',
            backdropFilter: 'blur(20px)',
            border:
              '1px solid rgba(15,23,42,.06)',
            borderRadius: '26px',
            padding: '32px',
            transition: 'all .35s ease',
            boxShadow:
              '0 10px 25px rgba(15,23,42,.04)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              'translateY(-8px)';

            e.currentTarget.style.boxShadow =
              '0 20px 40px rgba(37,99,235,.10)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              'translateY(0)';

            e.currentTarget.style.boxShadow =
              '0 10px 25px rgba(15,23,42,.04)';
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background:
                'linear-gradient(135deg,#2563EB,#06B6D4)',
              color: '#fff',
              fontSize: '26px',
              marginBottom: '20px',
            }}
          >
            {service.icon}
          </div>

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
            Learn More →
          </a>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}

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
          padding: '16px 30px',
          borderRadius: '14px',
          background:
            'linear-gradient(135deg,#2563EB,#06B6D4)',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: '700',
          boxShadow:
            '0 15px 35px rgba(37,99,235,.25)',
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
      className="why-container"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}
    >
      {/* Left Content */}

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
            color: '#0F172A',
            lineHeight: '1.1',
            marginBottom: '22px',
          }}
        >
          Technology Built
          <br />
          Around Business Growth
        </h2>

        <p
          style={{
            color: '#64748B',
            lineHeight: '1.9',
            fontSize: '18px',
            marginBottom: '20px',
          }}
        >
          Most development agencies focus only on
          building software. We focus on helping
          businesses increase efficiency, automate
          operations and create systems that scale.
        </p>

        <p
          style={{
            color: '#64748B',
            lineHeight: '1.9',
            fontSize: '18px',
            marginBottom: '35px',
          }}
        >
          Every solution is designed with long-term
          business goals, automation opportunities and
          future expansion in mind.
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
            boxShadow:
              '0 15px 35px rgba(37,99,235,.20)',
          }}
        >
          Talk To An Expert
        </a>
      </div>

      {/* Right Cards */}

      <div
        style={{
          display: 'grid',
          gap: '18px',
        }}
      >
        {[
          {
            title: 'AI-Powered Solutions',
            desc: 'Automate repetitive work and improve productivity through intelligent workflows.',
          },
          {
            title: 'Business-First Approach',
            desc: 'Every project is aligned with measurable business goals and outcomes.',
          },
          {
            title: 'Scalable Architecture',
            desc: 'Built to support future growth without costly rebuilds.',
          },
          {
            title: 'Long-Term Partnership',
            desc: 'Continuous support, maintenance and future enhancements.',
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: '#FFFFFF',
              border:
                '1px solid rgba(15,23,42,.06)',
              borderRadius: '22px',
              padding: '24px',
              boxShadow:
                '0 10px 25px rgba(15,23,42,.04)',
            }}
          >
            <h3
              style={{
                color: '#0F172A',
                fontSize: '20px',
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
        ))}
      </div>
    </div>

    {/* Stats Section */}

    <div
      className="why-stats"
      style={{
        marginTop: '70px',
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(220px,1fr))',
        gap: '20px',
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
            background: '#F8FAFC',
            border:
              '1px solid rgba(15,23,42,.06)',
            borderRadius: '22px',
            padding: '26px',
            textAlign: 'center',
            boxShadow:
              '0 10px 25px rgba(15,23,42,.04)',
          }}
        >
          <div
            style={{
              fontSize: '38px',
              fontWeight: '900',
              color: '#2563EB',
              marginBottom: '8px',
            }}
          >
            {item.value}
          </div>

          <div
            style={{
              color: '#64748B',
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
      {/* Our Process Section */}

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
    {/* Heading */}

    <div
      style={{
        textAlign: 'center',
        marginBottom: '80px',
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
          color: '#0F172A',
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

    {/* Process Cards */}

    <div
      className="process-grid"
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(320px,1fr))',
        gap: '24px',
      }}
    >
      {[
        {
          step: '01',
          title: 'Discovery',
          desc: 'Understand business goals, challenges and project requirements.',
        },
        {
          step: '02',
          title: 'Strategy',
          desc: 'Create architecture, roadmap and execution plan.',
        },
        {
          step: '03',
          title: 'Development',
          desc: 'Build scalable solutions using modern technologies.',
        },
        {
          step: '04',
          title: 'Launch',
          desc: 'Deploy, optimize and ensure reliability.',
        },
        {
          step: '05',
          title: 'Support',
          desc: 'Continuous maintenance, improvements and scaling.',
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: 'rgba(255,255,255,.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(15,23,42,.06)',
            borderRadius: '28px',
            padding: '32px',
            boxShadow:
              '0 10px 25px rgba(15,23,42,.04)',
            transition: '.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              'translateY(-8px)';

            e.currentTarget.style.boxShadow =
              '0 20px 40px rgba(37,99,235,.10)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              'translateY(0)';

            e.currentTarget.style.boxShadow =
              '0 10px 25px rgba(15,23,42,.04)';
          }}
        >
          <div
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '20px',
              background:
                'linear-gradient(135deg,#2563EB,#06B6D4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: '900',
              fontSize: '24px',
              marginBottom: '22px',
            }}
          >
            {item.step}
          </div>

          <h3
            style={{
              fontSize: '24px',
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

    {/* Bottom CTA */}

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
          padding: '16px 30px',
          borderRadius: '14px',
          background:
            'linear-gradient(135deg,#2563EB,#06B6D4)',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: '700',
          boxShadow:
            '0 15px 35px rgba(37,99,235,.25)',
        }}
      >
        Start Your Project
      </a>
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
@media (max-width: 900px) {
  .why-container {
    grid-template-columns: 1fr !important;
    gap: 35px !important;
  }
}

@media (max-width: 640px) {
  .why-stats {
    grid-template-columns: 1fr !important;
  }
}
  @media (max-width:768px){

  .process-grid{
    grid-template-columns:1fr !important;
  }

}
  @media (max-width:640px){

  .cta-buttons{
    flex-direction:column !important;
    align-items:center !important;
    width:100%;
  }

  .cta-buttons a{
    width:100%;
    max-width:320px;
    text-align:center;
  }

}
  @media (max-width:640px){

  .why-btn{
    display:block !important;
    width:100%;
    max-width:320px;
    text-align:center;
    margin:auto;
  }

}
      `}</style>
    </div>
  );
}