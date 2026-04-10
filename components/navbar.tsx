"use client";

import { AnimatePresence, motion } from "framer-motion";
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090B10]/80 backdrop-blur-md">
      <nav className="section-container flex items-center justify-between py-4">
        <Link
          href="/"
          className={`text-lg font-semibold tracking-tight transition ${
            pathname === "/" ? "text-accentBlue" : "text-white hover:text-accentBlue"
          }`}
        >
          DKMStack
        </Link>
        <ul className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <Link
                className={`transition hover:text-accentBlue ${
                  pathname === item.href ? "font-semibold text-accentBlue" : ""
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
              {pathname === item.href ? (
                <motion.span
                  layoutId="navbar-active-link"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-accentBlue"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
            </li>
          ))}
        </ul>
        <button
          ref={toggleButtonRef}
          type="button"
          className="rounded-md border border-white/20 p-2 text-slate-200 transition hover:border-accentBlue hover:text-accentBlue md:hidden"
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
            className="border-t border-white/10 bg-[#0E111A] md:hidden"
          >
            <ul className="section-container flex flex-col gap-2 py-4 text-sm text-slate-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className={`block rounded-md px-2 py-2 transition hover:bg-white/5 hover:text-accentBlue focus:bg-white/5 focus:text-accentBlue focus:outline-none ${
                      pathname === item.href ? "bg-white/5 font-semibold text-accentBlue" : ""
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
