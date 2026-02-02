import '../globals.css';

export const metadata = {
  title: "Luxury MBR City Villa Interior Design - Casa Kraft interiors",
  description:
    "Transform your MBR City villa with Casa Kraft’s expert interior design and fit-out services. Modern luxury interiors made for Dubai living. Visit us",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/mbr-city-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="keywords" content="Luxury modern villa design MBR City, MBR City villa interior design, modern villa design Dubai, villa fit out company Dubai, bespoke villa interior design Dubai, luxury villa renovation Dubai, boutique villa interior designers Dubai, architectural villa design Dubai, Casa Kraft Interiors, premium villa fit out Dubai"/>
    <meta name="publisher" content="Casa Kraft Interiors" />
    <body>{children}</body>
    </html>
  );
}
