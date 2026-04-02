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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[index];

  return (
    <section style={{ padding: '80px 16px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>
          ⭐ Google Reviews
        </h2>

        <div style={{
          background: 'var(--card-bg)',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            "{review.text}"
          </p>

          <div style={{ color: '#facc15', marginBottom: '10px' }}>
            {"⭐".repeat(review.rating)}
          </div>

          <h4 style={{ fontWeight: 'bold' }}>{review.name}</h4>

          <p style={{ fontSize: '12px', color: '#888' }}>
            Reviewed on Google
          </p>
        </div>

      </div>
    </section>
  );
}