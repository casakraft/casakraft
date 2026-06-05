import '../globals.css';

export const metadata = {
  title: "Best Interior Design Company in Bluewaters , Dubai - Casa kraft interiors",
  description:
    "Luxury interior design company in Bluewaters Dubai delivering office, apartment & turnkey fit-outs. Schedule your free consultation today.",
  keywords:[
    "interior design company Bluewaters Dubai",
    "interior design company in Bluewaters Dubai",
    "office interior design Bluewaters Dubai",
    "apartment interior design Bluewaters Dubai",
    "interior fit out company Bluewaters Dubai",
    "turnkey fit out Bluewaters Dubai",
    "commercial interior design Bluewaters Dubai",
    "luxury interior design Dubai",
    "renovation services Bluewaters Dubai",
    "design and build company Dubai"
  ],
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  openGraph: {
    title: 'Interior Design Projects Dubai | Casa kraft interior design and renovation',
    description:
      'Explore luxury interior design and renovation projects in Dubai by Casa kraft Interior. Discover our residential, commercial, and hospitality portfolio.',
    url: 'https://casakraftinteriors.ae/interior-design-bluewaters-dubai',
    siteName: 'Casa kraft Interior Design & Fitout',
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
    title: 'Interior Design Projects Dubai | Casa kraft interior design and renovation',
    description:
      'Explore luxury interior design and renovation projects in Dubai by Casa kraft Interior. Discover our residential, commercial, and hospitality portfolio.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/interior-design-bluewaters-dubai',
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
              "name": "Casa kraft Interior Design & Fitout",
              "url": "https://casakraftinteriors.ae/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://casakraftinteriors.ae/logo-s-Black.png"
              },
              "sameAs": [
                "https://www.instagram.com/we.do.uae",
                "https://www.facebook.com/wedointerior"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971 058 807 5603",
                "contactType": "Customer Service",
                "areaServed": "AE",
                "availableLanguage": ["English", "Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bluewaters Dubai",
                "addressLocality": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              }
            })
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Interior Design Company in Bluewaters Dubai",
              "url": "https://casakraftinteriors.ae/interior-design-bluewaters-dubai",
              "description": "Luxury interior design services in Bluewaters Dubai including offices, apartments, cafes, restaurants, and travel agencies."
            })
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://casakraftinteriors.ae/interior-design-bluewaters-dubai",
              "name": "Casa kraft Interior Design & renovations",
              "image": "https://casakraftinteriors.ae/og-image.jpg",
              "url": "https://casakraftinteriors.ae/interior-design-bluewaters-dubai",
              "telephone": "+971 058 807 5603",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bluewaters Dubai",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "areaServed": [
                "Bluewaters Dubai",
                "Downtown Dubai",
                "DIFC",
                "Dubai Mall",
                "Burj Khalifa",
                "Dubai Canal",
                "Al Wasl",
                "Sheikh Zayed Road"
              ],
              "serviceOffered": [
                {"@type": "Service","name": "Office Interior Design in Bluewaters Dubai"},
                {"@type": "Service","name": "Apartment Interior Design in Bluewaters Dubai"},
                {"@type": "Service","name": "Villa Interior Design In Bluewaters Dubai"},
                {"@type": "Service","name": "Restaurant Interior Design In Bluewaters Dubai"}
              ]
            })
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does an office fit-out in Bluewaters Dubai take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Office fit-outs typically take six to twelve weeks depending on the project size and complexity. All required DCD and authority approvals are managed by our team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide turnkey fit-out services in Bluewaters Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide complete turnkey fit-out services including design, approvals, execution, and final handover."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you design luxury apartments in Bluewaters Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in apartment interior design and luxury residential interiors in Bluewaters Dubai, creating elegant and functional spaces."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you a leading interior design company in Bluewaters Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Casa kraft Interior Design & Fitout is recognized for delivering high-quality residential and commercial interior design and renovation projects in Bluewaters Dubai."
                  }
                }
              ]
            })
          }}
        />

        {/* CollectionPage Schema with Bluewaters Dubai Projects */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Bluewaters Dubai Interior Design Projects",
              "url": "https://casakraftinteriors.ae/interior-design-bluewaters-dubai",
              "description": "A curated collection of luxury interior design and renovation projects in Bluewaters Dubai by Casa kraft Interior Design & Fitout.",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Bluewaters Dubai Apartment Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-apartment"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Bluewaters Dubai Office Fit-Out",
                    "url": "https://casakraftinteriors.ae/business-bay-office-fit-out"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Bluewaters Dubai Cafe Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-cafe-interior"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Bluewaters Dubai Restaurant Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-restaurant"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Bluewaters Dubai Travel Agency Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-travel-agency"
                  }
                ]
              }
            })
          }}
        />

      </head>
      <body>{children}</body>
    </html>
  );
}
