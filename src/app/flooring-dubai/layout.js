import "../globals.css";

export const metadata = {
  title: "Flooring Dubai - Best Flooring Company & Installation",
  description:
    "Leading Flooring Company in Dubai Offering SPC, Vinyl, Parquet, Laminate Flooring & Professional Installation. Visit Us Now!.",
  keywords: [
    "flooring Dubai",
    "SPC flooring Dubai",
    "vinyl flooring Dubai",
    "parquet flooring Dubai",
    "laminate flooring Dubai",
    "wood flooring Dubai",
    "flooring installation Dubai",
    "best flooring company Dubai",
    "commercial flooring Dubai",
    "residential flooring Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/flooring-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Flooring Dubai",
              description:
                "Professional flooring installation services in Dubai including SPC, vinyl, parquet, laminate, and wooden flooring by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Flooring Installation and Interior Flooring Solutions",
              url: "https://casakraftinteriors.ae/flooring-dubai",
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
              name: "Flooring Dubai",
              url: "https://casakraftinteriors.ae/flooring-dubai",
              description:
                "Explore premium flooring solutions in Dubai including SPC, vinyl, parquet, and laminate flooring with expert installation services.",
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Flooring Dubai",
                  item: "https://casakraftinteriors.ae/flooring-dubai",
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