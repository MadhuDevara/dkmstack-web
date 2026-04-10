import Link from "next/link";

export function AboutHero() {
  return (
    <section className="section-container relative overflow-hidden pt-12 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_15%,rgba(139,92,246,0.2),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.16),transparent_38%)]" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-accentPurple/35 bg-accentPurple/10 px-3 py-1 text-xs font-medium tracking-wide text-accentPurple">
            About DKMStack
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            We Build Software That Scales
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            DKMStack partners with startups and enterprises to design, build, and evolve digital
            products with strong architecture, clean engineering practices, and long-term quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="btn-primary">
              Explore Services
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to Us
            </Link>
          </div>
        </div>
        <div className="card card-glow-hover relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accentPurple/20 to-accentCyan/10" />
          <div className="relative space-y-3">
            <p className="text-sm uppercase tracking-wider text-slate-300">Our Values</p>
            <h3 className="text-xl font-semibold text-white">Performance, Quality, Ownership</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              We focus on maintainable systems, measurable outcomes, and delivery speed without
              compromising engineering quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
