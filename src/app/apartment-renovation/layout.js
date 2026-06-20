import '../globals.css';

export const metadata = {
  title: "Kitchen Renovation Dubai| Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers luxury Kitchen Renovation Dubai with bespoke concepts, premium materials, and complete renovation and fit-out solutions.",
  keywords: [
    "kitchen interior design Dubai",
    "luxury kitchen design Dubai",
    "kitchen renovation Dubai",
    "kitchen fit out Dubai",
    "modern kitchen interior Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/kitchen-interior-design-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "kitchen Interior Design Dubai",
              description:
                "Luxury kitchen interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "kitchen Interior Design and Fit Out",
              url: "https://casakraftinteriors.ae/kitchen-interior-design-dubai",
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
              name: "kitchen Interior Design Dubai",
              url: "https://casakraftinteriors.ae/kitchen-interior-design-dubai",
              description:
                "Get luxury kitchen interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
            }),
          }}
        />

        {/* Breadcrumb Schema */}
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
                  name: "Services",
                  item: "https://casakraftinteriors.ae/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "kitchen Interior Design Dubai",
                  item: "https://casakraftinteriors.ae/kitchen-interior-design-dubai",
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