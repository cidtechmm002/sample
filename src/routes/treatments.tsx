import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TREATMENTS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments — SMILE Plastic Surgery" },
      {
        name: "description",
        content:
          "Rhinoplasty, double eyelid, face contouring, breast surgery, liposuction and skin rejuvenation in Yangon.",
      },
      { property: "og:title", content: "Treatments — SMILE Plastic Surgery" },
      {
        property: "og:description",
        content: "Surgical and non-surgical aesthetic treatments at SMILE Plastic Surgery.",
      },
    ],
  }),
  component: TreatmentsPage,
});

const CATEGORIES = ["All", "Face", "Eyes", "Nose", "Body", "Skin"] as const;

function TreatmentsPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const list = TREATMENTS.filter((t) => cat === "All" || t.category === cat);

  return (
    <>
      <section className="relative flex h-[60svh] items-end overflow-hidden bg-[color:var(--charcoal)] pt-28 text-[color:var(--pearl)]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.86_0.06_80/0.18),transparent_60%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <p className="text-eyebrow text-[color:var(--gold-light)]">Our Treatments</p>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-8xl">
              The full{" "}
              <em className="font-serif-display text-[color:var(--gold-light)]">
                menu of refinement.
              </em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 border-y border-[color:var(--border)] bg-[color:var(--pearl)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-6 py-4 scrollbar-hide md:px-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`whitespace-nowrap rounded-full border px-5 py-2 text-[11px] tracking-[0.24em] uppercase transition-all ${
                cat === c
                  ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--pearl)]"
                  : "border-[color:var(--border)] text-[color:var(--muted-foreground)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold-dark)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] space-y-24 px-6 md:px-10">
          {list.map((t, i) => (
            <Reveal key={t.slug}>
              <article id={t.slug} className="grid gap-10 md:grid-cols-12">
                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="group relative overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="md:col-span-5 md:py-12">
                  <p className="text-eyebrow text-[color:var(--gold-dark)]">
                    {t.category} · {t.duration}
                  </p>
                  <h2 className="mt-4 font-display text-5xl leading-[1.05]">{t.name}</h2>
                  <p className="mt-2 font-serif-display text-xl italic text-[color:var(--muted-foreground)]">
                    {t.myanmar}
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-[color:var(--muted-foreground)]">
                    {t.blurb}
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-4 border-y border-[color:var(--border)] py-6">
                    <Meta label="Duration" value={t.duration} />
                    <Meta label="Recovery" value={t.recovery} />
                    <Meta label="From" value={t.price} />
                  </div>

                  <Accordion title="Procedure">
                    <p>{t.procedure}</p>
                  </Accordion>
                  <Accordion title="Benefits">
                    <ul className="space-y-2">
                      {t.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-2 h-px w-4 bg-[color:var(--gold)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Accordion>
                  <Accordion title="FAQ">
                    <div className="space-y-4">
                      {t.faq.map((f) => (
                        <div key={f.q}>
                          <p className="font-medium">{f.q}</p>
                          <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">{f.a}</p>
                        </div>
                      ))}
                    </div>
                  </Accordion>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--muted-foreground)]">
        {label}
      </p>
      <p className="mt-2 font-display text-lg text-[color:var(--charcoal)]">{value}</p>
    </div>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[color:var(--border)]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left text-xs tracking-[0.24em] uppercase"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180 text-[color:var(--gold-dark)]" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden text-sm leading-relaxed text-[color:var(--muted-foreground)]">
          {children}
        </div>
      </div>
    </div>
  );
}
