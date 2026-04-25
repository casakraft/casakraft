import '../globals.css';

export const metadata = {
  title: "Best Hotel Interior Design Dubai | Luxury Fit-Out | Casa Kraft",
  description:
    "Discover the best hotel interior design in Dubai with luxury concepts, premium finishes, and expert fit-out solutions by CasaKraft Interiors.",

  metadataBase: new URL("https://casakraftinteriors.ae"),

  alternates: {
    canonical:
      "https://casakraftinteriors.ae/best-hotel-interior-design-dubai",
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
      "Best Hotel Interior Design Dubai | Luxury Fit-Out | Casa Kraft",
    description:
      "Luxury hotel interior design and fit-out services in Dubai by CasaKraft Interiors, delivering premium hospitality spaces with elegant concepts.",
    url: "https://casakraftinteriors.ae/best-hotel-interior-design-dubai",
    siteName: "Casa Kraft Interiors",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Hotel Interior Design Dubai | Luxury Fit-Out | Casa Kraft",
    description:
      "Luxury hotel interior design and fit-out services in Dubai by CasaKraft Interiors, delivering premium hospitality spaces with elegant concepts.",
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
          "https://casakraftinteriors.ae/best-hotel-interior-design-dubai#service",
        "name": "Hotel Interior Design & Fit-Out Dubai",
        "description":
          "Premium hotel interior design and fit-out services in Dubai, creating luxury hospitality spaces with elegant concepts, functionality, and high-end finishes.",
        "serviceType": "Hotel Interior Design and Fit-Out",
        "provider": {
          "@type": "Organization",
          "name": "CasaKraft Interiors",
          "url": "https://casakraftinteriors.ae/"
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "url":
          "https://casakraftinteriors.ae/best-hotel-interior-design-dubai"
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://casakraftinteriors.ae/best-hotel-interior-design-dubai#breadcrumb",
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
            "name": "Hotel Interior Design Dubai",
            "item":
              "https://casakraftinteriors.ae/best-hotel-interior-design-dubai"
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
          content="hotel interior design Dubai, hospitality interior design Dubai, hotel fit out Dubai, luxury hotel interiors Dubai, hotel renovation Dubai, Casa Kraft Interiors"
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