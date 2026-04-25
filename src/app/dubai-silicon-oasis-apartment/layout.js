import '../globals.css';

export const metadata = {
  title: "Dubai Silicon Oasis Apartment Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Dubai Silicon Oasis Apartment project with modern interior design, premium renovation, and full fit-out services for contemporary living in Dubai.",
  keywords: [
    "Dubai Silicon Oasis apartment",
    "Silicon Oasis apartment Dubai",
    "apartment interior design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/dubai-silicon-oasis-apartment",
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
              name: "Dubai Silicon Oasis Apartment",
              description:
                "Modern apartment interior design and fit-out project completed by Casa Kraft Interiors in Dubai Silicon Oasis.",
              url: "https://casakraftinteriors.ae/dubai-silicon-oasis-apartment",
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
              name: "Dubai Silicon Oasis Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/dubai-silicon-oasis-apartment",
              description:
                "Explore Casa Kraft Interiors’ Dubai Silicon Oasis Apartment project with modern renovation and full fit-out services in Dubai.",
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
                  name: "Dubai Silicon Oasis Apartment",
                  item: "https://casakraftinteriors.ae/dubai-silicon-oasis-apartment",
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