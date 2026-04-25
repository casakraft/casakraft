import '../globals.css';

export const metadata = {
  title: "Al Khawaneej Villa Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Al Khawaneej Villa project in Dubai with luxury interior design, premium renovation, and high-end fit-out services.",
  keywords: [
    "Al Khawaneej villa",
    "Khawaneej villa Dubai",
    "villa interior design Dubai",
    "luxury villa Dubai",
    "villa renovation Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/villa-khawaneej",
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
              name: "Al Khawaneej Villa",
              description:
                "Luxury villa interior design and fit-out project completed by Casa Kraft Interiors in Al Khawaneej, Dubai.",
              url: "https://casakraftinteriors.ae/villa-khawaneej",
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
              name: "Al Khawaneej Villa Interior Design Dubai",
              url: "https://casakraftinteriors.ae/villa-khawaneej",
              description:
                "Explore Casa Kraft Interiors’ Al Khawaneej Villa project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "Al Khawaneej Villa",
                  item: "https://casakraftinteriors.ae/villa-khawaneej",
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