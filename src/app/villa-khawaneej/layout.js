import '../globals.css';

export const metadata = {
  title: "Villa Khawaneej | Casa Kraft Interiors",
  description:
    "Villa Khawaneej by Casa Kraft Interiors, the Best Villa Interior Design Company in Dubai, showcases luxury interiors.",
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
