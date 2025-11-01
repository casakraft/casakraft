import '../globals.css';

export const metadata = {
  title: "About Us | Casa Kraft Interiors",
  description:
    "Casa Kraft Interiors, Dubai, UAE",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/contact-us',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
