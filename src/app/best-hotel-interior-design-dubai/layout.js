import '../globals.css';

export const metadata = {
  title: "Best Hotel Interior Design Dubai| Casa Kraft Interiors",
  description:
    "Best Hotel Interior Design Dubai by Casa Kraft Interiors, the Best Hotel Interior Design Company, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/best-hotel-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
