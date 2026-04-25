import '../globals.css';

export const metadata = {
  title: "Damac Hills 5 Bedroom Villa Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Damac Hills 5 Bedroom Villa project in Dubai with luxury interior design, premium renovation, and high-end fit-out services.",
  keywords: [
    "Damac Hills 5 bedroom villa",
    "Damac Hills villa interior design",
    "luxury villa Dubai",
    "villa renovation Dubai",
    "villa fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/villa-damac-hills-5-bedroom",
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
              name: "Damac Hills 5 Bedroom Villa",
              description:
                "Luxury 5 bedroom villa interior design and fit-out project completed by Casa Kraft Interiors in Damac Hills, Dubai.",
              url: "https://casakraftinteriors.ae/villa-damac-hills-5-bedroom",
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
              name: "Damac Hills 5 Bedroom Villa Interior Design Dubai",
              url: "https://casakraftinteriors.ae/villa-damac-hills-5-bedroom",
              description:
                "Explore Casa Kraft Interiors’ Damac Hills 5 Bedroom Villa project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "Damac Hills 5 Bedroom Villa",
                  item: "https://casakraftinteriors.ae/villa-damac-hills-5-bedroom",
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