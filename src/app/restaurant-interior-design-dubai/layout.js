import '../globals.css';

export const metadata = {
  title:
    "Restaurant Interior Design & Fit-Out in Dubai | Casa Kraft",
  description:
    "Restaurant interior design and fit-out in Dubai by Casa Kraft. We design and build fine-dining venues, cafés, bars and more. Start with a free quote.",
  keywords: [
    "restaurant interior design Dubai",
    "restaurant fit out Dubai",
    "restaurant renovation Dubai",
    "commercial interior design Dubai",
    "modern restaurant interior design Dubai",
    "luxury restaurant design Dubai",
    "restaurant refurbishment Dubai",
    "corporate restaurant interior design Dubai",
    "restaurant design company Dubai",
    "best restaurant interior designers Dubai",
    "restaurant fit out company Dubai",
    "small restaurant interior design Dubai",
    "contemporary restaurant design Dubai",
    "Casa Kraft Interior design and renovation",
  ],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/restaurant-interior-design-dubai",
  },

  // OG Tags — page-specific
  openGraph: {
    title: "Restaurant Interior Design Dubai | Casa Kraft",
    description:
      "Looking for professional restaurant interior designers in Dubai? Casa Kraft designs standout restaurant interiors with complete design and fit-out solutions. Call Now!",
    url: "https://casakraftinteriors.ae/restaurant-interior-design-dubai",
    siteName: "Casa Kraft Interiors",
    images: [
      {
        url: "https://casakraftinteriors.ae/images/restaurant-interior-in-dubai.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurant Interior Design Dubai – Casa Kraft Interiors",
      },
    ],
    type: "website",
    locale: "en_AE",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Interior Design Dubai | Casa Kraft",
    description:
      "Looking for professional restaurant interior designers in Dubai? Casa Kraft designs standout restaurant interiors with complete design and fit-out solutions. Call Now!",
    images: [
      "https://casakraftinteriors.ae/images/restaurant-interior-in-dubai.jpg",
    ],
  },
};

export default function RestaurantLayout({ children }) {
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

      {/* Service Schema — Restaurant specific */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://casakraftinteriors.ae/restaurant-interior-design-dubai#service",
            name: "Restaurant Interior Design Dubai",
            description:
              "Luxury restaurant interior design, renovation, and fit-out services in Dubai by Casa Kraft Interiors.",
            image:
              "https://casakraftinteriors.ae/images/restaurant-interior-in-dubai.jpg",
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
            serviceType: "Restaurant Interior Design and Fit-Out",
            url: "https://casakraftinteriors.ae/restaurant-interior-design-dubai",
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
              "https://casakraftinteriors.ae/restaurant-interior-design-dubai#webpage",
            name: "Restaurant Interior Design Dubai | Casa Kraft",
            url: "https://casakraftinteriors.ae/restaurant-interior-design-dubai",
            description:
              "Get luxury restaurant interior design services in Dubai with expert renovation and fit-out solutions by Casa Kraft Interiors.",
            mainEntity: {
              "@id":
                "https://casakraftinteriors.ae/restaurant-interior-design-dubai#service",
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
                name: "Restaurant Interior Design Dubai",
                item: "https://casakraftinteriors.ae/restaurant-interior-design-dubai",
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
                name: "Why is Casa Kraft regarded as one of the best restaurant interior design companies in Dubai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Casa Kraft is a combination of creativity and professionalism. Our team comprises highly skilled and professional designers, project managers, and fit-out professionals well versed with the commercial environment of Dubai. This is why we are considered one of the best restaurant interior design companies in Dubai.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer restaurant interior design and fit-out services at the same time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Casa Kraft is a full-service studio where we offer comprehensive restaurant interior services including restaurant design and fit-out under one roof.",
                },
              },
              {
                "@type": "Question",
                name: "Can you refurbish our current restaurant space?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We specialize in refurbishments of existing restaurant spaces, either partial or full scale. We study the space, determine how to improve it, and deliver a whole new look for your restaurant in the most minimally disruptive way possible.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a restaurant interior design project take in Dubai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The time taken depends on the scale and complexity of the project. A basic restaurant fit-out generally takes between 6 to 12 weeks. We always provide a detailed plan right from the start.",
                },
              },
              {
                "@type": "Question",
                name: "Which styles of restaurant interior design is Casa Kraft known for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our restaurant interior design company offers a variety of styles including modern, luxurious, classic, and contemporary. Every project is carefully crafted to suit the personality of your business.",
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