import '../globals.css';

export const metadata = {
  title: "Landscape Dubai | Landscape Design & Landscaping Services – Casa Kraft",
  description:
    "Expert landscape Dubai services by Casa Kraft Interiors. Custom landscape design, garden landscaping & outdoor solutions.Visit Now",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/landscape-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
