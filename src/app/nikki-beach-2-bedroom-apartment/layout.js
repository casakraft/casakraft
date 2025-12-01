import '../globals.css';

export const metadata = {
  title: "Nikki Beach 2 Bedroom Apartment | Casa Kraft Interiors",
  description:
    "CasaKraft Interiors creates modern, elegant interiors for Nikki Beach 2-Bedroom Apartment. Top interior design company in Dubai. Get in touch now.",
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
