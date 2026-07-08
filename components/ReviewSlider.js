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
        'Professional team providing web development, cloud solutions, app development and SEO services. Highly recommended.',
    },
  ];

  const allReviews = [...reviews, ...reviews];

  return (
    <>
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
              color: '#4f46e5',
              fontWeight: '700',
              letterSpacing: '2px',
              marginBottom: '15px',
              textTransform: 'uppercase',
            }}
          >
            Client Testimonials
          </div>

          <h2
            style={{
              fontSize: 'clamp(38px, 6vw, 64px)',
              fontWeight: '900',
              lineHeight: '1.1',
              color: 'var(--title-color)',
              marginBottom: '20px',
              letterSpacing: '-1.5px',
            }}
          >
            Trusted By <br />
            Growing Businesses
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
            We focus on delivering business outcomes, not just software.
          </p>
        </div>

        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div className="review-track">
            {allReviews.map((review, index) => (
              <div
                key={index}
                className="review-card glass-panel"
                style={{
                  borderRadius: '28px',
                  padding: '35px',
                  border: '1px solid var(--card-border)',
                  background: 'var(--card-bg)',
                  boxShadow: 'var(--card-shadow), var(--card-sheen)',
                }}
              >
                <div
                  style={{
                    fontSize: '60px',
                    fontWeight: '900',
                    color: 'rgba(99, 102, 241, 0.2)',
                    lineHeight: 1,
                    marginBottom: '-10px',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  “
                </div>

                <p
                  style={{
                    color: 'var(--body-text)',
                    lineHeight: '1.8',
                    marginBottom: '30px',
                    fontSize: '15px',
                  }}
                >
                  {review.review}
                </p>

                <div>
                  <div
                    style={{
                      fontWeight: '800',
                      color: 'var(--title-color)',
                      marginBottom: '4px',
                    }}
                  >
                    {review.name}
                  </div>

                  <div
                    style={{
                      color: '#4f46e5',
                      fontSize: '13px',
                      fontWeight: '700',
                    }}
                  >
                    {review.role}
                  </div>
                </div>
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
            min-height: 250px;
            flex-shrink: 0;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .review-card:hover {
            transform: translateY(-6px);
            border-color: rgba(99, 102, 241, 0.25) !important;
            box-shadow: 0 20px 40px -15px rgba(99, 102, 241, 0.12) !important;
          }

          @keyframes scrollReviews {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            .review-card {
              width: 300px;
              padding: 25px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
