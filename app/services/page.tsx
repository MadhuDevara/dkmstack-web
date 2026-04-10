import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
