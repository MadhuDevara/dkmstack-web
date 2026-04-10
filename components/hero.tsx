import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="section-container pt-24 sm:pt-28">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-accentBlue/30 bg-accentBlue/10 px-3 py-1 text-xs font-medium tracking-wide text-accentBlue">
            Modern Software Engineering
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            DKMStack
          </h1>
          <h2 className="text-2xl font-medium text-slate-200 sm:text-3xl">
            Building Scalable Software Solutions
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We deliver modern web platforms, high-performance mobile applications, and reliable
            automation solutions that help teams ship faster and scale with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-accentBlue px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-accentGold/50 px-6 py-3 text-sm font-semibold text-accentGold transition hover:-translate-y-0.5 hover:bg-accentGold/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accentBlue/20 to-accentGold/10" />
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
