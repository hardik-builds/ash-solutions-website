import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import ResponsiveHandler from '@/components/ResponsiveHandler';
import Preloader from '@/components/Preloader';
import JsonLd from '@/components/JsonLd';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata('home');

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif",
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          color: 'var(--text-color)',
          overflowX: 'hidden'
        }}
      >
        <JsonLd />
        <Preloader />

        <Header />

        <main
          style={{
            flexGrow: 1,
          }}
        >
          {children}
        </main>

        <Footer />

        <ScrollToTop />
      </body>
    </html>
  );
}
