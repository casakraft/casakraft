import '../globals.css';

export const metadata = {
  title: "Meadows Contemporary Villa Design - Casa Kraft Interiors",
  description:
    "Best meadows contemporary villa design by CasaKraft Interiors. Modern interiors from top interior design company in Dubai. Visit us today.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
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
