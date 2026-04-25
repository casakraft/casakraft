import '../globals.css';

export const metadata = {
  title: "Bluewaters 3 Bedroom Apartment Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Bluewaters 3 Bedroom Apartment project in Dubai with premium interior design, renovation, and full fit-out services for luxury waterfront living.",
  keywords: [
    "Bluewaters 3 Bedroom Apartment",
    "Bluewaters apartment Dubai",
    "3 bedroom apartment design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/bluewaters-3-bedroom-design",
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
              name: "Bluewaters 3 Bedroom Apartment Design",
              description:
                "Premium 3 bedroom apartment interior design and fit-out project completed by Casa Kraft Interiors in Bluewaters, Dubai.",
              url: "https://casakraftinteriors.ae/bluewaters-3-bedroom-design",
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
              name: "Bluewaters 3 Bedroom Apartment Design Dubai",
              url: "https://casakraftinteriors.ae/bluewaters-3-bedroom-design",
              description:
                "Explore Casa Kraft Interiors’ Bluewaters 3 Bedroom Apartment project in Dubai with luxury renovation and full fit-out services.",
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
                  name: "Bluewaters 3 Bedroom Apartment Design",
                  item: "https://casakraftinteriors.ae/bluewaters-3-bedroom-design",
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