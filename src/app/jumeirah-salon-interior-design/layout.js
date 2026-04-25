import '../globals.css';

export const metadata = {
  title: "Jumeirah Salon Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors completed the Jumeirah Salon Interior Design project in Dubai with stylish commercial interiors, premium renovation, and high-end fit-out services.",
  keywords: [
    "Jumeirah salon interior design",
    "salon interior design Dubai",
    "beauty salon design Dubai",
    "commercial fit out Dubai",
    "salon renovation Dubai",
    "Casa Kraft Interiors projects",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/jumeirah-salon-interior-design",
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
              name: "Jumeirah Salon Interior Design",
              description:
                "Premium salon interior design and fit-out project completed by Casa Kraft Interiors in Jumeirah, Dubai.",
              url: "https://casakraftinteriors.ae/jumeirah-salon-interior-design",
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
              name: "Jumeirah Salon Interior Design Dubai",
              url: "https://casakraftinteriors.ae/jumeirah-salon-interior-design",
              description:
                "Explore Casa Kraft Interiors’ Jumeirah Salon Interior Design project with premium renovation and commercial fit-out services in Dubai.",
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
                  name: "Jumeirah Salon Interior Design",
                  item: "https://casakraftinteriors.ae/jumeirah-salon-interior-design",
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