import { Footer } from "@modules/navigation/Footer";
import { Navbar } from "@modules/navigation/Navbar";
import "@styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col bg-white font-body leading-normal text-primary-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
