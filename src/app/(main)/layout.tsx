import Navbar from "@/components/Navbar";
import Footer from "@/components/UberSections/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-15 px-4 pt-10 min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
