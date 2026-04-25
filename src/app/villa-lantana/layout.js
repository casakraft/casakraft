import '../globals.css';

export const metadata = {
  title: "Villa Lantana Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Villa Lantana project in Dubai with modern interior design, premium renovation, and complete fit-out services.",
  keywords: [
    "Villa Lantana Dubai",
    "Lantana villa interior design",
    "villa interior design Dubai",
    "villa renovation Dubai",
    "villa fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/villa-lantana",
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
              name: "Villa Lantana",
              description:
                "Modern villa interior design and fit-out project completed by Casa Kraft Interiors in Villa Lantana, Dubai.",
              url: "https://casakraftinteriors.ae/villa-lantana",
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
              name: "Villa Lantana Interior Design Dubai",
              url: "https://casakraftinteriors.ae/villa-lantana",
              description:
                "Explore Casa Kraft Interiors’ Villa Lantana project with modern renovation and premium fit-out services in Dubai.",
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
                  name: "Villa Lantana",
                  item: "https://casakraftinteriors.ae/villa-lantana",
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