import "../globals.css";

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
  creator: "Casa Kraft Interiors",
  publisher: "Casa Kraft Interiors",
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/blogs",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Interior Design Blog Dubai - Casa Kraft Interiors",
    description:
      "Explore expert interior design, renovation, fit-out trends, and modern living ideas in Dubai.",
    url: "https://casakraftinteriors.ae/blogs",
    siteName: "Casa Kraft Interiors",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Blog Dubai - Casa Kraft Interiors",
    description:
      "Explore expert interior design, renovation, fit-out trends, and modern living ideas in Dubai.",
  },
};

export default function BlogsLayout({ children }) {
  const breadcrumbSchema = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}