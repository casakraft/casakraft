import '../globals.css';

export const metadata = {
  title: "Bulgari 2 Bedroom Apartment Interior Design - Casa Kraft Interiors",
  description:
    "Transform your Bulgari 2-Bedroom Apartment in Dubai with CasaKraft Interiors. Luxury, modern apartment interiors designed to perfection. Call us today.",
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
