import '../globals.css';

export const metadata = {
  title: "Luxury Royal Atlantis Apartment - Casa Kraft interiors",
  description:
    "Upgrade your Royal Atlantis apartment with Casa Kraft . Luxury interior design by one of best apartment design companies in dubai. visit now. ",
  metadataBase: new URL('https://www.casakraftinteriors.ae/'),
  alternates: {
    canonical: '/royal-atlantis-apartment',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="keywords"content="Royal Atlantis apartment interior design, Atlantis The Royal residences interior design, luxury apartment interior design Dubai, modern apartment interior design Dubai, bespoke apartment interiors Dubai, luxury fit out Royal Atlantis, high end apartment interiors Dubai, luxury interior designers Dubai, Casa Kraft Interiors, premium apartment fit out Dubai"/>
    <meta name="publisher" content="Casa Kraft Interiors" />
    <body>{children}</body>
    </html>
  );
}
