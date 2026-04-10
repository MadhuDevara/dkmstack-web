import { Bot, Globe, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Responsive, scalable web applications using modern frameworks and cloud-ready architecture.",
    icon: Globe
  },
  {
    title: "Mobile App Development",
    description:
      "High-quality mobile solutions with smooth UX, robust performance, and maintainable codebases.",
    icon: Smartphone
  },
  {
    title: "Automation Testing",
    description:
      "Reliable test automation pipelines that improve release confidence and reduce regression risk.",
    icon: Bot
  }
];

export function Services() {
  return (
    <section id="services" className="section-container">
      <div className="space-y-10">
        <h2 className="text-3xl font-semibold text-white">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="card hover:border-accentBlue/40 hover:bg-white/10">
                <Icon className="mb-4 h-7 w-7 text-accentBlue" />
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
