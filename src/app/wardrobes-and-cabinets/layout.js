import '../globals.css';

export const metadata = {
  title: "Wardrobes & Cabinets Dubai - Custom Storage Solutions | Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers custom wardrobes and cabinets in Dubai with modern designs, premium materials, and expert installation for homes and apartments.",
  keywords: [
    "wardrobes Dubai",
    "custom wardrobes Dubai",
    "cabinets Dubai",
    "built in wardrobes Dubai",
    "storage solutions Dubai",
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
              name: "Wardrobes & Cabinets Dubai",
              description:
                "Custom wardrobes and cabinets design, supply, and installation services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Wardrobes and Cabinets Design and Installation",
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
              name: "Wardrobes & Cabinets Dubai",
              url: "https://casakraftinteriors.ae/wardrobes-and-cabinets",
              description:
                "Get custom wardrobes and cabinets in Dubai with expert design and installation by Casa Kraft Interiors.",
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
                  name: "Wardrobes & Cabinets",
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