import '../globals.css';

export const metadata = {
  title: "Dubai Hills Townhouse Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Dubai Hills Townhouse project with modern interior design, premium renovation, and full fit-out services for stylish living in Dubai.",
  keywords: [
    "Dubai Hills townhouse",
    "Dubai Hills townhouse interior design",
    "townhouse design Dubai",
    "townhouse renovation Dubai",
    "townhouse fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/dubai-hills-townhouse",
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
              name: "Dubai Hills Townhouse",
              description:
                "Premium townhouse interior design and fit-out project completed by Casa Kraft Interiors in Dubai Hills, Dubai.",
              url: "https://casakraftinteriors.ae/dubai-hills-townhouse",
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
              name: "Dubai Hills Townhouse Interior Design Dubai",
              url: "https://casakraftinteriors.ae/dubai-hills-townhouse",
              description:
                "Explore Casa Kraft Interiors’ Dubai Hills Townhouse project in Dubai with modern renovation and full fit-out services.",
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
                  name: "Dubai Hills Townhouse",
                  item: "https://casakraftinteriors.ae/dubai-hills-townhouse",
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