import '../globals.css';

export const metadata = {
  title: " Best Villa Painting Services in Dubai | Casa Kraft Experts",
  description:
    "Transform your home with expert villa painting services in Dubai. Casa Kraft offers premium finishes, weather-resistant paints, and custom solutions.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/modern-apartment-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
