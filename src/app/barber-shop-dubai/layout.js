import '../globals.css';

export const metadata = {
  title: "Barber Shop Dubai | Casa Kraft Interiors",
  description:
    "Barber Shop Dubai by Casa Kraft Interiors, the Best baber shop Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/barber-shop-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
