import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BackHomeBar, Button, Card, PageHero, Reveal } from "@/components/site/ui";
import { useI18n } from "@/lib/i18n";
import { pick, services, workSteps } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/layanan")({
  head: () => ({
    meta: [
      { title: "Layanan — CV. Restu Bumi Bersama" },
      { name: "description", content: "Konstruksi bangunan, renovasi & interior, pekerjaan sipil, dan mekanikal elektrikal oleh CV. Restu Bumi Bersama." },
      { property: "og:title", content: "Layanan — CV. Restu Bumi Bersama" },
      { property: "og:description", content: "Solusi konstruksi terintegrasi dari perencanaan hingga serah terima." },
    ],
  }),
  component: LayananPage,
});

function LayananPage() {
  const { t, lang } = useI18n();
  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("nav.services")}
        title={t("services.title")}
        subtitle={t("section.servicesSub")}
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=70"
      />
      <BackHomeBar label={t("nav.services")} />

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-16 grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.08}>
            <Card className="overflow-hidden h-full flex flex-col md:flex-row">
              <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                <img src={`https://images.unsplash.com/photo-${["1503387762-592deb58ef4e", "1497366216548-37526070297c", "1565608087341-404b25492fee", "1541888946425-d81bb19240f5"][i]}?w=800&q=70`} alt={pick(s.title, lang)} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6 flex-1">
                <div className="text-2xl">{s.icon}</div>
                <h3 className="mt-3 font-display text-xl font-semibold">{pick(s.title, lang)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{pick(s.desc, lang)}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </section>

      <section className="bg-[var(--surface)] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-20">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">{t("services.stepsTitle")}</h2>
          </Reveal>
          <div className="mt-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
            <div className="grid gap-6 md:grid-cols-2 md:gap-y-10">
              {workSteps.map((step, i) => (
                <Reveal key={i} delay={i * 0.05} className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div className="relative pl-12 md:pl-0">
                    <div className={`absolute left-0 top-0 md:top-2 h-8 w-8 rounded-full bg-[var(--primary)] text-white grid place-items-center font-bold text-sm shadow-lg ${i % 2 === 0 ? "md:left-auto md:-right-4" : "md:-left-4"}`}>
                      {i + 1}
                    </div>
                    <div className="bg-white border border-border rounded-lg p-5">
                      <h3 className="font-display font-semibold">{pick(step.title, lang)}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{pick(step.desc, lang)}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 md:px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Siap memulai proyek Anda?</h2>
          <p className="mt-3 text-muted-foreground">Konsultasi gratis dan dapatkan penawaran terbaik dari tim kami.</p>
          <div className="mt-6">
            <Button to="/klien-kontak" size="lg">{t("cta.quote")} <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
