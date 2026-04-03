import '../globals.css';

export const metadata = {
  title: "Customized Wallpaper Services in Dubai - Casa Kraft Interiors",
  description:
    "Transform your walls with Casa Kraft's customized wallpaper services in Dubai. Expert design, installation & premium quality for homes & offices. Visit Now",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/customized-wallpapers-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
