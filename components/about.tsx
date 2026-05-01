export function About() {
  return (
    <section id="about" className="section-container">
      <div className="card card-glow-hover relative overflow-hidden border-white/[0.1] bg-[linear-gradient(145deg,rgba(255,255,255,0.07)_0%,rgba(19,24,38,0.88)_46%,rgba(8,11,18,0.96)_100%)] px-5 py-5 shadow-[0_18px_60px_-28px_rgba(0,0,0,0.8),0_0_0_1px_rgba(220,207,184,0.08)_inset] backdrop-blur-md sm:px-6 sm:py-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(126,179,223,0.18),transparent_42%),radial-gradient(circle_at_88%_16%,rgba(184,152,109,0.14),transparent_38%)]" />
        <span
          className="pointer-events-none absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-lux-champagne/55 to-transparent"
          aria-hidden
        />

        <div className="relative grid items-start gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-lux-champagne/85">
              About DKMStack
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-lux-frost sm:text-4xl">
              Modern Engineering. Built To Last.
            </h2>
            <p className="mt-2.5 max-w-none text-[0.95rem] leading-6 text-lux-moonlight/85 sm:text-[0.98rem]">
              DKMStack designs and ships digital products for ambitious businesses, blending
              performance-first engineering, scalable architecture, and strict quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {[
              "Web Platforms - scalable, cloud-ready experiences",
              "Mobile Apps - high-performance iOS/Android delivery",
              "Automation QA - reliable releases with lower regression risk"
            ].map((item) => (
              <p
                key={item}
                className="flex min-h-[3.25rem] items-center rounded-lg border border-white/[0.12] bg-white/[0.04] px-3.5 py-2.5 text-sm font-medium leading-snug text-lux-frost/95"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
