import '../globals.css';

export const metadata = {
  title: "Revitalize Your Space: Expert Home & Villa Painting Services in Dubai - Casa Kraft Interiors",
  description:
    "Discover expert home and villa painting services in Dubai with Casa Kraft Interiors. Learn how professional painting can transform your space with premium finishes and lasting results.",
  keywords: [
    "home painting Dubai",
    "villa painting Dubai",
    "painting services Dubai",
    "interior painting tips Dubai",
    "house painting ideas",
    "Casa Kraft Interiors blog",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/revitalize-your-space-expert-home-and-villa-painting-services-in-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Blog Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline:
                "Revitalize Your Space: Expert Home & Villa Painting Services in Dubai",
              description:
                "Discover expert home and villa painting services in Dubai with Casa Kraft Interiors and learn how professional painting transforms your space.",
              author: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
              },
              publisher: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                logo: {
                  "@type": "ImageObject",
                  url: "https://casakraftinteriors.ae/images/logo.svg",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://casakraftinteriors.ae/revitalize-your-space-expert-home-and-villa-painting-services-in-dubai",
              },
              url: "https://casakraftinteriors.ae/revitalize-your-space-expert-home-and-villa-painting-services-in-dubai",
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
              name: "Expert Home & Villa Painting Services in Dubai",
              url: "https://casakraftinteriors.ae/revitalize-your-space-expert-home-and-villa-painting-services-in-dubai",
              description:
                "Read about professional home and villa painting services in Dubai and how they can transform your interiors.",
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Home & Villa Painting Services in Dubai",
                  item:
                    "https://casakraftinteriors.ae/revitalize-your-space-expert-home-and-villa-painting-services-in-dubai",
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