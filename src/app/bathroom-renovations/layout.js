import '../globals.css';

export const metadata = {
  title: "Bathroom Renovation Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offersBathroom Renovation Dubai with bespoke concepts, premium materials, and complete renovation and fit-out solutions.",
  keywords: [
    "bathroom interior design Dubai",
    "luxury bathroom design Dubai",
    "bathroom renovation Dubai",
    "bathroom fit out Dubai",
    "modern bathroom interior Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/bathroom-renovation",
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
              name: "bathroom Interior Design Dubai",
              description:
                "Luxury bathroom interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Bathroom Interior Design and Fit Out",
              url: "https://casakraftinteriors.ae/ba-interior-design-dubai",
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
              name: "bathroom Interior Design Dubai",
              url: "https://casakraftinteriors.ae/bathroom-renovation",
              description:
                "Get luxury bathroom interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
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
                  name: "Villa Interior Design Dubai",
                  item: "https://casakraftinteriors.ae/bathroom-renovation",
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