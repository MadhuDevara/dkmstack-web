import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function WhyUsPage() {
  return (
    <main>
      <Navbar />
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
