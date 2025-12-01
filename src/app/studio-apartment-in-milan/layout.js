import '../globals.css';

export const metadata = {
  title: "Studio Apartment in Milan - Casa Kraft Interiors",
  description:
    "Transform your studio apartment in  Milan Dubai with Casa Kraft interiors. Luxury interiors and modern design by top interior design experts. Visit us",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/studio-apartment-in-milan',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
