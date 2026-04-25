import '../globals.css';

export const metadata = {
  title: "Contact Casa Kraft Interiors Dubai - Get a Free Consultation",
  description:
    "Contact Casa Kraft Interiors in Dubai for interior design, renovation, and fit-out services. Get expert consultation for your living and commercial spaces.",
  keywords: [
    "contact interior designer Dubai",
    "Casa Kraft Interiors contact",
    "interior design consultation Dubai",
    "fit out company Dubai contact",
    "renovation company Dubai contact",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/contact-us",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Contact Page Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae/contact-us",
              description:
                "Get in touch with Casa Kraft Interiors for interior design, renovation, and fit-out services in Dubai.",
              publisher: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
            }),
          }}
        />

        {/* LocalBusiness Contact Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae/",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                areaServed: "AE",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        {/* Breadcrumb Schema */}
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
                  name: "Contact Us",
                  item: "https://casakraftinteriors.ae/contact-us",
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