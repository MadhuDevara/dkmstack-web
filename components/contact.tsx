import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="space-y-8 text-center">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle mx-auto">
          Tell us about your project goals and we will get back to you with a tailored plan.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
