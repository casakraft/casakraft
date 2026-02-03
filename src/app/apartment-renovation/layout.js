import '../globals.css';

export const metadata = {
  title: "Best Apartment Renovation Company in Dubai - Casa Kraft Interiors",
  description:
    "Looking for apartment renovation in Dubai? Casa Kraft Interiors offers premium apartment renovation services in Dubai. Contact Us Today.",
  metadataBase: new URL('hhttps://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/apartment-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
