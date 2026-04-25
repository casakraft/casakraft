import '../globals.css';

export const metadata = {
  title: "Bathroom Renovation Dubai | Luxury Bathroom Remodel | Casa Kraft",
  description:
    "Transform your bathroom in Dubai with luxury renovation, premium fittings, modern layouts, and expert remodeling by CasaKraft Interiors.",

  metadataBase: new URL("https://casakraftinteriors.ae"),

  alternates: {
    canonical:
      "https://casakraftinteriors.ae/bathroom-renovation",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  openGraph: {
    title:
      "Bathroom Renovation Dubai | Luxury Bathroom Remodel | Casa Kraft",
    description:
      "Upgrade your bathroom in Dubai with premium renovation, elegant finishes, modern layouts, and expert remodeling by CasaKraft Interiors.",
    url: "https://casakraftinteriors.ae/bathroom-renovation",
    siteName: "Casa Kraft Interiors",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bathroom Renovation Dubai | Luxury Bathroom Remodel | Casa Kraft",
    description:
      "Upgrade your bathroom in Dubai with premium renovation, elegant finishes, modern layouts, and expert remodeling by CasaKraft Interiors.",
  },

  authors: [{ name: "CasaKraft Interiors" }],
  creator: "CasaKraft Interiors",
  publisher: "CasaKraft Interiors",
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://casakraftinteriors.ae/bathroom-renovation#service",
        "name": "Bathroom Renovation Dubai",
        "description":
          "Luxury bathroom renovation and remodeling services in Dubai, including premium fittings, modern layouts, waterproofing, tiling, and expert finishes.",
        "provider": {
          "@type": "Organization",
          "name": "CasaKraft Interiors",
          "url": "https://casakraftinteriors.ae/"
        },
        "serviceType": "Bathroom Renovation and Remodeling",
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "url":
          "https://casakraftinteriors.ae/bathroom-renovation"
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://casakraftinteriors.ae/bathroom-renovation#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://casakraftinteriors.ae/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://casakraftinteriors.ae/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Bathroom Renovation",
            "item":
              "https://casakraftinteriors.ae/bathroom-renovation"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://casakraftinteriors.ae/#organization",
        "name": "CasaKraft Interiors",
        "url": "https://casakraftinteriors.ae/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://casakraftinteriors.ae/images/logo.svg"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://casakraftinteriors.ae/#localbusiness",
        "name": "CasaKraft Interiors",
        "url": "https://casakraftinteriors.ae/",
        "telephone": "+971586023677",
        "address": {
          "@type": "PostalAddress",
          "streetAddress":
            "The Curve Building, Showroom G11, Sheikh Zayed Service Road",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="bathroom renovation Dubai, bathroom remodeling Dubai, luxury bathroom renovation Dubai, bathroom fit out Dubai, bathroom interior design Dubai, Casa Kraft Interiors"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}