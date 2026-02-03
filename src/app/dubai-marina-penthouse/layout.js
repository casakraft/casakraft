import '../globals.css';

export const metadata = {
  title: "Dubai Marina Penthouse Interior Design - Casa Kraft Interiors",
  description:
    "Dubai Marina Penthouse by Casa Kraft Interiors, the Best Penthouse Interior Design Company in Dubai. Browse Our Portfolio",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/dubai-marina-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
