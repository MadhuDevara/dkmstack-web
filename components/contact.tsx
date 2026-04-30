import { ContactDirectCard } from "@/components/contact-direct-card";
import { ContactForm } from "@/components/contact-form";

const EMAIL = "contact@dkmstack.com";
const ALIAS_EMAILS = ["info@dkmstack.com", "contact@dkmstack.com", "support@dkmstack.com"];

type ContactProps = {
  /** Email + LinkedIn card — only used on the dedicated /contact page */
  variant?: "page" | "section";
};

export function Contact({ variant = "section" }: ContactProps) {
  const isFullContactPage = variant === "page";

  return (
    <section id="contact" className="section-container">
      <div className="mx-auto max-w-3xl space-y-12 text-center">
        <div className="space-y-3">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle mx-auto">
            Tell us about your project goals and we will get back to you with a tailored plan.
          </p>
          <p className="text-sm text-slate-400">
            Or email us directly at{" "}
            <a href={`mailto:${EMAIL}`} className="text-accentCyan transition hover:text-accentBlue">
              {EMAIL}
            </a>
            .
          </p>
          <p className="text-xs text-slate-500">
            Aliases:{" "}
            {ALIAS_EMAILS.map((alias, index) => (
              <span key={alias}>
                <a href={`mailto:${alias}`} className="text-slate-400 transition hover:text-accentCyan">
                  {alias}
                </a>
                {index < ALIAS_EMAILS.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>

        {isFullContactPage ? (
          <>
            <ContactDirectCard />
            <div className="relative">
              <div className="absolute inset-x-0 top-0 flex items-center" aria-hidden>
                <div className="w-full border-t border-borderDark/80" />
              </div>
              <p className="relative mx-auto inline-block bg-[#0B0F19] px-4 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                Or send a message
              </p>
            </div>
          </>
        ) : null}

        <ContactForm />
      </div>
    </section>
  );
}
