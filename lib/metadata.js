// lib/metadata.js
export function generateMetadata(pageName, additionalData = {}) {
  // Use environment variable or fallback to production site URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ashsolutions.site';
  
  const baseMetadata = {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: '/',
    },
    authors: [{ name: 'ASH Solutions', url: 'https://ashsolutions.site' }],
    creator: 'ASH Solutions',
    publisher: 'ASH Solutions',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  const pageMetadata = {
    home: {
      title: 'Top AI Automation & Custom Software Development Agency in India | ASH Solutions',
      description: 'ASH Solutions is a leading B2B tech agency in India specializing in AI Automation, Custom SaaS Development, Enterprise ERP Solutions, Web & Mobile App Development, and AWS Cloud Infrastructure.',
      keywords: 'AI Automation Agency India, Custom SaaS Development Company India, ERP Software Development India, Web Development Company Mumbai Delhi Bangalore, Mobile App Development Agency India, Hire AI Developers India, Best IT Services Company India, B2B Software Agency India',
      openGraph: {
        title: 'Top AI Automation & Custom Software Development Agency in India | ASH Solutions',
        description: 'Scale business operations with India\'s premier AI Automation, Custom SaaS, ERP, and Web/Mobile App Development Agency.',
        url: `${baseUrl}/`,
        siteName: 'ASH Solutions',
        locale: 'en_IN',
        type: 'website',
        images: [
          {
            url: '/og-home.jpg',
            width: 1200,
            height: 630,
            alt: 'ASH Solutions - AI Automation & Custom Software Agency India',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Top AI Automation & Software Agency in India | ASH Solutions',
        description: 'Scale business operations with AI Automation, Custom SaaS, ERP, and Web/Mobile Apps.',
        images: ['/og-home.jpg'],
      },
    },
    about: {
      title: 'About ASH Solutions | Enterprise Software & AI Technology Partners in India',
      description: 'Learn about ASH Solutions, India\'s trusted software engineering and AI automation partner for startups, SMBs, and enterprises scaling digital operations.',
      keywords: 'about ASH Solutions, AI agency India, software engineering company India, SaaS developers Mumbai, top IT partners India',
      alternates: { canonical: '/about' },
      openGraph: {
        title: 'About ASH Solutions | Software & AI Partners in India',
        description: 'Engineering intelligent digital solutions, AI automation workflows, and enterprise software across India.',
        url: `${baseUrl}/about`,
        siteName: 'ASH Solutions',
        locale: 'en_IN',
        type: 'website',
        images: [
          {
            url: '/og-about.jpg',
            width: 1200,
            height: 630,
            alt: 'About ASH Solutions',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'About ASH Solutions | Software & AI Partners in India',
        description: 'Engineering intelligent digital solutions and AI automation workflows in India.',
        images: ['/og-about.jpg'],
      },
    },
    services: {
      title: 'Services | AI Automation, Web/App Development, Custom SaaS, ERP & Cloud India',
      description: 'Comprehensive software services in India: AI Workflow Automation, React/Next.js Web Applications, iOS & Android Mobile Apps, Custom SaaS & ERP Systems, and AWS Cloud Consulting.',
      keywords: 'AI automation services India, web app development India, mobile app development company India, custom SaaS development India, ERP software implementation India, custom CRM agency India, DevOps consulting India',
      alternates: { canonical: '/services' },
      openGraph: {
        title: 'Services | AI Automation, Web/App, Custom SaaS & ERP Solutions India',
        description: 'Explore specialized tech services in AI Automation, Web & Mobile Apps, Custom SaaS, ERP Systems, and Cloud Infrastructure.',
        url: `${baseUrl}/services`,
        siteName: 'ASH Solutions',
        locale: 'en_IN',
        type: 'website',
        images: [
          {
            url: '/og-services.jpg',
            width: 1200,
            height: 630,
            alt: 'ASH Solutions Tech Services India',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Services | AI Automation, Web/App, Custom SaaS & ERP Solutions India',
        description: 'Explore specialized tech services in AI Automation, Web & Mobile Apps, and Cloud.',
        images: ['/og-services.jpg'],
      },
    },
    insights: {
      title: 'Insights & Case Studies | B2B Software Growth & AI Success Stories India',
      description: 'Explore technical case studies, software guides, and client reviews on AI automation, web performance, custom ERP implementations, and cloud scaling strategies in India.',
      keywords: 'AI automation case studies India, SaaS development insights, tech agency reviews India, custom ERP case studies, IT infrastructure guides',
      alternates: { canonical: '/insights' },
      openGraph: {
        title: 'Insights & Case Studies | ASH Solutions India',
        description: 'In-depth case studies and articles on AI automation, SaaS platforms, and enterprise software.',
        url: `${baseUrl}/insights`,
        siteName: 'ASH Solutions',
        locale: 'en_IN',
        type: 'website',
        images: [
          {
            url: '/og-insights.jpg',
            width: 1200,
            height: 630,
            alt: 'ASH Solutions Insights',
          },
        ],
      },
    },
    contact: {
      title: 'Get a Quote | Hire AI & Software Development Agency in India',
      description: 'Contact ASH Solutions for custom software project quotes, AI automation consultations, web/mobile app estimates, and enterprise ERP development in India.',
      keywords: 'contact ASH Solutions India, hire AI developers India, SaaS project quote India, custom ERP software price India, hire web development agency India',
      alternates: { canonical: '/contact' },
      openGraph: {
        title: 'Get a Quote | Hire AI & Software Development Agency in India',
        description: 'Schedule a tech consultation or request a project estimate for AI automation and software development.',
        url: `${baseUrl}/contact`,
        siteName: 'ASH Solutions',
        locale: 'en_IN',
        type: 'website',
        images: [
          {
            url: '/og-contact.jpg',
            width: 1200,
            height: 630,
            alt: 'Contact ASH Solutions India',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Get a Quote | Hire AI & Software Development Agency in India',
        description: 'Schedule a tech consultation or request a project estimate in India.',
        images: ['/og-contact.jpg'],
      },
    },
    login: {
      title: 'Client Portal Login | ASH Solutions',
      description: 'Secure client portal login for project management, activity reporting, and service configuration.',
      robots: { index: false, follow: false },
    },
    register: {
      title: 'Client Registration | ASH Solutions',
      description: 'Register your business account with ASH Solutions to get started with digital transformation.',
      robots: { index: false, follow: false },
    },
  };

  return {
    ...baseMetadata,
    ...pageMetadata[pageName],
    ...additionalData,
  };
}