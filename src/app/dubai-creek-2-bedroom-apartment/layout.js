import '../globals.css';

export const metadata = {
  title: "Dubai Creek 2 Bedroom Apartment | Casa Kraft Interiors",
  description:
    "Dubai Creek 2 Bedroom Apartment by Casa Kraft Interiors, the Best apartment Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/dubai-creek-2-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
