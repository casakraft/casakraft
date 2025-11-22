import '../globals.css';

export const metadata = {
  title: "Amfali 4 Bedroom Apartment | Casa Kraft Interiors",
  description:
    "Amfali 4 Bedroom Apartment by Casa Kraft Interiors, the Best apartment Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
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
