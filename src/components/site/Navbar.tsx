import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/tentang-kami", key: "nav.about" },
  { to: "/layanan", key: "nav.services" },
  { to: "/produk", key: "nav.products" },
  { to: "/proyek-legalitas", key: "nav.projects" },
  { to: "/klien-kontak", key: "nav.contact" },
  { to: "/artikel", key: "nav.articles" },
] as const;

export function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) => pathname === to || (to !== "/" && pathname.startsWith(to));

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/30 bg-transparent backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/RBB.jpeg" alt="Logo RBB" className="h-9 w-9 rounded-md object-cover transition-transform group-hover:scale-105" />
          <div className="leading-tight">
            <div className="font-display text-sm font-semibold text-foreground">CV. Restu Bumi Bersama</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Kontraktor & Supplier</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((it) => {
            const active = isActive(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${active ? "text-[var(--primary)]" : "text-foreground/80 hover:text-[var(--primary)]"}`}
              >
                {t(it.key)}
                <span className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--primary)] transition-transform duration-200 ${active ? "scale-x-100" : "scale-x-0"}`} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center rounded-full border border-border overflow-hidden text-xs">
            <button
              onClick={() => setLang("id")}
              className={`px-2.5 py-1 font-medium transition-colors ${lang === "id" ? "bg-[var(--primary)] text-white" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Bahasa Indonesia"
            >ID</button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 font-medium transition-colors ${lang === "en" ? "bg-[var(--primary)] text-white" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="English"
            >EN</button>
          </div>
          <button
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/30 bg-transparent/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            {navItems.map((it) => {
              const active = isActive(it.to);
              return (
                <Link
                  key={it.to}
                  to={it.to}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 text-sm font-medium border-b border-border/60 ${active ? "text-[var(--primary)]" : "text-foreground/80"}`}
                >{t(it.key)}</Link>
              );
            })}
            <div className="mt-3 flex items-center gap-2">
              <button onClick={() => setLang("id")} className={`flex-1 py-2 rounded-md text-xs font-medium ${lang === "id" ? "bg-[var(--primary)] text-white" : "border border-border"}`}>Bahasa Indonesia</button>
              <button onClick={() => setLang("en")} className={`flex-1 py-2 rounded-md text-xs font-medium ${lang === "en" ? "bg-[var(--primary)] text-white" : "border border-border"}`}>English</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
