import '../globals.css';

export const metadata = {
  title: "Marina Gate Penthouse | Casa Kraft Interiors",
  description:
    "Marina Gate Penthouse by Casa Kraft Interiors, the Best Penthouse Interior Design Company in Dubai, showcases luxury interiors.",
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
