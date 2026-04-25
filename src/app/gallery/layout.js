import '../globals.css';

export const metadata = {
  title: "Interior Design Projects Gallery Dubai - Casa Kraft Interiors",
  description:
    "Explore Casa Kraft Interiors’ project gallery showcasing luxury interior design, apartment renovations, villa fit-outs, and commercial projects across Dubai.",
  keywords: [
    "interior design projects Dubai",
    "Dubai fit out projects",
    "apartment renovation projects Dubai",
    "villa interior design projects Dubai",
    "Casa Kraft Interiors gallery",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/gallery",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Gallery / Portfolio Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Casa Kraft Interiors Projects Gallery",
              url: "https://casakraftinteriors.ae/gallery",
              description:
                "A collection of interior design and fit-out projects completed by Casa Kraft Interiors in Dubai including apartments, villas, and commercial spaces.",
              isPartOf: {
                "@type": "WebSite",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
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
              name: "Interior Design Projects Gallery Dubai",
              url: "https://casakraftinteriors.ae/gallery",
              description:
                "Browse Casa Kraft Interiors’ gallery of completed interior design and renovation projects in Dubai.",
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
                  name: "Gallery",
                  item: "https://casakraftinteriors.ae/gallery",
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