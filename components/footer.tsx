import { BrandLogo } from "@/components/brand-logo";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
  { label: "X", href: "#", icon: Twitter }
];

export function Footer() {
  return (
    <footer className="border-t border-borderDark/80 bg-[#0B0F19]">
      <div className="section-container py-8">
        <div className="rounded-2xl border border-borderDark bg-surfaceDark/55 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <BrandLogo compact variant="line" />
              <p className="text-xs tracking-wide text-slate-400 sm:text-sm">
                © 2026 DKMStack. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="footer-chip"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
