export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-container flex flex-col gap-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 DKMStack. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="transition hover:text-accentBlue">
            LinkedIn
          </a>
          <a href="#" className="transition hover:text-accentBlue">
            GitHub
          </a>
          <a href="#" className="transition hover:text-accentBlue">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
