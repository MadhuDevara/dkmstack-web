import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const EMAIL = "contact@dkmstack.com";
const ALIAS_EMAILS = ["info@dkmstack.com", "contact@dkmstack.com", "support@dkmstack.com"];
const LINKEDIN_HREF = "#";

export function ContactDirectCard() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accentBlue/40 via-accentPurple/25 to-accentCyan/30 opacity-80 blur-sm"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/80 px-6 py-8 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_64px_-12px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent),radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(139,92,246,0.08),transparent)]"
          aria-hidden
        />
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accentCyan/90">
            Direct line
          </p>
          <h3 className="mt-2 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-xl font-semibold tracking-tight text-transparent sm:text-2xl">
            Prefer to reach out directly?
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
            Use the channels below — we read every message and respond personally.
          </p>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-500">
            Alias emails: {ALIAS_EMAILS.join(" | ")}
          </p>

          <div className="mt-8 space-y-2.5">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 transition duration-300 hover:border-accentBlue/35 hover:bg-accentBlue/[0.06] hover:shadow-[0_0_24px_-4px_rgba(59,130,246,0.35)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accentBlue/25 to-accentPurple/20 text-accentCyan ring-1 ring-white/10 transition group-hover:from-accentBlue/35 group-hover:to-accentPurple/30">
                <Mail className="h-[18px] w-[18px]" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  Email
                </span>
                <span className="mt-0.5 block truncate text-sm font-medium text-white">{EMAIL}</span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-slate-500 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-accentCyan"
                aria-hidden
              />
            </a>

            <Link
              href={LINKEDIN_HREF}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 transition duration-300 hover:border-accentPurple/35 hover:bg-accentPurple/[0.06] hover:shadow-[0_0_24px_-4px_rgba(139,92,246,0.3)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0A66C2]/30 to-accentPurple/20 text-white ring-1 ring-white/10 transition group-hover:from-[#0A66C2]/45 group-hover:to-accentPurple/35">
                <Linkedin className="h-[18px] w-[18px]" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  Professional
                </span>
                <span className="mt-0.5 block text-sm font-medium text-white">LinkedIn</span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-slate-500 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-accentCyan"
                aria-hidden
              />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 border-t border-white/[0.06] pt-6">
            <span className="h-1 w-1 rounded-full bg-accentCyan/60" aria-hidden />
            <p className="text-center text-xs tracking-wide text-slate-500 sm:text-sm">
              We usually reply within <span className="text-slate-300">1–2 business days</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
