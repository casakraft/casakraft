import '../globals.css';

export const metadata = {
  title: "Apartment Renovation Cost in Dubai | Casa Kraft Interiors",
  description:
    "Discover the complete apartment renovation cost in Dubai. Casa Kraft offers expert apartment renovation services with luxury interior design. Visit today!",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/apartment-renovation-cost-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
