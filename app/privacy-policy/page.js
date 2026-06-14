// app/privacy-policy/page.js
import { generateMetadata } from '@/lib/metadata';

export const metadata = {
  title: 'Privacy Policy - ASH Solutions',
  description: 'Learn about our data collection practices, security protocols, and compliance with the Digital Personal Data Protection (DPDP) Act, 2023.',
};

export default function PrivacyPolicyPage() {
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
            Data Protection Compliance
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
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--body-text)', fontSize: '16px' }}>
            Effective Date: June 14, 2026. Compliant with the Digital Personal Data Protection (DPDP) Act, 2023.
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
            At <strong>ASH Solutions</strong>, we prioritize the protection and confidentiality of your personal data. 
            This Privacy Policy outlines how we collect, use, process, store, and erase your data when you visit our website, register a client account, or submit testimonials/reviews.
          </p>

          <h2 style={{ color: 'var(--title-color)', fontSize: '20px', fontWeight: '800', marginTop: '30px', marginBottom: '15px' }}>
            1. Consent and Purpose of Collection
          </h2>
          <p style={{ marginBottom: '15px' }}>
            In accordance with the <strong>DPDP Act, 2023 (India)</strong>, we process your personal data only on the basis of your explicit, unambiguous, and active consent. We collect the following personal data:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Full Name</strong>: To identify you as a reviewer and personalize your account profile.</li>
            <li><strong>Email Address</strong>: To verify your identity, send registration OTP validation codes, facilitate secure password resets, and authenticate logins.</li>
            <li><strong>Hashed Credentials</strong>: To secure your account access (we never store raw passwords).</li>
            <li><strong>Review Details & Company Name</strong>: To publish client testimonials on our platform as authorized by you.</li>
          </ul>

          <h2 style={{ color: 'var(--title-color)', fontSize: '20px', fontWeight: '800', marginTop: '30px', marginBottom: '15px' }}>
            2. Your Rights as a Data Principal
          </h2>
          <p style={{ marginBottom: '15px' }}>
            Under the DPDP Act, you possess clear, enforceable rights regarding your personal data:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Right to Access</strong>: You have the right to request a summary of the personal data we process about you.</li>
            <li><strong>Right to Correction/Updation</strong>: You can request correction of incomplete or outdated details.</li>
            <li><strong>Right to Erasure (Withdrawal of Consent)</strong>: You have the absolute right to withdraw consent and request data erasure.</li>
          </ul>
          <p style={{ marginBottom: '20px' }}>
            <strong>How to delete your data:</strong> You can exercise your Right to Erasure immediately by clicking the <strong>"Delete Account & Data"</strong> button inside your profile settings on the <strong>Insights Dashboard</strong>. This instantly and permanently erases your user profile, login credentials, and all reviews you have posted from our servers.
          </p>

          <h2 style={{ color: 'var(--title-color)', fontSize: '20px', fontWeight: '800', marginTop: '30px', marginBottom: '15px' }}>
            3. Data Retention and Security
          </h2>
          <p style={{ marginBottom: '20px' }}>
            We implement industry-standard encryption, token-based verification (JWT), and secure server configurations to guard your data. We do not sell, rent, or lease your personal information to third parties. We retain your data only for as long as your account is active or as required to serve testimonials you explicitly consented to publish.
          </p>

          <h2 style={{ color: 'var(--title-color)', fontSize: '20px', fontWeight: '800', marginTop: '30px', marginBottom: '15px' }}>
            4. Data Protection Officer (DPO)
          </h2>
          <p style={{ marginBottom: '15px' }}>
            If you have any questions, concerns, or requests regarding this Privacy Policy or wish to lodge a grievance, you may directly contact our Data Protection Officer:
          </p>
          <div style={{ background: 'rgba(99, 102, 241, 0.04)', border: '1px solid rgba(99, 102, 241, 0.15)', borderRadius: '12px', padding: '20px', fontSize: '14px' }}>
            <strong>Data Protection Officer (DPO)</strong><br />
            <strong>Contact Name:</strong> Hardik<br />
            <strong>Email Address:</strong> <a href="mailto:dpo@shsolutions.com" style={{ color: '#4f46e5', fontWeight: '700', textDecoration: 'none' }}>dpo@shsolutions.com</a><br />
            <strong>Office:</strong> ASH Solutions Headquarters
          </div>
        </div>
      </div>
    </div>
  );
}
