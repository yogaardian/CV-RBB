import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { COMPANY } from "@/lib/site-data";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-[var(--primary)] text-white font-bold">R</div>
            <div className="font-display font-semibold">{COMPANY.name}</div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">{t("footer.tagline")}</p>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>{COMPANY.address}</span></div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><span>{COMPANY.phone}</span></div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><span>{COMPANY.email}</span></div>
          </div>
        </div>
        <div>
          <div className="font-display font-semibold mb-3 text-sm">{t("nav.about")}</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/tentang-kami" className="hover:text-[var(--primary)] transition-colors">{t("nav.about")}</Link></li>
            <li><Link to="/layanan" className="hover:text-[var(--primary)] transition-colors">{t("nav.services")}</Link></li>
            <li><Link to="/produk" className="hover:text-[var(--primary)] transition-colors">{t("nav.products")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display font-semibold mb-3 text-sm">Link</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/proyek-legalitas" className="hover:text-[var(--primary)] transition-colors">{t("nav.projects")}</Link></li>
            <li><Link to="/klien-kontak" className="hover:text-[var(--primary)] transition-colors">{t("nav.contact")}</Link></li>
            <li><Link to="/artikel" className="hover:text-[var(--primary)] transition-colors">{t("nav.articles")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} {COMPANY.name}. {t("footer.rights")}</div>
          <div>Ngampel, Madiun · Jawa Timur</div>
        </div>
      </div>
    </footer>
  );
}
