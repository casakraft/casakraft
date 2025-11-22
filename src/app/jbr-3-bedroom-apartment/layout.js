import '../globals.css';

export const metadata = {
  title: "JBR 3 Bedroom Apartment | Casa Kraft Interiors",
  description:
    "JBR 3 Bedroom Apartment by Casa Kraft Interiors, the Best Apartment Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/jbr-3-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
