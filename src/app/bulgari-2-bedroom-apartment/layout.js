import '../globals.css';

export const metadata = {
  title: "Bulgari 2 Bedroom Apartment | Casa Kraft Interiors",
  description:
    "Bulgari 2 Bedroom Apartment by Casa Kraft Interiors, the Best Apartment Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/bulgari-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
