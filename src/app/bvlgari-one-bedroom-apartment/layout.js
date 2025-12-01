import '../globals.css';

export const metadata = {
  title: "Bvlgari One Bedroom Apartment | Casa Kraft Interiors",
  description:
    "Transform your Bvlgari One Bedroom Apartment with Casa Kraft interiors. Luxury interiors and top fitout services by leading interior design experts. Contact now",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/bvlgari-one-bedroom-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
