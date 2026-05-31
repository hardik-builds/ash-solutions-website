'use client'
import Link from 'next/link';

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
      🚀 ABOUT ASH SOLUTIONS
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
      Building Intelligent
      <br />
      Digital Solutions
    </h1>

    <p
      style={{
        maxWidth: '850px',
        margin: '0 auto',
        fontSize: 'clamp(16px,2.5vw,22px)',
        lineHeight: '1.8',
        color: '#64748B',
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
          boxSizing: 'border-box',
        }}
      >
        Talk To An Expert
      </Link>

      <Link
        href="/services"
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
          boxSizing: 'border-box',
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
    padding: '120px 20px',
    background: '#FFFFFF',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: '60px',
      alignItems: 'center',
    }}
  >
    {/* Left Content */}
    <div>
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
        OUR STORY
      </div>

      <h2
        style={{
          fontSize: 'clamp(34px,6vw,58px)',
          fontWeight: '900',
          lineHeight: '1.1',
          color: '#0F172A',
          marginBottom: '24px',
        }}
      >
        Technology Focused.
        <br />
        Business Driven.
      </h2>

      <p
        style={{
          color: '#64748B',
          lineHeight: '1.9',
          fontSize: '17px',
          marginBottom: '20px',
        }}
      >
        ASH Solutions was founded with a simple goal —
        helping businesses leverage modern technology
        to improve efficiency, automate workflows and
        scale operations without unnecessary complexity.
      </p>

      <p
        style={{
          color: '#64748B',
          lineHeight: '1.9',
          fontSize: '17px',
        }}
      >
        From custom software and SaaS platforms to AI
        automation and business systems, we focus on
        building practical solutions that create real
        business impact and long-term growth.
      </p>
    </div>

    {/* Right Card */}
    <div
      style={{
        background: '#F8FAFC',
        border: '1px solid rgba(15,23,42,.08)',
        borderRadius: '30px',
        padding: '40px',
        boxShadow:
          '0 15px 40px rgba(15,23,42,.05)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit,minmax(140px,1fr))',
          gap: '24px',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '42px',
              fontWeight: '900',
              color: '#2563EB',
              marginBottom: '8px',
            }}
          >
            10+
          </h3>

          <p
            style={{
              color: '#64748B',
              margin: 0,
            }}
          >
            Solutions Delivered
          </p>
        </div>

        <div>
          <h3
            style={{
              fontSize: '42px',
              fontWeight: '900',
              color: '#2563EB',
              marginBottom: '8px',
            }}
          >
            100%
          </h3>

          <p
            style={{
              color: '#64748B',
              margin: 0,
            }}
          >
            Client Focused
          </p>
        </div>

        <div>
          <h3
            style={{
              fontSize: '42px',
              fontWeight: '900',
              color: '#2563EB',
              marginBottom: '8px',
            }}
          >
            AI
          </h3>

          <p
            style={{
              color: '#64748B',
              margin: 0,
            }}
          >
            Powered Solutions
          </p>
        </div>

        <div>
          <h3
            style={{
              fontSize: '42px',
              fontWeight: '900',
              color: '#2563EB',
              marginBottom: '8px',
            }}
          >
            24/7
          </h3>

          <p
            style={{
              color: '#64748B',
              margin: 0,
            }}
          >
            Support Mindset
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
            
{/* Mission & Vision Section */}
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
        OUR PURPOSE
      </div>

      <h2
        style={{
          fontSize: 'clamp(34px,6vw,58px)',
          fontWeight: '900',
          color: '#0F172A',
          marginBottom: '20px',
          lineHeight: '1.1',
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
          fontSize: '17px',
        }}
      >
        Building technology that helps businesses
        automate operations, improve efficiency and
        unlock sustainable growth.
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
      {/* Mission */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '30px',
          padding: '40px',
          border: '1px solid rgba(15,23,42,.08)',
          boxShadow:
            '0 15px 40px rgba(15,23,42,.05)',
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
            fontSize: '30px',
            marginBottom: '24px',
          }}
        >
          🎯
        </div>

        <h3
          style={{
            fontSize: '30px',
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
            fontSize: '16px',
          }}
        >
          To help businesses embrace digital
          transformation through custom software,
          AI automation, SaaS solutions and scalable
          technology systems that deliver measurable
          business results.
        </p>
      </div>

      {/* Vision */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '30px',
          padding: '40px',
          border: '1px solid rgba(15,23,42,.08)',
          boxShadow:
            '0 15px 40px rgba(15,23,42,.05)',
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
            fontSize: '30px',
            marginBottom: '24px',
          }}
        >
          🚀
        </div>

        <h3
          style={{
            fontSize: '30px',
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
            fontSize: '16px',
          }}
        >
          To become a trusted technology partner for
          businesses worldwide by creating innovative,
          scalable and future-ready digital solutions
          that drive long-term success.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Core Values Section */}
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
        OUR VALUES
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
        Principles That Drive
        <br />
        Everything We Build
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
        Every project, decision and solution is guided
        by values that help us deliver meaningful results
        for our clients.
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
          icon: '🤝',
          title: 'Client First',
          desc: 'We focus on understanding business needs and delivering solutions that create real value.',
        },
        {
          icon: '💡',
          title: 'Innovation',
          desc: 'We continuously explore modern technologies, AI and automation to stay ahead.',
        },
        {
          icon: '⚡',
          title: 'Execution',
          desc: 'Ideas matter, but implementation matters more. We prioritize delivery and outcomes.',
        },
        {
          icon: '🔒',
          title: 'Trust & Security',
          desc: 'Security, transparency and reliability are built into every solution we create.',
        },
      ].map((value, index) => (
        <div
          key={index}
          style={{
            background: '#F8FAFC',
            border: '1px solid rgba(15,23,42,.08)',
            borderRadius: '28px',
            padding: '36px',
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
              borderRadius: '20px',
              background:
                'linear-gradient(135deg,#2563EB,#06B6D4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '30px',
              marginBottom: '24px',
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
              margin: 0,
            }}
          >
            {value.desc}
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
  }}
>
  {/* Glow Effects */}
  <div
    style={{
      position: 'absolute',
      width: '400px',
      height: '400px',
      background: '#2563EB',
      borderRadius: '50%',
      filter: 'blur(140px)',
      opacity: 0.18,
      top: '-150px',
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
      filter: 'blur(140px)',
      opacity: 0.15,
      bottom: '-150px',
      left: '-100px',
    }}
  />

  <div
    style={{
      position: 'relative',
      zIndex: 2,
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        display: 'inline-block',
        padding: '10px 18px',
        borderRadius: '999px',
        background: 'rgba(255,255,255,.08)',
        border: '1px solid rgba(255,255,255,.12)',
        color: '#CBD5E1',
        fontWeight: '600',
        marginBottom: '24px',
      }}
    >
      🚀 LET'S BUILD SOMETHING GREAT
    </div>

    <h2
      style={{
        fontSize: 'clamp(34px,7vw,64px)',
        fontWeight: '900',
        lineHeight: '1.1',
        color: '#FFFFFF',
        marginBottom: '24px',
      }}
    >
      Ready To Transform
      <br />
      Your Business?
    </h2>

    <p
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        color: '#CBD5E1',
        lineHeight: '1.9',
        fontSize: '18px',
      }}
    >
      Whether you need a modern website,
      custom software, SaaS platform,
      AI automation or a complete business
      management system — ASH Solutions is
      ready to turn your vision into reality.
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
          textDecoration: 'none',
          padding: '16px 30px',
          borderRadius: '14px',
          background:
            'linear-gradient(135deg,#2563EB,#06B6D4)',
          color: '#FFFFFF',
          fontWeight: '700',
          fontSize: '16px',
          boxShadow:
            '0 15px 35px rgba(37,99,235,.35)',
        }}
      >
        Talk To An Expert
      </a>

      <Link
        href="/contact"
        style={{
          textDecoration: 'none',
          padding: '16px 30px',
          borderRadius: '14px',
          background: 'rgba(255,255,255,.08)',
          border: '1px solid rgba(255,255,255,.15)',
          color: '#FFFFFF',
          fontWeight: '700',
          fontSize: '16px',
          backdropFilter: 'blur(10px)',
        }}
      >
        Get Custom Quote
      </Link>
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