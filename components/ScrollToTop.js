'use client';
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="floating-action-stack">
        {/* Instagram Button */}
        <a
          href="https://instagram.com/ashsolutionshq"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow ASH Solutions on Instagram"
          title="Follow us on Instagram (@ashsolutionshq)"
          className="floating-btn instagram-btn"
        >
          <FaInstagram className="floating-icon" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918652768171"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with ASH Solutions on WhatsApp"
          title="Chat on WhatsApp (+91 8652768171)"
          className="floating-btn whatsapp-btn"
        >
          <FaWhatsapp className="floating-icon" />
        </a>

        {/* Bottom to Top Scroller Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            className="floating-btn scroll-btn"
          >
            <svg className="scroll-arrow-svg" fill="none" stroke="#D4AF37" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>

      <style jsx>{`
        .floating-action-stack {
          position: fixed;
          bottom: 28px;
          right: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          z-index: 1000;
        }

        .floating-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .instagram-btn {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          color: #FFFFFF;
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 8px 24px rgba(214, 36, 159, 0.38), 0 2px 8px rgba(11, 31, 58, 0.2);
        }

        .whatsapp-btn {
          background-color: #25D366;
          color: #FFFFFF;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4), 0 2px 8px rgba(11, 31, 58, 0.2);
        }

        .scroll-btn {
          background-color: #0B1F3A;
          color: #D4AF37;
          border: 1.5px solid #D4AF37;
          box-shadow: 0 8px 25px rgba(11, 31, 58, 0.3), 0 0 15px rgba(212, 175, 55, 0.25);
        }

        :global(.floating-icon) {
          font-size: 24px;
          color: #FFFFFF;
        }

        .scroll-arrow-svg {
          width: 22px;
          height: 22px;
        }

        @media (hover: hover) {
          .instagram-btn:hover {
            transform: translateY(-3px) scale(1.08);
            box-shadow: 0 12px 28px rgba(214, 36, 159, 0.55), 0 4px 12px rgba(11, 31, 58, 0.25);
          }
          .whatsapp-btn:hover {
            transform: translateY(-3px) scale(1.08);
            background-color: #20BA5A;
            box-shadow: 0 12px 28px rgba(37, 211, 102, 0.55), 0 4px 12px rgba(11, 31, 58, 0.25);
          }
          .scroll-btn:hover {
            transform: translateY(-3px) scale(1.08);
            background-color: #183A66;
            border-color: #E6C65B;
            box-shadow: 0 12px 30px rgba(11, 31, 58, 0.4), 0 0 20px rgba(212, 175, 55, 0.5);
          }
        }

        @media (max-width: 640px) {
          .floating-action-stack {
            bottom: 20px;
            right: 16px;
            gap: 10px;
          }
          .floating-btn {
            width: 44px;
            height: 44px;
          }
          :global(.floating-icon) {
            font-size: 20px;
          }
          .scroll-arrow-svg {
            width: 19px;
            height: 19px;
          }
        }
      `}</style>
    </>
  );
}
