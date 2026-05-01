import Image from "next/image";
import Link from "next/link";

/** IDE / engineering workspace — Unsplash (Christopher Gower), free to use under Unsplash License */
const HERO_UNSPLASH =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=85&w=2400&auto=format&fit=crop";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[clamp(28rem,68vh,50rem)] overflow-hidden xl:min-h-[clamp(30rem,70vh,54rem)]"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src={HERO_UNSPLASH}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_32%] brightness-[0.45] saturate-[0.78] contrast-[1.05] sm:object-[center_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/98 via-[#090E18]/84 to-[#0B0F19]/68 sm:bg-gradient-to-br sm:from-[#070A12]/97 sm:via-[#090E18]/74 sm:to-[#0B0F19]/48" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.12),transparent_42%),radial-gradient(circle_at_82%_18%,rgba(139,92,246,0.1),transparent_38%)]" />
      </div>

      <div className="section-container relative z-[1] flex min-h-[inherit] items-center py-8 sm:py-10 lg:py-11">
        <div className="space-y-[1.125rem] sm:space-y-5 lg:space-y-6">
            <p className="inline-flex rounded-full border border-accentCyan/35 bg-[#0B0F19]/55 px-3 py-1 text-xs font-medium tracking-wide text-accentCyan backdrop-blur-sm">
              Modern Software Engineering
            </p>
            <h1 className="text-[2.35rem] font-bold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-[3.35rem] xl:text-[4.15rem]">
              DKMStack
            </h1>
            <h2 className="bg-gradient-to-r from-accentBlue via-accentPurple to-accentCyan bg-clip-text text-[1.9rem] font-semibold text-transparent drop-shadow-sm sm:text-3xl lg:text-[2rem] xl:text-[2.2rem]">
              Building Scalable Software Solutions
            </h2>
            <p className="max-w-2xl text-[1.02rem] leading-relaxed text-slate-200 sm:text-[1.0625rem]">
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
      </div>
    </section>
  );
}
