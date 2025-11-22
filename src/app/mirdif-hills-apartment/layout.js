import '../globals.css';

export const metadata = {
  title: "Mirdif Hills Apartment | Casa Kraft Interiors",
  description:
    "Mirdif Hills Apartment by Casa Kraft Interiors, the Best apartment Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/mirdif-hills-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
