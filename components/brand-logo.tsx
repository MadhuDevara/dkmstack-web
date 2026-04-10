import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  compact?: boolean;
  variant?: "full" | "monogram" | "line";
};

export function BrandLogo({ href = "/", compact = false, variant = "full" }: BrandLogoProps) {
  const wordmarkClass = compact
    ? "text-base text-white group-hover:text-accentCyan"
    : "bg-gradient-to-r from-white via-slate-200 to-accentCyan bg-clip-text text-lg text-transparent";

  return (
    <Link href={href} className="group inline-flex items-center gap-2.5">
      {variant === "line" ? (
        <>
          <span className="relative block h-0.5 w-7 overflow-hidden rounded-full bg-slate-700">
            <span className="absolute inset-0 bg-gradient-to-r from-accentBlue via-accentPurple to-accentCyan" />
          </span>
          <span className={`font-semibold tracking-tight transition ${wordmarkClass}`}>DKMStack</span>
        </>
      ) : (
        <>
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-accentBlue/30 bg-slate-950/70 shadow-[0_0_0_1px_rgba(59,130,246,0.2),0_8px_24px_rgba(59,130,246,0.28)]">
            <span className="absolute inset-[5px] rounded-lg bg-gradient-to-br from-accentBlue via-accentPurple to-accentCyan opacity-90" />
            <span className="relative text-[10px] font-bold tracking-[0.14em] text-white">DK</span>
          </span>
          {variant === "full" ? (
            <span className={`font-semibold tracking-tight transition ${wordmarkClass}`}>DKMStack</span>
          ) : null}
        </>
      )}
    </Link>
  );
}
