import '../globals.css';

export const metadata = {
  title: "Kitchen Renovation In Dubai - Best Remodeling Company - Casa Kraft",
  description:
    "Luxury kitchen renovation in Dubai by Casa Kraft Interiors. Custom designs, modular kitchens, premium finishes & smart upgrades for villas & apartments.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/kitchen-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
