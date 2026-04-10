import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="section-container relative overflow-hidden pt-12 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_75%_10%,rgba(139,92,246,0.22),transparent_35%)]" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-accentCyan/30 bg-accentCyan/10 px-3 py-1 text-xs font-medium tracking-wide text-accentCyan">
            Modern Software Engineering
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            DKMStack
          </h1>
          <h2 className="bg-gradient-to-r from-accentBlue via-accentPurple to-accentCyan bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            Building Scalable Software Solutions
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We deliver modern web platforms, high-performance mobile applications, and reliable
            automation solutions that help teams ship faster and scale with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="card card-glow-hover relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accentBlue/20 via-accentPurple/10 to-accentCyan/15" />
          <div className="relative space-y-3">
            <p className="text-sm uppercase tracking-wider text-slate-300">Engineering Focus</p>
            <h3 className="text-xl font-semibold text-white">Scalable by Design</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Built with robust architecture, clean development workflows, and practical automation
              to support long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
