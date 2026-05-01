"use client";

import { LogoBoltMark } from "@/components/logo-bolt-mark";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type BrandLogoProps = {
  href?: string;
  compact?: boolean;
  variant?: "full" | "monogram" | "line";
};

function wordmarkClasses(compact: boolean, quiet: boolean) {
  const size =
    compact && quiet
      ? "text-[17px] font-semibold sm:text-[20px]"
      : compact
        ? "text-[13px] font-semibold sm:text-[15px]"
        : "text-[17px] font-semibold sm:text-[19px]";

  const tone = quiet ? "opacity-[0.85]" : "";
  const dkmGlow = quiet
    ? "drop-shadow-[0_1px_12px_rgba(250,248,245,0.09)]"
    : "drop-shadow-[0_1px_18px_rgba(250,248,245,0.14)]";
  const stackGlow = quiet
    ? "drop-shadow-[0_0_18px_rgba(126,179,223,0.14)]"
    : "drop-shadow-[0_0_26px_rgba(126,179,223,0.22)]";

  return {
    row: `inline-flex items-baseline tracking-[-0.055em] ${size} ${tone}`,
    dkm: `bg-gradient-to-br from-lux-ivory via-lux-pearl to-lux-champagne bg-clip-text text-transparent ${dkmGlow}`,
    stack: `bg-gradient-to-br from-lux-frost via-lux-moonlight to-lux-sapphire bg-clip-text text-transparent ${stackGlow}`
  };
}

export function BrandLogo({ href = "/", compact = false, variant = "full" }: BrandLogoProps) {
  const reduceMotion = useReducedMotion();
  const quietFooterWordmark = compact && variant === "line";
  const wm = wordmarkClasses(compact, quietFooterWordmark);

  const staggerParent = reduceMotion
    ? undefined
    : ({
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.068,
            delayChildren: 0.05,
            when: "beforeChildren"
          }
        }
      } as const);

  const staggerChild = reduceMotion
    ? undefined
    : ({
        hidden: { opacity: 0, y: 9 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 390, damping: 31 }
        }
      } as const);

  const markLine = (
    <span className="relative grid shrink-0 place-items-center">
      <span
        className="pointer-events-none absolute inset-[-10px] rounded-[18px] bg-gradient-to-br from-lux-champagne/35 via-transparent to-lux-sapphire/25 opacity-0 blur-lg transition duration-500 ease-out group-hover/brand:opacity-100 motion-reduce:hidden"
        aria-hidden
      />
      <LogoBoltMark
        variant="dark"
        premium
        className={
          quietFooterWordmark
            ? "relative h-[36px] w-[36px] opacity-[0.92] sm:h-[44px] sm:w-[44px]"
            : "relative h-[30px] w-[30px] sm:h-[36px] sm:w-[36px]"
        }
      />
    </span>
  );

  const markBoxed = (
    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-white/[0.09] bg-[linear-gradient(152deg,rgba(255,255,255,0.085)_0%,rgba(255,255,255,0.02)_38%,rgba(126,179,223,0.05)_100%)] shadow-[0_14px_44px_-16px_rgba(0,0,0,0.88),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.38)] ring-1 ring-lux-champagne/20 transition duration-500 ease-out group-hover/brand:border-white/[0.12] group-hover/brand:ring-lux-moonlight/25">
      <span
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-25%,rgba(255,253,248,0.16),transparent_52%)]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 opacity-70 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.06)_48%,transparent_62%)] transition duration-700 ease-out translate-x-[-100%] group-hover/brand:translate-x-[100%] motion-reduce:hidden"
        aria-hidden
      />
      <LogoBoltMark variant="dark" premium className="relative h-[27px] w-[27px]" />
    </span>
  );

  const wordmarkStatic = (
    <span className={wm.row}>
      <span className={wm.dkm}>DKM</span>
      <span className={wm.stack}>Stack</span>
    </span>
  );

  const animatedLockup = (icon: ReactNode) => (
    <motion.span
      className="inline-flex items-center gap-0"
      variants={staggerParent}
      initial="hidden"
      animate="visible"
    >
      <motion.span variants={staggerChild} className="inline-flex">
        {icon}
      </motion.span>
      <motion.span variants={staggerChild} className={wm.row}>
        <span className={wm.dkm}>DKM</span>
        <span className={wm.stack}>Stack</span>
      </motion.span>
    </motion.span>
  );

  let inner: React.ReactNode;
  if (variant === "monogram") {
    inner = reduceMotion ? (
      markBoxed
    ) : (
      <motion.span
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="inline-flex"
      >
        {markBoxed}
      </motion.span>
    );
  } else if (variant === "line") {
    inner = reduceMotion ? (
      <>
        {markLine}
        {wordmarkStatic}
      </>
    ) : (
      animatedLockup(markLine)
    );
  } else {
    inner = reduceMotion ? (
      <>
        {markBoxed}
        {wordmarkStatic}
      </>
    ) : (
      animatedLockup(markBoxed)
    );
  }

  return (
    <Link
      href={href}
      className="group/brand relative inline-flex items-center gap-0 rounded-xl py-1 outline-none ring-offset-2 ring-offset-[#0B0F19] transition duration-500 ease-out hover:brightness-[1.03] focus-visible:ring-2 focus-visible:ring-lux-champagne/35"
    >
      {!reduceMotion ? (
        <span
          className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-r from-lux-champagne/0 via-lux-champagne/[0.07] to-lux-sapphire/0 opacity-0 blur-xl transition-opacity duration-500 group-hover/brand:opacity-100 motion-reduce:hidden"
          aria-hidden
        />
      ) : null}
      <motion.span
        className="inline-flex items-center gap-0"
        whileHover={reduceMotion ? undefined : { scale: 1.018 }}
        whileTap={reduceMotion ? undefined : { scale: 0.986 }}
        transition={{ type: "spring", stiffness: 540, damping: 36 }}
      >
        {inner}
      </motion.span>
    </Link>
  );
}
