import '../globals.css';

export const metadata = {
  title: "Interior Design Blog Dubai - Casa Kraft Interiors",
  description:
    "Explore Casa Kraft Interiors blog for expert insights on interior design, renovation, fit-out trends, and modern living ideas in Dubai.",
  keywords: [
    "interior design blog Dubai",
    "Dubai renovation tips",
    "fit out ideas Dubai",
    "home design inspiration Dubai",
    "interior design trends UAE",
    "Casa Kraft Interiors blog",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/blogs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Blog Listing Page Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Casa Kraft Interiors Blog",
              url: "https://casakraftinteriors.ae/blogs",
              description:
                "Interior design, renovation, and fit-out blog by Casa Kraft Interiors covering trends, tips, and inspiration in Dubai.",
              publisher: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                logo: {
                  "@type": "ImageObject",
                  url: "https://casakraftinteriors.ae/images/logo.svg",
                },
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
              name: "Interior Design Blog Dubai",
              url: "https://casakraftinteriors.ae/blogs",
              description:
                "Read blogs on interior design, renovation, and fit-out trends in Dubai by Casa Kraft Interiors.",
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
                  name: "Blogs",
                  item: "https://casakraftinteriors.ae/blogs",
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