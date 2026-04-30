import { BrandLogo } from "@/components/brand-logo";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

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
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accentCyan/85">
                      Founded by
                    </p>
                    <p className="mt-2.5 bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-xl font-semibold tracking-[-0.03em] text-transparent sm:text-2xl">
                      Maddy
                    </p>
                    <p className="mt-2 max-w-md text-[11px] font-medium leading-relaxed tracking-wide text-slate-500 sm:text-xs">
                      Founder & QA Engineer <span className="text-slate-600">·</span> UI/UX, Web & App
                      Developer
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium tracking-wide text-slate-400 transition hover:border-accentCyan/35 hover:bg-accentCyan/[0.06] hover:text-accentCyan sm:text-xs"
                    >
                      <Mail className="h-3.5 w-3.5" aria-hidden />
                      {EMAIL}
                    </a>
                  </div>
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
