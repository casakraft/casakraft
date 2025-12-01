import '../globals.css';

export const metadata = {
  title: "Marina Gate Penthouse Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Transform your Marina Gate Penthouse with bespoke luxury interior design and architecture by CasaKraft Interiors, Interior design company Dubai. Call today.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/marina-gate-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
