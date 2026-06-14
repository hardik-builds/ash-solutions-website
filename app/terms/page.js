// app/terms/page.js
export const metadata = {
  title: 'Terms of Service - ASH Solutions',
  description: 'Review the terms and conditions governing the use of the ASH Solutions digital services hub.',
};

export default function TermsPage() {
  return (
    <div
      className="services-page-wrapper"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'transparent',
        padding: '160px 24px 100px',
        color: 'var(--text-color)',
        overflow: 'hidden',
      }}
    >
      {/* Background Glows */}
      <div
        className="mesh-glow-indigo"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '-150px',
          right: '-100px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        className="mesh-glow-cyan"
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          bottom: '10%',
          left: '-150px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              color: '#4f46e5',
              fontWeight: '700',
              letterSpacing: '2px',
              marginBottom: '15px',
              textTransform: 'uppercase',
              fontSize: '13px',
            }}
          >
            User Agreement
          </div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: '950',
              lineHeight: '1.1',
              color: 'var(--title-color)',
              letterSpacing: '-2.5px',
              marginBottom: '20px',
            }}
          >
            Terms of Service
          </h1>
          <p style={{ color: 'var(--body-text)', fontSize: '16px' }}>
            Last Updated: June 14, 2026. Review your usage rights and constraints.
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: 'var(--card-shadow), var(--card-sheen)',
            lineHeight: '1.8',
            color: 'var(--body-text)',
            fontSize: '15px',
          }}
        >
          <p style={{ marginBottom: '25px' }}>
            Welcome to <strong>ASH Solutions</strong>. These Terms of Service ("Terms") govern your access to and use of our website, features, authentication tools, and reviews system.
          </p>

          <h2 style={{ color: 'var(--title-color)', fontSize: '20px', fontWeight: '800', marginTop: '30px', marginBottom: '15px' }}>
            1. Account Creation and Security
          </h2>
          <p style={{ marginBottom: '15px' }}>
            When you register an account, you agree to:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Provide accurate, current, and verified email details.</li>
            <li>Maintain the confidentiality of your session token and password.</li>
            <li>Promptly notify us of any unauthorized access to your account.</li>
          </ul>

          <h2 style={{ color: 'var(--title-color)', fontSize: '20px', fontWeight: '800', marginTop: '30px', marginBottom: '15px' }}>
            2. Reviews and Content Posting Rules
          </h2>
          <p style={{ marginBottom: '15px' }}>
            Standard client accounts are permitted to write and publish client reviews. By submitting a review, you warrant that:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>The content represents a genuine engagement or project experience with ASH Solutions.</li>
            <li>The text is free from defamatory, obscene, or threatening language.</li>
            <li>You grant ASH Solutions a non-exclusive license to display this review on our website.</li>
          </ul>

          <h2 style={{ color: 'var(--title-color)', fontSize: '20px', fontWeight: '800', marginTop: '30px', marginBottom: '15px' }}>
            3. Verification and Security Protocols
          </h2>
          <p style={{ marginBottom: '20px' }}>
            We leverage multi-factor Email OTP verification to confirm registration details. Attempting to exploit registration APIs with temporary, fake, or scripted emails will trigger automated IP restrictions. Verification records (OTPs) expire within 5 minutes.
          </p>

          <h2 style={{ color: 'var(--title-color)', fontSize: '20px', fontWeight: '800', marginTop: '30px', marginBottom: '15px' }}>
            4. Limitation of Liability
          </h2>
          <p style={{ marginBottom: '20px' }}>
            ASH Solutions and its team will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the platform services, user-submitted content, or temporary network interruptions.
          </p>

          <h2 style={{ color: 'var(--title-color)', fontSize: '20px', fontWeight: '800', marginTop: '30px', marginBottom: '15px' }}>
            5. Termination of Usage
          </h2>
          <p style={{ marginBottom: '20px' }}>
            We reserve the right to suspend or terminate account credentials if these terms are violated. You may terminate these Terms at any time by exercising your Right to Erasure and deleting your account/data via the settings panel.
          </p>
        </div>
      </div>
    </div>
  );
}
