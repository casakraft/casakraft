import '../globals.css';

export const metadata = {
  title:
    "Villa Renovation Dubai - Luxury Villa Renovation & Turnkey Fit-Out Services",
  description:
    "Transform your property with modern villa renovation services in Dubai. Casa Kraft delivers turnkey renovations, bespoke interiors, fit-outs, and landscaping.",
  keywords: [
    "villa renovation Dubai",
    "luxury villa renovation Dubai",
    "villa remodeling Dubai",
    "villa fit out Dubai",
    "modern villa renovation Dubai",
    "turnkey villa renovation Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/villa-renovation",
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
              name: "Villa Renovation Dubai",
              description:
                "Luxury villa renovation, remodeling, fit-out, and turnkey interior services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Villa Renovation and Turnkey Fit-Out Services",
              url: "https://casakraftinteriors.ae/villa-renovation",
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
              name: "Villa Renovation Dubai",
              url: "https://casakraftinteriors.ae/villa-renovation",
              description:
                "Upgrade your home with luxury villa renovation and turnkey fit-out services in Dubai by Casa Kraft Interiors.",
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
                  name: "Villa Renovation Dubai",
                  item: "https://casakraftinteriors.ae/villa-renovation",
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