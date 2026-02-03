import '../globals.css';

export const metadata = {
  title: "Luxurious Jumeirah Salon Interior Design - Casa Kraft Interiors",
  description:
    "Stunning and exceptional Jumeirah salon interior Design. Casakraft interiors create the best salon interior design with style and function. Contact us.",
  metadataBase: new URL('hhttps://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/jumeirah-salon-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
