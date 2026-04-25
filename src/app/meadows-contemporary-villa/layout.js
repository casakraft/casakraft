import '../globals.css';

export const metadata = {
  title: "Meadows Contemporary Villa Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Meadows Contemporary Villa project in Dubai with modern interior design, premium renovation, and luxury fit-out services.",
  keywords: [
    "Meadows contemporary villa",
    "Meadows villa Dubai",
    "modern villa design Dubai",
    "villa renovation Dubai",
    "villa fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/meadows-contemporary-villa",
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
              name: "Meadows Contemporary Villa",
              description:
                "Modern contemporary villa interior design and fit-out project completed by Casa Kraft Interiors in Meadows, Dubai.",
              url: "https://casakraftinteriors.ae/meadows-contemporary-villa",
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
              name: "Meadows Contemporary Villa Interior Design Dubai",
              url: "https://casakraftinteriors.ae/meadows-contemporary-villa",
              description:
                "Explore Casa Kraft Interiors’ Meadows Contemporary Villa project with modern renovation and premium fit-out services in Dubai.",
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
                  name: "Meadows Contemporary Villa",
                  item: "https://casakraftinteriors.ae/meadows-contemporary-villa",
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