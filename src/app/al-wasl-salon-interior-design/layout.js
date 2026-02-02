import '../globals.css';

export const metadata = {
  title: "Al Wasl Salon Interior Design - Casa Kraft Interiors",
  description:
    "CasaKraft Interiors, Dubai’s best salon interior design company, creates stunning Al Wasl beauty salon interior design with luxury and style. Call today.",
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
