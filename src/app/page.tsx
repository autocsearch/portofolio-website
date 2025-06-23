import HeroSection from "@/components/HeroPage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
