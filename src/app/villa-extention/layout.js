import '../globals.css';

export const metadata = {
  title: " Best Villa Extension Services in Dubai - Casa Kraft Interiors",
  description:
    "Expert villa extension services in Dubai by Casa Kraft Interiors. Structural extensions, custom designs, approvals & luxury finishes for villas. Visit Now",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/villa-lantana',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
