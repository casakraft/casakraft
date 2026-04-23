import '../globals.css';

export const metadata = {
  title: "Villa & Home Renovation in Dubai | Ultimate Guide 2026",
  description:
    "Planning a villa or home renovation in Dubai? Discover costs, design ideas, timelines, and expert tips from CasaKraft Interiors to transform your space.",

  metadataBase: new URL('https://casakraftinteriors.ae/'),

  alternates: {
    canonical: '/your-ultimate-guide-to-villa-and-home-renovation-in-dubai',
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
    title: "Villa & Home Renovation in Dubai | Ultimate Guide 2026",
    description:
      "Planning a villa or home renovation in Dubai? Discover costs, design ideas, timelines, and expert tips from CasaKraft Interiors.",
    url: 'https://casakraftinteriors.ae/your-ultimate-guide-to-villa-and-home-renovation-in-dubai',
    siteName: 'CasaKraft Interiors',
    locale: 'en_US',
    type: 'article',
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
        "@type": "BlogPosting",
        "@id": "https://casakraftinteriors.ae/your-ultimate-guide-to-villa-and-home-renovation-in-dubai#article",
        "headline": "Your Ultimate Guide to Villa and Home Renovation in Dubai",
        "description":
          "Comprehensive guide to villa and home renovation in Dubai including cost, timelines, design ideas, and expert insights.",
        "image": "https://casakraftinteriors.ae/your-blog-image.jpg",
        "author": {
          "@type": "Organization",
          "name": "CasaKraft Interiors"
        },
        "publisher": {
          "@type": "Organization",
          "name": "CasaKraft Interiors",
          "logo": {
            "@type": "ImageObject",
            "url": "https://casakraftinteriors.ae/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://casakraftinteriors.ae/your-ultimate-guide-to-villa-and-home-renovation-in-dubai"
        },
        "datePublished": "2026-01-01",
        "dateModified": "2026-01-01"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://casakraftinteriors.ae/your-ultimate-guide-to-villa-and-home-renovation-in-dubai#breadcrumb",
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
            "name": "Blog",
            "item": "https://casakraftinteriors.ae/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Villa & Home Renovation Guide",
            "item": "https://casakraftinteriors.ae/your-ultimate-guide-to-villa-and-home-renovation-in-dubai"
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
        }
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