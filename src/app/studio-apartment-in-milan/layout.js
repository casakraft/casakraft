import '../globals.css';

export const metadata = {
  title: "Studio Apartment in Milan | Casa Kraft Interiors",
  description:
    "Studio Apartment in Milan by Casa Kraft Interiors, the Best apartment Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/studio-apartment-in-milan',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
