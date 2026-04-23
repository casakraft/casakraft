import "./globals.css";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-WXLLXZ9HRM";

export const metadata = {
  title: "Home Renovation Company Dubai | Casa Kraft Interiors",
  description:
    "Expert home renovation services in Dubai — residential renovations, landscape design & premium fit-out works. Trusted across the UAE. Get a free quote today.",
  metadataBase: new URL("https://casakraftinteriors.ae/"),
  openGraph: {
    title: "Home Renovation Company Dubai | Casa Kraft Interiors",
    description:
      "Expert home renovation services in Dubai — residential renovations, landscape design & premium fit-out works. Trusted across the UAE. Get a free quote today.",
    url: "https://casakraftinteriors.ae/",
    siteName: "Casa Kraft Interiors",
    images: [
      {
        url: "/images/og-image.jpg", // ⚠️ Replace with a real 1200x630 JPG
        width: 1200,
        height: 630,
        alt: "Casa Kraft Interiors - Home Renovation Dubai",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Renovation Company Dubai | Casa Kraft Interiors",
    description:
      "Expert home renovation services in Dubai — residential renovations, landscape design & premium fit-out works. Trusted across the UAE. Get a free quote today.",
    images: ["/images/og-image.jpg"], // ⚠️ Replace with a real 1200x630 JPG
  },
  alternates: { canonical: "https://casakraftinteriors.ae/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        {/* Robots */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
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
                "https://share.google/9IC8xkgiy1X8tpqb2",
              ],
            }),
          }}
        />

        {/* LocalBusiness Schema — replaces incorrect BlogPosting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Casa Kraft Interiors",
              image: "https://casakraftinteriors.ae/images/logo.svg",
              url: "https://casakraftinteriors.ae/",
              description:
                "Expert home renovation services in Dubai — residential renovations, landscape design & premium fit-out works. Trusted across the UAE.",
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
                "https://share.google/9IC8xkgiy1X8tpqb2",
              ],
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
              name: "Home Renovation Company Dubai | Casa Kraft Interiors",
              url: "https://casakraftinteriors.ae/",
              description:
                "Expert home renovation services in Dubai — residential renovations, landscape design & premium fit-out works. Trusted across the UAE.",
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Home Renovation and Fit Out",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae",
              },
              areaServed: { "@type": "Place", name: "Dubai, UAE" },
              serviceOutput:
                "Premium home renovation solutions for residential spaces in Dubai.",
              url: "https://casakraftinteriors.ae/",
            }),
          }}
        />

        {/* Site Navigation Schema */}
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
                  name: "About Us",
                  url: "https://www.casakraftinteriors.ae/about-us",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 2,
                  name: "Apartment Renovation Dubai",
                  url: "https://casakraftinteriors.ae/apartment-renovation",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 3,
                  name: "Villa Renovation Dubai",
                  url: "https://casakraftinteriors.ae/villa-renovation",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 4,
                  name: "Gallery",
                  url: "https://casakraftinteriors.ae/gallery",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 5,
                  name: "Contact Us",
                  url: "https://casakraftinteriors.ae/contact-us",
                },
              ],
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
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
                  name: "Villa Renovation Dubai",
                  item: "https://casakraftinteriors.ae//villa-renovation",
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