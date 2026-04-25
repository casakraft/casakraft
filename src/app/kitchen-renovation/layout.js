import '../globals.css';

export const metadata = {
  title: "Kitchen Renovation Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors provides professional kitchen renovation in Dubai with modern upgrades, smart layouts, and premium fit-out solutions for stylish and functional kitchens.",
  keywords: [
    "kitchen renovation Dubai",
    "kitchen remodeling Dubai",
    "modern kitchen renovation Dubai",
    "kitchen fit out Dubai",
    "kitchen upgrade Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/kitchen-renovation",
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
              name: "Kitchen Renovation Dubai",
              description:
                "Complete kitchen renovation, remodeling, and fit-out services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Kitchen Renovation and Fit Out",
              url: "https://casakraftinteriors.ae/kitchen-renovation",
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
              name: "Kitchen Renovation Dubai",
              url: "https://casakraftinteriors.ae/kitchen-renovation",
              description:
                "Upgrade your kitchen with modern renovation and fit-out services in Dubai by Casa Kraft Interiors.",
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
                  name: "Kitchen Renovation",
                  item: "https://casakraftinteriors.ae/kitchen-renovation",
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