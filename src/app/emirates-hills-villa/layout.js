import '../globals.css';

export const metadata = {
  title: "Emirates Hills Villa Interior Design Dubai - Casa Kraft interiors",
  description:
    "Luxurious Emirates Hills villa interiors by Casa Kraft interiors. styling by the best interior design team. Transform your home. Contact us today.",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/emirates-hills-villa',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="keywords" content="Luxury villa interior design Emirates Hills, modern luxury villa Dubai, Emirates Hills villa interior design, bespoke villa interior design Dubai, luxury modern interior design Emirates Hills, contemporary villa interior design Dubai, high end villa interiors Dubai, Casa Kraft Interior Design, luxury villa renovation Emirates Hills, premium interior design Dubai, architectural villa interiors Dubai"></meta>  
    <meta name="publisher" content="Casa Kraft Interior Design & Renovation">
    </meta><body>{children}</body>
    </html>
  );
}
