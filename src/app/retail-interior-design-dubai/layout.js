import '../globals.css';

export const metadata = {
  title: "Retail Interior Design Dubai | Retail Fit-Out Experts | Casa Kraft",
  description:
    "Looking for professional Retail interior designers in Dubai? Casa Kraft creates Retails with complete design and fit-out solutions. Call Now!",
  keywords: [
  "Retail interior design Dubai",
  "retail fit out Dubai",
  "retail renovation Dubai",
  "commercial interior design Dubai",
  "modern retail interior design Dubai",
  "luxury retail design Dubai",
  "workspace design Dubai",
  "retail refurbishment Dubai",
  "corporate retail interior design Dubai",
  "retail design company Dubai",
  "best retail interior designers Dubai",
  "retail fit out company Dubai",
  "small retail interior design Dubai",
  "contemporary retail design Dubai",
  "Casa Kraft Interior design and renovation",
],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/retail-interior-design-dubai",
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
              name: "Villa Interior Design Dubai",
              description:
                "Luxury Villa interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Villa Interior Design and Renovation",
              url: "https://casakraftinteriors.ae/retail-interior-design-dubai",
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
              name: "Villa Interior Design Dubai",
              url: "https://casakraftinteriors.ae/retail-interior-design-dubai",
              description:
                "Get luxury retail interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
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
                  name: "retail Renovation",
                  item: "https://casakraftinteriors.ae/retail-renovation",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Villa Renovation",
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