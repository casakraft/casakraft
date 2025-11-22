import '../globals.css';

export const metadata = {
  title: "Classic Villa Interior Design | Casa Kraft Interiors",
  description:
    "Classic Villa Interior Design by Casa Kraft Interiors, the Best Villa Interior Design Company in Dubai, showcases luxury interiors.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/classic-villa-interior-design',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
