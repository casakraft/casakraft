import '../globals.css';

export const metadata = {
  title: "Arabella 2 Townhouse | Casa Kraft Interiors",
  description:
    "Arabella 2 Townhouse by Casa Kraft Interiors, the Best Townhouse Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/arabella-2-townhouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
