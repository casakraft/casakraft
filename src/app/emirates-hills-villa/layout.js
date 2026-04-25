import '../globals.css';

export const metadata = {
  title: "Emirates Hills Villa Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Emirates Hills Villa project with luxury interior design, premium renovation, and high-end fit-out services for elite living in Dubai.",
  keywords: [
    "Emirates Hills villa",
    "villa interior design Dubai",
    "luxury villa Dubai",
    "villa renovation Dubai",
    "villa fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/emirates-hills-villa",
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
              name: "Emirates Hills Villa",
              description:
                "Luxury villa interior design and fit-out project completed by Casa Kraft Interiors in Emirates Hills, Dubai.",
              url: "https://casakraftinteriors.ae/emirates-hills-villa",
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
              name: "Emirates Hills Villa Interior Design Dubai",
              url: "https://casakraftinteriors.ae/emirates-hills-villa",
              description:
                "Explore Casa Kraft Interiors’ Emirates Hills Villa project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "Emirates Hills Villa",
                  item: "https://casakraftinteriors.ae/emirates-hills-villa",
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