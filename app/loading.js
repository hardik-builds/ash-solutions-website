'use client';

export default function Loading() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--bg-color)'
    }}>
      <div 
        style={{ 
          width: '60px', 
          height: '60px', 
          border: '4px solid rgba(99, 102, 241, 0.1)', 
          borderTop: '4px solid #4f46e5', 
          borderRadius: '50%',
          marginBottom: '24px',
          animation: 'spin 1s linear infinite'
        }}
      ></div>
      <p style={{ color: 'var(--body-text)', fontSize: '16px' }}>Loading...</p>
    </div>
  )
}

// Define the animation in a way that works with Next.js
if (typeof window !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(styleElement);
}