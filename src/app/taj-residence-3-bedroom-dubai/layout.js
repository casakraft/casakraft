import '../globals.css';

export const metadata = {
  title: "Taj Residence 3 Bedroom Dubai - Casa Kraft Interiors",
  description:
    "Luxury Taj Residence 3 Bedroom Dubai by CasaKraft Interiors, the best interior design company. Stylish, premium design. Contact us today.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/taj-residence-3-bedroom-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
