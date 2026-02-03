import '../globals.css';

export const metadata = {
  title: "Dubai Creek 2 Bedroom Apartment Interior Design - Casa Kraft Interiors",
  description:
    "Transform your Dubai Creek 2-Bedroom Apartment with CasaKraft Interiors. Modern interior design and expert fit-out services in Dubai. Get in touch now.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
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
