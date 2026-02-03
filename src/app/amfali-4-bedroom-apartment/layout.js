import '../globals.css';

export const metadata = {
  title: "Amfali 4 Bedroom Apartment - Casa Kraft Interiors",
  description:
    "Amfali 4-bedroom apartment by Casa Kraft interiors. Elegant and luxury interiors by the best interior design company. Contact today.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/amfali-4-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
