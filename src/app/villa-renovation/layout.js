import '../globals.css';

export const metadata = {
  title: "Best Villa Renovation Company in Dubai - Casa Kraft Interiors",
  description:
    "Looking for villa renovation in Dubai? Casa Kraft Interiors delivers luxury design, smart upgrades & flawless execution. Book your consultation today.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/villa-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
