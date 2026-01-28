import '../globals.css';

export const metadata = {
  title: "Bluewaters 3-Bedroom Design Dubai - CasaKraft interiors",
  description:
    "Bluewaters 3-Bedroom Design Dubai by CasaKraft Interiors. We deliver Luxurious, stylish interiors for your Bedroom. Contact us today.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/bluewaters-3-bedroom-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
