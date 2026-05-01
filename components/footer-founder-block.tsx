"use client";

import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type FooterFounderBlockProps = {
  email: string;
};

export function FooterFounderBlock({ email }: FooterFounderBlockProps) {
  const reduceMotion = useReducedMotion();

  const container = reduceMotion
    ? undefined
    : ({
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.085,
            delayChildren: 0.07,
            when: "beforeChildren"
          }
        }
      } as const);

  const item = reduceMotion
    ? undefined
    : ({
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 340, damping: 30 }
        }
      } as const);

  if (reduceMotion) {
    return (
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accentCyan/85">
          Founded by
        </p>
        <p className="mt-2.5 bg-gradient-to-br from-lux-ivory via-lux-pearl to-lux-moonlight bg-clip-text text-xl font-semibold tracking-[-0.04em] text-transparent drop-shadow-[0_0_28px_rgba(212,228,242,0.14)] sm:text-2xl">
          Maddy
        </p>
        <p className="mt-2 max-w-md text-[11px] font-medium leading-relaxed tracking-wide text-slate-500 sm:text-xs">
          Founder & QA Engineer <span className="text-slate-600">·</span> UI/UX, Web & App Developer
        </p>
        <a
          href={`mailto:${email}`}
          className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium tracking-wide text-slate-400 transition hover:border-accentCyan/35 hover:bg-accentCyan/[0.06] hover:text-accentCyan sm:text-xs"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden />
          {email}
        </a>
      </div>
    );
  }

  return (
    <motion.div
      className="min-w-0 flex-1"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-28px", amount: 0.2 }}
    >
      <motion.div variants={item}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accentCyan/85">
          Founded by
        </p>
      </motion.div>
      <motion.p
        variants={item}
        className="mt-2.5 bg-gradient-to-br from-lux-ivory via-lux-pearl to-lux-moonlight bg-clip-text text-xl font-semibold tracking-[-0.04em] text-transparent drop-shadow-[0_0_28px_rgba(212,228,242,0.14)] sm:text-2xl"
      >
        Maddy
      </motion.p>
      <motion.div variants={item}>
        <p className="mt-2 max-w-md text-[11px] font-medium leading-relaxed tracking-wide text-slate-500 sm:text-xs">
          Founder & QA Engineer <span className="text-slate-600">·</span> UI/UX, Web & App Developer
        </p>
      </motion.div>
      <motion.div variants={item}>
        <a
          href={`mailto:${email}`}
          className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium tracking-wide text-slate-400 transition hover:border-accentCyan/35 hover:bg-accentCyan/[0.06] hover:text-accentCyan sm:text-xs"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden />
          {email}
        </a>
      </motion.div>
    </motion.div>
  );
}
