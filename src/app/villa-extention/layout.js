import '../globals.css';

export const metadata = {
  title: " Swimming Pool Construction Dubai - Casa Kraft Interiors",
  description:
    "Expert swimming pool construction services in Dubai. Casa Kraft Interiors delivers luxury, custom-designed pools for homes and commercial properties.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/villa-extention',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
