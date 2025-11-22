import '../globals.css';

export const metadata = {
  title: "Al Wasl Salon Interior Design | Casa Kraft Interiors",
  description:
    "Al Wasl Salon Interior Design by Casa Kraft Interiors, the Best Salon Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/al-wasl-salon-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
