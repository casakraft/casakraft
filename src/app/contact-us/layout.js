import '../globals.css';

export const metadata = {
  title: "Contact Us | Casa Kraft Interiors",
  description:
    "We Do Interior Design & Fit Out",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
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
