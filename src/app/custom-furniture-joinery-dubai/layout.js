import '../globals.css';

export const metadata = {
  title: "Custom Furniture & Joinery in Dubai | Casa Kraft",
  description:
    "Looking for Custom Furniture & Joinery in Dubai? Casa Kraft creates spaces with complete design and fit-out solutions. Call Now!",
  keywords: [
    "Custom Furniture & Joinery Dubai",
    "custom furniture Dubai",
    "bespoke furniture Dubai",
    "joinery services Dubai",
    "custom wardrobes Dubai",
    "kitchen cabinets Dubai",
    "luxury furniture Dubai",
    "commercial interior design Dubai",
    "Casa Kraft Interior design and renovation",
  ],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/custom-furniture-joinery-dubai",
  },

  // ✅ OG Tags — page-specific
  openGraph: {
    title: "Custom Furniture & Joinery in Dubai | Casa Kraft",
    description:
      "Looking for Custom Furniture & Joinery in Dubai? Casa Kraft creates spaces with complete design and fit-out solutions. Call Now!",
    url: "https://casakraftinteriors.ae/custom-furniture-joinery-dubai",
    siteName: "Casa Kraft Interiors",
    images: [
      {
        url: "https://casakraftinteriors.ae/images/custom-furniture-and-joinery-dubai.png",
        width: 1200,
        height: 630,
        alt: "Custom Furniture & Joinery Dubai – Casa Kraft Interiors",
      },
    ],
    type: "website",
    locale: "en_AE",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Custom Furniture & Joinery in Dubai | Casa Kraft",
    description:
      "Looking for Custom Furniture & Joinery in Dubai? Casa Kraft creates spaces with complete design and fit-out solutions. Call Now!",
    images: [
      "https://casakraftinteriors.ae/images/custom-furniture-and-joinery-dubai.png",
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

        {/* ✅ Service Schema — Custom Furniture specific */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://casakraftinteriors.ae/custom-furniture-joinery-dubai#service",
              name: "Custom Furniture & Joinery Dubai",
              description:
                "Premium custom furniture design, manufacturing, and joinery services in Dubai by Casa Kraft Interiors.",
              image:
                "https://casakraftinteriors.ae/images/custom-furniture-and-joinery-dubai.png",
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
              serviceType: "Custom Furniture and Joinery",
              url: "https://casakraftinteriors.ae/custom-furniture-joinery-dubai",
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
                "https://casakraftinteriors.ae/custom-furniture-joinery-dubai#webpage",
              name: "Custom Furniture & Joinery in Dubai | Casa Kraft",
              url: "https://casakraftinteriors.ae/custom-furniture-joinery-dubai",
              description:
                "Get luxury custom furniture and joinery services in Dubai with expert design, fabrication, and installation by Casa Kraft Interiors.",
              mainEntity: {
                "@id":
                  "https://casakraftinteriors.ae/custom-furniture-joinery-dubai#service",
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
                  name: "Custom Furniture & Joinery Dubai",
                  item: "https://casakraftinteriors.ae/custom-furniture-joinery-dubai",
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
                  name: "Why is Casa Kraft considered one of the best custom furniture and joinery companies in Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Casa Kraft combines exceptional craftsmanship with innovative design. Our experienced designers, craftsmen, and project managers create bespoke furniture and joinery solutions tailored to each client's lifestyle and space requirements, making us one of the trusted names in Dubai.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide both furniture design and manufacturing services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Casa Kraft offers complete custom furniture and joinery services, including concept development, 3D visualization, material selection, manufacturing, installation, and aftercare support.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you customize furniture according to my space and preferences?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Every furniture piece we create is made to measure. Whether you need wardrobes, kitchen cabinets, TV units, office furniture, or decorative joinery, we tailor each design to suit your style, dimensions, and functional requirements.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does a custom furniture project take in Dubai?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The timeline depends on the size and complexity of the project. Most custom furniture and joinery projects are completed within 4 to 10 weeks. We provide a detailed schedule before commencing work to ensure complete transparency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of custom furniture and joinery styles does Casa Kraft specialize in?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our team specializes in a wide range of styles including modern, contemporary, minimalist, luxury, classic, and Scandinavian designs. Every piece is thoughtfully crafted to complement your interior and reflect your personal taste.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you use premium materials for custom furniture manufacturing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We use high-quality wood, veneers, laminates, hardware, and finishes sourced from trusted suppliers to ensure durability, functionality, and long-lasting beauty in every piece we manufacture.",
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