import '../globals.css';

export const metadata = {
  title: "Best Interior Design Company in Downtown, Dubai - Casa Kraft interiors",
  description:
    "Luxury interior design company in Downtown delivering office, apartment & turnkey fit-outs. Schedule your free consultation today.",
  keywords:[
    "interior design company Downtown",
    "interior design company in Downtown Dubai",
    "office interior design Downtown",
    "apartment interior design Downtown",
    "interior fit out company Downtown",
    "turnkey fit out Downtown",
    "commercial interior design Downtown",
    "luxury interior design Dubai",
    "renovation services Downtown",
    "design and build company Dubai"
  ],
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  openGraph: {
    title: 'Interior Design Projects Dubai | Casa Kraft Interior Design & Fit-Out',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by Casa Kraft Interior. Discover our residential, commercial, and hospitality portfolio.',
    url: 'https://casakraftinteriors.ae/interior-design-downtown-dubai',
    siteName: 'Casa Kraft Interior Design & Fitout',
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
    title: 'Interior Design Projects Dubai | Casa Kraft Interior Design & Fit-Out',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by Casa Kraft Interior. Discover our residential, commercial, and hospitality portfolio.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/interior-design-downtown-dubai',
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
              "name": "Casa Kraft Interior Design & Fitout",
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
                "streetAddress": "Downtown",
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
              "name": "Interior Design Company in Downtown",
              "url": "https://casakraftinteriors.ae/interior-design-downtown-dubai",
              "description": "Luxury interior design services in Downtown Dubai including offices, apartments, cafes, restaurants, and travel agencies."
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
              "@id": "https://casakraftinteriors.ae/interior-design-downtown-dubai",
              "name": "Casa Kraft Interior Design & Fitout",
              "image": "https://casakraftinteriors.ae/og-image.jpg",
              "url": "https://casakraftinteriors.ae/interior-design-downtown-dubai",
              "telephone": "+971 058 807 5603",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Downtown",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "areaServed": [
                "Downtown",
                "Downtown Dubai",
                "DIFC",
                "Dubai Mall",
                "Burj Khalifa",
                "Dubai Canal",
                "Al Wasl",
                "Sheikh Zayed Road"
              ],
              "serviceOffered": [
                {"@type": "Service","name": "Office Interior Design in Downtown"},
                {"@type": "Service","name": "Apartment Interior Design in Downtown"},
                {"@type": "Service","name": "Villa Interior Design In Downtown"},
                {"@type": "Service","name": "Restaurant Interior Design In Downtown"}
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
                  "name": "How long does an office fit-out in Downtown take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Office fit-outs typically take six to twelve weeks depending on the project size and complexity. All required DCD and authority approvals are managed by our team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide turnkey fit-out services in Downtown?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide complete turnkey fit-out services including design, approvals, execution, and final handover."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you design luxury apartments in Downtown?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in apartment interior design and luxury residential interiors in Downtown, creating elegant and functional spaces."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you a leading interior design company in Downtown?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Casa Kraft Interior Design & Fitout is recognized for delivering high-quality residential and commercial interior design and fit-out projects in Downtown."
                  }
                }
              ]
            })
          }}
        />

        {/* CollectionPage Schema with Downtown Projects */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Downtown Interior Design Projects",
              "url": "https://casakraftinteriors.ae/interior-design-downtown-dubai",
              "description": "A curated collection of luxury interior design and fit-out projects in Downtown by Casa Kraft Interior Design & Fitout.",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Downtown Apartment Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-apartment"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Downtown Office Fit-Out",
                    "url": "https://casakraftinteriors.ae/business-bay-office-fit-out"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Downtown Cafe Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-cafe-interior"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Downtown Restaurant Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-restaurant"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Downtown Travel Agency Interior Design",
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
