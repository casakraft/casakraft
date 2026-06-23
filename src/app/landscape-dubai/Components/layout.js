import '../globals.css';

export const metadata = {
  title: "Landscape Design Dubai | Luxury Landscaping Company Dubai",
  description:
    "Luxury landscape design in Dubai for villas and gardens. Custom designs, 3D visualization, irrigation & execution. Contact Us Today!",
  keywords: [
    "landscape design Dubai",
    "garden design Dubai",
    "outdoor landscaping Dubai",
    "villa landscape Dubai",
    "garden renovation Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/landscape-dubai",
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
              name: "Landscape Design Dubai",
              description:
                "Luxury landscape design in Dubai for villas and gardens. Custom designs, 3D visualization, irrigation & execution. Contact Us Today!",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Landscape Design and Outdoor Fit Out",
              url: "https://casakraftinteriors.ae/landscape-dubai",
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
              name: "Landscape Design Dubai",
              url: "https://casakraftinteriors.ae/landscape-dubai",
              description:
                "Get expert landscape design and outdoor renovation services in Dubai by Casa Kraft Interiors.",
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
                  name: "Landscape Design Dubai",
                  item: "https://casakraftinteriors.ae/landscape-dubai",
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