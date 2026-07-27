'use client';

export default function ReviewSlider() {
  const capabilities = [
    {
      name: 'Security-First Design',
      role: 'Enterprise Standard',
      review:
        'We build every system with defense-in-depth security, strict role-based access control, and full data encryption.',
    },
    {
      name: 'Cloud-Native Infrastructure',
      role: 'System Architecture',
      review:
        'Containerized microservices and automated deployment pipelines engineered for high throughput and high availability.',
    },
    {
      name: 'Custom Workflow Automation',
      role: 'Operational Engine',
      review:
        'Streamline business operations by connecting custom APIs, database syncs, and intelligent automation into one unified platform.',
    },
    {
      name: 'AI & Intelligent Systems',
      role: 'Advanced Capabilities',
      review:
        'Harness practical AI workflows, custom LLM agents, and automated data pipelines tailored to real business objectives.',
    },
  ];

  const allCapabilities = [...capabilities, ...capabilities];

  return (
    <section
      style={{
        padding: '120px 0',
        background: 'var(--section-bg)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginBottom: '70px',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            color: '#D4AF37',
            fontWeight: '800',
            letterSpacing: '2px',
            marginBottom: '15px',
            textTransform: 'uppercase',
          }}
        >
          OUR TECHNICAL CAPABILITIES
        </div>

        <h2
          style={{
            fontSize: 'clamp(38px, 6vw, 64px)',
            fontWeight: '950',
            lineHeight: '1.1',
            color: 'var(--title-color)',
            marginBottom: '20px',
            letterSpacing: '-1.5px',
          }}
        >
          Engineering Built For <br />
          Long-Term Scalability
        </h2>

        <p
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            color: 'var(--body-text)',
            lineHeight: '1.8',
            fontSize: '18px',
          }}
        >
          We focus on custom software architecture, seamless integrations, and measurable operational results.
        </p>
      </div>

      <div
        style={{
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div className="review-track">
          {allCapabilities.map((item, index) => (
            <div
              key={index}
              className="review-card"
              style={{
                background: 'var(--card-bg)',
                padding: '30px 28px',
                borderLeft: '4px solid #D4AF37',
                borderRadius: '16px',
                border: '1px solid var(--card-border)',
                borderLeftWidth: '4px',
                borderLeftColor: '#D4AF37',
                margin: '0 16px',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: '800',
                  color: '#D4AF37',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                {item.role}
              </div>

              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: '800',
                  color: 'var(--title-color)',
                  marginBottom: '14px',
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: 'var(--body-text)',
                  lineHeight: '1.7',
                  fontSize: '15px',
                  margin: 0,
                }}
              >
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .review-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollReviews 30s linear infinite;
          padding: 20px 24px;
        }

        .review-card {
          width: 380px;
          min-height: 220px;
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .review-card:hover {
          transform: translateY(-6px);
          border-color: #D4AF37 !important;
          box-shadow: 0 20px 40px -15px rgba(212, 175, 55, 0.2) !important;
        }

        @keyframes scrollReviews {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
