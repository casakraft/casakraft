
import '../globals.css';
import Script from "next/script";

export const metadata = {
  title:
    "Best Interior Design Company in Downtown, Dubai - Casa Kraft interiors",

  description:
    "Luxury interior design company in Downtown delivering office, apartment & turnkey fit-outs. Schedule your free consultation today.",

  keywords: [
    "interior design company Downtown",
    "interior design company in Downtown Dubai",
    "office interior design Downtown",
    "apartment interior design Downtown",
    "interior fit out company Downtown",
    "turnkey fit out Downtown",
    "commercial interior design Downtown",
    "luxury interior design Dubai",
    "renovation services Downtown",
    "design and build company Dubai",
  ],

  metadataBase: new URL("https://casakraftinteriors.ae"),

  openGraph: {
    title:
      "Interior Design Projects Dubai | Casa Kraft Interior Design & Fit-Out",

    description:
      "Explore luxury interior design and fit-out projects in Dubai by Casa Kraft Interior. Discover our residential, commercial, and hospitality portfolio.",

    url:
      "https://casakraftinteriors.ae/interior-design-downtown-dubai",

    siteName: "Casa Kraft Interior Design & Fitout",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Project Banner",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Interior Design Projects Dubai | Casa Kraft Interior Design & Fit-Out",

    description:
      "Explore luxury interior design and fit-out projects in Dubai by Casa Kraft Interior. Discover our residential, commercial, and hospitality portfolio.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "/interior-design-downtown-dubai",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Casa Kraft Interior Design & Fitout",
      url: "https://casakraftinteriors.ae/",
      logo: {
        "@type": "ImageObject",
        url: "https://casakraftinteriors.ae/logo-s-Black.png",
      },
      sameAs: [
        "https://www.instagram.com/we.do.uae",
        "https://www.facebook.com/wedointerior",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971 058 807 5603",
        contactType: "Customer Service",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Downtown",
        addressLocality: "Dubai",
        postalCode: "00000",
        addressCountry: "AE",
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Interior Design Company in Downtown",
      url:
        "https://casakraftinteriors.ae/interior-design-downtown-dubai",

      description:
        "Luxury interior design services in Downtown Dubai including offices, apartments, cafes, restaurants, and travel agencies.",
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",

      "@id":
        "https://casakraftinteriors.ae/interior-design-downtown-dubai",

      name: "Casa Kraft Interior Design & Fitout",

      image:
        "https://casakraftinteriors.ae/og-image.jpg",

      url:
        "https://casakraftinteriors.ae/interior-design-downtown-dubai",

      telephone: "+971 058 807 5603",

      priceRange: "$$$",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Downtown",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        postalCode: "00000",
        addressCountry: "AE",
      },

      areaServed: [
        "Downtown",
        "Downtown Dubai",
        "DIFC",
        "Dubai Mall",
        "Burj Khalifa",
        "Dubai Canal",
        "Al Wasl",
        "Sheikh Zayed Road",
      ],

      serviceOffered: [
        {
          "@type": "Service",
          name: "Office Interior Design in Downtown",
        },
        {
          "@type": "Service",
          name: "Apartment Interior Design in Downtown",
        },
        {
          "@type": "Service",
          name: "Villa Interior Design In Downtown",
        },
        {
          "@type": "Service",
          name: "Restaurant Interior Design In Downtown",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name:
            "How long does an office fit-out in Downtown take?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Office fit-outs typically take six to twelve weeks depending on the project size and complexity.",
          },
        },

        {
          "@type": "Question",

          name:
            "Do you provide turnkey fit-out services in Downtown?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes, we provide complete turnkey fit-out services including design, approvals, execution, and final handover.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Script
        id="downtown-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />

      {children}
    </>
  );
}

