import '../globals.css';

export const metadata = {
  title: "Acacia 3 Bedroom Apartment Design Dubai - Casa Kraft Interiors",
  description:
    "CasaKraft Interiors, top interior design company in Dubai, crafted stunning Acacia 3-Bedroom Apartment with full fit-out services. Get in touch today.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/acacia-3-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
