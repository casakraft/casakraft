import '../globals.css';

export const metadata = {
  title: "Mirdif Hills Apartment | Casa Kraft Interiors",
  description:
    "Casa Kraft delivers luxury modern Mirdif Hills Apartment. Top interior design services by the best interior design company. visit now",
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
