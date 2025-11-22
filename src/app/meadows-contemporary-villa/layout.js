import '../globals.css';

export const metadata = {
  title: "Meadows Contemporary Villa | Casa Kraft Interiors",
  description:
    "Meadows Contemporary Villa by Casa Kraft Interiors, the Best Villa Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/meadows-contemporary-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
