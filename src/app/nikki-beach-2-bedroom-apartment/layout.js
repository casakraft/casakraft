import '../globals.css';

export const metadata = {
  title: "Nikki Beach 2 Bedroom Apartment | Casa Kraft Interiors",
  description:
    "Nikki Beach 2 Bedroom Apartment by Casa Kraft Interiors, the Best Apartment Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/nikki-beach-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
