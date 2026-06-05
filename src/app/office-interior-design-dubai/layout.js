import '../globals.css';

export const metadata = {
  title: "office Interior Design Dubai - Luxury office Design | Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers luxury office interior design in Dubai with bespoke concepts, premium materials, and complete renovation and fit-out solutions.",
  keywords: [
    "office interior design Dubai",
    "luxury office design Dubai",
    "office renovation Dubai",
    "office fit out Dubai",
    "modern office interior Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/office-interior-design-dubai",
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
              name: "office Interior Design Dubai",
              description:
                "Luxury office interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "office Interior Design and Fit Out",
              url: "https://casakraftinteriors.ae/office-interior-design-dubai",
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
              name: "office Interior Design Dubai",
              url: "https://casakraftinteriors.ae/office-interior-design-dubai",
              description:
                "Get luxury office interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
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
                  name: "office Interior Design Dubai",
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