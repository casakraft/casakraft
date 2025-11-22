import '../globals.css';

export const metadata = {
  title: "2 Bedroom Dubai Silicon Oasis Apartment | Casa Kraft Interiors",
  description:
    "2 Bedroom Dubai Silicon Oasis Apartment by Casa Kraft Interiors, the Best Townhouse Interior Design Company in Dubai. Contact Us.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/dubai-silicon-oasis-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
