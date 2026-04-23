import '../globals.css';

export const metadata = {
  title: "Interior Design Gallery Dubai | Casa Kraft Interiors Projects",
  description:
    "Explore the Casa Kraft Interiors gallery featuring luxury interior design, fit-out, renovation, and bespoke project inspirations across Dubai.",

  metadataBase: new URL('https://casakraftinteriors.ae/'),

  alternates: {
    canonical: '/gallery',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },

  openGraph: {
    title: "Interior Design Gallery Dubai | Casa Kraft Interiors Projects",
    description:
      "Explore the Casa Kraft Interiors gallery featuring luxury interior design, fit-out, renovation, and bespoke project inspirations across Dubai.",
    url: 'https://casakraftinteriors.ae/gallery',
    siteName: 'CasaKraft Interiors',
    locale: 'en_US',
    type: 'website',
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
        "@type": "CollectionPage",
        "@id": "https://casakraftinteriors.ae/gallery#collectionpage",
        "url": "https://casakraftinteriors.ae/gallery",
        "name": "Interior Design Gallery Dubai | Casa Kraft Interiors Projects",
        "description":
          "Explore the Casa Kraft Interiors gallery featuring luxury interior design, fit-out, renovation, and bespoke project inspirations across Dubai.",
        "isPartOf": {
          "@id": "https://casakraftinteriors.ae/#website"
        },
        "about": {
          "@id": "https://casakraftinteriors.ae/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://casakraftinteriors.ae/#website",
        "url": "https://casakraftinteriors.ae/",
        "name": "CasaKraft Interiors",
        "publisher": {
          "@id": "https://casakraftinteriors.ae/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://casakraftinteriors.ae/#organization",
        "name": "CasaKraft Interiors",
        "url": "https://casakraftinteriors.ae/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://casakraftinteriors.ae/logo.png"
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
          "streetAddress": "The Curve Building, Showroom G11, Sheikh Zayed Service Road",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "priceRange": "$$",
        "parentOrganization": {
          "@id": "https://casakraftinteriors.ae/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://casakraftinteriors.ae/gallery#breadcrumb",
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
            "name": "Gallery",
            "item": "https://casakraftinteriors.ae/gallery"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}