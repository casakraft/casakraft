import '../globals.css';

export const metadata = {
  title: "Royal Atlantis Apartment | Casa Kraft Interiors",
  description:
    "Royal Atlantis Apartment by Casa Kraft Interiors, the Best apartment Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/royal-atlantis-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
