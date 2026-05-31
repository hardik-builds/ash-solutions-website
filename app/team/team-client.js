// app/team/team-client.js
'use client';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaDribbble, FaRocket } from 'react-icons/fa';

export default function TeamClient({ teamData }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-color, #f9fafb)',
      color: 'var(--text-color, #111827)'
    }}>
  {/* Hero Section */}
<section
  style={{
    position: 'relative',
    overflow: 'hidden',
    padding: '140px 20px 120px',
    background: 'linear-gradient(180deg,#F8FBFF,#FFFFFF)',
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
      top: '-120px',
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
        background: 'rgba(59,130,246,.10)',
        border: '1px solid rgba(59,130,246,.20)',
        color: '#2563EB',
        fontWeight: '700',
        marginBottom: '24px',
      }}
    >
      👥 OUR TEAM
    </div>

    <h1
      style={{
        fontSize: 'clamp(40px,8vw,78px)',
        fontWeight: '900',
        lineHeight: '1.05',
        color: '#0F172A',
        marginBottom: '24px',
      }}
    >
      Meet The Team
      <br />
      Behind ASH Solutions
    </h1>

    <p
      style={{
        maxWidth: '850px',
        margin: '0 auto',
        fontSize: 'clamp(16px,3vw,22px)',
        lineHeight: '1.8',
        color: '#64748B',
      }}
    >
      A passionate team focused on building
      AI-powered software, automation systems,
      SaaS products and business solutions
      designed for growth.
    </p>

    <div
      style={{
        marginTop: '60px',
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(220px,1fr))',
        gap: '20px',
      }}
    >
      {[
        {
          number: 'AI',
          label: 'Automation Solutions',
        },
        {
          number: 'SaaS',
          label: 'Platform Development',
        },
        {
          number: '24/7',
          label: 'Support Mindset',
        },
        {
          number: '100%',
          label: 'Client Focused',
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '28px',
            border: '1px solid rgba(15,23,42,.08)',
            boxShadow:
              '0 15px 35px rgba(15,23,42,.05)',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: '900',
              color: '#2563EB',
              marginBottom: '8px',
            }}
          >
            {item.number}
          </div>

          <div
            style={{
              color: '#64748B',
              fontWeight: '600',
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
        marginBottom: '80px',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '10px 18px',
          borderRadius: '999px',
          background: 'rgba(59,130,246,.10)',
          border: '1px solid rgba(59,130,246,.20)',
          color: '#2563EB',
          fontWeight: '700',
          marginBottom: '20px',
        }}
      >
        LEADERSHIP TEAM
      </div>

      <h2
        style={{
          fontSize: 'clamp(34px,6vw,58px)',
          fontWeight: '900',
          color: '#0F172A',
          marginBottom: '18px',
          lineHeight: '1.1',
        }}
      >
        Meet The People
        <br />
        Behind The Vision
      </h2>

      <p
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          color: '#64748B',
          lineHeight: '1.8',
          fontSize: '17px',
        }}
      >
        Combining technology, innovation and
        business strategy to build scalable
        digital solutions for modern businesses.
      </p>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(320px,1fr))',
        gap: '30px',
      }}
    >
      {teamData.teamMembers.map((member) => (
        <div
          key={member.id}
          style={{
            background: '#FFFFFF',
            borderRadius: '32px',
            padding: '36px',
            border: '1px solid rgba(15,23,42,.08)',
            boxShadow:
              '0 15px 40px rgba(15,23,42,.05)',
            textAlign: 'center',
            transition: 'all .3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              'translateY(-8px)';
            e.currentTarget.style.boxShadow =
              '0 25px 50px rgba(15,23,42,.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              'translateY(0)';
            e.currentTarget.style.boxShadow =
              '0 15px 40px rgba(15,23,42,.05)';
          }}
        >
          {/* Profile Image */}
          <div
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto 28px',
              border: '6px solid #FFFFFF',
              boxShadow:
                '0 20px 40px rgba(15,23,42,.10)',
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
              }}
            />
          </div>

          {/* Name */}
          <h3
            style={{
              fontSize: 'clamp(24px,4vw,30px)',
              fontWeight: '800',
              color: '#0F172A',
              marginBottom: '8px',
            }}
          >
            {member.name}
          </h3>

          {/* Role */}
          <div
            style={{
              color: '#2563EB',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '.5px',
              marginBottom: '20px',
            }}
          >
            {member.role}
          </div>

          {/* Bio */}
          <p
            style={{
              color: '#64748B',
              lineHeight: '1.9',
              marginBottom: '24px',
            }}
          >
            {member.bio}
          </p>

          {/* Skills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            {member.expertise.map((skill, idx) => (
              <span
                key={idx}
                style={{
                  padding: '8px 14px',
                  borderRadius: '999px',
                  background: '#EFF6FF',
                  color: '#2563EB',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
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
      style={{
        textAlign: 'center',
        marginBottom: '80px',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '10px 18px',
          borderRadius: '999px',
          background: 'rgba(59,130,246,.10)',
          border: '1px solid rgba(59,130,246,.20)',
          color: '#2563EB',
          fontWeight: '700',
          marginBottom: '20px',
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
          lineHeight: '1.1',
        }}
      >
        The ASH
        <br />
        Advantage
      </h2>

      <p
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          color: '#64748B',
          lineHeight: '1.8',
          fontSize: '17px',
        }}
      >
        We combine technical expertise,
        business understanding and modern
        technologies to build solutions that
        create measurable business impact.
      </p>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(260px,1fr))',
        gap: '28px',
      }}
    >
      {[
        {
          icon: '🚀',
          title: 'Innovation First',
          desc: 'We leverage modern technologies, AI automation and scalable architectures to keep businesses ahead of the competition.',
        },
        {
          icon: '🎯',
          title: 'Business Focused',
          desc: 'Every solution is designed around business goals, efficiency and measurable growth outcomes.',
        },
        {
          icon: '⚡',
          title: 'Fast Execution',
          desc: 'Agile development processes help us deliver high-quality solutions quickly without sacrificing quality.',
        },
        {
          icon: '🤝',
          title: 'Long-Term Partnership',
          desc: 'We support businesses beyond launch with continuous improvements, maintenance and strategic guidance.',
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: '#F8FAFC',
            borderRadius: '28px',
            padding: '36px',
            border: '1px solid rgba(15,23,42,.06)',
            transition: 'all .3s ease',
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
          <div
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '18px',
              background: '#EFF6FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              marginBottom: '24px',
            }}
          >
            {item.icon}
          </div>

          <h3
            style={{
              fontSize: '24px',
              fontWeight: '800',
              color: '#0F172A',
              marginBottom: '14px',
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
    padding: '120px 20px',
    background:
      'linear-gradient(135deg,#0F172A,#1E293B)',
    position: 'relative',
    overflow: 'hidden',
    color: '#FFFFFF',
  }}
>
  <div
    style={{
      position: 'absolute',
      width: '500px',
      height: '500px',
      background: '#2563EB',
      borderRadius: '50%',
      filter: 'blur(140px)',
      opacity: 0.15,
      top: '-200px',
      right: '-150px',
    }}
  />

  <div
    style={{
      position: 'absolute',
      width: '400px',
      height: '400px',
      background: '#06B6D4',
      borderRadius: '50%',
      filter: 'blur(140px)',
      opacity: 0.12,
      bottom: '-180px',
      left: '-150px',
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
        fontWeight: '700',
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
      Have A Project
      <br />
      In Mind?
    </h2>

    <p
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        color: '#CBD5E1',
        fontSize: '18px',
        lineHeight: '1.8',
      }}
    >
      Whether you're planning an AI-powered
      platform, business management system,
      custom SaaS product or modern website,
      our team is ready to help you build it.
    </p>

    <div
      className="team-cta"
      style={{
        marginTop: '45px',
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
          padding: '16px 30px',
          borderRadius: '14px',
          textDecoration: 'none',
          background:
            'linear-gradient(135deg,#2563EB,#06B6D4)',
          color: '#FFFFFF',
          fontWeight: '700',
          boxShadow:
            '0 15px 35px rgba(37,99,235,.35)',
        }}
      >
        Talk To Our Team
      </a>

      <a
        href="/contact"
        style={{
          padding: '16px 30px',
          borderRadius: '14px',
          textDecoration: 'none',
          background: 'rgba(255,255,255,.08)',
          border: '1px solid rgba(255,255,255,.12)',
          color: '#FFFFFF',
          fontWeight: '700',
          backdropFilter: 'blur(10px)',
        }}
      >
        Request A Quote
      </a>
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
    @media (max-width:768px){

  .hero-stats{
    grid-template-columns:1fr 1fr !important;
  }

}
  @media (max-width:768px){

  .team-grid{
    grid-template-columns:1fr !important;
  }

}
  @media (max-width:768px){

  .team-card{
    padding:28px !important;
  }

}
  @media (max-width:768px){

  .team-image{
    width:140px !important;
    height:140px !important;
  }

}
  @media (max-width:768px){

  .team-hero{
    padding:110px 20px 90px !important;
  }

}
  @media (max-width:768px){

  .team-hero{
    padding:110px 20px 90px !important;
  }

  .hero-stats{
    grid-template-columns:1fr 1fr !important;
  }

  .team-grid{
    grid-template-columns:1fr !important;
  }

  .team-card{
    padding:28px !important;
  }

  .team-image{
    width:140px !important;
    height:140px !important;
  }

}

@media (max-width:640px){

  .team-cta{
    flex-direction:column;
    align-items:center;
  }

  .team-cta a{
    width:100%;
    max-width:320px;
    text-align:center;
  }

}
`}</style>
    </div>

  );

}

// Helper styles
const socialIconStyle = (hoverColor) => ({
  color: 'var(--text-color, #6B7280)',
  fontSize: '18px',
  transition: 'all 0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: 'var(--bg-color, #f9fafb)'
});

const expertiseStyle = {
  backgroundColor: 'var(--bg-color, #f3f4f6)',
  color: 'var(--text-color, #6B7280)',
  padding: '4px 10px',
  borderRadius: '15px',
  fontSize: '11px',
  fontWeight: '500'
};