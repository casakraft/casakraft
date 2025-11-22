import '../globals.css';

export const metadata = {
  title: "Taj Residence 3 Bedroom Dubai| Casa Kraft Interiors",
  description:
    "Taj Residence 3 Bedroom Dubai by Casa Kraft Interiors, the Best Townhouse Interior Design Company in Dubai, showcases luxury interiors.",
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
