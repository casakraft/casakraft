import '../globals.css';

export const metadata = {
  title: "Modern Apartment Interior Design in Dubai - Casa Kraft Interiors",
  description:
    "Explore modern apartment interior design in Dubai with Casa Kraft Interiors. Discover trends, colors, smart layouts, and renovation ideas.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/modern-apartment-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="Modern apartment interior design Dubai, apartment interior design Dubai, modern apartment decor Dubai, luxury apartment renovation Dubai, studio apartment interior design, bespoke apartment interior design Dubai, contemporary apartment design, complete apartment fit out Dubai, Casa Kraft Interiors"/>
      <meta name="publisher" content="Casa Kraft Interiors" />
      <body>{children}</body>
    </html>
  );
}
