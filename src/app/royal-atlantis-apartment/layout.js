import '../globals.css';

export const metadata = {
  title: "Royal Atlantis Apartment Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Royal Atlantis Apartment project in Dubai with ultra-luxury interior design, premium renovation, and high-end fit-out services.",
  keywords: [
    "Royal Atlantis apartment",
    "Royal Atlantis Dubai interior design",
    "luxury apartment Dubai",
    "apartment renovation Dubai",
    "high end fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/royal-atlantis-apartment",
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
              name: "Royal Atlantis Apartment",
              description:
                "Ultra-luxury apartment interior design and fit-out project completed by Casa Kraft Interiors in Royal Atlantis, Dubai.",
              url: "https://casakraftinteriors.ae/royal-atlantis-apartment",
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
              name: "Royal Atlantis Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/royal-atlantis-apartment",
              description:
                "Explore Casa Kraft Interiors’ Royal Atlantis Apartment project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "Royal Atlantis Apartment",
                  item: "https://casakraftinteriors.ae/royal-atlantis-apartment",
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