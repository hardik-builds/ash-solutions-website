export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ashsolutions.site';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/dashboard/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
