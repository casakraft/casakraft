import '../globals.css';

export const metadata = {
  title: "Acacia 3 Bedroom Apartment Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors, a leading interior design company in Dubai, completed the Acacia 3 Bedroom Apartment with renovation and full fit-out services.",
  keywords: [
    "Acacia 3 Bedroom Apartment",
    "Acacia apartment Dubai",
    "3 bedroom apartment design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/acacia-3-bedroom-apartment",
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
              name: "Acacia 3 Bedroom Apartment",
              description:
                "Premium 3 bedroom apartment interior design and fit-out project completed by Casa Kraft Interiors in Dubai.",
              url: "https://casakraftinteriors.ae/acacia-3-bedroom-apartment",
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
              name: "Acacia 3 Bedroom Apartment Design Dubai",
              url: "https://casakraftinteriors.ae/acacia-3-bedroom-apartment",
              description:
                "Explore Casa Kraft Interiors’ Acacia 3 Bedroom Apartment project in Dubai with complete renovation and fit-out services.",
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
                  name: "Acacia 3 Bedroom Apartment",
                  item: "https://casakraftinteriors.ae/acacia-3-bedroom-apartment",
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