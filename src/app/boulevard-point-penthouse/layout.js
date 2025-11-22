import '../globals.css';

export const metadata = {
  title: "Boulevard Point Penthouse Interior | Casa Kraft Interiors",
  description:
    "Boulevard Point Penthouse Interior by Casa Kraft Interiors, the Best Penthouse Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/boulevard-point-penthouse',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
