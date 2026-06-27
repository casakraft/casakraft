import '../globals.css';

export const metadata = {
  title: "Villa Interior Design in Dubai - Casa Kraft Interiors",
  description:
    "Looking for expert villa interior designers in Dubai? Casa Kraft creates bespoke villa interiors, fit-outs, renovations, and custom furnitures. Visit Now",
  keywords: [
    "villa interior design Dubai",
    "luxury villa design Dubai",
    "villa renovation Dubai",
    "villa fit out Dubai",
    "modern villa interior Dubai",
    "Casa Kraft Interior design and renovation",
  ],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/villa-interior-design-dubai",
  },

  // ✅ OG Tags — page-specific
  openGraph: {
    title: "Villa Interior Design in Dubai - Casa Kraft Interiors",
    description:
      "Looking for expert villa interior designers in Dubai? Casa Kraft creates bespoke villa interiors, fit-outs, renovations, and custom furniture in Dubai.",
    url: "https://casakraftinteriors.ae/villa-interior-design-dubai",
    siteName: "Casa Kraft Interiors",
    images: [
      {
        url: "https://casakraftinteriors.ae/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa Interior Design Dubai – Casa Kraft Interiors",
      },
    ],
    type: "website",
    locale: "en_AE",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Villa Interior Design in Dubai - Casa Kraft Interiors",
    description:
      "Looking for expert villa interior designers in Dubai? Casa Kraft creates bespoke villa interiors, fit-outs, renovations, and custom furniture in Dubai.",
    images: ["https://casakraftinteriors.ae/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
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

        {/* ✅ Service Schema — Villa Interior Design specific */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://casakraftinteriors.ae/villa-interior-design-dubai#service",
              name: "Villa Interior Design Dubai",
              description:
                "Luxury villa interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
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
              serviceType: "Villa Interior Design and Renovation",
              url: "https://casakraftinteriors.ae/villa-interior-design-dubai",
              offers: {
                "@type": "Offer",
                priceCurrency: "AED",
                availability: "https://schema.org/InStock",
              },
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
              "@id": "https://casakraftinteriors.ae/villa-interior-design-dubai#webpage",
              name: "Villa Interior Design in Dubai - Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae/villa-interior-design-dubai",
              description:
                "Get luxury villa interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
              mainEntity: {
                "@id": "https://casakraftinteriors.ae/villa-interior-design-dubai#service",
              },
            }),
          }}
        />

        {/* ✅ Breadcrumb Schema — Correct path */}
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
                  item: "https://casakraftinteriors.ae/interior-design-dubai",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Villa Interior Design Dubai",
                  item: "https://casakraftinteriors.ae/villa-interior-design-dubai",
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