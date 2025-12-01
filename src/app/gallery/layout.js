import '../globals.css';

export const metadata = {
  title: "Our Gallery | Casa Kraft Interiors",
  description:
    "Explore our interior design gallery featuring residential interiors, luxury renovations, landscape designs, and high-quality fit-out projects across Dubai.",
  keywords: [
    'Interior Design Projects Dubai',
    'Fit-Out Portfolio Dubai',
    'Luxury Interior Projects UAE',
    'Casa Kraft Interior Design Projects',
    'Dubai Interior Design Portfolio',
  ],
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  openGraph: {
    title: 'Interior Design Projects Dubai | Casa Kraft Interiors',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by Casa Kraft Interiors. Discover our residential, commercial, and hospitality portfolio.',
    url: 'https://casakraftinteriors.ae/gallery',
    siteName: 'Casa Kraft Interiors',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Interior Design Project Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Design Projects Dubai | Casa Kraft Interiors',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by Casa Kraft Interiors. Discover our residential, commercial, and hospitality portfolio.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/gallery',
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
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae/",
              logo: "https://casakraftinteriors.ae/logo.png",
              sameAs: [
                "https://www.instagram.com/casakraftinteriors",
                "https://www.facebook.com/casakraftinteriors",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-50-123-4567",
                contactType: "Customer Service",
                areaServed: "AE",
                availableLanguage: ["English", "Arabic"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sheikh Zayed Road, Al Quoz 3",
                addressLocality: "Dubai",
                postalCode: "00000",
                addressCountry: "AE",
              },
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Interior Design Projects in Dubai",
              url: "https://casakraftinteriors.ae/gallery",
              description:
                "Explore luxury interior design and fit-out projects in Dubai by Casa Kraft Interiors. Discover our residential, commercial, and hospitality portfolio.",
              inLanguage: "en",
              isPartOf: {
                "@type": "WebSite",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae",
              },
            }),
          }}
        />

        {/* CollectionPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Interior Design Projects Gallery",
              url: "https://casakraftinteriors.ae/gallery",
              description:
                "A curated collection of luxury interior design and fit-out projects completed by Casa Kraft Interiors across Dubai and the UAE.",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Residential Interior Projects",
                    url: "https://casakraftinteriors.ae/gallery/residential",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Commercial Interior Projects",
                    url: "https://casakraftinteriors.ae/gallery/commercial",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Hospitality Interior Projects",
                    url: "https://casakraftinteriors.ae/gallery/hospitality",
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
