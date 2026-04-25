import '../globals.css';

export const metadata = {
  title: "Damac Hills 3 Bedroom Townhouse Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Damac Hills 3 Bedroom Townhouse project in Dubai with modern interior design, premium renovation, and full fit-out services.",
  keywords: [
    "Damac Hills 3 Bedroom Townhouse",
    "Damac Hills townhouse Dubai",
    "townhouse interior design Dubai",
    "townhouse renovation Dubai",
    "townhouse fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/damac-hills-3-bedroom-townhouse",
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
              name: "Damac Hills 3 Bedroom Townhouse",
              description:
                "Premium 3 bedroom townhouse interior design and fit-out project completed by Casa Kraft Interiors in Damac Hills, Dubai.",
              url: "https://casakraftinteriors.ae/damac-hills-3-bedroom-townhouse",
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
              name: "Damac Hills 3 Bedroom Townhouse Interior Design Dubai",
              url: "https://casakraftinteriors.ae/damac-hills-3-bedroom-townhouse",
              description:
                "Explore Casa Kraft Interiors’ Damac Hills 3 Bedroom Townhouse project in Dubai with modern renovation and full fit-out services.",
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
                  name: "Damac Hills 3 Bedroom Townhouse",
                  item: "https://casakraftinteriors.ae/damac-hills-3-bedroom-townhouse",
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