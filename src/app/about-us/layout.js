import '../globals.css';

export const metadata = {
  title: "About Casa Kraft - Interior Design & Renovation Dubai",
  description:
    "From Imagination to reality Casa Kraft Interiors delivers luxury interior design & renovation across Dubai. 5-star rated with end-to-end service.",

  metadataBase: new URL('https://casakraftinteriors.ae/'),

  alternates: {
    canonical: '/about-us',
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
    title: "About Casa Kraft | Interior Design & Renovation Dubai",
    description:
      "From vision to reality — Casa Kraft Interiors delivers luxury interior design & renovation across Dubai. 5-star rated with end-to-end service.",
    url: 'https://casakraftinteriors.ae/about-us',
    siteName: 'CasaKraft Interiors',
    locale: 'en_US',
    type: 'website',
  },

  // ✅ Publisher signals (fixes your SEO tool warning)
  authors: [{ name: "CasaKraft Interiors" }],
  creator: "CasaKraft Interiors",
  publisher: "CasaKraft Interiors",
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://casakraftinteriors.ae/about-us#aboutpage",
        "url": "https://casakraftinteriors.ae/about-us",
        "name": "About Casa Kraft",
        "description":
          "From vision to reality — Casa Kraft Interiors delivers luxury interior design & renovation across Dubai. 5-star rated with end-to-end service.",
        "about": {
          "@id": "https://casakraftinteriors.ae/#organization"
        },
        "isPartOf": {
          "@id": "https://casakraftinteriors.ae/#website"
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
        "@id": "https://casakraftinteriors.ae/about-us#breadcrumb",
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
            "name": "About Us",
            "item": "https://casakraftinteriors.ae/about-us"
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