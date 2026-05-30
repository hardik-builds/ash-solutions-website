'use client'
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';

const team = [
  {
    name: 'Hardik L. Singh',
    role: 'Founder & Full-Stack Developer',
    bio: 'A recent B.Sc. (IT) graduate with a strong passion for web development, cybersecurity, and digital innovation. This project is a culmination of my academic learning and my first step into the professional world. I am eager to apply my skills to create impactful digital solutions.',
    image: '/images/hardik-singh.jpeg'
  },
  {
    name: 'Anshu Rajkagoria',
    role: 'CEO & Cybersecurity Expert',
    bio: 'As the CEO of the organization, Anshu Rajkagoria brings strong leadership skills and a clear strategic vision to drive innovation and growth. With expertise in Cybersecurity and a solid foundation in Web Development, she focuses on building secure and scalable digital solutions. Along with her technical knowledge, Anshu possesses excellent soft skills including communication, teamwork, leadership, and problem-solving abilities. She has consistently maintained a strong academic performance with a CGPA of 7+, reflecting her dedication, discipline, and commitment toward continuous learning and professional excellence.',
    image: '/images/Anshu-Rajkagoria.jpeg'

  }
];

const achievements = [
  { title: 'Technologies Mastered', value: '15+', description: 'Proficient in a wide range of modern technologies and frameworks' },
  { title: 'Projects Completed', value: '6+', description: 'A portfolio of academic and personal development projects' },
  { title: 'Academic Score', value: '8.5+', description: 'Consistently high performance in IT-related subjects' },
  { title: 'Hours of Learning', value: '1000+', description: 'Dedicated to self-learning and practical application' }
];

export default function About() {
  const { isDark } = useTheme();

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
  <div className='about-hero'
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
      🚀 ABOUT ASH SOLUTIONS
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
      Building Intelligent
      <br />
      Digital Solutions
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
      We help businesses automate operations,
      build scalable software systems and leverage
      technology to drive growth, efficiency
      and innovation.
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
      <Link
        href="/contact"
        style={{
          padding: '16px 28px',
          borderRadius: '14px',
          textDecoration: 'none',
          background:
            'linear-gradient(135deg,#2563EB,#06B6D4)',
          color: '#fff',
          fontWeight: '700',
        }}
      >
        Talk To An Expert
      </Link>

      <Link
        href="/services"
        style={{
          padding: '16px 28px',
          borderRadius: '14px',
          textDecoration: 'none',
          background: 'var(--card-bg)',
          color: 'var(--text-color)',
          border: '1px solid var(--border-color)',
          fontWeight: '700',
        }}
      >
        View Services
      </Link>
    </div>
  </div>
</section>
     

      {/* Our Story Section */}
<section
  style={{
    padding: '140px 20px',
    background: '#FFFFFF',
  }}
>
  <div className='story-grid'
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
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
        OUR STORY
      </div>

      <h2
        style={{
          fontSize: 'clamp(36px,6vw,58px)',
          fontWeight: '900',
          color: '#0F172A',
          marginBottom: '24px',
          lineHeight: '1.1',
        }}
      >
        Technology That
        Solves Real Business Problems
      </h2>

      <p
        style={{
          color: '#64748B',
          lineHeight: '1.9',
          fontSize: '18px',
          marginBottom: '22px',
        }}
      >
        ASH Solutions was founded with a simple goal:
        help businesses leverage modern technology
        without the complexity that often comes with it.
      </p>

      <p
        style={{
          color: '#64748B',
          lineHeight: '1.9',
          fontSize: '18px',
          marginBottom: '22px',
        }}
      >
        From AI automation and business systems
        to websites, mobile applications and SaaS
        platforms, our focus is creating practical
        digital solutions that deliver measurable
        business value.
      </p>

      <p
        style={{
          color: '#64748B',
          lineHeight: '1.9',
          fontSize: '18px',
        }}
      >
        We believe technology should not only look
        impressive—it should improve efficiency,
        streamline operations and support long-term growth.
      </p>
    </div>

    {/* Right Side */}

    <div
      style={{
        display: 'grid',
        gap: '20px',
      }}
    >
      {[
        {
          title: 'AI Automation',
          desc:
            'Automate repetitive workflows and improve operational efficiency.',
        },
        {
          title: 'Custom SaaS Platforms',
          desc:
            'Scalable software products built around your business model.',
        },
        {
          title: 'Business Systems',
          desc:
            'ERP, CRM and management systems tailored to your workflow.',
        },
        {
          title: 'Long-Term Partnership',
          desc:
            'Support, maintenance and continuous improvements after launch.',
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: '#FFFFFF',
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
              color: '#0F172A',
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
  </div>
</section>
     
{/* Mission & Vision Section */}
<section
  style={{
    padding: '140px 20px',
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
        OUR PURPOSE
      </div>

      <h2
        style={{
          fontSize: 'clamp(36px,6vw,58px)',
          fontWeight: '900',
          color: '#0F172A',
          marginBottom: '18px',
        }}
      >
        Mission & Vision
      </h2>

      <p
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          color: '#64748B',
          lineHeight: '1.8',
        }}
      >
        Guiding principles that shape every
        solution we build.
      </p>
    </div>

    <div className='mission-grid'
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(400px,1fr))',
        gap: '30px',
      }}
    >
      {/* Mission */}

      <div
        style={{
          background: '#FFFFFF',
          border:
            '1px solid rgba(15,23,42,.08)',
          borderRadius: '28px',
          padding: '40px',
          boxShadow:
            '0 8px 25px rgba(15,23,42,.04)',
        }}
      >
        <div
          style={{
            fontSize: '48px',
            marginBottom: '20px',
          }}
        >
          🎯
        </div>

        <h3
          style={{
            fontSize: '28px',
            fontWeight: '800',
            color: '#0F172A',
            marginBottom: '18px',
          }}
        >
          Our Mission
        </h3>

        <p
          style={{
            color: '#64748B',
            lineHeight: '1.9',
            fontSize: '17px',
          }}
        >
          To help businesses transform digitally
          through AI, automation and custom software
          solutions that improve efficiency,
          reduce operational friction and
          accelerate growth.
        </p>
      </div>

      {/* Vision */}

      <div
        style={{
          background: '#FFFFFF',
          border:
            '1px solid rgba(15,23,42,.08)',
          borderRadius: '28px',
          padding: '40px',
          boxShadow:
            '0 8px 25px rgba(15,23,42,.04)',
        }}
      >
        <div
          style={{
            fontSize: '48px',
            marginBottom: '20px',
          }}
        >
          🚀
        </div>

        <h3
          style={{
            fontSize: '28px',
            fontWeight: '800',
            color: '#0F172A',
            marginBottom: '18px',
          }}
        >
          Our Vision
        </h3>

        <p
          style={{
            color: '#64748B',
            lineHeight: '1.9',
            fontSize: '17px',
          }}
        >
          To become a trusted technology partner
          for businesses seeking scalable,
          innovative and future-ready
          digital solutions.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Core Values Section */}
<section
  style={{
    padding: '140px 20px',
    background: '#FFFFFF',
  }}
>
  <div className='values-grid'
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
        OUR VALUES
      </div>

      <h2
        style={{
          fontSize: 'clamp(36px,6vw,58px)',
          fontWeight: '900',
          color: '#0F172A',
          marginBottom: '18px',
        }}
      >
        Principles Behind
        Every Solution
      </h2>

      <p
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          color: '#64748B',
          lineHeight: '1.8',
        }}
      >
        The values that guide how we build,
        collaborate and deliver results.
      </p>
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(260px,1fr))',
        gap: '24px',
      }}
    >
      {[
        {
          icon: '💡',
          title: 'Innovation',
          desc:
            'Continuously exploring modern technologies and better solutions.',
        },
        {
          icon: '📈',
          title: 'Business Impact',
          desc:
            'Every project is designed to create measurable business value.',
        },
        {
          icon: '🛡️',
          title: 'Reliability',
          desc:
            'Secure, stable and scalable systems built for long-term use.',
        },
        {
          icon: '🚀',
          title: 'Continuous Improvement',
          desc:
            'Constant learning, optimization and innovation in every project.',
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: '#F8FAFC',
            border:
              '1px solid rgba(15,23,42,.08)',
            borderRadius: '24px',
            padding: '30px',
            transition: '.3s',
          }}
        >
          <div
            style={{
              fontSize: '42px',
              marginBottom: '18px',
            }}
          >
            {item.icon}
          </div>

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


      {/* Leadership Team */}
<section
  style={{
    padding: '140px 20px',
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
        Meet The People
        Behind ASH Solutions
      </h2>

      <p
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          color: '#64748B',
          lineHeight: '1.8',
        }}
      >
        Combining technical expertise,
        innovation and business-focused thinking
        to build impactful digital solutions.
      </p>
    </div>

    {/* Founder Card */}

    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(15,23,42,.08)',
        borderRadius: '30px',
        padding: '40px',
        marginBottom: '35px',
        boxShadow:
          '0 10px 30px rgba(15,23,42,.05)',
      }}
    >
      <div className='leader-card'
        style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        <img className='leader-image'
          src="/images/hardik-singh.jpeg"
          alt="Hardik Singh"
          style={{
            width: '100%',
            height: '320px',
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: '24px',
          }}
        />

        <div>
          <div
            style={{
              color: '#2563EB',
              fontWeight: '700',
              marginBottom: '10px',
            }}
          >
            FOUNDER
          </div>

          <h3
            style={{
              fontSize: '34px',
              fontWeight: '900',
              color: '#0F172A',
              marginBottom: '10px',
            }}
          >
            Hardik L. Singh
          </h3>

          <p
            style={{
              color: '#64748B',
              lineHeight: '1.9',
              marginBottom: '25px',
            }}
          >
            Full Stack Developer focused on building
            scalable software systems, SaaS platforms,
            AI-powered solutions and business automation tools.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            {[
              'Full Stack Development',
              'AI Integration',
              'SaaS Development',
              'Business Systems',
              'Web Applications',
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  padding: '10px 16px',
                  borderRadius: '999px',
                  background: '#EFF6FF',
                  color: '#2563EB',
                  fontWeight: '600',
                  fontSize: '14px',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* CEO Card */}

    <div className='leader-card'
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(15,23,42,.08)',
        borderRadius: '30px',
        padding: '40px',
        boxShadow:
          '0 10px 30px rgba(15,23,42,.05)',
      }}
    >
      <div className='leader-card'
        style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        <img className='leader-image'
          src="/images/Anshu-Rajkagoria.jpeg"
          alt="Anshu Rajkagoria"
          style={{
            width: '100%',
            height: '320px',
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: '24px',
          }}
        />

        <div>
          <div
            style={{
              color: '#2563EB',
              fontWeight: '700',
              marginBottom: '10px',
            }}
          >
            CEO
          </div>

          <h3
            style={{
              fontSize: '34px',
              fontWeight: '900',
              color: '#0F172A',
              marginBottom: '10px',
            }}
          >
            Anshu Rajkagoria
          </h3>

          <p
            style={{
              color: '#64748B',
              lineHeight: '1.9',
              marginBottom: '25px',
            }}
          >
            Leading strategic growth, cybersecurity
            initiatives and operational excellence while
            driving innovation and long-term business vision.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            {[
              'Leadership',
              'Cybersecurity',
              'Strategic Planning',
              'Business Operations',
              'Digital Innovation',
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  padding: '10px 16px',
                  borderRadius: '999px',
                  background: '#EFF6FF',
                  color: '#2563EB',
                  fontWeight: '600',
                  fontSize: '14px',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
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
      Ready To Build Your
      <br />
      Next Digital Solution?
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
      a website or a mobile application,
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
        Talk To An Expert
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

    <div
      style={{
        marginTop: '40px',
        color: '#94A3B8',
        fontSize: '14px',
      }}
    >
      AI Automation • SaaS Development • Websites • Apps • Business Systems
    </div>
  </div>
</section>

      <style jsx>{`
        @media (min-width: 768px) {
          section:nth-of-type(2) > div > div {
            grid-template-columns: repeat(2, 1fr);
          }
          section:nth-of-type(3) > div > div {
            grid-template-columns: repeat(2, 1fr);
          }
          section:nth-of-type(4) > div > div {
            grid-template-columns: repeat(2, 1fr);
          }
          section:nth-of-type(5) > div > div {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          section:nth-of-type(4) > div > div {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (hover: hover) {
          a:hover {
            background-color: var(--hover-bg);
          }
        }
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
  .team-card {
    grid-template-columns: 1fr !important;
  }
}
  @media (max-width:900px){

  .story-grid{
    grid-template-columns:1fr !important;
    gap:30px !important;
  }

}
  @media (max-width:900px){

  .leader-card{
    grid-template-columns:1fr !important;
    text-align:center;
  }

}
  @media (max-width:900px){

  .leader-image{
    max-width:260px;
    margin:auto;
    height:260px !important;
  }

}
  @media (max-width:768px){

  .mission-grid{
    grid-template-columns:1fr !important;
  }

}
  @media (max-width:768px){

  .about-hero{
    padding:110px 20px 90px !important;
  }

}
  @media (max-width:640px){

  .values-grid{
    grid-template-columns:1fr !important;
  }

}
      `}</style>
    </div>
  );
}