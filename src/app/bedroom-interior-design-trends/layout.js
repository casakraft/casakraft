import '../globals.css';

export const metadata = {
  title: "Bedroom Interior Design Trends Dubai | Casa Kraft Blog",
  description:
    "Explore bedroom interior design trends in Dubai with modern layouts, luxury finishes, smart storage ideas, and stylish inspiration by CasaKraft Interiors.",

  metadataBase: new URL("https://casakraftinteriors.ae"),

  alternates: {
    canonical:
      "https://casakraftinteriors.ae/bedroom-interior-design-trends",
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
      "Bedroom Interior Design Trends Dubai | Casa Kraft Blog",
    description:
      "Discover the latest bedroom interior design trends in Dubai, from luxury finishes and modern layouts to smart storage ideas by CasaKraft Interiors.",
    url: "https://casakraftinteriors.ae/bedroom-interior-design-trends",
    siteName: "Casa Kraft Interiors",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bedroom Interior Design Trends Dubai | Casa Kraft Blog",
    description:
      "Discover the latest bedroom interior design trends in Dubai, from luxury finishes and modern layouts to smart storage ideas by CasaKraft Interiors.",
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
        "@id":
          "https://casakraftinteriors.ae/bedroom-interior-design-trends#blogposting",
        "headline": "Bedroom Interior Design Trends",
        "description":
          "A CasaKraft Interiors blog covering bedroom interior design trends in Dubai, including modern layouts, luxury finishes, smart storage, and stylish design ideas.",
        "url":
          "https://casakraftinteriors.ae/bedroom-interior-design-trends",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id":
            "https://casakraftinteriors.ae/bedroom-interior-design-trends"
        },
        "author": {
          "@type": "Organization",
          "name": "CasaKraft Interiors",
          "url": "https://casakraftinteriors.ae/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "CasaKraft Interiors",
          "logo": {
            "@type": "ImageObject",
            "url": "https://casakraftinteriors.ae/images/logo.svg"
          }
        },
        "image":
          "https://casakraftinteriors.ae/images/bedroom-interior-design-trends.jpg"
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://casakraftinteriors.ae/bedroom-interior-design-trends#breadcrumb",
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
            "name": "Bedroom Interior Design Trends",
            "item":
              "https://casakraftinteriors.ae/bedroom-interior-design-trends"
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
          content="bedroom interior design trends Dubai, bedroom interior design Dubai, luxury bedroom design Dubai, modern bedroom interiors Dubai, bedroom renovation Dubai, Casa Kraft Interiors blog"
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