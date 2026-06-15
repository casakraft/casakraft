import '../globals.css';

export const metadata = {
  title: "Custom Furniture & Joinery in Dubai | Casa Kraft",
  description:
    "Looking for Custom Furniture & Joinery in Dubai? Casa Kraft creates spaces with complete design and fit-out solutions. Call Now!",
  keywords: [
  "Custom Furniture & Joinery Dubai",
  "commercial interior design Dubai",
  "luxury Custom Furniture & Joinery",
  "Casa Kraft Interior design and renovation",
],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/custom-furniture-joinery-dubai",
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
              url: "https://casakraftinteriors.ae/custom-furniture-joinery-dubai",
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
              url: "https://casakraftinteriors.ae/custom-furniture-joinery-dubai",
              description:
                "Get luxury custom furniture and joinery services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
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