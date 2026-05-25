import '../globals.css';

export const metadata = {
  title: "Renovation Services in Dubai - Apartment & Villa - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers complete renovation in Dubai including apartments, villas, and commercial spaces. Contact us!",
  keywords: [
    "home renovation Dubai",
    "apartment renovation Dubai",
    "villa renovation Dubai",
    "renovation company Dubai",
    "fit out Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/renovation-dubai",
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
              name: "Home Renovation Dubai",
              description:
                "Complete home renovation, remodeling, and fit-out services in Dubai for apartments, villas, and commercial spaces by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Home Renovation and Fit Out",
              url: "https://casakraftinteriors.ae/renovation-dubai",
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
              name: "Home Renovation Dubai",
              url: "https://casakraftinteriors.ae/renovation-dubai",
              description:
                "Get expert home renovation services in Dubai including apartment, villa, and commercial renovation by Casa Kraft Interiors.",
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
                  name: "Home Renovation Dubai",
                  item: "https://casakraftinteriors.ae/renovation-dubai",
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