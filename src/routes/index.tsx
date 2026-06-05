import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Award, ShieldCheck, CheckCircle2, Heart } from "lucide-react";
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
      {
        name: "description",
        content:
          "An atelier of refined aesthetic medicine. Rhinoplasty, contouring, and skin rejuvenation by board-certified surgeons in Yangon.",
      },
      { property: "og:title", content: "SMILE Plastic Surgery — Luxury Medical Aesthetics" },
      {
        property: "og:description",
        content: "An atelier of refined aesthetic medicine in Yangon, Myanmar.",
      },
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
      <TrustSection />
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
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-[color:var(--dark-forest)]"
    >
      {/* Gold Top Border Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[color:var(--gold)] z-30" />

      {/* Brand Watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none opacity-[0.035]">
        <span className="font-display text-[22vw] font-bold tracking-widest text-[color:var(--gold)] uppercase select-none">
          SMILE
        </span>
      </div>

      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={heroClinic}
          alt="Clinic interior"
          className="animate-image-breathe h-[120%] w-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--dark-forest)]/40 via-[color:var(--dark-forest)]/30 to-[color:var(--dark-forest)]/90" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-20 pt-36 md:px-10 md:pb-32"
      >
        <div className="flex items-center gap-3 text-[color:var(--gold)]">
          <Sparkles size={14} className="animate-pulse-soft" />
          <p className="text-eyebrow font-semibold tracking-[0.4em]">SIGNATURE BEAUTY EXPERIENCE</p>
        </div>

        <div className="max-w-5xl text-white">
          {/* Fine Gold Top Accent Line */}
          <div className="w-16 h-[2px] bg-[color:var(--gold)] mb-6 shadow-[0_0_8px_rgba(200,164,106,0.5)]" />

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.5rem,7.5vw,7.2rem)] leading-[0.95] tracking-tight font-extralight text-white"
          >
            Where Artistry Meets
            <br />
            <span className="italic font-serif-display font-medium text-[color:var(--gold)]">
              Aesthetic Excellence.
            </span>
          </motion.h1>

          {/* Luxury Subtitle Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            <span className="rounded-full bg-white/5 border border-[color:var(--gold)]/40 px-3.5 py-1 text-[9px] tracking-[0.2em] uppercase text-[color:var(--gold)] font-medium backdrop-blur-md">
              ✓ Korean Standard
            </span>
            <span className="rounded-full bg-white/5 border border-[color:var(--gold)]/40 px-3.5 py-1 text-[9px] tracking-[0.2em] uppercase text-[color:var(--gold)] font-medium backdrop-blur-md">
              ✓ Seoul Trained
            </span>
            <span className="rounded-full bg-white/5 border border-[color:var(--gold)]/40 px-3.5 py-1 text-[9px] tracking-[0.2em] uppercase text-[color:var(--gold)] font-medium backdrop-blur-md">
              ✓ Fellowship Certified
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
          >
            A private atelier of aesthetic medicine — where surgical artistry, ethical care and
            Korean-trained expertise meet the elegance you deserve.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          <Link
            to="/contact"
            className="shine-on-hover group inline-flex items-center gap-4 rounded-full bg-[color:var(--gold)] px-8 py-4 text-xs tracking-[0.3em] uppercase text-[color:var(--dark-forest)] font-medium transition-all hover:bg-white hover:text-[color:var(--dark-forest)] hover:scale-105 duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(200,164,106,0.35)]"
          >
            Book Consultation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/treatments"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-white hover:text-[color:var(--gold)] transition-colors hover:scale-105 duration-300"
          >
            <span className="underline-grow">Explore Treatments</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating stats card (Option 3 - Unified Trust Section) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
      >
        <div className="bg-[color:var(--emerald)]/90 backdrop-blur-md border border-[color:var(--gold)]/35 rounded-2xl p-8 text-white shadow-2xl max-w-xs">
          <p className="text-eyebrow text-[color:var(--gold)] tracking-[0.25em] font-semibold">
            TRUSTED CLINIC
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 border-b border-white/10 pb-5">
            {STATS.slice(0, 4).map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl text-[color:var(--gold)] font-medium">
                  {s.value}
                </p>
                <p className="mt-1 text-[9px] tracking-[0.15em] uppercase text-white/70 leading-none">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-2.5 text-xs text-white/90">
            <div className="flex items-center gap-2.5">
              <span className="text-[color:var(--gold)] font-semibold">✓</span>
              <span className="tracking-wide text-white/90">Korean Standard</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[color:var(--gold)] font-semibold">✓</span>
              <span className="tracking-wide text-white/90">Seoul Trained</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[color:var(--gold)] font-semibold">✓</span>
              <span className="tracking-wide text-white/90">Fellowship Certified</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-white/60">
        Scroll
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-[color:var(--ivory)] py-16 lg:hidden">
      <div className="mx-auto grid grid-cols-2 gap-4 px-6">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.1}
            className="bg-[color:var(--emerald)] border border-[color:var(--gold)]/30 rounded-xl p-6 text-center"
          >
            <p className="font-display text-3xl text-[color:var(--gold)] font-medium">{s.value}</p>
            <p className="mt-2 text-[9px] tracking-[0.2em] uppercase text-white/75">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SignatureTreatments() {
  return (
    <section className="bg-[color:var(--ivory)] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-[color:var(--gold)]">
                <div className="w-8 h-px bg-[color:var(--gold)]" />
                <p className="text-eyebrow font-semibold tracking-[0.4em]">PROCEDURES</p>
              </div>
              <h2 className="mt-6 font-display text-5xl leading-[1.1] text-[color:var(--dark-forest)] md:text-7xl font-extralight">
                Procedures crafted with <br />
                <span className="font-serif-display font-medium text-[color:var(--gold-dark)] text-[1.25em] tracking-wide uppercase block mt-3 leading-none">
                  Surgical Artistry
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.15}>
              <p className="max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]">
                Each procedure is tailored to your anatomy and aspirations — performed in a private
                surgical suite designed for comfort, discretion and care.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-12">
          {/* Featured Treatment (Left: 7 cols) */}
          <div className="md:col-span-7 md:row-span-2">
            {(() => {
              const t = TREATMENTS[0]; // Rhinoplasty
              return (
                <Reveal delay={0.05} className="h-full">
                  <Link
                    to="/treatments"
                    hash={t.slug}
                    className="shine-on-hover group block overflow-hidden bg-[color:var(--dark-forest)] border border-[color:var(--gold)]/20 rounded-md luxe-shadow h-full flex flex-col justify-between hover:-translate-y-1.5 hover:border-[color:var(--gold)]/40 hover:shadow-[0_10px_30px_rgba(20,70,55,0.15)] transition-all duration-500"
                  >
                    <div className="relative flex-grow overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px]">
                      {/* Inner Gold Frame */}
                      <div className="absolute inset-4 border border-[color:var(--gold)]/20 pointer-events-none z-20 transition-all duration-500 group-hover:inset-3 group-hover:border-[color:var(--gold)]/50" />

                      {/* Decorative Frame Corners */}
                      <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[color:var(--gold)]/40 z-20 pointer-events-none" />
                      <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[color:var(--gold)]/40 z-20 pointer-events-none" />
                      <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[color:var(--gold)]/40 z-20 pointer-events-none" />
                      <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[color:var(--gold)]/40 z-20 pointer-events-none" />

                      {/* Floating Gold Logo Mark */}
                      <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                        <Sparkles
                          size={16}
                          className="text-[color:var(--gold)] animate-pulse-soft"
                        />
                      </div>

                      <img
                        src={t.image}
                        alt={t.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--dark-forest)]/95 via-[color:var(--dark-forest)]/40 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 border-t border-[color:var(--gold)]/0 p-8 transition-all duration-500 group-hover:border-[color:var(--gold)]/30 z-20">
                        <span className="inline-block rounded-full bg-[color:var(--gold)]/20 px-3.5 py-1 text-[9px] tracking-[0.2em] uppercase text-[color:var(--gold)] font-medium">
                          Featured Treatment
                        </span>
                        <h3 className="mt-4 font-display text-4xl text-white md:text-5xl font-light">
                          {t.name}
                        </h3>
                        <p className="mt-2 text-sm text-white/70">{t.myanmar}</p>
                        <p className="mt-3 max-w-md text-xs text-white/60 leading-relaxed">
                          {t.blurb}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-8 py-6 bg-[color:var(--dark-forest)] border-t border-white/5 z-20">
                      <span className="text-xs text-white/60 font-sans tracking-wide">
                        {t.duration} · {t.recovery}
                      </span>
                      <span className="text-xs tracking-[0.2em] uppercase text-[color:var(--gold)] group-hover:underline">
                        Discover →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })()}
          </div>

          {/* Right Stacked Column (Right: 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6 md:row-span-2">
            {[TREATMENTS[1], TREATMENTS[2]].map((t, i) => (
              <Reveal key={t.slug} delay={(i + 1) * 0.1} className="flex-1">
                <Link
                  to="/treatments"
                  hash={t.slug}
                  className="shine-on-hover group block overflow-hidden bg-[color:var(--dark-forest)] border border-[color:var(--gold)]/20 rounded-md luxe-shadow h-full flex flex-col justify-between hover:-translate-y-1.5 hover:border-[color:var(--gold)]/40 hover:shadow-[0_8px_25px_rgba(20,70,55,0.15)] transition-all duration-500"
                >
                  <div className="relative flex-grow overflow-hidden aspect-[16/10] md:aspect-auto md:h-[210px]">
                    {/* Inner Gold Frame */}
                    <div className="absolute inset-3 border border-[color:var(--gold)]/20 pointer-events-none z-20 transition-all duration-500 group-hover:inset-2.5 group-hover:border-[color:var(--gold)]/45" />

                    {/* Corners */}
                    <div className="absolute top-5 left-5 w-2 h-2 border-t border-l border-[color:var(--gold)]/40 z-20 pointer-events-none" />
                    <div className="absolute top-5 right-5 w-2 h-2 border-t border-r border-[color:var(--gold)]/40 z-20 pointer-events-none" />
                    <div className="absolute bottom-5 left-5 w-2 h-2 border-b border-l border-[color:var(--gold)]/40 z-20 pointer-events-none" />
                    <div className="absolute bottom-5 right-5 w-2 h-2 border-b border-r border-[color:var(--gold)]/40 z-20 pointer-events-none" />

                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--dark-forest)]/90 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold)] font-medium">
                        {t.category}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-white font-light">{t.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-6 py-4 bg-[color:var(--dark-forest)] border-t border-white/5 z-20">
                    <span className="text-xs text-white/60 font-sans">{t.duration}</span>
                    <span className="text-xs tracking-[0.2em] uppercase text-[color:var(--gold)]">
                      Discover →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Secondary Treatments Row */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[TREATMENTS[3], TREATMENTS[4], TREATMENTS[5]].map((t, i) => (
            <Reveal key={t.slug} delay={(i + 3) * 0.08}>
              <Link
                to="/treatments"
                hash={t.slug}
                className="shine-on-hover group block overflow-hidden bg-[color:var(--dark-forest)] border border-[color:var(--gold)]/15 luxe-shadow h-full flex flex-col justify-between hover:-translate-y-1 hover:border-[color:var(--gold)]/30 transition-all duration-500"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  {/* Inner Gold Frame */}
                  <div className="absolute inset-3 border border-[color:var(--gold)]/20 pointer-events-none z-20 transition-all duration-500 group-hover:inset-2.5 group-hover:border-[color:var(--gold)]/40" />

                  {/* Corners */}
                  <div className="absolute top-5 left-5 w-2 h-2 border-t border-l border-[color:var(--gold)]/40 z-20 pointer-events-none" />
                  <div className="absolute top-5 right-5 w-2 h-2 border-t border-r border-[color:var(--gold)]/40 z-20 pointer-events-none" />
                  <div className="absolute bottom-5 left-5 w-2 h-2 border-b border-l border-[color:var(--gold)]/40 z-20 pointer-events-none" />
                  <div className="absolute bottom-5 right-5 w-2 h-2 border-b border-r border-[color:var(--gold)]/40 z-20 pointer-events-none" />

                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--dark-forest)]/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold)] font-medium">
                      {t.category}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-white font-light">{t.name}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between px-6 py-4 bg-[color:var(--dark-forest)] border-t border-white/5 z-20">
                  <span className="text-xs text-white/60 font-sans">{t.duration}</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-[color:var(--gold)]">
                    Discover →
                  </span>
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
    <section className="bg-[color:var(--light-sage)] py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <div className="flex items-center gap-3 text-[color:var(--gold)]">
            <div className="w-8 h-px bg-[color:var(--gold)]" />
            <p className="text-eyebrow font-semibold tracking-[0.4em]">SURGICAL EXPERTISE</p>
          </div>

          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-[color:var(--dark-forest)] md:text-6xl font-light">
            Dr. Smile <br />
            <span className="font-serif-display italic text-[color:var(--gold)] font-medium block mt-2">
              Aesthetic Team
            </span>
          </h2>

          <p className="mt-3 text-sm tracking-[0.24em] uppercase text-[color:var(--gold-dark)] font-semibold">
            Founder · Plastic & Aesthetic Surgeon
          </p>

          {/* Micro accent gold line */}
          <div className="w-16 h-px bg-[color:var(--gold)]/50 my-6 shadow-[0_0_6px_rgba(200,164,106,0.3)]" />

          <p className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]">
            Korean-trained and internationally certified in aesthetic surgery, our lead specialists
            bring meticulous experience in facial and body refinement.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 text-xs text-[color:var(--muted-foreground)] border-l border-[color:var(--gold)]/30 pl-5 py-1">
            <div className="flex items-center gap-3">
              <Sparkles
                size={11}
                className="text-[color:var(--gold)] shrink-0 animate-pulse-soft"
              />
              <span className="font-sans tracking-wider text-[color:var(--dark-forest)]/90 font-medium">
                Board-Certified Plastic Surgery Specialist
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles
                size={11}
                className="text-[color:var(--gold)] shrink-0 animate-pulse-soft"
              />
              <span className="font-sans tracking-wider text-[color:var(--dark-forest)]/90 font-medium">
                Certified by Association of Korean Plastic Surgeons
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles
                size={11}
                className="text-[color:var(--gold)] shrink-0 animate-pulse-soft"
              />
              <span className="font-sans tracking-wider text-[color:var(--dark-forest)]/90 font-medium">
                100% Dedicated Consultation & Continuous Care
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-y border-[color:var(--border)] py-8">
            <div>
              <p className="font-display text-3xl text-[color:var(--gold)] font-medium">
                <Counter to={3000} suffix="+" />
              </p>
              <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">
                Procedures
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-[color:var(--gold)] font-medium">
                <Counter to={8} suffix="+" />
              </p>
              <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">
                Years
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-[color:var(--gold)] font-medium">
                <Counter to={14} />
              </p>
              <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]">
                Awards
              </p>
            </div>
          </div>

          <Link
            to="/doctors"
            className="mt-10 inline-flex items-center gap-3 border-b border-[color:var(--dark-forest)] pb-2 text-xs tracking-[0.3em] uppercase text-[color:var(--dark-forest)] hover:text-[color:var(--gold-dark)] hover:border-[color:var(--gold-dark)] transition-colors duration-300"
          >
            Full Profile →
          </Link>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-7">
          <div className="relative p-4 bg-white border border-[color:var(--gold)]/20 shadow-2xl overflow-hidden rounded-md group">
            {/* Inner Gold Frame */}
            <div className="absolute inset-8 border border-[color:var(--gold)]/25 pointer-events-none z-20 transition-all duration-700 group-hover:inset-6 group-hover:border-[color:var(--gold)]/50" />

            {/* Fine Gold Decorative corners */}
            <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-[color:var(--gold)] z-20 pointer-events-none" />
            <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-[color:var(--gold)] z-20 pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-[color:var(--gold)] z-20 pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-[color:var(--gold)] z-20 pointer-events-none" />

            <img
              src={doctorPortrait}
              alt="SMILE Plastic Surgery doctor"
              loading="lazy"
              className="w-full object-cover rounded-sm transition-transform duration-[2000ms] group-hover:scale-[1.03]"
              width={1024}
              height={1280}
            />

            {/* Trust overlay badges */}
            <div className="absolute top-12 left-12 flex flex-col gap-2.5 z-20">
              <span className="rounded-full bg-[color:var(--dark-forest)]/90 border border-[color:var(--gold)]/40 px-3.5 py-1 text-[9px] tracking-[0.2em] uppercase text-[color:var(--gold)] backdrop-blur-md shadow-md">
                ✓ Seoul National Univ Fellow
              </span>
              <span className="rounded-full bg-[color:var(--dark-forest)]/90 border border-[color:var(--gold)]/40 px-3.5 py-1 text-[9px] tracking-[0.2em] uppercase text-[color:var(--gold)] backdrop-blur-md shadow-md">
                ✓ Korean Board Certified
              </span>
            </div>

            <div className="absolute bottom-12 right-12 bg-[color:var(--emerald)]/95 border border-[color:var(--gold)]/45 rounded-xl p-5 text-white backdrop-blur-md shadow-xl z-20 transition-all duration-500 group-hover:translate-y-[-2px] group-hover:shadow-[color:var(--gold)]/15">
              <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--gold)] font-bold">
                Experience & Trust
              </p>
              <div className="mt-2.5 flex gap-8 text-xs">
                <div>
                  <span className="block font-display text-base text-[color:var(--gold)] font-medium">
                    8+ Years
                  </span>
                  <span className="text-[9px] text-white/70">Practice</span>
                </div>
                <div className="border-l border-white/20 pl-8">
                  <span className="block font-display text-base text-[color:var(--gold)] font-medium">
                    3000+
                  </span>
                  <span className="text-[9px] text-white/70">Procedures</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustSection() {
  const points = [
    {
      title: "Korean Standards",
      desc: "Fellowship-trained at Seoul National University and certified by top Korean aesthetic boards.",
      icon: Award,
    },
    {
      title: "FDA Approved",
      desc: "All medical devices, sutures, and Motiva implants are FDA-approved with global safety certifications.",
      icon: ShieldCheck,
    },
    {
      title: "Board Certified",
      desc: "Operated exclusively by certified plastic and aesthetic reconstruction surgeons.",
      icon: CheckCircle2,
    },
    {
      title: "Private Recovery",
      desc: "Luxurious, fully-monitored recovery suites designed for ultimate comfort and client discretion.",
      icon: Heart,
    },
  ];

  return (
    <section className="bg-[color:var(--ivory)] border-y border-[color:var(--border)] py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className="relative border-l border-[color:var(--gold)]/50 pl-6 py-2 group hover:border-[color:var(--gold)] transition-colors duration-500"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--gold)]/10 text-[color:var(--gold)] group-hover:bg-[color:var(--gold)] group-hover:text-[color:var(--dark-forest)] group-hover:shadow-[0_0_15px_rgba(200,164,106,0.3)] transition-all duration-300">
                <p.icon size={18} />
              </div>
              <h3 className="font-display text-lg text-[color:var(--dark-forest)] group-hover:text-[color:var(--gold-dark)] transition-colors font-medium">
                {p.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted-foreground)]">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterShowcase() {
  return (
    <section className="bg-[color:var(--ivory)] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="flex items-center gap-3 text-[color:var(--gold)]">
              <div className="w-8 h-px bg-[color:var(--gold)]" />
              <p className="text-eyebrow font-semibold tracking-[0.4em]">BEFORE & AFTER</p>
            </div>

            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-[color:var(--dark-forest)] md:text-7xl font-extralight">
              Real results, <br />
              <em className="font-serif-display font-medium text-[color:var(--gold)] block mt-2">
                Honestly Shown.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]">
              Drag the slider to compare. All images shared with consent — no retouching, only
              refinement.
            </p>
          </Reveal>
        </div>

        {/* Micro accent gold line */}
        <div className="w-16 h-px bg-[color:var(--gold)]/50 my-8 shadow-[0_0_6px_rgba(200,164,106,0.3)]" />

        <Reveal className="mt-12">
          <div className="relative p-2 bg-white border border-[color:var(--gold)]/20 shadow-2xl rounded-lg">
            <BeforeAfter
              before={beforeAfter1}
              after={beforeAfter1}
              alt="Before and after"
              className="aspect-[16/10] rounded-sm"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--dark-forest)] py-28 text-white md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="flex items-center gap-3 text-[color:var(--gold)]">
              <Sparkles size={14} className="animate-pulse-soft" />
              <p className="text-eyebrow font-semibold tracking-[0.4em]">PATIENT STORIES</p>
            </div>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-white md:text-6xl font-light">
              <em className="font-serif-display text-[color:var(--gold)]">"</em> Stories of
              confidence, <br />
              <span className="italic font-serif-display font-medium text-[color:var(--gold)]">
                softly told.
              </span>
            </h2>
          </Reveal>
        </div>
      </div>
      <div className="mt-16 overflow-hidden">
        <div className="marquee flex w-max gap-6 px-6">
          {items.map((t, i) => (
            <article
              key={i}
              className="w-[340px] shrink-0 rounded-lg border border-white/10 bg-white/5 p-8 md:w-[420px]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial1}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover border border-[color:var(--gold)]/20"
                />
                <div>
                  <p className="font-display text-lg text-white font-medium">{t.name}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-white/50">{t.role}</p>
                </div>
              </div>
              <p className="mt-6 font-serif-display text-xl italic leading-relaxed text-white/90">
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
    <section className="bg-[color:var(--ivory)] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <Reveal>
            <div className="flex items-center gap-3 text-[color:var(--gold)]">
              <div className="w-8 h-px bg-[color:var(--gold)]" />
              <p className="text-eyebrow font-semibold tracking-[0.4em]">GALLERY</p>
            </div>

            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-[color:var(--dark-forest)] md:text-7xl font-extralight">
              A moodboard of <br />
              <em className="font-serif-display font-medium text-[color:var(--gold)] block mt-2">
                Refined Moments.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 border-b border-[color:var(--dark-forest)] pb-2 text-xs tracking-[0.3em] uppercase text-[color:var(--dark-forest)] hover:text-[color:var(--gold-dark)] hover:border-[color:var(--gold-dark)] transition-all duration-300"
            >
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
              <div className="group relative h-full w-full overflow-hidden rounded-md border border-[color:var(--gold)]/10 hover:border-[color:var(--gold)]/30 transition-all duration-500 cursor-pointer">
                <div className="absolute inset-3 border border-[color:var(--gold)]/0 pointer-events-none z-10 transition-all duration-500 group-hover:inset-2 group-hover:border-[color:var(--gold)]/30" />
                <img
                  src={g.src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/35" />
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 pointer-events-none">
                  <span className="rounded-full bg-white/95 border border-[color:var(--gold)]/30 px-5 py-2 text-[10px] tracking-[0.25em] uppercase text-[color:var(--dark-forest)] font-medium shadow-xl">
                    View Atelier
                  </span>
                </div>
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
    <section className="relative overflow-hidden bg-[color:var(--dark-forest)] py-32 md:py-48 text-white text-center">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(200,164,106,0.08)_0%,transparent_60%)]" />
      <div className="mx-auto max-w-[1400px] px-6 relative z-10 md:px-10">
        <Reveal>
          <div className="flex justify-center items-center gap-3 text-[color:var(--gold)]">
            <Sparkles size={14} className="animate-pulse-soft" />
            <p className="text-eyebrow font-semibold tracking-[0.4em]">BEGIN YOUR JOURNEY</p>
          </div>

          <h2 className="mx-auto mt-8 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl text-white font-extralight">
            Ready For Your <br />
            <em className="font-serif-display font-medium text-[color:var(--gold)] block mt-3 leading-none">
              Transformation?
            </em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/70">
            Visit {CLINIC.name} for a one-on-one consultation with our lead surgeon. Korean-trained
            expertise, customized to your aspirations.
          </p>

          <Link
            to="/contact"
            className="shine-on-hover mt-12 inline-flex items-center gap-4 rounded-full bg-[color:var(--gold)] px-10 py-5 text-xs tracking-[0.3em] uppercase text-[color:var(--dark-forest)] font-medium transition-all hover:bg-white hover:text-[color:var(--dark-forest)] hover:scale-105 duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(200,164,106,0.4)]"
          >
            Book Consultation
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
