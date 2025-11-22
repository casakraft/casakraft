import '../globals.css';

export const metadata = {
  title: "Jumeirah Salon Interior Design | Casa Kraft Interiors",
  description:
    "Jumeirah Salon Interior Design by Casa Kraft Interiors, the Best salon Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/jumeirah-salon-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
