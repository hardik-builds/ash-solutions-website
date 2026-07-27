'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CaseStudyClient({ id }) {
  const [study, setStudy] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudy = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/case-studies/${id}`);
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.error || 'Failed to fetch case study');
        }
        
        setStudy(data.caseStudy);
      } catch (err) {
        console.error('Fetch study error:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchStudy();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div style={containerStyle}>
        <div style={innerContainerStyle}>
          {/* Navigation link placeholder */}
          <div style={{ marginBottom: '40px', width: '150px', height: '16px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
            <div className="shimmer-effect" />
          </div>

          {/* Main content block skeleton */}
          <div className="glass-panel" style={{ ...contentPanelStyle, position: 'relative', overflow: 'hidden' }}>
            <div className="shimmer-effect" />
            
            {/* Client category label */}
            <div style={{ width: '180px', height: '14px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', marginBottom: '12px' }} />
            
            {/* Title heading placeholder */}
            <div style={{ width: '80%', height: '36px', background: 'rgba(255, 255, 255, 0.12)', borderRadius: '8px', marginBottom: '16px' }} />
            
            {/* Publish Date placeholder */}
            <div style={{ width: '130px', height: '12px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', marginBottom: '24px' }} />
            
            <hr style={dividerStyle} />

            {/* Section Header placeholder */}
            <div style={{ width: '150px', height: '14px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', marginBottom: '16px', marginTop: '12px' }} />
            
            {/* Text description paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
              <div style={{ width: '100%', height: '16px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }} />
              <div style={{ width: '98%', height: '16px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }} />
              <div style={{ width: '95%', height: '16px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }} />
              <div style={{ width: '80%', height: '16px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px' }} />
            </div>

            {/* Outcome block placeholder */}
            <div style={{ ...outcomeCardStyle, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ width: '120px', height: '12px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px' }} />
              <div style={{ width: '70%', height: '20px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '6px' }} />
            </div>

            {/* Tags section */}
            <div style={{ width: '180px', height: '14px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', marginBottom: '12px' }} />
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '80px', height: '28px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }} />
              <div style={{ width: '60px', height: '28px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }} />
              <div style={{ width: '75px', height: '28px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !study) {
    return (
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', padding: '60px 20px', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--title-color)', marginBottom: '16px' }}>Case Study Not Found</h2>
          <p style={{ color: '#ef4444', fontSize: '15px', marginBottom: '24px', maxWidth: '400px' }}>
            {error || 'The case study you are trying to view does not exist or has been deleted.'}
          </p>
          <Link href="/insights" style={backButtonStyle}>
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {/* Background Mesh Glows */}
      <div className="mesh-glow-indigo" style={indigoGlowStyle} />
      <div className="mesh-glow-cyan" style={cyanGlowStyle} />

      <div style={innerContainerStyle}>
        {/* Navigation Row */}
        <div style={{ marginBottom: '40px' }}>
          <Link href="/insights" style={backLinkStyle}>
            <span style={{ fontSize: '18px', marginRight: '4px' }}>←</span> Back to Insights
          </Link>
        </div>

        {/* Content Panel */}
        <div className="glass-panel" style={contentPanelStyle}>
          
          {/* Metadata & Title */}
          <div style={{ marginBottom: '32px' }}>
            <span style={clientLabelStyle}>
              Client: {study.client}
            </span>
            <h1 style={titleStyle}>
              {study.title}
            </h1>
            <div style={dateStyle}>
              Published on {new Date(study.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          <hr style={dividerStyle} />

          {/* Description Challenge & Solution */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={sectionHeaderStyle}>Challenge & Solution</h3>
            <p style={descriptionStyle}>
              {study.description}
            </p>
          </div>

          {/* Outcome Card */}
          <div style={outcomeCardStyle}>
            <div style={outcomeLabelStyle}>
              Measurable Outcome
            </div>
            <div style={outcomeValueStyle}>
              {study.outcome}
            </div>
          </div>

          {/* Tags */}
          {study.tags && study.tags.length > 0 && (
            <div>
              <h4 style={{ ...sectionHeaderStyle, fontSize: '13px', marginBottom: '12px' }}>Technologies & Focus</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {study.tags.map((tag, idx) => (
                  <span key={idx} className="service-tag" style={tagStyle}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Inline styles for high customizability and animation
const containerStyle = {
  position: 'relative',
  minHeight: '100vh',
  background: 'transparent',
  padding: '140px 24px 100px',
  color: 'var(--text-color)',
  overflow: 'hidden',
};

const innerContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2,
};

const spinnerStyle = {
  width: '50px',
  height: '50px',
  border: '4px solid rgba(79, 70, 229, 0.15)',
  borderTop: '4px solid #0B1F3A',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};

const backButtonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #0B1F3A 0%, #183A66 100%)',
  color: '#FFFFFF',
  padding: '12px 24px',
  borderRadius: '12px',
  fontWeight: '700',
  fontSize: '14px',
  textDecoration: 'none',
  boxShadow: '0 4px 15px rgba(11, 31, 58, 0.25)',
  transition: 'all 0.3s ease',
};

const backLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  color: 'var(--body-text)',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: '700',
  transition: 'color 0.2s',
};

const contentPanelStyle = {
  background: 'var(--card-bg)',
  border: '1px solid var(--card-border)',
  borderRadius: '24px',
  padding: 'var(--card-padding)',
  boxShadow: 'var(--card-shadow), var(--card-sheen)',
};

const clientLabelStyle = {
  fontSize: '12px',
  fontWeight: '800',
  color: 'var(--title-color)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  display: 'inline-block',
  marginBottom: '8px',
};

const titleStyle = {
  fontSize: 'clamp(28px, 4vw, 42px)',
  fontWeight: '950',
  lineHeight: '1.1',
  color: 'var(--title-color)',
  letterSpacing: '-1.5px',
  marginBottom: '10px',
};

const dateStyle = {
  fontSize: '13px',
  color: 'var(--body-text)',
  fontWeight: '500',
};

const dividerStyle = {
  border: 'none',
  borderTop: '1px solid var(--card-border)',
  margin: '24px 0',
};

const sectionHeaderStyle = {
  fontSize: '14px',
  fontWeight: '800',
  color: 'var(--title-color)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '16px',
};

const descriptionStyle = {
  color: 'var(--body-text)',
  fontSize: '16px',
  lineHeight: '1.8',
  whiteSpace: 'pre-wrap',
};

const outcomeCardStyle = {
  background: 'rgba(99, 102, 241, 0.04)',
  border: '1px solid rgba(99, 102, 241, 0.1)',
  borderRadius: '16px',
  padding: '24px',
  marginBottom: '32px',
};

const outcomeLabelStyle = {
  fontSize: '11px',
  fontWeight: '850',
  color: 'var(--title-color)',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '6px',
};

const outcomeValueStyle = {
  fontSize: '18px',
  fontWeight: '800',
  color: 'var(--title-color)',
  lineHeight: '1.4',
};

const tagStyle = {
  padding: '6px 12px',
  borderRadius: '8px',
  background: 'rgba(15, 23, 42, 0.02)',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  fontSize: '12px',
  color: 'var(--body-text)',
  fontWeight: '700',
};

const indigoGlowStyle = {
  position: 'absolute',
  width: '500px',
  height: '500px',
  top: '-100px',
  right: '-100px',
  pointerEvents: 'none',
  zIndex: 1,
};

const cyanGlowStyle = {
  position: 'absolute',
  width: '400px',
  height: '400px',
  bottom: '5%',
  left: '-100px',
  pointerEvents: 'none',
  zIndex: 1,
};
