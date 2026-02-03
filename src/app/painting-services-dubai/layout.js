import '../globals.css';

export const metadata = {
  title: "Professional Painting Services Dubai",
  description:
    "Get expert interior & exterior painting services in Dubai by Casa Kraft. We paint villas, apartments & offices. Contact Us",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/painting-services-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
