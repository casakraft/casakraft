import '../globals.css';

export const metadata = {
  title: "MBR City Villa | Casa Kraft Interiors",
  description:
    "MBR City Villa by Casa Kraft Interiors, the Best Villa Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/mbr-city-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
