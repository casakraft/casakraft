import '../globals.css';

export const metadata = {
  title: "City Walk 3 Bedroom Apartment Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the City Walk 3 Bedroom Apartment project in Dubai with premium interior design, renovation, and full fit-out services for modern urban living.",
  keywords: [
    "City Walk 3 Bedroom Apartment",
    "City Walk apartment Dubai",
    "3 bedroom apartment design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/city-walk-3-bedroom-apartment",
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
              name: "City Walk 3 Bedroom Apartment",
              description:
                "Premium 3 bedroom apartment interior design and fit-out project completed by Casa Kraft Interiors in City Walk, Dubai.",
              url: "https://casakraftinteriors.ae/city-walk-3-bedroom-apartment",
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
              name: "City Walk 3 Bedroom Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/city-walk-3-bedroom-apartment",
              description:
                "Explore Casa Kraft Interiors’ City Walk 3 Bedroom Apartment project in Dubai with modern renovation and full fit-out services.",
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
                  name: "City Walk 3 Bedroom Apartment",
                  item: "https://casakraftinteriors.ae/city-walk-3-bedroom-apartment",
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