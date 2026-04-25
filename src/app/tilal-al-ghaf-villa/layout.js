import '../globals.css';

export const metadata = {
  title: "Tilal Al Ghaf Villa Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Tilal Al Ghaf Villa project in Dubai with luxury interior design, premium renovation, and high-end fit-out services for modern villa living.",
  keywords: [
    "Tilal Al Ghaf villa",
    "Tilal Al Ghaf villa interior design",
    "villa design Dubai",
    "luxury villa Dubai",
    "villa renovation Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/tilal-al-ghaf-villa",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Project Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "Tilal Al Ghaf Villa",
              description:
                "Luxury villa interior design and fit-out project completed by Casa Kraft Interiors in Tilal Al Ghaf, Dubai.",
              url: "https://casakraftinteriors.ae/tilal-al-ghaf-villa",
              creator: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
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
              name: "Tilal Al Ghaf Villa Interior Design Dubai",
              url: "https://casakraftinteriors.ae/tilal-al-ghaf-villa",
              description:
                "Explore Casa Kraft Interiors’ Tilal Al Ghaf Villa project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "Projects",
                  item: "https://casakraftinteriors.ae/gallery",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Tilal Al Ghaf Villa",
                  item: "https://casakraftinteriors.ae/tilal-al-ghaf-villa",
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