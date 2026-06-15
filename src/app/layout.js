import "./globals.css";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-WXLLXZ9HRM";

export const metadata = {
  title: "Interior Design Company in Dubai - Casa Kraft Interiors",
  description:
    "Best interior design services in Dubai. Residential, commercial & premium fit-out works. Trusted across the UAE. Contact us Today!",
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: { canonical: "https://casakraftinteriors.ae/" },
  openGraph: {
    title: "Interior Design Company in Dubai | Casa Kraft Interiors",
    description:
      "Expert home renovation services in Dubai — residential renovations, landscape design & premium fit-out works. Trusted across the UAE.",
    url: "https://casakraftinteriors.ae/",
    siteName: "Casa Kraft Interiors",
    images: [
      {
        url: "https://casakraftinteriors.ae/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Kraft Interiors - Home Renovation Dubai",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Company in Dubai | Casa Kraft Interiors",
    description:
      "Expert home renovation services in Dubai — residential renovations, landscape design & premium fit-out works. Trusted across the UAE.",
    images: ["https://casakraftinteriors.ae/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ─── Google Analytics ─── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* ─── Global Robots Meta ─── */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* ─── Schema 1: Organization (Global) ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://casakraftinteriors.ae/#organization",
              name: "Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae/",
              logo: {
                "@type": "ImageObject",
                url: "https://casakraftinteriors.ae/images/logo.svg",
                width: 600,
                height: 60,
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sheikh Zayed Road",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              sameAs: [
                "https://www.instagram.com/casakraftinteriors.ae/",
                "https://share.google/K8jqiMFPrOSQ3Heaq",
              ],
            }),
          }}
        />

        {/* ─── Schema 2: LocalBusiness (Global) ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://casakraftinteriors.ae/#localbusiness",
              name: "Casa Kraft Interiors",
              image: "https://casakraftinteriors.ae/images/logo.svg",
              url: "https://casakraftinteriors.ae/",
              description:
                "Expert home renovation services in Dubai — residential renovations, landscape design & premium fit-out works. Trusted across the UAE.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "17",
                bestRating: "5",
                worstRating: "1",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sheikh Zayed Road",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              priceRange: "AED",
              openingHours: "Mo-Sa 09:00-18:00",
              sameAs: [
                "https://www.instagram.com/casakraftinteriors.ae/",
                "https://share.google/K8jqiMFPrOSQ3Heaq",
              ],
            }),
          }}
        />

        {/* ─── Schema 3: SiteNavigation ItemList (Global) ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "SiteNavigationElement",
                  position: 1,
                  name: "Home",
                  url: "https://casakraftinteriors.ae/",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 2,
                  name: "About Us",
                  url: "https://casakraftinteriors.ae/about-us",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 3,
                  name: "Renovation",
                  url: "https://casakraftinteriors.ae/renovation-dubai",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 4,
                  name: "Interior Design",
                  url: "https://casakraftinteriors.ae/interior-design-dubai",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 5,
                  name: "Gallery",
                  url: "https://casakraftinteriors.ae/gallery",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 6,
                  name: "Our Blogs",
                  url: "https://casakraftinteriors.ae/blogs",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 7,
                  name: "Contact Us",
                  url: "https://casakraftinteriors.ae/contact-us",
                },
              ],
            }),
          }}
        />

      
      </head>
      <body>{children}</body>
    </html>
  );
}