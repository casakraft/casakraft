import '../globals.css';

export const metadata = {
  title: "Barber Shop Interior Design Dubai | Fit-Out Experts | Casa Kraft",
  description:
    "Upgrade your barber shop in Dubai with expert interior design, fit-out, and renovation services by CasaKraft Interiors for stylish spaces.",

  metadataBase: new URL("https://casakraftinteriors.ae"),

  alternates: {
    canonical:
      "https://casakraftinteriors.ae/barber-shop-dubai",
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
      "Barber Shop Interior Design Dubai | Fit-Out Experts | Casa Kraft",
    description:
      "Professional barber shop interior design and fit-out services in Dubai by CasaKraft Interiors for modern and functional spaces.",
    url: "https://casakraftinteriors.ae/barber-shop-dubai",
    siteName: "Casa Kraft Interiors",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Barber Shop Interior Design Dubai | Fit-Out Experts | Casa Kraft",
    description:
      "Professional barber shop interior design and fit-out services in Dubai by CasaKraft Interiors for modern and functional spaces.",
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
          "https://casakraftinteriors.ae/barber-shop-dubai#service",
        "name": "Barber Shop Interior Design & Fit-Out Dubai",
        "description":
          "Expert barber shop interior design and fit-out services in Dubai, creating stylish, functional, and customer-focused spaces.",
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
          "https://casakraftinteriors.ae/barber-shop-dubai"
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://casakraftinteriors.ae/barber-shop-dubai#breadcrumb",
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
            "name": "Barber Shop Dubai",
            "item":
              "https://casakraftinteriors.ae/barber-shop-dubai"
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
          content="barber shop interior design Dubai, barber shop fit out Dubai, salon fit out Dubai, barbershop renovation Dubai, commercial interior design Dubai, Casa Kraft Interiors"
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