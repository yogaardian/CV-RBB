import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BackHomeBar, Card, PageHero, Reveal } from "@/components/site/ui";
import { useI18n } from "@/lib/i18n";
import { articles, pick } from "@/lib/site-data";
import { useMemo, useState } from "react";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/artikel")({
  head: () => ({
    meta: [
      { title: "Artikel & Berita — CV. Restu Bumi Bersama" },
      { name: "description", content: "Tips konstruksi, update proyek, dan berita perusahaan dari CV. Restu Bumi Bersama." },
      { property: "og:title", content: "Artikel & Berita — CV. Restu Bumi Bersama" },
      { property: "og:description", content: "Wawasan seputar konstruksi dan material bangunan." },
    ],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const { t, lang } = useI18n();
  const categories = useMemo(() => Array.from(new Set(articles.map((a) => pick(a.category, lang)))), [lang]);
  const [cat, setCat] = useState("all");
  const filtered = cat === "all" ? articles : articles.filter((a) => pick(a.category, lang) === cat);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("nav.articles")}
        title={t("articles.title")}
        subtitle="Wawasan seputar konstruksi, tips memilih material, dan update proyek terbaru."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=70"
      />
      <BackHomeBar label={t("nav.articles")} />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          <FilterChip active={cat === "all"} onClick={() => setCat("all")}>{t("products.all")}</FilterChip>
          {categories.map((c) => (
            <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</FilterChip>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 0.08}>
              <Link to="/artikel/$slug" params={{ slug: a.slug }} className="block h-full">
                <Card className="overflow-hidden h-full">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img src={a.img} alt={pick(a.title, lang)} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-[var(--primary)] font-semibold uppercase tracking-widest">{pick(a.category, lang)}</span>
                      <span className="flex items-center gap-1 text-muted-foreground"><Calendar className="h-3 w-3" />{a.date}</span>
                    </div>
                    <h3 className="mt-3 font-display font-semibold text-lg leading-snug">{pick(a.title, lang)}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{pick(a.excerpt, lang)}</p>
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${active ? "bg-[var(--primary)] text-white border-[var(--primary)]" : "bg-white text-foreground border-border hover:border-[var(--primary)] hover:text-[var(--primary)]"}`}>{children}</button>
  );
}
