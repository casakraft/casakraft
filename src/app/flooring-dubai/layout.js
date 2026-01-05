import '../globals.css';

export const metadata = {
  title: "Flooring Services in Dubai - Best Renovation Company - Casa Kraft Interiors",
  description:
    "Dubai's No. 1 and largest renovation company with an experienced team of planners, interior designers and project engineers with a detailed scope of work.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/villa-lantana',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
