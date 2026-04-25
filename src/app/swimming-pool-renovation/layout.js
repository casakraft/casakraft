import '../globals.css';

export const metadata = {
  title: "Swimming Pool Renovation Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers professional swimming pool renovation in Dubai including redesign, repair, tiling, and complete outdoor upgrade solutions.",
  keywords: [
    "swimming pool renovation Dubai",
    "pool renovation Dubai",
    "pool repair Dubai",
    "pool design Dubai",
    "outdoor renovation Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/swimming-pool-renovation",
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
              name: "Swimming Pool Renovation Dubai",
              description:
                "Professional swimming pool renovation, repair, and outdoor upgrade services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Swimming Pool Renovation",
              url: "https://casakraftinteriors.ae/swimming-pool-renovation",
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
              name: "Swimming Pool Renovation Dubai",
              url: "https://casakraftinteriors.ae/swimming-pool-renovation",
              description:
                "Upgrade your swimming pool with expert renovation and outdoor enhancement services in Dubai by Casa Kraft Interiors.",
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
                  name: "Swimming Pool Renovation",
                  item: "https://casakraftinteriors.ae/swimming-pool-renovation",
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