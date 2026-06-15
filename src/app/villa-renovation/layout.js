import '../globals.css';

export const metadata = {
  title: "Villa Renovation Services in Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers villa renovation services in Dubai including design, approvals & villa construction. Call Now!",
  keywords: [
    "villa renovation Dubai",
    "villa remodeling Dubai",
    "luxury villa renovation Dubai",
    "villa fit out Dubai",
    "home renovation Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/villa-renovation",
  },
  openGraph: {
    title: "Villa Renovation Services in Dubai - Casa Kraft Interiors",
    description:
      "Upgrade your villa with expert renovation and luxury fit-out services in Dubai by Casa Kraft Interiors.",
    url: "https://casakraftinteriors.ae/villa-renovation",
    siteName: "Casa Kraft Interiors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Renovation Services in Dubai - Casa Kraft Interiors",
    description:
      "Upgrade your villa with expert renovation and luxury fit-out services in Dubai by Casa Kraft Interiors.",
  },
};

export default function VillaRenovationLayout({ children }) {
  return (
    <>
      {/* ─── Schema 1: Service ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Villa Renovation Dubai",
            description:
              "Luxury villa renovation, remodeling, and fit-out services in Dubai by Casa Kraft Interiors.",
            provider: {
              "@type": "Organization",
              name: "Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae/",
            },
            areaServed: {
              "@type": "Place",
              name: "Dubai, UAE",
            },
            serviceType: "Villa Renovation and Fit Out",
            url: "https://casakraftinteriors.ae/villa-renovation",
          }),
        }}
      />

      {/* ─── Schema 2: WebPage ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://casakraftinteriors.ae/villa-renovation#webpage",
            name: "Villa Renovation Services in Dubai - Casa Kraft Interiors",
            url: "https://casakraftinteriors.ae/villa-renovation",
            description:
              "Upgrade your villa with expert renovation and luxury fit-out services in Dubai by Casa Kraft Interiors.",
          }),
        }}
      />

      {/* ─── Schema 3: BreadcrumbList ─── */}
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
                name: "Villa Renovation Dubai",
                item: "https://casakraftinteriors.ae/villa-renovation",
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}