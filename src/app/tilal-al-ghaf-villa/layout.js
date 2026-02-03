import '../globals.css';

export const metadata = {
  title: "Tilal Al Ghaf Villa Interior Design - Casa Kraft Interiors",
  description:
    "Transform your Tilal Al Ghaf villa with Casa Kraft. Luxury interiors, bespoke designs and top renovation services by the best design company. Call us",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/tilal-al-ghaf-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="Tilal Al Ghaf luxury villa interior design, villa interior design Tilal Al Ghaf Dubai, modern villa interior design Tilal Al Ghaf, luxury villa renovation Dubai, bespoke villa interior design Dubai, contemporary villa interiors Tilal Al Ghaf, premium villa interiors Dubai, Casa Kraft Interiors, luxury interior designers Tilal Al Ghaf"/>
       <meta name="publisher" content="Casa Kraft Interiors" />
      <body>{children}</body>
    </html>
  );
}
