import '../globals.css';

export const metadata = {
  title: "Apartment Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers expert apartment interior design in Dubai, delivering modern, luxury design, renovation, and complete fit-out solutions.",
  keywords: [
    "apartment interior design Dubai",
    "apartment design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "modern apartment interiors Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/apartment-interior-design-dubai",
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
              name: "Apartment Interior Design Dubai",
              description:
                "Professional apartment interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Apartment Interior Design and Fit Out",
              url: "https://casakraftinteriors.ae/apartment-interior-design-dubai",
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
              name: "Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/apartment-interior-design-dubai",
              description:
                "Expert apartment interior design services in Dubai including renovation, modern design, and full fit-out by Casa Kraft Interiors.",
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