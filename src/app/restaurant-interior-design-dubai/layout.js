import '../globals.css';

export const metadata = {
  title: "Restaurant Interior Design Dubai | Restaurant Fit-Out Experts | Casa Kraft",
  description:
    "Looking for professional restaurant interior designers in Dubai? Casa Kraft creates restaurants with complete design and fit-out solutions. Call Now!",
  keywords: [
  "restaurant interior design Dubai",
  "restaurant fit out Dubai",
  "restaurant renovation Dubai",
  "commercial interior design Dubai",
  "modern restaurant interior design Dubai",
  "luxury restaurant design Dubai",
  "workspace design Dubai",
  "restaurant refurbishment Dubai",
  "corporate restaurant interior design Dubai",
  "restaurant design company Dubai",
  "best restaurant interior designers Dubai",
  "restaurant fit out company Dubai",
  "small restaurant interior design Dubai",
  "contemporary restaurant design Dubai",
  "Casa Kraft Interior design and renovation",
],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/restaurant-interior-design-dubai",
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
              url: "https://casakraftinteriors.ae/restaurant-interior-design-dubai",
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
              url: "https://casakraftinteriors.ae/restaurant-interior-design-dubai",
              description:
                "Get luxury restaurant interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
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
                  name: "restaurant Renovation",
                  item: "https://casakraftinteriors.ae/restaurant-renovation",
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