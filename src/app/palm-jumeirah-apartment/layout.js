import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Apartment Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Palm Jumeirah Apartment project with luxury interior design, premium renovation, and high-end fit-out services for waterfront living in Dubai.",
  keywords: [
    "Palm Jumeirah apartment",
    "Palm Jumeirah interior design",
    "luxury apartment Dubai",
    "apartment renovation Dubai",
    "apartment fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/palm-jumeirah-apartment",
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
              name: "Palm Jumeirah Apartment",
              description:
                "Luxury apartment interior design and fit-out project completed by Casa Kraft Interiors in Palm Jumeirah, Dubai.",
              url: "https://casakraftinteriors.ae/palm-jumeirah-apartment",
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
              name: "Palm Jumeirah Apartment Interior Design Dubai",
              url: "https://casakraftinteriors.ae/palm-jumeirah-apartment",
              description:
                "Explore Casa Kraft Interiors’ Palm Jumeirah Apartment project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "Palm Jumeirah Apartment",
                  item: "https://casakraftinteriors.ae/palm-jumeirah-apartment",
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