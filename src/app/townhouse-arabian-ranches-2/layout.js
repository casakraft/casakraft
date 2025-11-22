import '../globals.css';

export const metadata = {
  title: "Townhouse Arabian Ranches 2 | Casa Kraft Interiors",
  description:
    "Townhouse Arabian Ranches 2 by Casa Kraft Interiors, the Best Townhouse Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/townhouse-arabian-ranches-2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
