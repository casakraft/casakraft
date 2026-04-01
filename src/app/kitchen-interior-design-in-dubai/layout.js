import '../globals.css';

export const metadata = {
  title: " Luxury Kitchen Interior Design in Dubai By Casa Kraft",
  description:
    "Discover modern luxury kitchen interior design in Dubai with Casa Kraft. Custom layouts, German kitchens, premium materials & expert renovation services. ",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/kitchen-interior-design-in-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
