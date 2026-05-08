"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMemo } from "react";

type ScrollProgressBarProps = {
  className?: string;
};

/**
 * Luxury scroll progress indicator — thin horizontal line driven by page scroll.
 * Fill matches site accent palette (cyan → blue → purple); soft neutral track.
 * Decorative only; does not capture pointer events.
 */
export function ScrollProgressBar({ className }: ScrollProgressBarProps) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const springConfig = useMemo(
    () =>
      reduceMotion
        ? { stiffness: 10_000, damping: 100, mass: 0.1 }
        : { stiffness: 200, damping: 38, mass: 0.35, restDelta: 0.0005 },
    [reduceMotion]
  );

  const smoothed = useSpring(scrollYProgress, springConfig);
  const width = useTransform(smoothed, (p) => `${Math.max(0, Math.min(1, p)) * 100}%`);

  return (
    <div
      className={[
        "pointer-events-none relative z-[1] h-[2.5px] w-full overflow-hidden rounded-full sm:h-[3px]",
        className ?? ""
      ].join(" ")}
      aria-hidden
      role="presentation"
    >
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-white/[0.06] via-slate-500/15 to-white/[0.05]"
        aria-hidden
      />
      <motion.div
        className="absolute inset-y-0 left-0 top-0 rounded-full bg-gradient-to-r from-accentCyan/90 via-accentBlue to-accentPurple/95 shadow-[0_0_14px_rgba(59,130,246,0.35)]"
        style={{ width }}
      />
    </div>
  );
}
