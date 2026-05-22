import '../globals.css';

export const metadata = {
  title: "Apartment Renovation Services Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors provides apartment renovation services in Dubai with complete remodeling, approvals & fit-out solutions. Call Now!",
  keywords: [
    "apartment renovation Dubai",
    "apartment remodeling Dubai",
    "apartment refurbishment Dubai",
    "apartment fit out Dubai",
    "home renovation Dubai",
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
                "Complete apartment renovation, remodeling, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Apartment Renovation and Fit Out",
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
                "Professional apartment renovation services in Dubai including remodeling, modern upgrades, and full fit-out by Casa Kraft Interiors.",
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
                  item: "https://casakraftinteriors.ae/gallery",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Apartment Renovation",
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