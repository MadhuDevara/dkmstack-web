"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
};

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 28, filter: "blur(6px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={
        prefersReducedMotion ? { duration: 0.18, ease: "linear", delay: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }
      }
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
    >
      {children}
    </motion.div>
  );
}
