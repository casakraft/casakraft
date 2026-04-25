import '../globals.css';

export const metadata = {
  title: "Arabella 2 Townhouse Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Arabella 2 Townhouse project in Dubai with premium interior design, renovation, and full fit-out services.",
  keywords: [
    "Arabella 2 Townhouse",
    "Arabella townhouse Dubai",
    "townhouse interior design Dubai",
    "townhouse renovation Dubai",
    "townhouse fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/arabella-2-townhouse",
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
              name: "Arabella 2 Townhouse",
              description:
                "Premium townhouse interior design and fit-out project completed by Casa Kraft Interiors in Dubai.",
              url: "https://casakraftinteriors.ae/arabella-2-townhouse",
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
              name: "Arabella 2 Townhouse Interior Design Dubai",
              url: "https://casakraftinteriors.ae/arabella-2-townhouse",
              description:
                "Explore Casa Kraft Interiors’ Arabella 2 Townhouse project in Dubai with complete renovation and fit-out services.",
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
                  name: "Arabella 2 Townhouse",
                  item: "https://casakraftinteriors.ae/arabella-2-townhouse",
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