import NavBar from '@/components/NavBar'; // Make sure this is imported correctly
import HeroSection from '@/components/HeroSection'; // Correct import path for your HeroSection

export const metadata = {
  title: 'Honolulu Coffee',
  description: 'Replicating the Honolulu Coffee site in Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar /> {/* Ensure only one NavBar is here */}
        {children}  {/* This is where page-specific content will be injected */}
        <HeroSection /> {/* Ensure HeroSection is correctly placed */}
      </body>
    </html>
  );
}
