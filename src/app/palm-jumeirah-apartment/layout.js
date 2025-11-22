import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Apartment | Casa Kraft Interiors",
  description:
    "Palm Jumeirah Apartment by Casa Kraft Interiors, the Best Apartment Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
