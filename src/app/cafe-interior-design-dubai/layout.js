import '../globals.css';

export const metadata = {
  metadataBase: new URL("https://casakraftinteriors.ae"),
  title: "Cafe Interior Design Dubai - Restaurant & Coffee Shop Interiors",
  description:
    "Transform your cafe with Dubai's leading cafe interior designers. Casa Kraft delivers bespoke cafe interiors and coffee shop fit-outs. Call Now",
  keywords: [
    "cafe interior design Dubai",
    "cafe fit out Dubai",
    "cafe interior designers Dubai",
    "cafe renovation Dubai",
    "coffee shop interior design Dubai",
    "luxury cafe interior design Dubai",
    "modern cafe interior design Dubai",
    "cafe design company Dubai",
    "best cafe interior designers Dubai",
    "cafe fit out company Dubai",
    "contemporary cafe design Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interior Design and Renovation" }],
  alternates: {
    canonical: "/cafe-interior-design-dubai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // OG Tags — page-specific
  openGraph: {
    type: "website",
    siteName: "Casa Kraft Interiors",
    locale: "en_AE",
    url: "https://casakraftinteriors.ae/cafe-interior-design-dubai",
    title: "Cafe Interior Design & Fit-Out in Dubai | Casa Kraft",
    description:
      "From cozy coffee shops to luxury cafés, Casa Kraft designs café interiors in Dubai that look stunning and keep customers coming back — full design, fit-out and renovation.",
    images: [
      {
        url: "https://casakraftinteriors.ae/images/cafe-interior-in-dubai.jpg",
        width: 1200,
        height: 630,
        alt: "Cafe interior designed by Casa Kraft in Dubai",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Cafe Interior Design & Fit-Out in Dubai | Casa Kraft",
    description:
      "From cozy coffee shops to luxury cafés, Casa Kraft designs café interiors in Dubai that look stunning and keep customers coming back — full design, fit-out and renovation.",
    images: [
      "https://casakraftinteriors.ae/images/cafe-interior-in-dubai.jpg",
    ],
  },
};

export default function CafeLayout({ children }) {
  return (
    <>
      {/* Organization Schema — keep this block IDENTICAL across every page
          (same @id, same details) so Google treats it as one entity */}
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

      {/* Service Schema — Cafe specific */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://casakraftinteriors.ae/cafe-interior-design-dubai#service",
            name: "Cafe Interior Design Dubai",
            description:
              "Cafe interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
            image:
              "https://casakraftinteriors.ae/images/cafe-interior-in-dubai.jpg",
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
            serviceType: "Cafe Interior Design and Fit-Out",
            url: "https://casakraftinteriors.ae/cafe-interior-design-dubai",
          }),
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://casakraftinteriors.ae/cafe-interior-design-dubai#webpage",
            name: "Cafe Interior Design Dubai | Casa Kraft",
            url: "https://casakraftinteriors.ae/cafe-interior-design-dubai",
            description:
              "Get expert cafe interior design services in Dubai with complete renovation and fit-out solutions by Casa Kraft Interiors.",
            mainEntity: {
              "@id":
                "https://casakraftinteriors.ae/cafe-interior-design-dubai#service",
            },
          }),
        }}
      />

      {/* Breadcrumb Schema — Correct path for this page */}
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
                name: "Cafe Interior Design Dubai",
                item: "https://casakraftinteriors.ae/cafe-interior-design-dubai",
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema — these MUST match the FAQ text visible on the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why is Casa Kraft regarded as one of the best cafe interior design companies in Dubai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Casa Kraft is a combination of creativity and professionalism. Our team comprises highly skilled and professional designers, project managers, and fit-out professionals well versed with the commercial environment of Dubai. This is why we are considered one of the best cafe interior design companies in Dubai.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer cafe interior design and fit-out services at the same time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Casa Kraft is a full-service studio where we offer comprehensive cafe interior services including cafe design and fit-out under one roof.",
                },
              },
              {
                "@type": "Question",
                name: "Can you refurbish our current cafe space?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We specialize in refurbishments of existing cafe spaces, either partial or full scale. We study the space, determine how to improve it, and deliver a whole new look for your cafe in the most minimally disruptive way possible.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a cafe interior design project take in Dubai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The time taken depends on the scale and complexity of the project. A basic cafe fit-out generally takes between 6 to 12 weeks. We always provide a detailed plan right from the start.",
                },
              },
              {
                "@type": "Question",
                name: "Which styles of cafe interior design is Casa Kraft known for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our cafe interior design company offers a variety of styles including modern, luxurious, classic, and contemporary. Every project is carefully crafted to suit the personality of your business.",
                },
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}