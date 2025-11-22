import '../globals.css';

export const metadata = {
  title: "Palm Jumeirah Villa | Casa Kraft Interiors",
  description:
    "Palm Jumeirah Villa by Casa Kraft Interiors, the Best VIlla Interior Design Company in Dubai, showcases luxury intriors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
