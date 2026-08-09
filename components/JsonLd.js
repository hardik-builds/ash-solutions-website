// components/JsonLd.js
import React from 'react';

export default function JsonLd() {
  const baseUrl = 'https://ashsolutions.site';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: 'ASH Solutions',
    alternateName: 'ASH Solutions Technology & AI Agency',
    url: baseUrl,
    logo: `${baseUrl}/favicon.jpeg`,
    image: `${baseUrl}/og-home.jpg`,
    description: 'ASH Solutions is a leading technology agency specializing in AI Automation, Custom SaaS Development, Enterprise ERP/CRM Systems, Web & Mobile App Development, and Cloud Solutions.',
    telephone: '+91-9876543210',
    email: 'contact@ashsolutions.site',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.0760',
      longitude: '72.8777',
    },
    priceRange: '$$$',
    sameAs: [
      'https://linkedin.com/company/ash-solutions',
      'https://github.com/ash-solutions',
      'https://twitter.com/ash_solutions',
    ],
    knowsAbout: [
      'AI Automation & LLM Workflows',
      'Custom SaaS Platform Development',
      'Enterprise ERP & CRM Solutions',
      'Web Application Development (React, Next.js)',
      'Mobile Application Development (Flutter, iOS, Android)',
      'Cloud Architecture & DevOps Infrastructure (AWS, Azure)',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology & AI Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Automation & Autonomous Agents',
            description: 'Custom AI agents, LLM integrations, and intelligent workflow automation to eliminate manual business overhead.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web & Mobile App Development',
            description: 'High-performance React/Next.js web apps and native/cross-platform iOS & Android mobile applications.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom SaaS & Enterprise ERP/CRM Solutions',
            description: 'Scalable multi-tenant SaaS platforms, custom enterprise ERP software, and CRM operational engines.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Solutions & DevOps Infrastructure',
            description: 'AWS & Azure cloud architecture, Docker containerization, Kubernetes orchestration, and CI/CD pipelines.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does ASH Solutions provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ASH Solutions specializes in AI Automation, Custom SaaS Platform Development, Enterprise ERP & CRM Systems, Web & Mobile App Development, and Cloud Infrastructure Solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does AI Automation benefit my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI Automation replaces manual, repetitive tasks with intelligent autonomous LLM agents and automated workflows, reducing operational costs and increasing processing speed by up to 80%.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you build custom SaaS and ERP platforms from scratch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we architect custom multi-tenant SaaS platforms, ERP systems, and CRM engines tailored to your exact business workflows and compliance requirements.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
