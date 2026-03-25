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
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary-color, #3B82F6) 0%, var(--secondary-color, #8B5CF6) 100%)',
        padding: '120px 20px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '8px 20px',
            borderRadius: '50px',
            marginBottom: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            <FaRocket style={{ color: 'white', fontSize: '20px' }} />
            <span style={{ color: 'white', fontWeight: '500' }}>Young, Agile & Innovative</span>
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            fontWeight: 'bold', 
            color: 'white',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Meet the Dynamic <br />Minds of ASH
          </h1>
          
          <p style={{ 
            fontSize: 'clamp(18px, 2vw, 22px)', 
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            We're a close-knit team of 8 young professionals, combining fresh perspectives with the academic rigor from 10+ projects to build amazing things.
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '30px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'white' }}>8</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Team Members</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'white' }}>10+</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Academic Projects</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'white' }}>100%</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Agile</div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Team Section */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: 'clamp(32px, 4vw, 42px)', 
              fontWeight: 'bold',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, var(--primary-color, #3B82F6), var(--secondary-color, #8B5CF6))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              The ASH Squad
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-color, #6B7280)', maxWidth: '600px', margin: '0 auto' }}>
              Talented, passionate, and ready to innovate. Get to know the people who make it happen.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '40px'
          }}>
            {teamData.teamMembers.map((member, index) => (
              <div
                key={member.id}
                style={{
                  backgroundColor: 'var(--card-bg, white)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease ${index * 0.1}s`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--primary-color, #3B82F6), var(--secondary-color, #8B5CF6))'
                }}></div>
                
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e5e7eb',
                  margin: '0 auto 25px',
                  overflow: 'hidden',
                  border: '4px solid var(--card-bg, white)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition:'top' }}
                    />
                  ) : (
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      fontSize: '42px',
                      color: '#9ca3af',
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, var(--primary-color, #3B82F6), var(--secondary-color, #8B5CF6))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '5px' }}>
                  {member.name}
                </h3>
                <p style={{ 
                  color: 'var(--primary-color, #3B82F6)', 
                  fontWeight: '600', 
                  marginBottom: '15px',
                  fontSize: '15px'
                }}>
                  {member.role}
                </p>
                <p style={{ 
                  color: 'var(--text-color, #6B7280)', 
                  lineHeight: '1.6', 
                  marginBottom: '20px',
                  fontSize: '14px'
                }}>
                  {member.bio}
                </p>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '12px',
                  marginBottom: '20px'
                }}>
                  {member.social.linkedin && <a href={member.social.linkedin} style={socialIconStyle('#0077B5')}><FaLinkedin /></a>}
                  {member.social.twitter && <a href={member.social.twitter} style={socialIconStyle('#1DA1F2')}><FaTwitter /></a>}
                  {member.social.github && <a href={member.social.github} style={socialIconStyle('#333')}><FaGithub /></a>}
                  {member.social.dribbble && <a href={member.social.dribbble} style={socialIconStyle('#EA4C89')}><FaDribbble /></a>}
                </div>

                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '6px', 
                  justifyContent: 'center'
                }}>
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} style={expertiseStyle}>
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
      <section style={{ 
        backgroundColor: 'var(--card-bg, white)', 
        padding: '80px 20px' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ 
              fontSize: 'clamp(32px, 4vw, 42px)', 
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'var(--text-color, #111827)'
            }}>
              The ASH Edge
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-color, #6B7280)', maxWidth: '600px', margin: '0 auto' }}>
              What makes our team the perfect partner for your next project
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px'
          }}>
            {teamData.ourEdge.map((value, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--bg-color, #f9fafb)',
                  borderRadius: '16px',
                  padding: '40px 30px',
                  textAlign: 'center',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: 'var(--text-color, #111827)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--text-color, #6B7280)', lineHeight: '1.6', fontSize: '15px' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
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