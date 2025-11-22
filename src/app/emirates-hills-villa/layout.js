import '../globals.css';

export const metadata = {
  title: "Emirates Hills Villa| Casa Kraft Interiors",
  description:
    "Emirates Hills Villa by Casa Kraft Interiors, the Best Townhouse Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/emirates-hills-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
