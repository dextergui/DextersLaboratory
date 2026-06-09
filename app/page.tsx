import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full text-white font-sans overflow-x-hidden">
      <Navigation />
      <div className="w-full mx-auto md:border-x border-white/10 flex flex-col max-w-[1440px]">
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
