import '../globals.css';

export const metadata = {
  title: "Classic Villa Interior Design Dubai - Casa Kraft interiors",
  description:
    "Casa Kraft Interiors offers modern classic villa Interior design. Get the best villa interior design in Dubai. Call us now.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/classic-villa-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
