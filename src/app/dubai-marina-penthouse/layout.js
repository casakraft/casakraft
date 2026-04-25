import '../globals.css';

export const metadata = {
  title: "Dubai Marina Penthouse Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Dubai Marina Penthouse project with luxury interior design, high-end renovation, and premium fit-out services for waterfront living in Dubai.",
  keywords: [
    "Dubai Marina penthouse",
    "penthouse interior design Dubai",
    "luxury penthouse Dubai",
    "penthouse renovation Dubai",
    "high end fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/dubai-marina-penthouse",
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
              name: "Dubai Marina Penthouse",
              description:
                "Luxury penthouse interior design and fit-out project completed by Casa Kraft Interiors in Dubai Marina.",
              url: "https://casakraftinteriors.ae/dubai-marina-penthouse",
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
              name: "Dubai Marina Penthouse Interior Design Dubai",
              url: "https://casakraftinteriors.ae/dubai-marina-penthouse",
              description:
                "Explore Casa Kraft Interiors’ Dubai Marina Penthouse project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "Dubai Marina Penthouse",
                  item: "https://casakraftinteriors.ae/dubai-marina-penthouse",
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