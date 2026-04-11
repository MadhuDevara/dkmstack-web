import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  compact?: boolean;
  variant?: "full" | "monogram" | "line";
};

export function BrandLogo({ href = "/", compact = false, variant = "full" }: BrandLogoProps) {
  const wordmarkClass = compact
    ? "bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-sm font-semibold text-transparent group-hover:from-accentCyan group-hover:via-white group-hover:to-accentCyan sm:text-base"
    : "bg-gradient-to-r from-white via-slate-200 to-accentCyan bg-clip-text text-lg text-transparent";

  return (
    <Link href={href} className="group inline-flex items-center gap-2.5">
      {variant === "line" ? (
        <>
          <span className="relative block h-[3px] w-8 overflow-hidden rounded-full bg-slate-800/80 shadow-inner">
            <span className="absolute inset-0 bg-gradient-to-r from-accentBlue via-accentPurple to-accentCyan opacity-95" />
          </span>
          <span className={`font-semibold tracking-[-0.02em] transition ${wordmarkClass}`}>DKMStack</span>
        </>
      ) : (
        <>
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/80 shadow-[0_0_0_1px_rgba(59,130,246,0.25),inset_0_1px_0_rgba(255,255,255,0.06),0_10px_28px_rgba(59,130,246,0.22)] ring-1 ring-accentBlue/20">
            <span className="absolute inset-[4px] rounded-lg bg-gradient-to-br from-accentBlue via-accentPurple to-accentCyan opacity-[0.92]" />
            <span className="relative text-[9px] font-bold tracking-[0.18em] text-white drop-shadow-sm">
              DK
            </span>
          </span>
          {variant === "full" ? (
            <span className={`font-semibold tracking-[-0.02em] transition ${wordmarkClass}`}>DKMStack</span>
          ) : null}
        </>
      )}
    </Link>
  );
}
