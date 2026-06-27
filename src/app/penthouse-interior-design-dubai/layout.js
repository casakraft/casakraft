import '../globals.css';

export const metadata = {
  title: "Penthouse Interior Design Dubai | Bespoke Fit-Out | Casa Kraft Interiors",
  description:
    "Looking for a penthouse interior design company in Dubai? Casa Kraft specializes in penthouse interiors, custom fit-outs &  renovations. Call Now!Call Now!",
  keywords: [
    "penthouse interior design Dubai",
    "luxury penthouse design Dubai",
    "penthouse renovation Dubai",
    "penthouse fit out Dubai",
    "modern penthouse interior Dubai",
    "penthouse interior designers Dubai",
    "bespoke penthouse design Dubai",
    "penthouse refurbishment Dubai",
    "penthouse design company Dubai",
    "best penthouse interior designers Dubai",
    "contemporary penthouse design Dubai",
    "penthouse interior fit out Dubai",
    "luxury residential interior design Dubai",
    "high-end penthouse interiors Dubai",
    "Casa Kraft Interior design and renovation",
  ],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/penthouse-interior-design-dubai",
  },

  // ✅ OG Tags — page-specific
  openGraph: {
    title: "Penthouse Interior Design Dubai | Casa Kraft",
    description:
      "Looking for professional penthouse interior designers in Dubai? Casa Kraft creates bespoke luxury penthouse interiors with complete design and fit-out solutions. Call Now!",
    url: "https://casakraftinteriors.ae/penthouse-interior-design-dubai",
    siteName: "Casa Kraft Interiors",
    images: [
      {
        url: "https://casakraftinteriors.ae/images/penthouse-interior-in-dubai.jpg",
        width: 1200,
        height: 630,
        alt: "Penthouse Interior Design Dubai – Casa Kraft Interiors",
      },
    ],
    type: "website",
    locale: "en_AE",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Penthouse Interior Design Dubai | Casa Kraft",
    description:
      "Looking for professional penthouse interior designers in Dubai? Casa Kraft creates bespoke luxury penthouse interiors with complete design and fit-out solutions. Call Now!",
    images: [
      "https://casakraftinteriors.ae/images/penthouse-interior-in-dubai.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* ✅ Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://casakraftinteriors.ae/#organization",
              name: "Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae",
              logo: "https://casakraftinteriors.ae/images/logo.svg",
              image: "https://casakraftinteriors.ae/images/og-image.jpg",
              telephone: "+971586023677",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "The Curve Building, Showroom G11, Sheikh Zayed Service Road",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              sameAs: [
                "https://www.instagram.com/casakraftinteriors.ae/",
                "https://www.facebook.com/p/Casa-Kraft-61575617962028/",
                "https://www.linkedin.com/company/110286081/",
                "https://www.pinterest.com/casakraftinteriors/",
              ],
            }),
          }}
        />

        {/* ✅ Service Schema — Penthouse specific */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id":
                "https://casakraftinteriors.ae/penthouse-interior-design-dubai#service",
              name: "Penthouse Interior Design Dubai",
              description:
                "Luxury penthouse interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
              image:
                "https://casakraftinteriors.ae/images/penthouse-interior-in-dubai.jpg",
              provider: {
                "@type": "Organization",
                "@id": "https://casakraftinteriors.ae/#organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Penthouse Interior Design and Fit-Out",
              url: "https://casakraftinteriors.ae/penthouse-interior-design-dubai",
              offers: {
                "@type": "Offer",
                priceCurrency: "AED",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        {/* ✅ WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id":
                "https://casakraftinteriors.ae/penthouse-interior-design-dubai#webpage",
              name: "Penthouse Interior Design Dubai | Casa Kraft",
              url: "https://casakraftinteriors.ae/penthouse-interior-design-dubai",
              description:
                "Get luxury penthouse interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
              mainEntity: {
                "@id":
                  "https://casakraftinteriors.ae/penthouse-interior-design-dubai#service",
              },
            }),
          }}
        />

        {/* ✅ Breadcrumb Schema — Correct path */}
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
                  name: "Interior Design Dubai",
                  item: "https://casakraftinteriors.ae/interior-design-dubai",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Penthouse Interior Design Dubai",
                  item: "https://casakraftinteriors.ae/penthouse-interior-design-dubai",
                },
              ],
            }),
          }}
        />

        {/* ✅ FAQPage Schema — Rich Results eligible */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why is Casa Kraft one of the best penthouse interior design companies in Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Casa Kraft brings together a team of expert designers, architects, and craftsmen with deep experience in luxury residential interiors. We specialize in bespoke penthouse design that reflects the unique lifestyle and personality of each client, delivering exceptional quality across every project.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle both interior design and fit-out for penthouses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Casa Kraft is a full-service studio offering complete penthouse interior design and fit-out under one roof. From concept development and 3D visualization to material selection, construction, custom joinery, and final handover — we manage every stage seamlessly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you renovate or upgrade an existing penthouse?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. We specialize in partial and full penthouse renovations. Our team carefully studies the existing space, identifies improvement opportunities, and delivers a comprehensive transformation with minimal disruption to your daily life.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does a penthouse interior design project take in Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Timelines vary depending on the size and complexity of the project. A typical penthouse interior design and fit-out takes between 8 to 20 weeks. We provide a detailed project schedule before commencing work to ensure full transparency and timely delivery.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What interior design styles do you specialize in for penthouses?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We design across a wide range of styles including contemporary luxury, modern minimalist, classic elegance, Art Deco, and bespoke fusion aesthetics. Every penthouse interior is uniquely crafted to reflect the homeowner's personality, lifestyle, and the character of the space.",
                  },
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