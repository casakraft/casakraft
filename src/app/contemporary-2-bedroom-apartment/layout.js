import '../globals.css';

export const metadata = {
  title: "Contemporary 2 Bedroom Apartment | Casa Kraft Interiors",
  description:
    "Contemporary 2 Bedroom Apartment by Casa Kraft Interiors, the Best apartment Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/contemporary-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
