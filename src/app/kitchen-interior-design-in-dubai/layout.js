import '../globals.css';

export const metadata = {
  title: "Kitchen Interior Design in Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers expert kitchen interior design in Dubai with modern layouts, premium materials, and complete renovation and fit-out solutions.",
  keywords: [
    "kitchen interior design Dubai",
    "modern kitchen design Dubai",
    "kitchen renovation Dubai",
    "kitchen fit out Dubai",
    "custom kitchen design Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/kitchen-interior-design-in-dubai",
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
              name: "Kitchen Interior Design in Dubai",
              description:
                "Professional kitchen interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Kitchen Interior Design and Fit Out",
              url: "https://casakraftinteriors.ae/kitchen-interior-design-in-dubai",
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
              name: "Kitchen Interior Design in Dubai",
              url: "https://casakraftinteriors.ae/kitchen-interior-design-in-dubai",
              description:
                "Get modern and functional kitchen interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
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
                  name: "Kitchen Interior Design in Dubai",
                  item:
                    "https://casakraftinteriors.ae/kitchen-interior-design-in-dubai",
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