import '../globals.css';

export const metadata = {
  title: "Villa Renovation Cost in Dubai 2026 | Luxury Living Guide",
  description:
    "Plan your budget with expert villa renovation services in Dubai for 2026. Luxury designs, turnkey solutions, and complete home transformations by Casa Kraft.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/villa-renovation-cost-in-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
