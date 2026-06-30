import '../globals.css';

export const metadata = {
  title: "Painting Services in Dubai | Residential & Commercial Contractors",
  description:
    "Looking for professional painting services in Dubai? Casa Kraft offers residential and commercial painting for villas, apartments & offices. Contact us!",
  keywords: [
    "painting services Dubai",
    "house painting Dubai",
    "villa painting Dubai",
    "apartment painting Dubai",
    "interior painting Dubai",
    "exterior painting Dubai",
    "commercial painting Dubai",
    "wall painting services Dubai",
    "painting contractors Dubai",
    "Casa Kraft Interior design and renovation",
  ],
  authors: [{ name: "Casa Kraft Interior design and renovation" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/painting-services-dubai",
  },

  // ✅ OG Tags — page-specific
  openGraph: {
    title: "Painting Services in Dubai | Casa Kraft Interiors",
    description:
      "Looking for professional painting services in Dubai? Casa Kraft offers residential and commercial painting for villas, apartments & offices. Contact us!",
    url: "https://casakraftinteriors.ae/painting-services-dubai",
    siteName: "Casa Kraft Interiors",
    images: [
      {
        url: "https://casakraftinteriors.ae/images/pn1.png",
        width: 1200,
        height: 630,
        alt: "Painting Services Dubai – Casa Kraft Interiors",
      },
    ],
    type: "website",
    locale: "en_AE",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Painting Services in Dubai | Casa Kraft Interiors",
    description:
      "Looking for professional painting services in Dubai? Casa Kraft offers residential and commercial painting for villas, apartments & offices. Contact us!",
    images: ["https://casakraftinteriors.ae/images/pn1.png"],
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

        {/* ✅ Service Schema — Painting Services specific */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://casakraftinteriors.ae/painting-services-dubai#service",
              name: "Painting Services Dubai",
              description:
                "Professional interior and exterior painting services for villas, apartments, offices, and commercial spaces in Dubai by Casa Kraft Interiors.",
              image: "https://casakraftinteriors.ae/images/pn1.png",
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
              serviceType: "Residential and Commercial Painting Services",
              url: "https://casakraftinteriors.ae/painting-services-dubai",
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
              "@id": "https://casakraftinteriors.ae/painting-services-dubai#webpage",
              name: "Painting Services in Dubai | Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae/painting-services-dubai",
              description:
                "Get professional villa, apartment, and commercial painting services in Dubai with premium, eco-friendly finishes by Casa Kraft Interiors.",
              mainEntity: {
                "@id": "https://casakraftinteriors.ae/painting-services-dubai#service",
              },
            }),
          }}
        />

        {/* ✅ Breadcrumb Schema */}
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
                  name: "Renovation Dubai",
                  item: "https://casakraftinteriors.ae/renovation-dubai",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Painting Services Dubai",
                  item: "https://casakraftinteriors.ae/painting-services-dubai",
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
          name: "What painting services do you offer in Dubai?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Casa Kraft Interior Design & Renovation provides a comprehensive set of painting services in Dubai, which include painting of villas, apartments, homes, offices, interior and exterior painting, decoration finishes, and commercial painting solutions. We design each service in such a way as to satisfy the requirements of our clients.",
          },
        },
        {
          "@type": "Question",
          name: "Can you paint over an existing wallpaper?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sometimes, painting over wallpaper is possible when the paper is fixed well and in good condition; however, we usually advise our clients to remove wallpaper first in order to get a better finish.",
          },
        },
        {
          "@type": "Question",
          name: "What type of paint do you use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use high-quality paints from reputable companies like Jotun, Dulux, and Nippon that provide great coverage and a long-lasting finish. The paint selection depends on the surface, location, and finish required for your project.",
          },
        },
        {
          "@type": "Question",
          name: "What is the time frame for the painting job?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The time taken to paint a property varies depending on its size and the nature of the work. An average apartment painting job takes between 2 to 4 days, while larger homes like villas may take 5 to 7 days. Projects involving offices, showrooms, gyms, and restaurants can take 7 to 14 days. At Casa Kraft, our painting contractors in Dubai always provide a definite timeframe for every project.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide a warranty for the painting service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Casa Kraft fully guarantees the quality of all projects we undertake. We offer a warranty for all our painting services in Dubai that covers both the quality of our work and the materials used, made possible by our use of high-quality paint throughout every project.",
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