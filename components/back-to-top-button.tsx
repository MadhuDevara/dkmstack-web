"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const SHOW_AFTER_PX = 300;

/**
 * Premium floating back-to-top — matches DKMStack glass + accent gradient language.
 */
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, [reduceMotion]);

  return (
    <AnimatePresence mode="wait">
      {visible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          onClick={scrollToTop}
          className="group fixed bottom-6 right-6 z-[190] flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/[0.1] bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_48%),linear-gradient(90deg,rgba(59,130,246,0.06)_0%,transparent_42%,rgba(139,92,246,0.06)_100%),rgba(11,15,25,0.88)] text-lux-pearl shadow-[0_12px_44px_-14px_rgba(0,0,0,0.7),0_0_0_1px_rgba(59,130,246,0.12)_inset,0_0_32px_-10px_rgba(59,130,246,0.22)] backdrop-blur-xl transition-[box-shadow,border-color,transform] duration-300 hover:border-accentCyan/30 hover:text-white hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.65),0_0_0_1px_rgba(34,211,238,0.18)_inset,0_0_36px_-6px_rgba(34,211,238,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentCyan/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19] md:bottom-8 md:right-10"
        >
          <span
            className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-accentBlue/15 via-transparent to-accentPurple/12 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-accentCyan/45 to-transparent opacity-90"
            aria-hidden
          />
          <ChevronUp
            className="relative h-5 w-5 shrink-0 text-lux-frost drop-shadow-[0_0_10px_rgba(34,211,238,0.35)] transition-colors duration-300 group-hover:text-accentCyan"
            strokeWidth={2.25}
            aria-hidden
          />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
