import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroClinic from "@/assets/hero-clinic.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import { CLINIC, STATS, TREATMENTS, TESTIMONIALS } from "@/lib/data";
import { Reveal, WordReveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMILE Plastic Surgery — Luxury Medical Aesthetics" },
      { name: "description", content: "An atelier of refined aesthetic medicine. Rhinoplasty, contouring, and skin rejuvenation by board-certified surgeons in Yangon." },
      { property: "og:title", content: "SMILE Plastic Surgery — Luxury Medical Aesthetics" },
      { property: "og:description", content: "An atelier of refined aesthetic medicine in Yangon, Myanmar." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <SignatureTreatments />
      <DoctorHighlight />
      <BeforeAfterShowcase />
      <Testimonials />
      <Gallery />
      <CTA />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-[color:var(--charcoal)]">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroClinic}
          alt="Clinic interior"
          className="animate-image-breathe h-[120%] w-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--charcoal)]/40 via-[color:var(--charcoal)]/30 to-[color:var(--charcoal)]/90" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-20 pt-36 md:px-10 md:pb-32">
        <div className="flex items-center gap-3 text-[color:var(--gold)]">
          <Sparkles size={14} />
          <p className="text-eyebrow">Est. 2017 · Yangon</p>
        </div>

        <div className="max-w-5xl text-[color:var(--pearl)]">
          <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight">
            <WordReveal text="Elevating Beauty" />
            <br />
            <span className="italic font-serif-display text-[color:var(--gold-light)]">
              <WordReveal text="with precision & care." delay={0.3} />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-[color:var(--pearl)]/70 md:text-lg"
          >
            A private atelier of aesthetic medicine — where surgical artistry, ethical care
            and Korean-trained expertise meet the elegance you deserve.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <Link
            to="/contact"
            className="shine-on-hover group inline-flex items-center gap-4 rounded-full bg-[color:var(--gold)] px-8 py-4 text-xs tracking-[0.3em] uppercase text-[color:var(--charcoal)] transition-all hover:bg-[color:var(--pearl)]"
          >
            Book Consultation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/treatments"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[color:var(--pearl)]"
          >
            <span className="underline-grow">Explore Treatments</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating glass stat */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
      >
        <div className="glass rounded-2xl p-8 text-[color:var(--pearl)]">
          <p className="text-eyebrow text-[color:var(--gold-light)]">Trusted</p>
          <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-6">
            {STATS.slice(0, 4).map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-[color:var(--gold-light)]">{s.value}</p>
                <p className="mt-1 text-[10px] tracking-[0.2em] uppercase text-[color:var(--pearl)]/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-[color:var(--pearl)]/60">
        Scroll
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--beige)] py-20 lg:hidden">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-10">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <p className="font-display text-4xl text-[color:var(--gold-dark)]">{s.value}</p>
            <p className="mt-2 text-[10px] tracking-[0.24em] uppercase text-[color:var(--muted-foreground)]">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SignatureTreatments() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-eyebrow text-[color:var(--gold-dark)]">Signature Treatments</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
                Procedures crafted with <em className="font-serif-display text-[color:var(--gold-dark)]">surgical artistry.</em>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <p className="max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]">
                Each procedure is tailored to your anatomy and aspirations — performed in a private surgical
                suite designed for comfort, discretion and care.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.08}>
              <Link
                to="/treatments"
                hash={t.slug}
                className="shine-on-hover group block overflow-hidden bg-[color:var(--card)] luxe-shadow"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-[color:var(--gold)]/0 p-6 transition-all duration-500 group-hover:border-[color:var(--gold)]">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold-light)]">{t.category}</p>
                    <h3 className="mt-2 font-display text-3xl text-[color:var(--pearl)]">{t.name}</h3>
                    <p className="mt-1 text-xs text-[color:var(--pearl)]/70">{t.myanmar}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-6 py-5">
                  <span className="text-xs text-[color:var(--muted-foreground)]">{t.duration} · {t.recovery}</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-[color:var(--gold-dark)] group-hover:underline">Discover →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorHighlight() {
  return (
    <section className="bg-[color:var(--beige)] py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <p className="text-eyebrow text-[color:var(--gold-dark)]">Meet Our Lead Surgeon</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
            Dr. Smile <em className="font-serif-display text-[color:var(--gold-dark)]">Aesthetic Team</em>
          </h2>
          <p className="mt-3 text-sm tracking-[0.24em] uppercase text-[color:var(--muted-foreground)]">
            Founder · Plastic & Aesthetic Surgeon
          </p>
          <p className="mt-8 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]">
            Korean-trained and internationally certified in aesthetic surgery, our lead specialists bring
            meticulous experience in facial and body refinement.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-y border-[color:var(--border)] py-8">
            <div>
              <p className="font-display text-3xl text-[color:var(--gold-dark)]">
                <Counter to={3000} suffix="+" />
              </p>
              <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">Procedures</p>
            </div>
            <div>
              <p className="font-display text-3xl text-[color:var(--gold-dark)]"><Counter to={8} suffix="+" /></p>
              <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">Years</p>
            </div>
            <div>
              <p className="font-display text-3xl text-[color:var(--gold-dark)]"><Counter to={14} /></p>
              <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">Awards</p>
            </div>
          </div>

          <Link to="/doctors" className="mt-10 inline-flex items-center gap-3 border-b border-[color:var(--charcoal)] pb-2 text-xs tracking-[0.3em] uppercase">
            Full Profile →
          </Link>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-7">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 border border-[color:var(--gold)]/40" />
            <div className="animate-reveal-line absolute -bottom-6 left-10 h-px w-2/3 bg-[color:var(--gold)]" />
            <img src={doctorPortrait} alt="SMILE Plastic Surgery doctor" loading="lazy" className="w-full object-cover" width={1024} height={1280} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BeforeAfterShowcase() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-eyebrow text-[color:var(--gold-dark)]">Before & After</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              Real results, <em className="font-serif-display text-[color:var(--gold-dark)]">honestly shown.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]">
              Drag the slider to compare. All images shared with consent — no retouching, only refinement.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-16">
          <BeforeAfter
            before={beforeAfter1}
            after={beforeAfter1}
            alt="Before and after"
            className="aspect-[16/10] luxe-shadow"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--charcoal)] py-28 text-[color:var(--pearl)] md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-eyebrow text-[color:var(--gold-light)]">Words from our patients</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
              <em className="font-serif-display text-[color:var(--gold-light)]">"</em> Stories of confidence,
              softly told.
            </h2>
          </Reveal>
        </div>
      </div>
      <div className="mt-16 overflow-hidden">
        <div className="marquee flex w-max gap-6 px-6">
          {items.map((t, i) => (
            <article key={i} className="w-[340px] shrink-0 rounded-lg border border-[color:var(--pearl)]/10 bg-[color:var(--pearl)]/5 p-8 md:w-[420px]">
              <div className="flex items-center gap-4">
                <img src={testimonial1} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-display text-lg">{t.name}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-[color:var(--pearl)]/50">{t.role}</p>
                </div>
              </div>
              <p className="mt-6 font-serif-display text-xl italic leading-relaxed text-[color:var(--pearl)]/90">
                "{t.quote}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <Reveal>
            <p className="text-eyebrow text-[color:var(--gold-dark)]">Atelier Gallery</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              A moodboard of <em className="font-serif-display text-[color:var(--gold-dark)]">refined moments.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link to="/gallery" className="inline-flex items-center gap-3 border-b border-[color:var(--charcoal)] pb-2 text-xs tracking-[0.3em] uppercase">
              View Gallery →
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {[
            { src: gallery1, span: "row-span-2" },
            { src: gallery2, span: "" },
            { src: gallery3, span: "row-span-2" },
            { src: gallery4, span: "" },
            { src: testimonial1, span: "" },
            { src: gallery2, span: "" },
          ].map((g, i) => (
            <Reveal key={i} delay={i * 0.06} className={g.span}>
              <div className="group relative h-full w-full overflow-hidden">
                <img src={g.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-[color:var(--charcoal)]/0 transition-colors duration-500 group-hover:bg-[color:var(--charcoal)]/30" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--beige)] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <Reveal>
          <p className="text-eyebrow text-[color:var(--gold-dark)]">Begin Your Journey</p>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            A private consultation,<br />
            <em className="font-serif-display text-[color:var(--gold-dark)]">tailored entirely to you.</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[color:var(--muted-foreground)]">
            Visit {CLINIC.name} for a one-on-one consultation with our lead surgeon.
            Discretion and elegance, in every detail.
          </p>
            <Link
            to="/contact"
              className="shine-on-hover mt-12 inline-flex items-center gap-4 rounded-full bg-[color:var(--charcoal)] px-10 py-5 text-xs tracking-[0.3em] uppercase text-[color:var(--pearl)] transition-transform hover:scale-105"
          >
            Reserve a private visit
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
