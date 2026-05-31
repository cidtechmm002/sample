import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import { Play } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SMILE Plastic Surgery" },
      { name: "description", content: "Before & after, video results and real patient stories from SMILE Plastic Surgery." },
      { property: "og:title", content: "Gallery — Real Results" },
      { property: "og:description", content: "Real, unretouched aesthetic results from our patients." },
    ],
  }),
  component: GalleryPage,
});

const CATEGORIES = ["All", "Nose", "Eyes", "Face", "Body", "Skin"] as const;

const RESULTS = [
  { cat: "Nose", img: beforeAfter1, label: "Rhinoplasty" },
  { cat: "Eyes", img: beforeAfter1, label: "Double Eyelid" },
  { cat: "Face", img: beforeAfter1, label: "Face Contour" },
  { cat: "Body", img: beforeAfter1, label: "Liposuction" },
  { cat: "Skin", img: beforeAfter1, label: "Rejuvenation" },
  { cat: "Face", img: beforeAfter1, label: "Lift" },
];

const REELS = [gallery1, gallery2, gallery3, gallery4, testimonial1];

const STORIES = [
  { name: "Hnin Ei", quote: "I was nervous about the consultation, but the team listened so carefully.", img: testimonial1 },
  { name: "Phyu Phyu", quote: "Truly the most professional clinic I have visited.", img: gallery2 },
  { name: "May Thu", quote: "Travelled from Singapore — worth every mile.", img: gallery3 },
];

function GalleryPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const list = RESULTS.filter((r) => cat === "All" || r.cat === cat);

  return (
    <>
      <section className="flex min-h-[60svh] items-end bg-[color:var(--charcoal)] pt-32 text-[color:var(--pearl)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <p className="text-eyebrow text-[color:var(--gold-light)]">Gallery</p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
              The proof, <em className="font-serif-display text-[color:var(--gold-light)]">unretouched.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Hero before/after */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <Reveal>
            <BeforeAfter before={beforeAfter1} after={beforeAfter1} className="aspect-[16/10] luxe-shadow" />
          </Reveal>
        </div>
      </section>

      {/* Filter + results */}
      <section className="border-t border-[color:var(--border)] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="text-eyebrow text-[color:var(--gold-dark)]">Before & After</p>
              <h2 className="mt-6 font-display text-4xl md:text-5xl">Premium comparisons</h2>
            </Reveal>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full border px-5 py-2 text-[11px] tracking-[0.24em] uppercase transition-all ${
                    cat === c
                      ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--pearl)]"
                      : "border-[color:var(--border)] text-[color:var(--muted-foreground)] hover:border-[color:var(--gold)]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {list.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div>
                  <BeforeAfter before={r.img} after={r.img} className="aspect-[4/3]" />
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-display text-lg">{r.label}</p>
                    <p className="text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-dark)]">{r.cat}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reels */}
      <section className="bg-[color:var(--beige)] py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="text-eyebrow text-[color:var(--gold-dark)]">Video Results</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">In motion.</h2>
          </Reveal>

          <div className="mt-12 flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {REELS.map((src, i) => (
              <div key={i} className="group relative aspect-[9/16] w-[260px] shrink-0 snap-start overflow-hidden md:w-[300px]">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--gold)] bg-[color:var(--charcoal)]/60 text-[color:var(--gold)] backdrop-blur">
                    <Play size={18} />
                  </span>
                </div>
                <p className="absolute bottom-4 left-4 text-xs tracking-[0.2em] uppercase text-[color:var(--pearl)]">Reel · {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <p className="text-eyebrow text-[color:var(--gold-dark)]">Real Patient Stories</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">In their own words.</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STORIES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1}>
                <article className="group h-full overflow-hidden border border-[color:var(--border)] bg-[color:var(--card)] luxe-shadow">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                  </div>
                  <div className="p-8">
                    <p className="font-serif-display text-xl italic leading-relaxed">"{s.quote}"</p>
                    <p className="mt-6 text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold-dark)]">— {s.name}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
