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
     <section className='team-hero'
  style={{
    position: 'relative',
    overflow: 'hidden',
    padding: '140px 20px',
    background:
      'linear-gradient(180deg,#F8FAFC,#FFFFFF)',
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
      🚀 OUR LEADERSHIP
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
      The People Behind
      <br />
      ASH Solutions
    </h1>

    <p
      style={{
        maxWidth: '850px',
        margin: '0 auto',
        fontSize: '22px',
        lineHeight: '1.8',
        color: '#64748B',
      }}
    >
      Building AI automation systems,
      SaaS platforms and custom digital
      solutions for modern businesses.
    </p>

    <div className='hero-stats'
      style={{
        marginTop: '60px',
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(180px,1fr))',
        gap: '20px',
      }}
    >
      {[
        'AI Automation',
        'Custom SaaS',
        'Business Systems',
        'Client Focused',
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

      {/* Unified Team Section */}
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
          color: '#2563EB',
          fontWeight: '700',
          marginBottom: '12px',
          letterSpacing: '1px',
        }}
      >
        LEADERSHIP TEAM
      </div>

      <h2
        style={{
          fontSize: 'clamp(36px,6vw,58px)',
          fontWeight: '900',
          color: '#0F172A',
          marginBottom: '18px',
        }}
      >
        Meet The Team
      </h2>

      <p
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          color: '#64748B',
          lineHeight: '1.8',
        }}
      >
        Meet the people driving innovation,
        technology and growth at ASH Solutions.
      </p>
    </div>

    <div className='team-grid'
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(450px,1fr))',
        gap: '40px',
      }}
    >
      {teamData.teamMembers.map((member) => (
        <div className='team-card'
          key={member.id}
          style={{
            background: '#FFFFFF',
            borderRadius: '32px',
            padding: '45px',
            border:
              '1px solid rgba(15,23,42,.08)',
            boxShadow:
              '0 20px 50px rgba(15,23,42,.06)',
            textAlign: 'center',
          }}
        >
          <div className="team-image"
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto 30px',
              border: '6px solid #FFFFFF',
              boxShadow:
                '0 20px 40px rgba(15,23,42,.12)',
            }}
          >
            {member.image && (
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
            )}
          </div>

          <h3
            style={{
              fontSize: '30px',
              fontWeight: '800',
              color: '#0F172A',
              marginBottom: '8px',
            }}
          >
            {member.name}
          </h3>

          <div
            style={{
              color: '#2563EB',
              fontWeight: '700',
              letterSpacing: '.5px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {member.role}
          </div>

          <p
            style={{
              color: '#64748B',
              lineHeight: '1.9',
              fontSize: '16px',
              marginBottom: '25px',
            }}
          >
            {member.bio}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            {member.expertise.map((skill, idx) => (
              <span
                key={idx}
                style={{
                  background: '#EFF6FF',
                  color: '#2563EB',
                  padding: '8px 14px',
                  borderRadius: '999px',
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

      {/* Our Edge Section */}
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
          fontSize: 'clamp(36px,6vw,58px)',
          fontWeight: '900',
          color: '#0F172A',
          marginBottom: '18px',
        }}
      >
        The ASH Advantage
      </h2>

      <p
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          color: '#64748B',
          lineHeight: '1.8',
        }}
      >
        Combining modern technology, innovation and
        business-focused execution to deliver real results.
      </p>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(280px,1fr))',
        gap: '30px',
      }}
    >
      {teamData.ourEdge.map((value, index) => (
        <div
          key={index}
          style={{
            background: '#F8FAFC',
            padding: '40px',
            borderRadius: '28px',
            border:
              '1px solid rgba(15,23,42,.06)',
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
              fontSize: '52px',
              marginBottom: '20px',
            }}
          >
            {value.icon}
          </div>

          <h3
            style={{
              fontSize: '24px',
              fontWeight: '800',
              color: '#0F172A',
              marginBottom: '14px',
            }}
          >
            {value.title}
          </h3>

          <p
            style={{
              color: '#64748B',
              lineHeight: '1.8',
            }}
          >
            {value.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<section
  style={{
    padding: '120px 20px',
    background: '#020617',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
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
      Have A Project
      <br />
      In Mind?
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
      Our team is ready to help transform your idea
      into a scalable digital solution built for growth.
    </p>

    <div
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
          background: '#2563EB',
          color: '#fff',
          fontWeight: '700',
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
          background: 'rgba(255,255,255,.05)',
          border: '1px solid rgba(255,255,255,.1)',
          color: '#fff',
          fontWeight: '700',
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