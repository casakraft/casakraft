import '../globals.css';

export const metadata = {
  title: "Tilal Al Ghaf Villa | Casa Kraft Interiors",
  description:
    "Tilal Al Ghaf Villa by Casa Kraft Interiors, the Best Villa Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/tilal-al-ghaf-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
