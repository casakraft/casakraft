import '../globals.css';

export const metadata = {
  title: "Bluewaters 3 Bedroom Design | Casa Kraft Interiors",
  description:
    "Bluewaters 3 Bedroom Design by Casa Kraft Interiors, the Best residential Interior Design Company in Dubai, showcases luxury, comfort, and bespoke modern style.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/bluewaters-3-bedroom-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
