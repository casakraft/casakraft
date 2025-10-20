import './globals.css';

export const metadata = {
  title: 'Interior Design Dubai | Luxury Designers | Casa Kraft Interiors',
  description:
    'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  openGraph: {
    title: 'Interior Design Dubai | Luxury Designers | Casa Kraft Interiors',
    description:
      'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
    url: 'https://casakraftinteriors.ae/',
    siteName: 'Casa Kraft Interiors',
    images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Casa Kraft Interiors Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Dubai | Luxury Designers | Casa Kraft Interiors',
    description:
      'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
    images: ['/images/logo.svg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Robots Meta Tag */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Casa Kraft Interiors',
              url: 'https://casakraftinteriors.ae/',
              logo: {
                '@type': 'ImageObject',
                url: 'https://casakraftinteriors.ae/images/logo.svg',
                width: 600,
                height: 60,
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Sheikh Zayed Road',
                addressLocality: 'Dubai',
                addressCountry: 'UAE',
              },
              sameAs: [
                'https://www.instagram.com/yourprofile',
                'https://www.facebook.com/yourprofile',
              ],
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Casa Kraft Interiors',
              url: 'https://casakraftinteriors.ae/',
              description:
                'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
            }),
          }}
        />

        {/* BlogPosting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: 'Modern Interior Design in Dubai',
              description:
                'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
              url: 'https://casakraftinteriors.ae/',
              author: {
                '@type': 'Organization',
                name: 'Casa Kraft Interiors',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Casa Kraft Interiors',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://casakraftinteriors.ae/images/logo.svg',
                  width: 600,
                  height: 60,
                },
              },
              mainEntityOfPage: 'https://casakraftinteriors.ae/',
              image: {
                '@type': 'ImageObject',
                url: 'https://casakraftinteriors.ae/images/logo.svg',
                width: 1200,
                height: 630,
              },
              datePublished: '2025-06-22',
            }),
          }}
        />

        {/* Site Navigation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'SiteNavigationElement',
                  position: 1,
                  name: 'About Us',
                  url: 'https://casakraftinteriors.ae/about-us',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 2,
                  name: 'Apartment Interior Design Dubai',
                  url: 'https://casakraftinteriors.ae/apartment-interior-design-dubai',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 3,
                  name: 'Villa Interior Design Dubai',
                  url: 'https://casakraftinteriors.ae/villa-interior-design-dubai',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 4,
                  name: 'Gallery',
                  url: 'https://casakraftinteriors.ae/projects',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 5,
                  name: 'Contact Us',
                  url: 'https://casakraftinteriors.ae/contact-us',
                },
              ],
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://casakraftinteriors.ae/',
                },
              ],
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Interior Design and Fit Out',
              provider: {
                '@type': 'Organization',
                name: 'Casa Kraft Interiors',
                url: 'https://casakraftinteriors.ae',
              },
              areaServed: {
                '@type': 'Place',
                name: 'Dubai, UAE',
              },
              serviceOutput: 'Luxury interior design solutions for residential and commercial spaces in Dubai.',
              url: 'https://casakraftinteriors.ae/',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
