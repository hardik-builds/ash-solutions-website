'use client';
import { useState, useEffect } from 'react';

export default function ReviewSlider() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Dhanush Eeda",
      rating: 5,
      text: "Good for system management and conversion systems do work with these guyss, sharing with personal experience.",
    },
    {
      name: "Shakshi Dhakoliya",
      rating: 5,
      text: "I had experience with this company you should give an try.",
    },
    {
      name: "Purushotham Arumugam",
      rating: 4,
      text: "Great experience with this company! They provide web development, cybersecurity, app development, digital marketing, and SEO optimization services. The team is professional, responsive, and delivers high-quality work on time. Highly recommended",
    },
  ];

  // ✅ Smooth auto slide (no lag)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section style={{ padding: '100px 16px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

        {/* Heading */}
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 40px)',
          marginBottom: '50px',
          fontWeight: '800',
          background: 'linear-gradient(to right, #3B82F6, #06B6D4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          ⭐ What Our Clients Say
        </h2>

        {/* Slider */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '0 8px'
        }}>

          {/* Track */}
          <div style={{
            display: 'flex',
            transform: `translate3d(-${index * 100}%, 0, 0)`,
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform'
          }}>

            {reviews.map((review, i) => (
              <div
                key={i}
                style={{
                  flex: '0 0 100%',          // ✅ FIX (NO CUT)
                  boxSizing: 'border-box',
                  padding: '10px'
                }}
              >
                <div style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  padding: 'clamp(25px, 5vw, 50px)',
                  borderRadius: '24px',
                  backdropFilter: 'blur(12px)',
                  boxShadow: `
                    0 10px 30px rgba(0,0,0,0.08),
                    0 4px 12px rgba(0,0,0,0.05)
                  `,
                  transition: 'all 0.3s ease'
                }}>

                  {/* Review Text */}
                  <p style={{
                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                    color: 'var(--text-color)',
                    marginBottom: '25px',
                    lineHeight: '1.7',
                    fontStyle: 'italic',
                    wordBreak: 'break-word' // ✅ FIX
                  }}>
                    “{review.text}”
                  </p>

                  {/* Stars */}
                  <div style={{
                    color: '#facc15',
                    marginBottom: '10px',
                    fontSize: '18px'
                  }}>
                    {"⭐".repeat(review.rating)}
                  </div>

                  {/* Name */}
                  <h4 style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    color: 'var(--text-color)'
                  }}>
                    {review.name}
                  </h4>

                  <p style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)'
                  }}>
                    Reviewed on Google
                  </p>

                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button onClick={prevSlide} style={arrowStyle('left')}>
            ‹
          </button>

          <button onClick={nextSlide} style={arrowStyle('right')}>
            ›
          </button>

        </div>

        {/* Dots */}
        <div style={{
          marginTop: '25px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}>
          {reviews.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: index === i ? '18px' : '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: index === i ? 'var(--primary-color)' : 'rgba(150,150,150,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* Arrow Style */
const arrowStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  [side]: '10px',
  transform: 'translateY(-50%)',
  background: 'var(--card-bg)',
  border: '1px solid var(--border-color)',
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  cursor: 'pointer',
  fontSize: '22px',
  color: 'var(--text-color)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  zIndex: 2
});