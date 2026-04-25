import '../globals.css';

export const metadata = {
  title: "Painting Services Dubai - House & Villa Painting | Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers professional painting services in Dubai including apartment, villa, and commercial painting with high-quality finishes and expert application.",
  keywords: [
    "painting services Dubai",
    "house painting Dubai",
    "villa painting Dubai",
    "interior painting Dubai",
    "commercial painting Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/painting-services-dubai",
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
              name: "Painting Services Dubai",
              description:
                "Professional interior and exterior painting services in Dubai for apartments, villas, and commercial spaces by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Painting Services",
              url: "https://casakraftinteriors.ae/painting-services-dubai",
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
              name: "Painting Services Dubai",
              url: "https://casakraftinteriors.ae/painting-services-dubai",
              description:
                "Get expert painting services in Dubai including residential and commercial painting by Casa Kraft Interiors.",
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
                  name: "Painting Services Dubai",
                  item: "https://casakraftinteriors.ae/painting-services-dubai",
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