import '../globals.css';

export const metadata = {
  title: "Apartment Interior Design In Dubai - Casa Kraft Interiors",
  description:
    "Looking for apartment interior design Dubai? Casa Kraft Interiors offers luxury design, renovation, fit-out in Dubai. Call Now.",
  keywords: [
    "apartment interior design Dubai",
    "luxury apartment design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "modern apartment interior Dubai",
    "Casa Kraft Interior design and renovation",
  ],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/apartment-interior-design-dubai",
  },
};

export default function ApartmentLayout({ children }) {
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
              "@id": "https://casakraftinteriors.ae/apartment-interior-design-dubai#service",
              name: "Apartment Interior Design Dubai",
              description:
                "Luxury apartment interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                "@id": "https://casakraftinteriors.ae/#organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Apartment Interior Design and Renovation",
              hasPart: {
                "@type": "Service",
                name: "Apartment Renovation Dubai",
                url: "https://casakraftinteriors.ae/apartment-renovation-dubai"
              },
              subjectOf: [
                {
                  "@type": "BlogPosting",
                  headline: "Apartment Renovation Cost Dubai",
                  url: "https://casakraftinteriors.ae/apartment-renovation-cost-dubai"
                },
                {
                  "@type": "BlogPosting",
                  headline: "Modern Apartment Interior Design",
                  url: "https://casakraftinteriors.ae/modern-apartment-interior-design"
                }
              ],
              url: "https://casakraftinteriors.ae/apartment-interior-design-dubai",
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
              "@id": "https://casakraftinteriors.ae/apartment-interior-design-dubai",
              name: "Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/apartment-interior-design-dubai",
              description:
                "Get luxury apartment interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
              mainEntity: {
                "@id": "https://casakraftinteriors.ae/apartment-interior-design-dubai#service"
              },
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
                  name: "Apartment Interior Design Dubai",
                  item: "https://casakraftinteriors.ae/apartment-interior-design-dubai",
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