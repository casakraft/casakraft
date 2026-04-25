import '../globals.css';

export const metadata = {
  title: "Customized Wallpapers Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors offers customized wallpapers in Dubai with premium design, selection, and professional installation to enhance your interior spaces.",
  keywords: [
    "custom wallpapers Dubai",
    "wallpaper installation Dubai",
    "wall decor Dubai",
    "luxury wallpapers Dubai",
    "interior wallpaper design Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/customized-wallpapers-dubai",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Customized Wallpapers Dubai",
              description:
                "Custom wallpaper design, supply, and installation services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Wallpaper Design and Installation",
              url: "https://casakraftinteriors.ae/customized-wallpapers-dubai",
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
              name: "Customized Wallpapers Dubai",
              url: "https://casakraftinteriors.ae/customized-wallpapers-dubai",
              description:
                "Get customized wallpapers in Dubai with expert design and installation by Casa Kraft Interiors.",
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
                  name: "Services",
                  item: "https://casakraftinteriors.ae/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Customized Wallpapers Dubai",
                  item:
                    "https://casakraftinteriors.ae/customized-wallpapers-dubai",
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