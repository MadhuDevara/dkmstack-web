import { About } from "@/components/about";
import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
