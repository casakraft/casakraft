import '../globals.css';

export const metadata = {
  title: "Accacia 3 Bedroom Apartment | Casa Kraft Interiors",
  description:
    "Arabella 2 Bedroom Townhouse by Casa Kraft Interiors, the Best Townhouse Interior Design Company in Dubai, showcases luxury, comfort, and bespoke modern style.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/arabella-2-bedroom-townhouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
