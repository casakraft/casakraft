import '../globals.css';

export const metadata = {
  title: "Contact Us | Casa Kraft Interiors",
  description:
    "Get in touch with Casa Kraft for premium interior design and renovation services in Dubai.Reach out for office fit-outs, villa renovations etc.",
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
