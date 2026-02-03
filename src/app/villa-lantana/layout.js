import '../globals.css';

export const metadata = {
  title: "Villa Latana Interior Design Dubai - Casa Kraft Interiors",
  description:
    "Casa Kraft delivers stunning modern villa Lantana interiors with luxury finishes. Get the best interior design services in Dubai. Contact us today.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
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
