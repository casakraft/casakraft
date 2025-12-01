import '../globals.css';

export const metadata = {
  title: "Damac Hills 3 Bedroom townhouse Interior Design - Casa Kraft Interiors",
  description:
    "Casa Kraft delivers bespoke luxury interiors for Damac Hills 3 Bedroom townhouse. Top interior design and fitout company in Dubai. Call now.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/damac-hills-3-bedroom-townhouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
