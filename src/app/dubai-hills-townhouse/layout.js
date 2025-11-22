import '../globals.css';

export const metadata = {
  title: "Dubai Hills Townhouse | Casa Kraft Interiors",
  description:
    "Dubai Hills Townhouse by Casa Kraft Interiors, the Best Townhouse Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/dubai-hills-townhouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
