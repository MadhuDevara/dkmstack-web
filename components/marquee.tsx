import { Fragment } from "react";

const MARQUEE_PARTS = [
  "DKMSTACK",
  "PREMIUM DIGITAL EXPERIENCES",
  "HIGH-PERFORMANCE WEB SOLUTIONS",
  "SCALABLE ENGINEERING",
  "UX THAT CONVERTS",
  "BUILD FAST. SHIP SMART. GROW STRONG."
];

const MARQUEE_ARIA_LABEL =
  "DKMStack highlights: premium digital experiences, high-performance web solutions, scalable engineering, UX that converts, build fast, ship smart, grow strong";

type MarqueeProps = {
  className?: string;
};

function MarqueeRow({
  duplicate,
  trackKey
}: {
  duplicate?: boolean;
  /** Stable keys for segmented spans */
  trackKey: string;
}) {
  return (
    <p
      className="marquee-dkm-row mx-8 flex shrink-0 items-center gap-x-[0.65rem] whitespace-nowrap sm:gap-x-[0.85rem]"
      {...(duplicate ? ({ "aria-hidden": true } as const) : {})}
    >
      {MARQUEE_PARTS.map((part, i) => (
        <Fragment key={`${trackKey}-${i}`}>
          {i > 0 ? (
            <span className="select-none px-px text-[11px] text-lux-champagne sm:text-xs" aria-hidden>
              ✦
            </span>
          ) : null}
          {/* Solid colors — bg-clip-text breaks under transformed ancestors (marquee track) in Safari / some prod builds */}
          <span
            className={
              i === 0
                ? "text-[13px] font-semibold uppercase leading-none tracking-[0.22em] text-lux-frost drop-shadow-[0_0_18px_rgba(34,211,238,0.45)] sm:text-[0.8125rem] sm:tracking-[0.26em]"
                : "text-[13px] font-medium uppercase leading-none tracking-[0.2em] text-[#f5efe6] sm:text-[0.8125rem] sm:tracking-[0.24em]"
            }
          >
            {part}
          </span>
        </Fragment>
      ))}
    </p>
  );
}

/**
 * Full-width luxury marquee — matches nav/glass accent language; champagne + cyan highlights.
 */
export function Marquee({ className }: MarqueeProps) {
  return (
    <div
      className={`marquee-dkm-root relative z-30 w-full overflow-hidden border-y border-[#d7b98a]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-1px_0_rgba(215,185,138,0.14),0_18px_52px_-18px_rgba(0,0,0,0.52)] backdrop-blur-md ${className ?? ""}`}
      aria-label={MARQUEE_ARIA_LABEL}
      role="region"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.068)_0%,transparent_52%),linear-gradient(90deg,rgba(59,130,246,0.065)_0%,transparent_44%,rgba(139,92,246,0.072)_100%),rgba(11,15,23,0.935)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-accentBlue/42 via-accentPurple/34 to-accentCyan/32"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-6 bottom-0 z-[1] h-[1px] bg-gradient-to-r from-transparent via-lux-champagne/48 to-transparent opacity-75 sm:inset-x-12"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[3.25rem] bg-gradient-to-r from-[#0a0c12] via-[#0a0c12]/94 to-transparent sm:w-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[3.25rem] bg-gradient-to-l from-[#0a0c12] via-[#0a0c12]/94 to-transparent sm:w-20"
        aria-hidden
      />

      <div className="relative z-[3] mx-auto flex h-[44px] w-full min-w-0 items-center backdrop-blur-[10px]">
        <div className="marquee-dkm-track">
          <MarqueeRow trackKey="t1" />
          <MarqueeRow duplicate trackKey="t2" />
        </div>
      </div>
    </div>
  );
}
