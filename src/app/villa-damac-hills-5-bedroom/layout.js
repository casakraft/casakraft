import '../globals.css';

export const metadata = {
  title: "Villa Damac Hills 5 Bedroom Interior | Casa Kraft Interiors",
  description:
    "Villa Damac Hills 5 Bedroom by Casa Kraft Interiors, the Best Villa Interior Design Company in Dubai, showcases luxury Interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/villa-damac-hills-5-bedroom',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
