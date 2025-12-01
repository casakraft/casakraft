import '../globals.css';

export const metadata = {
  title: "Villa Khawaneej Interior Design In Dubai - Casa Kraft Interiors",
  description:
    "Transform your villa Khawaneej with Casa Kraft interiors. Luxury and modern interiors by top villa interior design company in dubai. Contact now",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/villa-khawaneej',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
