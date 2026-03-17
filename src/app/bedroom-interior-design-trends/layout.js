import '../globals.css';

export const metadata = {
  title: "Bedroom Interior Design Trends in Dubai by Casa Kraft",
  description:
    "Discover the latest bedroom interior design trends in Dubai, featuring luxury master bedrooms, modern layouts, smart technology, and bespoke design ideas.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/bedroom-interior-design-trends',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="bedroom interior design Dubai, luxury bedroom design Dubai, master bedroom design Dubai, modern bedroom interiors, bedroom renovation Dubai, bespoke bedroom design, luxury bedroom ideas, interior designers Dubai, wardrobe design Dubai, modern luxury bedrooms, bedroom fitout Dubai, home interior design Dubai"></meta>
     <meta name="publisher" content="Casa Kraft Interior Design & Renovation"></meta>
      <body>{children}</body>
    </html>
  );
}
