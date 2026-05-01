import { BrandLogo } from "@/components/brand-logo";
import { FooterFounderBlock } from "@/components/footer-founder-block";
import { Github, Linkedin, Twitter } from "lucide-react";

const EMAIL = "contact@dkmstack.com";

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
  { label: "X", href: "#", icon: Twitter }
];

export function Footer() {
  return (
    <footer className="border-t border-borderDark/80 bg-[#0B0F19]">
      <div className="section-container py-8">
        <div className="rounded-2xl border border-borderDark bg-surfaceDark/55 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm sm:px-6 sm:py-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div className="max-w-xl space-y-4">
              <BrandLogo compact variant="line" />
              <p className="text-sm leading-relaxed text-slate-400">
                Crafting modern UI/UX, reliable testing solutions, and scalable web & mobile
                applications.
              </p>
              <div className="border-t border-white/[0.06] pt-5">
                <div className="flex gap-4">
                  <div
                    className="mt-1 w-px shrink-0 self-stretch min-h-[4.5rem] bg-gradient-to-b from-accentCyan/75 via-accentBlue/35 to-transparent"
                    aria-hidden
                  />
                  <FooterFounderBlock email={EMAIL} />
                </div>
              </div>
              <p className="text-xs tracking-wide text-slate-500 sm:text-sm">
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
