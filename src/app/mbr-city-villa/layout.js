import '../globals.css';

export const metadata = {
  title: "MBR City Villa Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the MBR City Villa project in Dubai with luxury interior design, premium renovation, and high-end fit-out services for modern villa living.",
  keywords: [
    "MBR City villa",
    "Mohammed Bin Rashid City villa Dubai",
    "villa interior design Dubai",
    "luxury villa Dubai",
    "villa renovation Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/mbr-city-villa",
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
              name: "MBR City Villa",
              description:
                "Luxury villa interior design and fit-out project completed by Casa Kraft Interiors in MBR City, Dubai.",
              url: "https://casakraftinteriors.ae/mbr-city-villa",
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
              name: "MBR City Villa Interior Design Dubai",
              url: "https://casakraftinteriors.ae/mbr-city-villa",
              description:
                "Explore Casa Kraft Interiors’ MBR City Villa project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "MBR City Villa",
                  item: "https://casakraftinteriors.ae/mbr-city-villa",
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