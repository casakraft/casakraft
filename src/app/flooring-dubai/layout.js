import '../globals.css';

export const metadata = {
  title: "Flooring Dubai - Wooden, Vinyl & Tile Flooring | Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers professional flooring services in Dubai including wooden flooring, vinyl flooring, tiles, and complete installation for residential and commercial spaces.",
  keywords: [
    "flooring Dubai",
    "wooden flooring Dubai",
    "vinyl flooring Dubai",
    "tile flooring Dubai",
    "floor installation Dubai",
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
                "Professional flooring supply and installation services in Dubai including wood, vinyl, and tile flooring by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Flooring Supply and Installation",
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
                "Get expert flooring services in Dubai including wooden, vinyl, and tile flooring with professional installation by Casa Kraft Interiors.",
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
                  name: "Services",
                  item: "https://casakraftinteriors.ae/",
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