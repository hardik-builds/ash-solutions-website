import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import ResponsiveHandler from '@/components/ResponsiveHandler';
import Preloader from '@/components/Preloader';

export const metadata = {
title: 'ASH Solutions',
description: 'Advanced digital solutions for modern businesses',
};

export default function RootLayout({ children }) {
return ( <html lang="en" suppressHydrationWarning> <head> <meta
       name="viewport"
       content="width=device-width, initial-scale=1"
     /> <link rel="icon" href="/favicon.jpeg" /> </head>


  <body
    style={{
      margin: 0,
      padding: 0,
      fontFamily:
        'Inter, system-ui, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor:
        'var(--bg-color, #FFFFFF)',
      color:
        'var(--text-color, #000000)',
      overflowX: 'hidden'
    }}
  >
      <Preloader />

      {/* <ResponsiveHandler /> */}

      <Header />

      <main
        style={{
          flexGrow: 1,
          backgroundColor:
            'var(--bg-color)'
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
