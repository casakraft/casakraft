import "../globals.css";

export const metadata = {
  title: "Apartment Renovation Dubai - Remodeling & Fit-Out Experts",
  description:
    "Transform your space with apartment renovation in Dubai. Luxury remodeling, fit-out, and turnkey renovation by Casa Kraft Interiors. Call now!",
  keywords: [
    "apartment renovation Dubai",
    "luxury apartment renovation Dubai",
    "apartment remodeling Dubai",
    "apartment fit out Dubai",
    "modern apartment renovation Dubai",
    "turnkey apartment renovation Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/apartment-renovation",
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
              name: "Apartment Renovation Dubai",
              description:
                "Luxury apartment renovation, remodeling, fit-out, and turnkey interior services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Apartment Renovation and Turnkey Fit-Out Services",
              url: "https://casakraftinteriors.ae/apartment-renovation",
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
              name: "Apartment Renovation Dubai",
              url: "https://casakraftinteriors.ae/apartment-renovation",
              description:
                "Upgrade your home with luxury apartment renovation and turnkey fit-out services in Dubai by Casa Kraft Interiors.",
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
                  name: "Apartment Renovation Dubai",
                  item: "https://casakraftinteriors.ae/apartment-renovation",
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