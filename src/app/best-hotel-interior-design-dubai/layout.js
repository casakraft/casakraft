import '../globals.css';

export const metadata = {
  title: "Best Hotel Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft interiors delivers exceptional Best Hotel Interior Design Dubai. Leading hotel interior design company for bespoke, modern spaces. Visit now",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
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
