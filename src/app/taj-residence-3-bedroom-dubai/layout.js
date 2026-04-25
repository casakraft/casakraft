import '../globals.css';

export const metadata = {
  title: "Taj Residence 3 Bedroom Apartment Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Taj Residence 3 Bedroom Apartment project in Dubai with luxury interior design, premium renovation, and complete fit-out services.",
  keywords: [
    "Taj Residence 3 Bedroom Apartment",
    "Taj Residence Dubai apartment",
    "3 bedroom apartment design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/taj-residence-3-bedroom-dubai",
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
              name: "Taj Residence 3 Bedroom Apartment",
              description:
                "Luxury 3 bedroom apartment interior design and fit-out project completed by Casa Kraft Interiors in Dubai.",
              url: "https://casakraftinteriors.ae/taj-residence-3-bedroom-dubai",
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
              name: "Taj Residence 3 Bedroom Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/taj-residence-3-bedroom-dubai",
              description:
                "Explore Casa Kraft Interiors’ Taj Residence 3 Bedroom Apartment project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "Taj Residence 3 Bedroom Apartment",
                  item: "https://casakraftinteriors.ae/taj-residence-3-bedroom-dubai",
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