import '../globals.css';

export const metadata = {
  title: "Nikki Beach 2 Bedroom Apartment Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Nikki Beach 2 Bedroom Apartment project in Dubai with luxury interior design, premium renovation, and full fit-out services for beachfront living.",
  keywords: [
    "Nikki Beach 2 Bedroom Apartment",
    "Nikki Beach apartment Dubai",
    "2 bedroom apartment design Dubai",
    "luxury apartment interior design Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/nikki-beach-2-bedroom-apartment",
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
              name: "Nikki Beach 2 Bedroom Apartment",
              description:
                "Luxury 2 bedroom apartment interior design and fit-out project completed by Casa Kraft Interiors in Nikki Beach, Dubai.",
              url: "https://casakraftinteriors.ae/nikki-beach-2-bedroom-apartment",
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
              name: "Nikki Beach 2 Bedroom Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/nikki-beach-2-bedroom-apartment",
              description:
                "Explore Casa Kraft Interiors’ Nikki Beach 2 Bedroom Apartment project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "Nikki Beach 2 Bedroom Apartment",
                  item: "https://casakraftinteriors.ae/nikki-beach-2-bedroom-apartment",
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