import '../globals.css';

export const metadata = {
  title: "Modern Barber shop Interiors Dubai - Casa Kraft inteiors",
  description:
    " Luxury and modern barber shop dubai by Casa Kraft interiors. We create elegant barber shops interiors with top design services. Contact Us.",
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
