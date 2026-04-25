import '../globals.css';

export const metadata = {
  title: "Townhouse Arabian Ranches 2 Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Arabian Ranches 2 Townhouse project in Dubai with modern interior design, premium renovation, and complete fit-out services.",
  keywords: [
    "Arabian Ranches 2 townhouse",
    "townhouse interior design Dubai",
    "Arabian Ranches townhouse Dubai",
    "townhouse renovation Dubai",
    "townhouse fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/townhouse-arabian-ranches-2",
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
              name: "Townhouse Arabian Ranches 2",
              description:
                "Modern townhouse interior design and fit-out project completed by Casa Kraft Interiors in Arabian Ranches 2, Dubai.",
              url: "https://casakraftinteriors.ae/townhouse-arabian-ranches-2",
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
              name: "Townhouse Arabian Ranches 2 Interior Design Dubai",
              url: "https://casakraftinteriors.ae/townhouse-arabian-ranches-2",
              description:
                "Explore Casa Kraft Interiors’ Arabian Ranches 2 Townhouse project with modern renovation and full fit-out services in Dubai.",
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
                  name: "Townhouse Arabian Ranches 2",
                  item: "https://casakraftinteriors.ae/townhouse-arabian-ranches-2",
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