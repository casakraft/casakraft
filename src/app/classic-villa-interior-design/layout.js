import '../globals.css';

export const metadata = {
  title: "Classic Villa Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Classic Villa Interior Design project in Dubai with elegant design, luxury renovation, and premium fit-out services for timeless living spaces.",
  keywords: [
    "classic villa interior design Dubai",
    "villa interior design Dubai",
    "luxury villa design Dubai",
    "villa renovation Dubai",
    "villa fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/classic-villa-interior-design",
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
              name: "Classic Villa Interior Design",
              description:
                "Luxury classic villa interior design and fit-out project completed by Casa Kraft Interiors in Dubai.",
              url: "https://casakraftinteriors.ae/classic-villa-interior-design",
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
              name: "Classic Villa Interior Design Dubai",
              url: "https://casakraftinteriors.ae/classic-villa-interior-design",
              description:
                "Explore Casa Kraft Interiors’ Classic Villa Interior Design project in Dubai with elegant renovation and premium fit-out services.",
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
                  name: "Classic Villa Interior Design",
                  item: "https://casakraftinteriors.ae/classic-villa-interior-design",
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