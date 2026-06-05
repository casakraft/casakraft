import '../globals.css';

export const metadata = {
  title: "Best Interior Design Company in Damac Hills, Dubai - WE DO interiors",
  description:
    "Luxury interior design company in Damac Hills delivering office, apartment & turnkey fit-outs. Schedule your free consultation today.",
  keywords:[
    "interior design company Damac Hills",
    "interior design company in Damac Hills Dubai",
    "office interior design Damac Hills",
    "apartment interior design Damac Hills",
    "interior fit out company Damac Hills",
    "turnkey fit out Damac Hills",
    "commercial interior design Damac Hills",
    "luxury interior design Dubai",
    "renovation services Damac Hills",
    "design and build company Dubai"
  ],
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  openGraph: {
    title: 'Interior Design Projects Dubai | We Do Interior Design & Fit-Out',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by We Do Interior. Discover our residential, commercial, and hospitality portfolio.',
    url: 'https://casakraftinteriors.ae/interior-design-company-damac-hills',
    siteName: 'WE DO Interior Design & Fitout',
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
    title: 'Interior Design Projects Dubai | We Do Interior Design & Fit-Out',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by We Do Interior. Discover our residential, commercial, and hospitality portfolio.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/interior-design-company-damac-hills',
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
              "name": "WE DO Interior Design & Fitout",
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
                "streetAddress": "Damac Hills",
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
              "name": "Interior Design Company in Damac Hills",
              "url": "https://casakraftinteriors.ae/interior-design-company-damac-hills",
              "description": "Luxury interior design services in Damac Hills Dubai including offices, apartments, cafes, restaurants, and travel agencies."
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
              "@id": "https://casakraftinteriors.ae/interior-design-company-damac-hills",
              "name": "WE DO Interior Design & Fitout",
              "image": "https://casakraftinteriors.ae/og-image.jpg",
              "url": "https://casakraftinteriors.ae/interior-design-company-damac-hills",
              "telephone": "+971 058 807 5603",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Damac Hills",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "areaServed": [
                "Damac Hills",
                "Downtown Dubai",
                "DIFC",
                "Dubai Mall",
                "Burj Khalifa",
                "Dubai Canal",
                "Al Wasl",
                "Sheikh Zayed Road"
              ],
              "serviceOffered": [
                {"@type": "Service","name": "Office Interior Design in Damac Hills"},
                {"@type": "Service","name": "Apartment Interior Design in Damac Hills"},
                {"@type": "Service","name": "Villa Interior Design In Damac Hills"},
                {"@type": "Service","name": "Restaurant Interior Design In Damac Hills"}
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
                  "name": "How long does an office fit-out in Damac Hills take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Office fit-outs typically take six to twelve weeks depending on the project size and complexity. All required DCD and authority approvals are managed by our team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide turnkey fit-out services in Damac Hills?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide complete turnkey fit-out services including design, approvals, execution, and final handover."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you design luxury apartments in Damac Hills?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in apartment interior design and luxury residential interiors in Damac Hills, creating elegant and functional spaces."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you a leading interior design company in Damac Hills?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WE DO Interior Design & Fitout is recognized for delivering high-quality residential and commercial interior design and fit-out projects in Damac Hills."
                  }
                }
              ]
            })
          }}
        />

        {/* CollectionPage Schema with Damac Hills Projects */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Damac Hills Interior Design Projects",
              "url": "https://casakraftinteriors.ae/interior-design-company-damac-hills",
              "description": "A curated collection of luxury interior design and fit-out projects in Damac Hills by WE DO Interior Design & Fitout.",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Damac Hills Apartment Interior Design",
                    "url": "https://casakraftinteriors.ae/damac-hills-apartment"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Damac Hills Office Fit-Out",
                    "url": "https://casakraftinteriors.ae/damac-hills-office-fit-out"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Damac Hills Cafe Interior Design",
                    "url": "https://casakraftinteriors.ae/damac-hills-cafe-interior"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Damac Hills Restaurant Interior Design",
                    "url": "https://casakraftinteriors.ae/damac-hills-restaurant"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Damac Hills Travel Agency Interior Design",
                    "url": "https://casakraftinteriors.ae/damac-hills-travel-agency"
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
