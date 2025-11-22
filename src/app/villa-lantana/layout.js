import '../globals.css';

export const metadata = {
  title: "Villa Latana Interior Design | Casa Kraft Interiors",
  description:
    "Villa Latana interior by Casa Kraft Interiors, the Best Villa Interior Design Company in Dubai, showcases luxury interiors.",
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
