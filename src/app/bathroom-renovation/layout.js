import '../globals.css';

export const metadata = {
  title: "Bathroom Renovation Dubai | Best Bathroom Renovation Company – Casa Kraft",
  description:
    "Expert bathroom renovation Dubai by Casa Kraft Interiors. Luxury designs, waterproofing, smart fixtures & full remodeling.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/bathroom-renovation',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
