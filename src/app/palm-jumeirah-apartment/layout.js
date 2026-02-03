import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Apartment Interior Design in Dubai | Casa Kraft Interiors",
  description:
    "Transform your Palm Jumeirah apartment interiors with bespoke, luxurious interior and architectural design by CasaKraft Interiors. Get in touch now.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
