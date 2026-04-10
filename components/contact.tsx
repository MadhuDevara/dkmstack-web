import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
        <p className="max-w-2xl text-slate-300">
          Tell us about your project goals and we will get back to you with a tailored plan.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
