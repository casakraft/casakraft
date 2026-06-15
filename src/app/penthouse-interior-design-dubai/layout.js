import '../globals.css';

export const metadata = {
  title: "Penthouse Interior Design Dubai | Casa Kraft",
  description:
    "Looking for professional penthouse interior designers in Dubai? Casa Kraft creates penthouses with complete design and fit-out solutions. Call Now!",
  keywords: [
  "penthouse interior design Dubai",
  "penthouse fit out Dubai",
  "penthouse renovation Dubai",
  "commercial interior design Dubai",
  "modern penthouse interior design Dubai",
  "luxury penthouse design Dubai",
  "workspace design Dubai",
  "penthouse refurbishment Dubai",
  "corporate penthouse interior design Dubai",
  "penthouse design company Dubai",
  "best penthouse interior designers Dubai",
  "penthouse fit out company Dubai",
  "small penthouse interior design Dubai",
  "contemporary penthouse design Dubai",
  "Casa Kraft Interior design and renovation",
],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/penthouse-interior-design-dubai",
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
              url: "https://casakraftinteriors.ae/penthouse-interior-design-dubai",
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
              url: "https://casakraftinteriors.ae/penthouse-interior-design-dubai",
              description:
                "Get luxury penthouse interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
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
                  name: "apartment Renovation",
                  item: "https://casakraftinteriors.ae/apartment-renovation",
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