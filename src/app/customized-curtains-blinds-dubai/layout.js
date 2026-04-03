import '../globals.css';

export const metadata = {
  title: "Customized Curtains and Blinds in Dubai - Casa Kraft",
  description:
    "Upgrade your home with custom curtains & blinds in Dubai. Expert design, installation & style solutions by Casa Kraft Interiors.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/customized-curtains-blinds-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
