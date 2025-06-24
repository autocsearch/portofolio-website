import HeroSection from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Projects from "@/app/Projects/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <Projects />
      </div>
    </main>
  );
}
