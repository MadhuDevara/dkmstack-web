import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Scalable Architecture",
  "Clean Code Practices",
  "Fast Delivery",
  "Client-Centric Approach"
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-container">
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold text-white">Why Choose Us</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="card flex items-center gap-3 border-white/10 py-5 hover:border-accentGold/50"
            >
              <CheckCircle2 className="h-5 w-5 text-accentGold" />
              <span className="font-medium text-slate-100">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
