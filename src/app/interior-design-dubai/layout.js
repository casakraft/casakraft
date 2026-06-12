import '../globals.css';

export const metadata = {
  title: "Interior Design Dubai | Areas We Serve ",
  description:
    "Interior design services in Dubai by Casa kraft interior design & Renovation. Experts in residential interior & commercial fit-out. Call Now",  
  keywords: [
    ' interior design services in Dubai',
    'interior design Dubai',
    'interior design company in Dubai',
    'areas we serve Dubai',
    'residential interior Dubai',
    'commercial fit out Dubai',
    'interior design and fit out',
    'Business Bay interior design',
    'Downtown Dubai interior design',
    'Jumeirah interior design',
    'luxury interior design Dubai',
  ],
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  openGraph: {
    title: 'Interior Design Dubai | Casa kraft interior design & Renovation',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by Casa Kraft . Discover our residential, commercial, and hospitality portfolio.',
    url: 'https://casakraftinteriors.ae/office-projects/',
    siteName: 'Casa kraft interior design & Renovation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Design Project Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Projects Dubai | Casa kraft interior design & Renovation',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by Casa Kraft . Discover our residential, commercial, and hospitality portfolio.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Casa kraft interior design & Renovation',
              url: 'https://casakraftinteriors.ae/',
              logo: 'https://casakraftinteriors.ae/logo.png',
              sameAs: [
                'https://www.instagram.com/yourprofile',
                'https://www.facebook.com/yourprofile',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971-50-123-4567',
                contactType: 'Customer Service',
                areaServed: 'AE',
                availableLanguage: ['English', 'Arabic'],
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Dubai',
                addressLocality: 'Dubai',
                postalCode: '00000',
                addressCountry: 'AE',
              },
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
              name: 'Interior Design Projects in Dubai',
              url: 'https://casakraftinteriors.ae/projects',
              description:
                'Explore luxury interior design and fit-out projects in Dubai by Casa Kraft . Discover our residential, commercial, and hospitality portfolio.',
            }),
          }}
        />

        {/* CollectionPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Interior Design Projects',
              url: 'https://casakraftinteriors.ae/gallery',
              description:
                'A curated collection of luxury interior design and fit-out projects completed by Casa Kraft  Design in Dubai.',
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Renovation Dubai',
                    url: 'https://casakraftinteriors.ae/renovation-dubai',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Residential Interior Design',
                    url: 'https://casakraftinteriors.ae/apartment-interior-design-dubai',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Commercial Interior Design',
                    url: 'https://casakraftinteriors.ae/office-interior-design-dubai',
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
