import '../globals.css';

export const metadata = {
  title: "2 Bedroom Dubai Silicon Oasis Apartment Design- Casa Kraft Interiors",
  description:
    "Smart, stylish interiors for Dubai Silicon Oasis apartments by Casa Kraft. Best design and fit-out services by top interior design company. Call us.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/dubai-silicon-oasis-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="Dubai Silicon Oasis apartment interior design, luxury residential interiors Silicon Oasis, apartment interior design Silicon Oasis Dubai, interior fit out companies Dubai Silicon Oasis, luxury apartment interior design Dubai, bespoke apartment interiors Dubai, modern apartment interiors Silicon Oasis, Casa Kraft Interiors, premium interior design Silicon Oasis"/>
      <meta name="publisher" content="Casa Kraft Interiors" />
      <body>{children}</body>
    </html>
  );
}
