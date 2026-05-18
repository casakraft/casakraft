import '../globals.css';

export const metadata = {
  title: "Villa Renovation Services in Dubai | Casa Kraft Interior Design",
  description:
    "Get expert villa renovation services in Dubai with Casa Kraft. Luxury designs, turnkey solutions, and complete home transformation.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/transform-your-dream-home-expert-villa-renovation-services-in-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
