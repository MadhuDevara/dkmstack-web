import { AnimatedSection } from "@/components/animated-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function ContactPage() {
  return (
    <main className="app-shell">
      <Navbar />
      <AnimatedSection>
        <Contact variant="page" />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
