import '../globals.css';

export const metadata = {
  title: "Meta Title will be here",
  description:
    "Meta description will be here. Meta description will be here. Meta description will be here. Meta description will be here",
  metadataBase: new URL('https://casakraftinteriors.ae/'),
  alternates: {
    canonical: '/slug will be here',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
