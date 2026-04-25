import '../globals.css';

export const metadata = {
  title: "Marina Gate Penthouse 2 Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Marina Gate Penthouse 2 project in Dubai with luxury interior design, high-end renovation, and premium fit-out services.",
  keywords: [
    "Marina Gate Penthouse 2",
    "Dubai Marina penthouse design",
    "luxury penthouse Dubai",
    "penthouse renovation Dubai",
    "high end fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/marina-gate-penthouse-2",
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
              name: "Marina Gate Penthouse 2",
              description:
                "Luxury penthouse interior design and fit-out project completed by Casa Kraft Interiors in Dubai Marina.",
              url: "https://casakraftinteriors.ae/marina-gate-penthouse-2",
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
              name: "Marina Gate Penthouse 2 Interior Design Dubai",
              url: "https://casakraftinteriors.ae/marina-gate-penthouse-2",
              description:
                "Explore Casa Kraft Interiors’ Marina Gate Penthouse 2 project with luxury renovation and premium fit-out services in Dubai.",
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
                  name: "Marina Gate Penthouse 2",
                  item: "https://casakraftinteriors.ae/marina-gate-penthouse-2",
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