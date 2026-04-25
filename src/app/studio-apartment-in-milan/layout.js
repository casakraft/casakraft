import '../globals.css';

export const metadata = {
  title: "Studio Apartment in Milan Interior Design - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Studio Apartment in Milan project with modern interior design, space optimization, and premium fit-out solutions.",
  keywords: [
    "studio apartment Milan",
    "studio apartment interior design",
    "small apartment design Milan",
    "modern studio apartment design",
    "apartment fit out",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/studio-apartment-in-milan",
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
              name: "Studio Apartment in Milan",
              description:
                "Modern studio apartment interior design and fit-out project completed by Casa Kraft Interiors in Milan.",
              url: "https://casakraftinteriors.ae/studio-apartment-in-milan",
              creator: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
              },
              areaServed: {
                "@type": "Place",
                name: "Milan, Italy",
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
              name: "Studio Apartment in Milan Interior Design",
              url: "https://casakraftinteriors.ae/studio-apartment-in-milan",
              description:
                "Explore Casa Kraft Interiors’ Studio Apartment in Milan project with modern design and smart space optimization.",
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
                  name: "Studio Apartment in Milan",
                  item: "https://casakraftinteriors.ae/studio-apartment-in-milan",
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