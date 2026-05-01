"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";
import type { SVGProps } from "react";

/** Option A — Bolt from `dkmstack_shape_explorations_bolt.html` */
export type LogoBoltVariant = "dark" | "light" | "blue" | "mono" | "purple" | "green";

type BoltPalette = {
  fill: string;
  accentOpacity: number;
};

const PALETTES: Record<LogoBoltVariant, BoltPalette> = {
  dark: { fill: "#ffffff", accentOpacity: 0.28 },
  light: { fill: "#0a0a0a", accentOpacity: 0.22 },
  blue: { fill: "#4f8ef7", accentOpacity: 0.35 },
  mono: { fill: "#111111", accentOpacity: 0.2 },
  purple: { fill: "#c084fc", accentOpacity: 0.32 },
  green: { fill: "#34d399", accentOpacity: 0.3 }
};

export function LogoBoltMark({
  variant = "dark",
  className,
  density = "full",
  premium = true
}: Omit<SVGProps<SVGSVGElement>, "viewBox" | "children"> & {
  variant?: LogoBoltVariant;
  density?: "full" | "compact";
  /** Metallic frost gradient on dark variant — luxury nav treatment */
  premium?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const gradId = `bolt-lux-${uid}`;
  const { fill, accentOpacity } = PALETTES[variant];
  const useLuxuryGradient = variant === "dark" && premium;
  const accentEffective = useLuxuryGradient ? Math.min(accentOpacity + 0.22, 0.62) : accentOpacity;
  const accentLow = accentEffective * 0.82;
  const accentHigh = Math.min(accentEffective * 1.2, 0.88);

  return (
    <motion.svg
      viewBox="0 0 58 58"
      fill="none"
      aria-hidden
      className={className}
      initial={false}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.065,
              filter:
                variant === "dark"
                  ? "drop-shadow(0 0 14px rgba(255,253,248,0.18)) drop-shadow(0 0 22px rgba(143,191,232,0.22))"
                  : "drop-shadow(0 0 10px rgba(255,255,255,0.12))"
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 410, damping: 26 }}
    >
      {useLuxuryGradient ? (
        <defs>
          <linearGradient id={gradId} x1="12" y1="6" x2="46" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fffdf8" />
            <stop offset="0.38" stopColor="#ebe4dc" />
            <stop offset="0.62" stopColor="#d4e4f2" />
            <stop offset="1" stopColor="#8fbfe8" />
          </linearGradient>
        </defs>
      ) : null}

      <polygon
        points="34,4 14,32 26,32 24,54 44,26 32,26"
        fill={useLuxuryGradient ? `url(#${gradId})` : fill}
      />
      {density === "full" ? (
        <motion.polygon
          points="40,8 28,26 34,26 32,38 44,22 38,22"
          fill={useLuxuryGradient ? `url(#${gradId})` : fill}
          initial={{ opacity: accentEffective }}
          animate={
            reduceMotion
              ? { opacity: accentEffective }
              : { opacity: [accentLow, accentHigh, accentLow] }
          }
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
            repeatDelay: 0.35
          }}
        />
      ) : null}
    </motion.svg>
  );
}
