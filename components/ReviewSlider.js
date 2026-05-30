'use client';

export default function ReviewSlider() {
  const reviews = [
    {
      name: 'Dhanush Eeda',
      role: 'Business Owner',
      review:
        'Good for system management and conversion systems. Sharing from personal experience. Professional communication and quality delivery.',
    },
    {
      name: 'Shakshi Dhakoliya',
      role: 'Client',
      review:
        'Excellent experience working with ASH Solutions. Smooth process, great support and timely delivery.',
    },
    {
      name: 'Purushotham Arumugam',
      role: 'Client',
      review:
        'Professional team providing web development, cybersecurity, app development and SEO services. Highly recommended.',
    },
  ];

  return (
    <section
      style={{
        padding: '140px 20px',
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
            CLIENT TESTIMONIALS
          </div>

          <h2
            style={{
              fontSize: 'clamp(36px,6vw,58px)',
              fontWeight: '900',
              color: '#0F172A',
              marginBottom: '18px',
            }}
          >
            Trusted By Growing Businesses
          </h2>

          <p
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              color: '#64748B',
              lineHeight: '1.9',
            }}
          >
            We focus on delivering business value,
            not just software.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit,minmax(320px,1fr))',
            gap: '24px',
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                background: '#F8FAFC',
                border: '1px solid rgba(15,23,42,.08)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow:
                  '0 8px 25px rgba(15,23,42,.04)',
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  color: '#2563EB',
                  lineHeight: 1,
                  marginBottom: '20px',
                }}
              >
                "
              </div>

              <p
                style={{
                  color: '#475569',
                  lineHeight: '1.9',
                  marginBottom: '25px',
                  minHeight: '120px',
                }}
              >
                {review.review}
              </p>

              <div
                style={{
                  borderTop:
                    '1px solid rgba(15,23,42,.08)',
                  paddingTop: '18px',
                }}
              >
                <div
                  style={{
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '4px',
                  }}
                >
                  {review.name}
                </div>

                <div
                  style={{
                    color: '#64748B',
                    fontSize: '14px',
                  }}
                >
                  {review.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}