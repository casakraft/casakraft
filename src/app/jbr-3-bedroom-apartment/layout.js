import '../globals.css';

export const metadata = {
  title: "JBR 3 Bedroom Apartment Design Dubai - Casa Kraft Interiors",
  description:
    "Experience premium interior design and best fit-out services for your JBR 3-Bedroom Apartment with CasaKraft Interiors, Dubai. Contact us now.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
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
