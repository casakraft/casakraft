import '../globals.css';

export const metadata = {
  title: "Bvlgari One Bedroom Apartment | Casa Kraft Interiors",
  description:
    "Bvlgari One Bedroom Apartment by Casa Kraft Interiors, the Best apartment Interior Design Company in Dubai, showcases luxury, comfort, and bespoke modern style.",
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
