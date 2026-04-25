import '../globals.css';

export const metadata = {
  title: "Amfali 4 Bedroom Apartment Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Amfali 4 Bedroom Apartment project in Dubai with premium interior design, renovation, and full fit-out services.",
  keywords: [
    "Amfali 4 Bedroom Apartment",
    "Amfali apartment Dubai",
    "4 bedroom apartment design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/amfali-4-bedroom-apartment",
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
              name: "Amfali 4 Bedroom Apartment",
              description:
                "Premium 4 bedroom apartment interior design and fit-out project completed by Casa Kraft Interiors in Dubai.",
              url: "https://casakraftinteriors.ae/amfali-4-bedroom-apartment",
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
              name: "Amfali 4 Bedroom Apartment Design Dubai",
              url: "https://casakraftinteriors.ae/amfali-4-bedroom-apartment",
              description:
                "Explore Casa Kraft Interiors’ Amfali 4 Bedroom Apartment project in Dubai with complete renovation and fit-out services.",
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
                  name: "Amfali 4 Bedroom Apartment",
                  item: "https://casakraftinteriors.ae/amfali-4-bedroom-apartment",
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