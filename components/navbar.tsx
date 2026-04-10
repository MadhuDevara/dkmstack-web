"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/brand-logo";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    const firstLink = menuRef.current?.querySelector<HTMLElement>("a[href]");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-borderDark/70 bg-[#0B0F19]/60 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accentBlue/40 to-transparent" />
      <nav className="nav-container flex items-center justify-between py-2.5">
        <div className="hidden md:block">
          <BrandLogo variant="line" />
        </div>
        <div className="md:hidden">
          <BrandLogo variant="monogram" />
        </div>
        <ul className="hidden items-center gap-2 rounded-full border border-borderDark/80 bg-surfaceDark/70 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:flex">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <Link
                className={`nav-item-pill ${
                  pathname === item.href ? "nav-item-pill-active" : "nav-glow"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
              {pathname === item.href ? (
                <motion.span
                  layoutId="navbar-active-link"
                  className="absolute -bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-gradient-to-r from-accentBlue via-accentPurple to-accentCyan"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
            </li>
          ))}
        </ul>
        <button
          ref={toggleButtonRef}
          type="button"
          className="rounded-full border border-borderDark bg-surfaceDark/70 p-2 text-slate-200 transition duration-300 hover:border-accentCyan/60 hover:text-accentCyan md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={menuRef}
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-borderDark bg-[#111827]/95 md:hidden"
          >
            <ul className="nav-container flex flex-col gap-1.5 py-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className={`block rounded-xl px-3 py-2.5 transition duration-300 hover:bg-accentBlue/10 hover:text-accentCyan focus:bg-accentBlue/10 focus:text-accentCyan focus:outline-none ${
                      pathname === item.href ? "bg-accentBlue/10 font-semibold text-accentCyan" : ""
                    }`}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
