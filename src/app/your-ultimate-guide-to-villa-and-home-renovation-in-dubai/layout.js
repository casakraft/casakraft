import '../globals.css';

export const metadata = {
  title: " Your Ultimate Guide to Villa and Home Renovation in Dubai | Casa Kraft Experts",
  description:
    "Upgrade your living standards with Casa Kraft's expert villa renovation in Dubai. From planning to execution, we deliver premium finishes and customized home transformations.",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/revitalize-your-space-expert-home-and-villa-painting-services-in-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
