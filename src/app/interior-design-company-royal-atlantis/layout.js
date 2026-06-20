import '../globals.css';

export const metadata = {
  title: "Interior Design Atlantis The Royal Dubai | Casa Kraft Interiors",
  description:
    "Interior Design in Atlantis The Royal Dubai by Casa Kraft Interiors. Bespoke luxury interiors, premium fit-out, renovation & custom furniture. Call Now!",
  keywords:[
    "interior design company Atlantis The Royal",
    "interior design company in Atlantis The Royal Dubai",
    "office interior design Atlantis The Royal",
    "apartment interior design Atlantis The Royal",
    "interior fit out company Atlantis The Royal",
    "turnkey fit out Atlantis The Royal",
    "commercial interior design Atlantis The Royal",
    "luxury interior design Dubai",
    "renovation services Atlantis The Royal",
    "design and build company Dubai"
  ],
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  openGraph: {
    title: 'Interior Design Projects Dubai | Casa Kraft Interior Design & Fit-Out',
    description:
      'Explore luxury interior design and fit-out projects in Dubai by Casa Kraft Interior. Discover our residential, commercial, and hospitality portfolio.',
    url: 'https://casakraftinteriors.ae/interior-design-company-royal-atlantis',
    siteName: 'Casa Kraft interior design & Renovation',
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
    canonical: '/interior-design-company-royal-atlantis',
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
              "name": "Casa Kraft interior design & Renovation",
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
                "streetAddress": "Atlantis The Royal",
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
              "name": "Interior Design Company in Atlantis The Royal",
              "url": "https://casakraftinteriors.ae/interior-design-company-royal-atlantis",
              "description": "Luxury interior design services in Atlantis The Royal Dubai including offices, apartments, cafes, restaurants, and travel agencies."
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
              "@id": "https://casakraftinteriors.ae/interior-design-company-royal-atlantis",
              "name": "Casa Kraft interior design & Renovation",
              "image": "https://casakraftinteriors.ae/og-image.jpg",
              "url": "https://casakraftinteriors.ae/interior-design-company-royal-atlantis",
              "telephone": "+971 058 807 5603",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Atlantis The Royal",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
              },
              "areaServed": [
                "Atlantis The Royal",
                "Downtown Dubai",
                "DIFC",
                "Dubai Mall",
                "Burj Khalifa",
                "Dubai Canal",
                "Al Wasl",
                "Sheikh Zayed Road"
              ],
              "serviceOffered": [
                {"@type": "Service","name": "Office Interior Design in Atlantis The Royal"},
                {"@type": "Service","name": "Apartment Interior Design in Atlantis The Royal"},
                {"@type": "Service","name": "Villa Interior Design In Atlantis The Royal"},
                {"@type": "Service","name": "Restaurant Interior Design In Atlantis The Royal"}
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
                  "name": "How long does an office fit-out in Atlantis The Royal take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Office fit-outs typically take six to twelve weeks depending on the project size and complexity. All required DCD and authority approvals are managed by our team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide turnkey fit-out services in Atlantis The Royal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide complete turnkey fit-out services including design, approvals, execution, and final handover."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you design luxury apartments in Atlantis The Royal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in apartment interior design and luxury residential interiors in Atlantis The Royal, creating elegant and functional spaces."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you a leading interior design company in Atlantis The Royal?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Casa Kraft interior design & Renovation is recognized for delivering high-quality residential and commercial interior design and fit-out projects in Atlantis The Royal."
                  }
                }
              ]
            })
          }}
        />

        {/* CollectionPage Schema with Atlantis The Royal Projects */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Atlantis The Royal Interior Design Projects",
              "url": "https://casakraftinteriors.ae/interior-design-company-royal-atlantis",
              "description": "A curated collection of luxury interior design and fit-out projects in Atlantis The Royal by Casa Kraft interior design & Renovation.",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Atlantis The Royal Apartment Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-apartment"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Atlantis The Royal Office Fit-Out",
                    "url": "https://casakraftinteriors.ae/business-bay-office-fit-out"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Atlantis The Royal Cafe Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-cafe-interior"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Atlantis The Royal Restaurant Interior Design",
                    "url": "https://casakraftinteriors.ae/business-bay-restaurant"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Atlantis The Royal Travel Agency Interior Design",
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
