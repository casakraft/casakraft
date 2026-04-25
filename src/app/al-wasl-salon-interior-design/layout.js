import '../globals.css';

export const metadata = {
  title: "Al Wasl Salon Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Al Wasl Salon Interior Design project in Dubai with stylish commercial interiors, renovation, and fit-out services.",
  keywords: [
    "Al Wasl Salon Interior Design",
    "salon interior design Dubai",
    "Al Wasl salon design Dubai",
    "beauty salon interior design Dubai",
    "salon fit out Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/al-wasl-salon-interior-design",
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
              name: "Al Wasl Salon Interior Design",
              description:
                "Premium salon interior design and fit-out project completed by Casa Kraft Interiors in Dubai.",
              url: "https://casakraftinteriors.ae/al-wasl-salon-interior-design",
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
              name: "Al Wasl Salon Interior Design Dubai",
              url: "https://casakraftinteriors.ae/al-wasl-salon-interior-design",
              description:
                "Explore Casa Kraft Interiors’ Al Wasl Salon Interior Design project in Dubai with commercial interior design, renovation, and fit-out services.",
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
                  name: "Al Wasl Salon Interior Design",
                  item: "https://casakraftinteriors.ae/al-wasl-salon-interior-design",
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