import '../globals.css';

export const metadata = {
  title: "Marina Gate Penthouse 2 | Casa Kraft Interiors",
  description:
    "Marina Gate Penthouse 2 by Casa Kraft Interiors, the Best Penthouse Interior Design Company in Dubai, showcases luxury Interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
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
