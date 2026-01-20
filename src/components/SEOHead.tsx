import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  schema?: any;
}

const defaultSEO = {
  siteName: 'Hive Tech Solutions',
  baseUrl: 'https://hivetechsolutions.com',
  defaultImage: 'https://hivetechsolutions.com/og-image.jpg',
  twitterHandle: '@hivetechsolutions',
  locale: 'en_US',
  businessName: 'Hive Tech Solutions',
  businessType: 'Technology Company',
  phone: '+1-234-567-890',
  email: 'info@hivetechsolutions.com',
  address: {
    street: '2833 Crockett Street Ste 1113',
    city: 'Fort Worth',
    state: 'TX',
    zip: '76107',
    country: 'United States',
  },
  geo: {
    latitude: '37.7749',
    longitude: '-122.4194',
  },
  serviceArea: ['San Francisco', 'Bay Area', 'California', 'United States'],
};

export function SEOHead({
  title = 'Hive Tech Solutions - Digital Marketing, SEO & Web Development Agency',
  description = 'Award-winning digital marketing agency specializing in Local SEO, Web Development, SaaS Solutions, Automation & Call Center Services. Drive growth with cutting-edge technology.',
  keywords = 'digital marketing, local SEO, web development, SaaS development, workflow automation, call center services, mobile app development, web applications, San Francisco SEO agency',
  image = defaultSEO.defaultImage,
  type = 'website',
  schema,
}: SEOHeadProps) {
  const location = useLocation();
  const fullUrl = `${defaultSEO.baseUrl}${location.pathname}`;

  useEffect(() => {
    // Set document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', defaultSEO.businessName);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('bingbot', 'index, follow');
    
    // Mobile Optimization
    updateMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('apple-mobile-web-app-title', defaultSEO.siteName);
    updateMetaTag('application-name', defaultSEO.siteName);
    updateMetaTag('theme-color', '#FFD700');
    updateMetaTag('msapplication-TileColor', '#FFD700');
    
    // Open Graph Tags (Facebook, LinkedIn)
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', title, true);
    updateMetaTag('og:site_name', defaultSEO.siteName, true);
    updateMetaTag('og:locale', defaultSEO.locale, true);
    
    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', defaultSEO.twitterHandle);
    updateMetaTag('twitter:creator', defaultSEO.twitterHandle);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', title);
    
    // Additional SEO Tags
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('geo.region', 'US-CA');
    updateMetaTag('geo.placename', 'San Francisco');
    updateMetaTag('geo.position', `${defaultSEO.geo.latitude};${defaultSEO.geo.longitude}`);
    updateMetaTag('ICBM', `${defaultSEO.geo.latitude}, ${defaultSEO.geo.longitude}`);
    
    // Business Tags
    updateMetaTag('business:contact_data:street_address', defaultSEO.address.street);
    updateMetaTag('business:contact_data:locality', defaultSEO.address.city);
    updateMetaTag('business:contact_data:region', defaultSEO.address.state);
    updateMetaTag('business:contact_data:postal_code', defaultSEO.address.zip);
    updateMetaTag('business:contact_data:country_name', defaultSEO.address.country);
    updateMetaTag('business:contact_data:email', defaultSEO.email);
    updateMetaTag('business:contact_data:phone_number', defaultSEO.phone);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Schema.org Structured Data
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${defaultSEO.baseUrl}/#organization`,
          name: defaultSEO.businessName,
          url: defaultSEO.baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${defaultSEO.baseUrl}/logo.png`,
            width: 600,
            height: 200,
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: defaultSEO.phone,
            contactType: 'customer service',
            email: defaultSEO.email,
            areaServed: 'US',
            availableLanguage: 'en',
          },
          sameAs: [
            'https://www.facebook.com/hivetechsolutions',
            'https://twitter.com/hivetechsolutions',
            'https://www.linkedin.com/company/hivetechsolutions',
            'https://www.instagram.com/hivetechsolutions',
          ],
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${defaultSEO.baseUrl}/#localbusiness`,
          name: defaultSEO.businessName,
          image: `${defaultSEO.baseUrl}/og-image.jpg`,
          telephone: defaultSEO.phone,
          email: defaultSEO.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: defaultSEO.address.street,
            addressLocality: defaultSEO.address.city,
            addressRegion: defaultSEO.address.state,
            postalCode: defaultSEO.address.zip,
            addressCountry: defaultSEO.address.country,
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: defaultSEO.geo.latitude,
            longitude: defaultSEO.geo.longitude,
          },
          url: defaultSEO.baseUrl,
          priceRange: '$$',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1',
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${defaultSEO.baseUrl}/#website`,
          url: defaultSEO.baseUrl,
          name: defaultSEO.siteName,
          description: description,
          publisher: {
            '@id': `${defaultSEO.baseUrl}/#organization`,
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${defaultSEO.baseUrl}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'Service',
          '@id': `${defaultSEO.baseUrl}/#service`,
          serviceType: 'Digital Marketing Services',
          provider: {
            '@id': `${defaultSEO.baseUrl}/#organization`,
          },
          areaServed: defaultSEO.serviceArea.map(area => ({
            '@type': 'City',
            name: area,
          })),
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Digital Marketing Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Local SEO Services',
                  description: 'Professional local SEO services to dominate Google rankings',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Web Application Development',
                  description: 'Custom web application development with cutting-edge technology',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'SaaS Development',
                  description: 'Enterprise-grade SaaS solutions for scalable businesses',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Workflow Automation',
                  description: 'AI-powered automation to streamline business operations',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Call Center Services',
                  description: 'Professional call center solutions with advanced technology',
                },
              },
            ],
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${defaultSEO.baseUrl}/#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: defaultSEO.baseUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: title.split(' - ')[0],
              item: fullUrl,
            },
          ],
        },
      ],
    };

    const schemaData = schema || defaultSchema;

    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemaData);

    // Preload critical resources
    const preloadLink = (href: string, as: string) => {
      let link = document.querySelector(`link[href="${href}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'preload');
        link.setAttribute('href', href);
        link.setAttribute('as', as);
        document.head.appendChild(link);
      }
    };

    // DNS Prefetch for external resources
    const dnsPrefetch = (href: string) => {
      let link = document.querySelector(`link[href="${href}"][rel="dns-prefetch"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'dns-prefetch');
        link.setAttribute('href', href);
        document.head.appendChild(link);
      }
    };

    dnsPrefetch('https://fonts.googleapis.com');
    dnsPrefetch('https://fonts.gstatic.com');
    dnsPrefetch('https://www.google-analytics.com');

  }, [title, description, keywords, image, type, fullUrl, schema]);

  return null;
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Hive Tech Solutions - #1 Digital Marketing & Web Development Agency',
    description: 'Award-winning digital marketing agency in San Francisco. We specialize in Local SEO, Web Development, SaaS, Automation & Call Center Services. 500+ successful projects. Get 247% ROI.',
    keywords: 'digital marketing agency, local SEO services, web development company, SaaS development, workflow automation, call center services, San Francisco marketing agency, SEO expert',
  },
  services: {
    title: 'Our Services - Local SEO, Web Apps, SaaS & Automation | Hive Tech Solutions',
    description: 'Comprehensive digital services: Local SEO optimization, custom web applications, SaaS development, AI automation, and professional call center solutions. Transform your business today.',
    keywords: 'local SEO optimization, web application development, SaaS solutions, business automation, AI automation tools, call center software, enterprise solutions',
  },
  work: {
    title: 'Case Studies & Portfolio - Proven Results | Hive Tech Solutions',
    description: 'View our successful projects: 247% ROI increases, top Google rankings, and award-winning web applications. Real results from real clients across multiple industries.',
    keywords: 'case studies, portfolio, client success stories, SEO results, web development portfolio, digital marketing results, ROI case studies',
  },
  about: {
    title: 'About Us - Award-Winning Digital Agency | Hive Tech Solutions',
    description: 'Meet the team behind 500+ successful projects. Expert developers, SEO specialists, and digital strategists committed to driving your business growth with cutting-edge technology.',
    keywords: 'about us, digital agency team, SEO experts, web developers, company profile, agency expertise, technology company',
  },
  pricing: {
    title: 'Pricing Plans - Transparent & Affordable | Hive Tech Solutions',
    description: 'Flexible pricing for businesses of all sizes. From startups to enterprises, find the perfect plan for your digital marketing and development needs. No hidden fees.',
    keywords: 'pricing plans, SEO pricing, web development cost, digital marketing packages, SaaS pricing, affordable marketing services',
  },
  blog: {
    title: 'Blog - Digital Marketing Insights & Tips | Hive Tech Solutions',
    description: 'Latest insights on SEO, web development, automation, and digital marketing strategies. Expert tips to grow your online presence and dominate your market.',
    keywords: 'digital marketing blog, SEO tips, web development tutorials, automation guides, marketing strategies, business growth tips',
  },
  contact: {
    title: 'Contact Us - Get Free Consultation | Hive Tech Solutions',
    description: 'Ready to transform your digital presence? Contact our expert team for a free consultation. Based in San Francisco, serving clients worldwide. Call +1-234-567-890.',
    keywords: 'contact digital agency, free consultation, San Francisco marketing agency, get quote, contact SEO expert, web development inquiry',
  },
};
