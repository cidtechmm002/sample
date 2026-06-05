import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { TIMELINE } from "@/lib/data";
import { X, Award } from "lucide-react";

const CERTIFICATES = [
  {
    title: "ISAPS Diplomate",
    year: "2020",
    img: "https://images.unsplash.com/photo-1632571401005-458e9d244591?w=900&q=80",
  },
  {
    title: "Seoul National University",
    year: "2017",
    img: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=900&q=80",
  },
  {
    title: "Korean Aesthetic Surgery",
    year: "2018",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
  },
  {
    title: "JK Plastic Surgery Fellow",
    year: "2018",
    img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=80",
  },
];

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Doctors — SMILE Plastic Surgery" },
      {
        name: "description",
        content:
          "Meet our board-certified aesthetic surgeons trained in Korea and internationally certified.",
      },
      { property: "og:title", content: "Our Doctors — SMILE Plastic Surgery" },
      {
        property: "og:description",
        content: "Board-certified surgeons trained in Korea and certified by ISAPS.",
      },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="relative grid min-h-[100svh] items-center bg-[color:var(--beige)] pt-32 md:grid-cols-12">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:col-span-6 md:px-10 md:py-32">
          <Reveal>
            <p className="text-eyebrow text-[color:var(--gold-dark)]">Lead Surgeon · Founder</p>
            <h1 className="mt-8 font-display text-6xl leading-[0.95] md:text-8xl">
              SMILE
              <br />
              <em className="font-serif-display text-[color:var(--gold-dark)]">Aesthetic Team</em>
            </h1>
            <p className="mt-10 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]">
              A surgeon who believes aesthetic refinement is, above all, an act of listening. Our
              specialists have performed over three thousand procedures with a quiet, exacting hand
              — shaped by training in Seoul and a deep care for her patients.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 max-w-md">
              <Field label="Position" value="Founder & Lead Surgeon" />
              <Field label="Experience" value="8+ Years" />
              <Field label="Specialization" value="Facial Plastic Surgery" />
              <Field label="Certification" value="ISAPS Diplomate" />
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative h-[60svh] md:col-span-6 md:h-[100svh]">
          <img
            src={doctorPortrait}
            alt="SMILE Plastic Surgery doctor"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-lg glass-dark p-6 text-[color:var(--pearl)] md:bottom-10 md:left-10 md:right-10">
            <p className="font-serif-display text-lg italic">
              "Beauty, when honored with restraint, becomes timeless."
            </p>
            <p className="mt-3 text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-light)]">
              — SMILE Plastic Surgery
            </p>
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-[1100px] px-6 md:px-10">
          <Reveal>
            <p className="text-eyebrow text-[color:var(--gold-dark)]">Career Timeline</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
              A decade in the craft.
            </h2>
          </Reveal>

          <ol className="mt-16 relative border-l border-[color:var(--border)] pl-10 md:pl-16">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1}>
                <li className="relative pb-14 last:pb-0">
                  <span className="absolute -left-[44px] md:-left-[68px] top-1 flex h-3 w-3 items-center justify-center">
                    <span className="absolute h-3 w-3 rounded-full border border-[color:var(--gold)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold-dark)]" />
                  </span>
                  <p className="font-display text-4xl text-[color:var(--gold-dark)]">{t.year}</p>
                  <p className="mt-2 font-display text-xl">{t.title}</p>
                  <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">{t.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Certificates */}
      <section className="bg-[color:var(--beige)] py-28 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="text-eyebrow text-[color:var(--gold-dark)]">Credentials</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
              Certificates & Honours.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <button
                  onClick={() => setLightbox(i)}
                  className="shine-on-hover group block w-full overflow-hidden bg-[color:var(--card)] text-left"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-dark)]">
                      {c.year}
                    </p>
                    <p className="mt-2 font-display text-lg">{c.title}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Counter */}
      <section className="bg-[color:var(--charcoal)] py-28 text-[color:var(--pearl)] md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-4 md:px-10">
          {[
            { value: 3000, suffix: "+", label: "Procedures" },
            { value: 14, suffix: "", label: "Awards" },
            { value: 8, suffix: "+", label: "Years Practice" },
            { value: 12, suffix: "", label: "Publications" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <Award className="mx-auto text-[color:var(--gold)]" size={28} />
              <p className="mt-6 font-display text-6xl text-[color:var(--gold-light)]">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-[color:var(--pearl)]/60">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[color:var(--charcoal)]/95 p-6 animate-fade-up"
        >
          <button className="absolute right-6 top-6 text-[color:var(--pearl)]" aria-label="Close">
            <X size={24} />
          </button>
          <img
            src={CERTIFICATES[lightbox].img}
            alt={CERTIFICATES[lightbox].title}
            className="max-h-[85vh] w-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--muted-foreground)]">
        {label}
      </dt>
      <dd className="mt-2 font-display text-lg">{value}</dd>
    </div>
  );
}
