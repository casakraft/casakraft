import '../globals.css';

export const metadata = {
  title: "Windows & Doors Services in Dubai - Casa Kraft Interiors",
  description:
    "Premium windows and doors in Dubai by Casa Kraft. We offer repair, replacement & installation of glass, aluminium & wooden windows and doors. Visit Now",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/windows-and-doors',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
