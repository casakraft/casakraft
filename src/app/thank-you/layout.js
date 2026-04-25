import '../globals.css';

export const metadata = {
  title: "Thank You - Casa Kraft Interiors",
  description:
    "Thank you for contacting Casa Kraft Interiors. Our team will get in touch with you shortly to discuss your interior design, renovation, or fit-out requirements.",
  keywords: [
    "thank you Casa Kraft Interiors",
    "contact confirmation Dubai",
    "interior design inquiry Dubai",
    "fit out consultation Dubai",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/thank-you",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Thank You - Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae/thank-you",
              description:
                "Thank you for reaching out to Casa Kraft Interiors. We will contact you shortly.",
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
                  name: "Thank You",
                  item: "https://casakraftinteriors.ae/thank-you",
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