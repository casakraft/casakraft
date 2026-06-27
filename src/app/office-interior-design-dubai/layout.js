import '../globals.css';

export const metadata = {
  title: "Office Interior Design Dubai | Office Fit-Out Experts | Casa Kraft",
  description:
    "Looking for professional office interior designers in Dubai? Casa Kraft creates offices with complete design and fit-out solutions. Call Now!",
  keywords: [
    "office interior design Dubai",
    "office fit out Dubai",
    "office renovation Dubai",
    "commercial interior design Dubai",
    "modern office interior design Dubai",
    "luxury office design Dubai",
    "workspace design Dubai",
    "office refurbishment Dubai",
    "corporate office interior design Dubai",
    "office design company Dubai",
    "best office interior designers Dubai",
    "office fit out company Dubai",
    "small office interior design Dubai",
    "contemporary office design Dubai",
    "Casa Kraft Interior design and renovation",
  ],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/office-interior-design-dubai",
  },

  openGraph: {
    title: "Office Interior Design Dubai - Office Fit-Out Experts - Casa Kraft",
    description:
      "Looking for professional office interior designers in Dubai? Casa Kraft creates offices with complete design and fit-out solutions. Call Now!",
    url: "https://casakraftinteriors.ae/office-interior-design-dubai",
    siteName: "Casa Kraft Interiors",
    images: [
      {
        url: "https://casakraftinteriors.ae/images/office-interior-in-dubai.jpg",
        width: 1200,
        height: 630,
        alt: "Office Interior Design Dubai – Casa Kraft Interiors",
      },
    ],
    type: "website",
    locale: "en_AE",
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Design Dubai | Office Fit-Out Experts | Casa Kraft",
    description:
      "Looking for professional office interior designers in Dubai? Casa Kraft creates offices with complete design and fit-out solutions. Call Now!",
    images: ["https://casakraftinteriors.ae/images/office-interior-in-dubai.jpg"],
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
        

        {/* ✅ Service Schema — Office specific */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://casakraftinteriors.ae/office-interior-design-dubai#service",
              name: "Office Interior Design Dubai",
              description:
                "Professional office interior design, fit-out, and renovation services in Dubai by Casa Kraft Interiors.",
              image: "https://casakraftinteriors.ae/images/office-interior-in-dubai.jpg",
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
              serviceType: "Office Interior Design and Fit-Out",
              url: "https://casakraftinteriors.ae/office-interior-design-dubai",
              offers: {
                "@type": "Offer",
                priceCurrency: "AED",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        {/* ✅ WebPage Schema — Office specific */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://casakraftinteriors.ae/office-interior-design-dubai#webpage",
              name: "Office Interior Design Dubai | Office Fit-Out Experts | Casa Kraft",
              url: "https://casakraftinteriors.ae/office-interior-design-dubai",
              description:
                "Get luxury office interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
              mainEntity: {
                "@id": "https://casakraftinteriors.ae/office-interior-design-dubai#service",
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
                  name: "Office Interior Design Dubai",
                  item: "https://casakraftinteriors.ae/office-interior-design-dubai",
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