import "../globals.css";

export const metadata = {
  title: "Wardrobes and Cabinet Designs Dubai - Casa Kraft interiors",
  description:
    "Premium wardrobe and  cabinets in Dubai designed with style, functionality, and expert craftsmanship.Call us now",
  keywords: [
    "office renovation Dubai",
    "office fit out Dubai",
    "office remodeling Dubai",
    "commercial office renovation Dubai",
    "modern office renovation Dubai",
    "turnkey office fit out Dubai",
    "workspace renovation Dubai",
    "office interior design Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/wardrobes-and-cabinets",
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
              name: "Wardrobes and Cabinets",
              description:
                "Premium wardrobe and  cabinets in Dubai designed with style, functionality, and expert craftsmanship.Call us now",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Custom Wardrobe Cabinet Design and Installation Services in Dubai",
              url: "https://casakraftinteriors.ae/wardrobes-and-cabinets",
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
              name: "Wardrobes and Cabinets",
              url: "https://casakraftinteriors.ae/wardrobes-and-cabinets",
              description:
                "Premium wardrobe and  cabinets in Dubai designed with style, functionality, and expert craftsmanship.Call us now",
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
                  name: "Wardrobes and Cabinets",
                  item: "https://casakraftinteriors.ae/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Wardrobes and Cabinets",
                  item: "https://casakraftinteriors.ae/wardrobes-and-cabinets",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Wardrobes and Cabinets",
                  item: "https://casakraftinteriors.ae/wardrobes-and-cabinets",
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