import '../globals.css';

export const metadata = {
  title: "Modern Apartment Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers modern apartment interior design in Dubai with sleek layouts, premium finishes, and complete renovation and fit-out solutions.",
  keywords: [
    "modern apartment interior design Dubai",
    "modern apartment design Dubai",
    "apartment interior design Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/modern-apartment-interior-design",
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
              name: "Modern Apartment Interior Design Dubai",
              description:
                "Modern apartment interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Modern Apartment Interior Design and Fit Out",
              url: "https://casakraftinteriors.ae/modern-apartment-interior-design",
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
              name: "Modern Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/modern-apartment-interior-design",
              description:
                "Get modern apartment interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
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
                  name: "Modern Apartment Interior Design",
                  item: "https://casakraftinteriors.ae/modern-apartment-interior-design",
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