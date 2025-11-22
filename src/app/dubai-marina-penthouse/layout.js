import '../globals.css';

export const metadata = {
  title: "Dubai Marina Penthouse | Casa Kraft Interiors",
  description:
    "Dubai Marina Penthouse by Casa Kraft Interiors, the Best Penthouse Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/dubai-marina-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
