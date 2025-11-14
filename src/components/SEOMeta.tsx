import { Helmet } from 'react-helmet-async';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function SEOMeta({
  title = 'hive tech solutions — Digital Marketing & Automations',
  description = 'Algorithmic growth for local businesses. Webapps, Automated Workflows & Local SEO tailored for SMEs. Faster ROI, Smarter Automation.',
  keywords = 'local SEO, web applications, automation, SaaS development, digital marketing, GMB optimization, technical SEO',
  ogImage = 'https://hivetechsolutions.com/og-image.jpg',
  ogType = 'website',
  canonical,
}: SEOMetaProps) {
  const siteUrl = 'https://hivetechsolutions.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="hive tech solutions" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="hive tech solutions" />
    </Helmet>
  );
}
