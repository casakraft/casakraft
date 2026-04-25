import '../globals.css';

export const metadata = {
  title: "Bvlgari One Bedroom Apartment Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Bvlgari One Bedroom Apartment project in Dubai with luxury interior design, premium renovation, and high-end fit-out services.",
  keywords: [
    "Bvlgari One Bedroom Apartment",
    "Bvlgari apartment Dubai",
    "1 bedroom apartment design Dubai",
    "luxury apartment interior design Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/bvlgari-one-bedroom-apartment",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Project Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "Bvlgari One Bedroom Apartment",
              description:
                "Luxury one bedroom apartment interior design and fit-out project completed by Casa Kraft Interiors in Dubai.",
              url: "https://casakraftinteriors.ae/bvlgari-one-bedroom-apartment",
              creator: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
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
              name: "Bvlgari One Bedroom Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/bvlgari-one-bedroom-apartment",
              description:
                "Explore Casa Kraft Interiors’ Bvlgari One Bedroom Apartment project in Dubai with luxury renovation and premium fit-out services.",
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
                  name: "Projects",
                  item: "https://casakraftinteriors.ae/gallery",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Bvlgari One Bedroom Apartment",
                  item: "https://casakraftinteriors.ae/bvlgari-one-bedroom-apartment",
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