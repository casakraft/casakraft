import '../globals.css';

export const metadata = {
  title: "Boulevard Point Penthouse Interior Design Dubai - Casa Kraft Interiors",
  description:
    "CasaKraft Interiors & Renovation delivers Boulevard Point Penthouse interior design in Dubai with top-class, and stunning interiors. Call us now.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
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
