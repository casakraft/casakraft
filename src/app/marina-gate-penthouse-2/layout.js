import '../globals.css';

export const metadata = {
  title: "Marina Gate Penthouse 2 Design - Casa Kraft Interiors",
  description:
    "Best interior design services for Marina Gate Penthouse 2 by CasaKraft Interiors. Stunning, refined interiors crafted for luxury living. Contact now.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/marina-gate-penthouse-2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
