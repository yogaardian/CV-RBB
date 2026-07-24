import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BackHomeBar, Card, PageHero, Reveal } from "@/components/site/ui";
import { useI18n } from "@/lib/i18n";
import { advantages, org, pick } from "@/lib/site-data";

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — CV. Restu Bumi Bersama" },
      { name: "description", content: "Sejarah, visi misi, dan struktur organisasi CV. Restu Bumi Bersama — kontraktor & supplier bahan bangunan sejak 2012." },
      { property: "og:title", content: "Tentang Kami — CV. Restu Bumi Bersama" },
      { property: "og:description", content: "Kontraktor & supplier material bangunan sejak 2012 di Madiun." },
    ],
  }),
  component: TentangPage,
});

function TentangPage() {
  const { t, lang } = useI18n();
  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("nav.about")}
        title={t("about.title")}
        subtitle={t("about.history")}
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=70"
      />
      <BackHomeBar label={t("nav.about")} />

      <section className="mx-auto max-w-4xl px-4 md:px-6 py-16 space-y-5 text-base leading-relaxed text-foreground/90">
        <Reveal><p>{t("about.history")}</p></Reveal>
        <Reveal delay={0.05}><p>{t("about.history2")}</p></Reveal>
        <Reveal delay={0.1}><p>{t("about.history3")}</p></Reveal>
      </section>

      <section className="bg-[var(--surface)] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="p-8 h-full">
              <div className="text-xs uppercase tracking-widest text-[var(--primary)] font-semibold">01</div>
              <h3 className="mt-3 font-display text-2xl font-semibold">{t("about.visionTitle")}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t("about.vision")}</p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="p-8 h-full">
              <div className="text-xs uppercase tracking-widest text-[var(--primary)] font-semibold">02</div>
              <h3 className="mt-3 font-display text-2xl font-semibold">{t("about.missionTitle")}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t("about.mission")}</p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-20">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center">{t("about.orgTitle")}</h2>
        </Reveal>
        <div className="mt-14 flex flex-col items-center gap-6">
          <Reveal>
            <OrgCard name={org[0].name} role={pick(org[0].role, lang)} highlight />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 w-full max-w-md">
            <Reveal delay={0.1}><OrgCard name={org[1].name} role={pick(org[1].role, lang)} /></Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            <Reveal delay={0.15}><OrgCard name={org[2].name} role={pick(org[2].role, lang)} /></Reveal>
            <Reveal delay={0.2}><OrgCard name={org[3].name} role={pick(org[3].role, lang)} /></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-20">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">{t("about.advTitle")}</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <Card className="p-6 h-full">
                  <div className="h-10 w-10 grid place-items-center rounded-md bg-[var(--primary)]/10 text-[var(--primary)] font-bold">{a.icon}</div>
                  <h3 className="mt-4 font-display font-semibold">{pick(a.title, lang)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{pick(a.desc, lang)}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function OrgCard({ name, role, highlight }: { name: string; role: string; highlight?: boolean }) {
  return (
    <div className={`text-center rounded-lg border p-6 min-w-[240px] transition-all duration-200 hover:-translate-y-1 ${highlight ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg" : "bg-white border-border"}`}>
      <div className={`mx-auto h-14 w-14 rounded-full grid place-items-center font-display font-semibold text-lg ${highlight ? "bg-white/20 text-white" : "bg-[var(--surface)] text-foreground"}`}>
        {name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
      </div>
      <div className="mt-3 font-display font-semibold">{name}</div>
      <div className={`mt-1 text-xs uppercase tracking-widest ${highlight ? "text-white/80" : "text-muted-foreground"}`}>{role}</div>
    </div>
  );
}
