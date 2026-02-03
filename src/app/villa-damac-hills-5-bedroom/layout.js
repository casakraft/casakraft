import '../globals.css';

export const metadata = {
  title: "Villa Damac Hills 5 Bedroom Interior Dubai - Casa Kraft Interiors",
  description:
    "CasaKraft Interiors delivers Villa Damac Hills 5-Bedroom interiors with expert designs. Best interior design company in Dubai. Call us now.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
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
