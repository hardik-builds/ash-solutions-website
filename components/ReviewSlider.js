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
                    fontSize: '40px',
                    marginBottom: '50px',
                    fontWeight: '800',
                    background: 'linear-gradient(to right, #3B82F6, #06B6D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
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
                                    backdropFilter: 'blur(12px)',

                                    // 🔥 Smart background (light + dark)
                                    background: 'var(--card-bg)',

                                    border: '1px solid var(--border-color)',
                                    padding: '45px',
                                    borderRadius: '20px',

                                    // 🔥 Better shadow for both modes
                                    boxShadow: `
                                     0 10px 25px rgba(0,0,0,0.08),
                                     0 4px 10px rgba(0,0,0,0.05)
                                     `,

                                    transition: 'all 0.4s ease',
                                    position: 'relative'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-6px)';
                                        e.currentTarget.style.boxShadow = `
                                     0 20px 40px rgba(0,0,0,0.12),
                                     0 10px 20px rgba(0,0,0,0.08)
                                     `;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = `
                                     0 10px 25px rgba(0,0,0,0.08),
                                     0 4px 10px rgba(0,0,0,0.05)
                                     `;
                                    }}
                                >

                                    <p style={{
                                        fontSize: '20px',
                                        color: 'var(--text-color)',
                                        marginBottom: '25px',
                                        lineHeight: '1.7',
                                        fontStyle: 'italic',
                                        opacity: 0.9
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
                                        fontSize: '18px',
                                        color: 'var(--text-color)'
                                    }}>
                                        {review.name}
                                    </h4>

                                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
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