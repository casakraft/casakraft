import '../globals.css';

export const metadata = {
  title: " Palm Jumeirah Villa Design - Casa Kraft interiors",
  description:
    "Casa Kraft interiors delivers luxurious interiors and architectural designs in Palm Jumeirah villa. Top interior design services in Dubai. Browse us",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/palm-jumeirah-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="Palm Jumeirah luxury villa interior design, villa interior design Palm Jumeirah Dubai, luxury villa renovation Palm Jumeirah, modern villa interior design Dubai, bespoke villa interiors Palm Jumeirah, high end villa interior design Dubai, sustainable interior design villas Dubai, Casa Kraft Interiors, premium villa interior designers Dubai"/>
      <meta name="publisher" content="Casa Kraft Interiors" />
      <body>{children}</body>
    </html>
  );
}
