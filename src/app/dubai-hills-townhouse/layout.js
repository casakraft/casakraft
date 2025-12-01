import '../globals.css';

export const metadata = {
  title: "Dubai Hills Townhouse | Casa Kraft Interiors",
  description:
    "Create a modern luxury Dubai Hills Townhouse with Casa Kraft interiors. Stunning designs by top interior and fitout experts. Contact now",
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
