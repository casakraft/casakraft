import "../globals.css";

export const metadata = {
  title: "Office Renovation Dubai | Best Interior Fit-Out Company",
  description:
    "Best office renovation services in Dubai. Custom fit-outs, bespoke layouts & smart tech integration. Get your free quote today!",
  keywords: [
    "office renovation Dubai",
    "office fit out Dubai",
    "office remodeling Dubai",
    "commercial office renovation Dubai",
    "modern office renovation Dubai",
    "turnkey office fit out Dubai",
    "workspace renovation Dubai",
    "office interior design Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/office-renovation-dubai",
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
              name: "Office Renovation Dubai",
              description:
                "Professional office renovation, fit-out, remodeling, and workspace transformation services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Office Renovation and Commercial Fit-Out Services",
              url: "https://casakraftinteriors.ae/office-renovation-dubai",
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
              name: "Office Renovation Dubai",
              url: "https://casakraftinteriors.ae/office-renovation-dubai",
              description:
                "Transform your workspace with office renovation and commercial fit-out services in Dubai by Casa Kraft Interiors.",
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
                  item: "https://casakraftinteriors.ae/office-interior-design-dubai",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Office Renovation Dubai",
                  item: "https://casakraftinteriors.ae/office-renovation-dubai",
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