import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function HeroPage() {
  return (
    <main className="app-shell">
      <Navbar />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
