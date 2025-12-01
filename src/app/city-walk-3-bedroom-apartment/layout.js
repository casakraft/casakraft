import '../globals.css';

export const metadata = {
  title: "City Walk 3 Bedroom Apartment Dubai - Casa Kraft Interiors",
  description:
    "City Walk 3-Bedroom Apartment interior design Dubai by CasaKraft Interiors. Bespoke, contemporary interiors for luxurious modern living. Call us today.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/city-walk-3-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
