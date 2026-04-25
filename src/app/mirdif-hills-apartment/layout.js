import '../globals.css';

export const metadata = {
  title: "Mirdif Hills Apartment Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Mirdif Hills Apartment project in Dubai with modern interior design, premium renovation, and complete fit-out services.",
  keywords: [
    "Mirdif Hills apartment",
    "Mirdif apartment Dubai",
    "apartment interior design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/mirdif-hills-apartment",
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
              name: "Mirdif Hills Apartment",
              description:
                "Modern apartment interior design and fit-out project completed by Casa Kraft Interiors in Mirdif Hills, Dubai.",
              url: "https://casakraftinteriors.ae/mirdif-hills-apartment",
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
              name: "Mirdif Hills Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/mirdif-hills-apartment",
              description:
                "Explore Casa Kraft Interiors’ Mirdif Hills Apartment project with modern renovation and full fit-out services in Dubai.",
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
                  name: "Mirdif Hills Apartment",
                  item: "https://casakraftinteriors.ae/mirdif-hills-apartment",
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