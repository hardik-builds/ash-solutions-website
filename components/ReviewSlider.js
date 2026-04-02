'use client';
import { useState, useEffect } from 'react';

export default function ReviewSlider() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      text: "Amazing service! My website was delivered on time with great UI.",
    },
    {
      name: "Priya Mehta",
      rating: 5,
      text: "Highly professional and responsive. Loved the design quality!",
    },
    {
      name: "Amit Verma",
      rating: 4,
      text: "Good experience overall. Will definitely recommend.",
    },
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ padding: '100px 16px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        
        <h2 style={{ 
          fontSize: '38px', 
          marginBottom: '50px',
          fontWeight: 'bold'
        }}>
          ⭐ What Our Clients Say
        </h2>

        {/* Slider Wrapper */}
        <div style={{
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div
            style={{
              display: 'flex',
              transform: `translateX(-${index * 100}%)`,
              transition: 'transform 0.6s ease-in-out',
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                style={{
                  minWidth: '100%',
                  padding: '20px'
                }}
              >
                <div style={{
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-color)',
                  padding: '40px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease'
                }}>
                  
                  <p style={{ 
                    fontSize: '20px', 
                    marginBottom: '25px',
                    lineHeight: '1.6',
                    fontStyle: 'italic'
                  }}>
                    “{review.text}”
                  </p>

                  <div style={{ 
                    color: '#facc15', 
                    marginBottom: '10px',
                    fontSize: '18px'
                  }}>
                    {"⭐".repeat(review.rating)}
                  </div>

                  <h4 style={{ 
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    {review.name}
                  </h4>

                  <p style={{ fontSize: '13px', color: '#888' }}>
                    Reviewed on Google
                  </p>
                </div>
              </div>
            ))}
          </div>
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
                width: index === i ? '16px' : '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: index === i ? 'var(--primary-color)' : '#ccc',
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