import '../globals.css';

export const metadata = {
  title: "Damac Hills 3 Bedroom townhouse | Casa Kraft Interiors",
  description:
    "Damac Hills 3 Bedroom townhouse by Casa Kraft Interiors, the Best Townhouse Interior Design Company in Dubai, showcases luxury interiors.",
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
