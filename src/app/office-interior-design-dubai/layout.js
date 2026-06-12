import '../globals.css';

export const metadata = {
  title: "Office Interior Design Dubai | Office Fit-Out Experts | Casa Kraft",
  description:
    "Looking for professional office interior designers in Dubai? Casa Kraft creates offices with complete design and fit-out solutions. Call Now!",
  keywords: [
  "office interior design Dubai",
  "office fit out Dubai",
  "office renovation Dubai",
  "commercial interior design Dubai",
  "modern office interior design Dubai",
  "luxury office design Dubai",
  "workspace design Dubai",
  "office refurbishment Dubai",
  "corporate office interior design Dubai",
  "office design company Dubai",
  "best office interior designers Dubai",
  "office fit out company Dubai",
  "small office interior design Dubai",
  "contemporary office design Dubai",
  "Casa Kraft Interior design and renovation",
],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/office-interior-design-dubai",
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
              url: "https://casakraftinteriors.ae/office-interior-design-dubai",
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
              url: "https://casakraftinteriors.ae/office-interior-design-dubai",
              description:
                "Get luxury office interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
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
                  name: "office Renovation",
                  item: "https://casakraftinteriors.ae/office-renovation",
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