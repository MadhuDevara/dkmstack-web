import { About } from "@/components/about";
import { AnimatedSection } from "@/components/animated-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <main>
      <Navbar />
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <About />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Services />
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
