import '../globals.css';

export const metadata = {
  title: "Villa Renovation Company Dubai - Casa Kraft Interiors",
  description:
    "Looking for a villa renovation company in Dubai? Casa Kraft Interiors delivers luxury villa remodeling, premium fit-out, and complete renovation solutions.",
  keywords: [
    "villa renovation company Dubai",
    "villa renovation Dubai",
    "luxury villa renovation Dubai",
    "villa remodeling Dubai",
    "villa fit out Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/villa-renovation-company-dubai",
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
              name: "Villa Renovation Company Dubai",
              description:
                "Professional villa renovation, remodeling, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Villa Renovation and Fit Out",
              url: "https://casakraftinteriors.ae/villa-renovation-company-dubai",
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
              name: "Villa Renovation Company Dubai",
              url: "https://casakraftinteriors.ae/villa-renovation-company-dubai",
              description:
                "Hire a trusted villa renovation company in Dubai for luxury remodeling and premium fit-out services.",
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
                  name: "Villa Renovation Company Dubai",
                  item:
                    "https://casakraftinteriors.ae/villa-renovation-company-dubai",
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