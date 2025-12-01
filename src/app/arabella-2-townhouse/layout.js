import '../globals.css';

export const metadata = {
  title: "Arabella 2 Townhouse Interior Design - Casa Kraft Interiors",
  description:
    "Casa Kraft offers luxury modern interior for Arabella 2 Townhouse in Dubai. Stunning design services by top interior experts. Call now",
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
