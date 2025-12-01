import '../globals.css';

export const metadata = {
  title: "Townhouse Arabian Ranches 2 - Casa Kraft Interiors",
  description:
    "Elevate your Townhouse Arabian Ranches 2 with Casa Kraft. Luxury, modern and stylish designs by top interior design company. Call us",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/townhouse-arabian-ranches-2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
