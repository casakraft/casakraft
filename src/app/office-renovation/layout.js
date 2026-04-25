import '../globals.css';

export const metadata = {
  title: "Office Renovation Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors provides professional office renovation in Dubai with modern workspace design, remodeling, and premium fit-out solutions for commercial spaces.",
  keywords: [
    "office renovation Dubai",
    "office remodeling Dubai",
    "commercial fit out Dubai",
    "office interior design Dubai",
    "workspace renovation Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/office-renovation",
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
                "Complete office renovation, remodeling, and commercial fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Office Renovation and Commercial Fit Out",
              url: "https://casakraftinteriors.ae/office-renovation",
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
              url: "https://casakraftinteriors.ae/office-renovation",
              description:
                "Upgrade your workspace with modern office renovation and fit-out services in Dubai by Casa Kraft Interiors.",
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
                  name: "Office Renovation",
                  item: "https://casakraftinteriors.ae/office-renovation",
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