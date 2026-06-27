import '../globals.css';

export const metadata = {
  title: "Apartment Interior Design In Dubai - Casa Kraft Interiors",
  description:
    "Looking for apartment interior design Dubai? Casa Kraft Interiors offers luxury design, renovation, fit-out in Dubai. Call Now.",
  keywords: [
    "apartment interior design Dubai",
    "luxury apartment design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "modern apartment interior Dubai",
    "Casa Kraft Interior design and renovation",
  ],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/apartment-interior-design-dubai",
  },

  // ✅ OG Tags — page-specific
  openGraph: {
    title: "Apartment Interior Design In Dubai - Casa Kraft Interiors",
    description:
      "Looking for apartment interior design Dubai? Casa Kraft Interiors offers luxury design, renovation, fit-out in Dubai. Call Now.",
    url: "https://casakraftinteriors.ae/apartment-interior-design-dubai",
    siteName: "Casa Kraft Interiors",
    images: [
      {
        url: "https://casakraftinteriors.ae/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apartment Interior Design Dubai – Casa Kraft Interiors",
      },
    ],
    type: "website",
    locale: "en_AE",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Apartment Interior Design In Dubai - Casa Kraft Interiors",
    description:
      "Looking for apartment interior design Dubai? Casa Kraft Interiors offers luxury design, renovation, fit-out in Dubai. Call Now.",
    images: ["https://casakraftinteriors.ae/images/og-image.jpg"],
  },
};

export default function ApartmentLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* ✅ Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://casakraftinteriors.ae/#organization",
              name: "Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae",
              logo: "https://casakraftinteriors.ae/images/logo.svg",
              image: "https://casakraftinteriors.ae/images/og-image.jpg",
              telephone: "+971586023677",
              address: {
                "@type": "PostalAddress",
                streetAddress: "The Curve Building, Showroom G11, Sheikh Zayed Service Road",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              sameAs: [
                "https://www.instagram.com/casakraftinteriors.ae/",
                "https://www.facebook.com/p/Casa-Kraft-61575617962028/",
                "https://www.linkedin.com/company/110286081/",
                "https://www.pinterest.com/casakraftinteriors/",
              ],
            }),
          }}
        />

        {/* ✅ Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://casakraftinteriors.ae/apartment-interior-design-dubai#service",
              name: "Apartment Interior Design Dubai",
              description:
                "Luxury apartment interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
              image: "https://casakraftinteriors.ae/images/og-image.jpg",
              provider: {
                "@type": "Organization",
                "@id": "https://casakraftinteriors.ae/#organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Apartment Interior Design and Renovation",
              url: "https://casakraftinteriors.ae/apartment-interior-design-dubai",
              offers: {
                "@type": "Offer",
                priceCurrency: "AED",
                availability: "https://schema.org/InStock",
              },
              hasPart: {
                "@type": "Service",
                name: "Apartment Renovation Dubai",
                url: "https://casakraftinteriors.ae/apartment-renovation", // ✅ fixed URL
              },
              subjectOf: [
                {
                  "@type": "BlogPosting",
                  headline: "Apartment Renovation Cost Dubai",
                  url: "https://casakraftinteriors.ae/apartment-renovation-cost-dubai",
                },
                {
                  "@type": "BlogPosting",
                  headline: "Modern Apartment Interior Design",
                  url: "https://casakraftinteriors.ae/modern-apartment-interior-design",
                },
              ],
            }),
          }}
        />

        {/* ✅ WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://casakraftinteriors.ae/apartment-interior-design-dubai#webpage", // ✅ fixed
              name: "Apartment Interior Design In Dubai - Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae/apartment-interior-design-dubai",
              description:
                "Get luxury apartment interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
              mainEntity: {
                "@id": "https://casakraftinteriors.ae/apartment-interior-design-dubai#service",
              },
            }),
          }}
        />

        {/* ✅ Breadcrumb Schema — 3 levels */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://casakraftinteriors.ae/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Interior Design Dubai",
                  item: "https://casakraftinteriors.ae/interior-design-dubai", // ✅ parent added
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Apartment Interior Design Dubai",
                  item: "https://casakraftinteriors.ae/apartment-interior-design-dubai",
                },
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}