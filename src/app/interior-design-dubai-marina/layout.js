import '../globals.css';

export const metadata = {
  title: "Best Interior Design Company in palm jumeirah, Dubai - WE DO interiors",
  description:
    "Luxury interior design company in palm jumeirah delivering office, apartment & turnkey fit-outs. Schedule your free consultation today.",
  keywords:[
    "interior design company palm jumeirah",
    "interior design company in palm jumeirah Dubai",
    "office interior design palm jumeirah",
    "apartment interior design palm jumeirah",
    "interior fit out company palm jumeirah",
    "turnkey fit out palm jumeirah",
    "commercial interior design palm jumeirah",
    "luxury interior design Dubai",
    "renovation services palm jumeirah",
    "design and build company Dubai"
  ],
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  openGraph: {
    title: 'Interior Design Projects Dubai | We Do Interior Design & Fit-Out',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by We Do Interior. Discover our residential, commercial, and hospitality portfolio.',
    url: 'https://casakraftinteriors.ae/interior-design-palm-jumeirah',
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
    canonical: '/interior-design-palm-jumeirah',
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
                "streetAddress": "palm jumeirah",
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
              "name": "Interior Design Company in palm jumeirah",
              "url": "https://casakraftinteriors.ae/interior-design-palm-jumeirah",
              "description": "Luxury interior design services in palm jumeirah Dubai including offices, apartments, cafes, restaurants, and travel agencies."
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
              "@id": "https://casakraftinteriors.ae/interior-design-palm-jumeirah",
              "name": "WE DO Interior Design & Fitout",
              "image": "https://casakraftinteriors.ae/og-image.jpg",
              "url": "https://casakraftinteriors.ae/interior-design-palm-jumeirah",
              "telephone": "+971 058 807 5603",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "palm jumeirah",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "areaServed": [
                "palm jumeirah",
                "Downtown Dubai",
                "DIFC",
                "Dubai Mall",
                "Burj Khalifa",
                "Dubai Canal",
                "Al Wasl",
                "Sheikh Zayed Road"
              ],
              "serviceOffered": [
                {"@type": "Service","name": "Office Interior Design in palm jumeirah"},
                {"@type": "Service","name": "Apartment Interior Design in palm jumeirah"},
                {"@type": "Service","name": "Villa Interior Design In palm jumeirah"},
                {"@type": "Service","name": "Restaurant Interior Design In palm jumeirah"}
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
                  "name": "How long does an office fit-out in palm jumeirah take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Office fit-outs typically take six to twelve weeks depending on the project size and complexity. All required DCD and authority approvals are managed by our team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide turnkey fit-out services in palm jumeirah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide complete turnkey fit-out services including design, approvals, execution, and final handover."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you design luxury apartments in palm jumeirah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in apartment interior design and luxury residential interiors in palm jumeirah, creating elegant and functional spaces."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you a leading interior design company in palm jumeirah?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WE DO Interior Design & Fitout is recognized for delivering high-quality residential and commercial interior design and fit-out projects in palm jumeirah."
                  }
                }
              ]
            })
          }}
        />

        {/* CollectionPage Schema with palm jumeirah Projects */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "palm jumeirah Interior Design Projects",
              "url": "https://casakraftinteriors.ae/interior-design-palm-jumeirah",
              "description": "A curated collection of luxury interior design and fit-out projects in palm jumeirah by WE DO Interior Design & Fitout.",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "palm jumeirah Apartment Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-apartment"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "palm jumeirah Office Fit-Out",
                    "url": "https://casakraftinteriors.ae/business-bay-office-fit-out"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "palm jumeirah Cafe Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-cafe-interior"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "palm jumeirah Restaurant Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-restaurant"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "palm jumeirah Travel Agency Interior Design",
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
