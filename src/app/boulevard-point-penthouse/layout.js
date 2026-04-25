import '../globals.css';

export const metadata = {
  title: "Boulevard Point Penthouse Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Boulevard Point Penthouse project in Dubai with luxury interior design, high-end renovation, and premium fit-out services.",
  keywords: [
    "Boulevard Point Penthouse",
    "penthouse interior design Dubai",
    "luxury penthouse Dubai",
    "penthouse renovation Dubai",
    "high end fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/boulevard-point-penthouse",
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
              name: "Boulevard Point Penthouse",
              description:
                "Luxury penthouse interior design and fit-out project completed by Casa Kraft Interiors in Dubai.",
              url: "https://casakraftinteriors.ae/boulevard-point-penthouse",
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
              name: "Boulevard Point Penthouse Interior Design Dubai",
              url: "https://casakraftinteriors.ae/boulevard-point-penthouse",
              description:
                "Explore Casa Kraft Interiors’ Boulevard Point Penthouse project in Dubai with luxury renovation and premium fit-out services.",
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
                  name: "Boulevard Point Penthouse",
                  item: "https://casakraftinteriors.ae/boulevard-point-penthouse",
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