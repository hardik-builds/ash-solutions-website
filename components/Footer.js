import Link from 'next/link';
const linkStyle = {
  display: 'block',
  color: '#94A3B8',
  textDecoration: 'none',
  marginBottom: '12px',
  transition: 'all .3s ease',
};

const contactStyle = {
  color: '#94A3B8',
  marginBottom: '12px',
};
export default function Footer() {
  return (
  <footer
  style={{
    background: '#020617',
    color: '#fff',
    padding: '90px 20px 40px',
    borderTop: '1px solid rgba(255,255,255,.06)',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
      gap: '50px',
      marginBottom: '60px',
    }}
  >
    {/* Brand */}
    <div>
      <h2
        style={{
          fontSize: '30px',
          fontWeight: '900',
          marginBottom: '16px',
        }}
      >
        ASH Solutions
      </h2>

      <p
        style={{
          color: '#94A3B8',
          lineHeight: '1.8',
        }}
      >
        Building AI Automation, SaaS Platforms,
        Business Systems, Websites and Mobile Apps
        for modern businesses.
      </p>
    </div>

    {/* Services */}
    <div>
      <h3
        style={{
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: '700',
        }}
      >
        Services
      </h3>

      {[
        'AI Automation',
        'Custom SaaS',
        'CRM & ERP',
        'Web Development',
        'Mobile Apps',
        'Cybersecurity',
      ].map((item) => (
        <p
          key={item}
          style={{
            color: '#94A3B8',
            marginBottom: '12px',
          }}
        >
          {item}
        </p>
      ))}
    </div>

    {/* Quick Links */}
    <div>
      <h3
        style={{
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: '700',
        }}
      >
        Quick Links
      </h3>

      <a href="/" style={linkStyle}>Home</a>
      <a href="/about" style={linkStyle}>About</a>
      <a href="/services" style={linkStyle}>Services</a>
      <a href="/team" style={linkStyle}>Team</a>
      <a href="/contact" style={linkStyle}>Contact</a>
    </div>

    {/* Contact */}
    <div>
      <h3
        style={{
          marginBottom: '20px',
          fontSize: '18px',
          fontWeight: '700',
        }}
      >
        Contact
      </h3>

      <p style={contactStyle}>
        📍 Mumbai, Maharashtra
      </p>

      <p style={contactStyle}>
        📞 +91 8652768171
      </p>

      <p style={contactStyle}>
        ✉️ contact@ashsolutions.site
      </p>

      <a
        href="https://wa.me/918652768171"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '16px',
          padding: '12px 20px',
          borderRadius: '12px',
          background: '#2563EB',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: '700',
        }}
      >
        WhatsApp Us
      </a>
    </div>
  </div>

  {/* Bottom Bar */}
  <div
    style={{
      borderTop: '1px solid rgba(255,255,255,.08)',
      paddingTop: '25px',
      textAlign: 'center',
      color: '#64748B',
      fontSize: '14px',
    }}
  >
    © {new Date().getFullYear()} ASH Solutions &
    Innovations. All Rights Reserved.
  </div>
</footer>
  );
}
