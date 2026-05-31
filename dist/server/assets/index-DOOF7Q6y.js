import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { C as Counter, d as doctorPortrait } from "./Counter-CZ4sKktp.js";
import { B as BeforeAfter, b as beforeAfter1, t as testimonial1, g as gallery1, a as gallery2, c as gallery3, d as gallery4 } from "./testimonial-1-Ban0OGF4.js";
import { S as STATS, b as TREATMENTS, T as TESTIMONIALS, C as CLINIC } from "./router-BFX5w7eH.js";
import { W as WordReveal, R as Reveal } from "./Reveal-GVcn0kqg.js";
import "@tanstack/react-query";
import "lenis";
import "zod";
const heroClinic = "/assets/hero-clinic-CP4MAZXo.jpg";
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Stats, {}),
    /* @__PURE__ */ jsx(SignatureTreatments, {}),
    /* @__PURE__ */ jsx(DoctorHighlight, {}),
    /* @__PURE__ */ jsx(BeforeAfterShowcase, {}),
    /* @__PURE__ */ jsx(Testimonials, {}),
    /* @__PURE__ */ jsx(Gallery, {}),
    /* @__PURE__ */ jsx(CTA, {})
  ] });
}
function Hero() {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxs("section", { ref, className: "relative h-[100svh] w-full overflow-hidden bg-[color:var(--charcoal)]", children: [
    /* @__PURE__ */ jsxs(motion.div, { style: {
      y
    }, className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("img", { src: heroClinic, alt: "Clinic interior", className: "animate-image-breathe h-[120%] w-full object-cover opacity-70", width: 1920, height: 1080 }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[color:var(--charcoal)]/40 via-[color:var(--charcoal)]/30 to-[color:var(--charcoal)]/90" })
    ] }),
    /* @__PURE__ */ jsxs(motion.div, { style: {
      opacity
    }, className: "relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pb-20 pt-36 md:px-10 md:pb-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[color:var(--gold)]", children: [
        /* @__PURE__ */ jsx(Sparkles, { size: 14 }),
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow", children: "Est. 2017 · Yangon" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl text-[color:var(--pearl)]", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight", children: [
          /* @__PURE__ */ jsx(WordReveal, { text: "Elevating Beauty" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic font-serif-display text-[color:var(--gold-light)]", children: /* @__PURE__ */ jsx(WordReveal, { text: "with precision & care.", delay: 0.3 }) })
        ] }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1,
          delay: 1.2
        }, className: "mt-8 max-w-xl text-base leading-relaxed text-[color:var(--pearl)]/70 md:text-lg", children: "A private atelier of aesthetic medicine — where surgical artistry, ethical care and Korean-trained expertise meet the elegance you deserve." })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 1,
        delay: 1.5
      }, className: "flex flex-col items-start gap-6 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "shine-on-hover group inline-flex items-center gap-4 rounded-full bg-[color:var(--gold)] px-8 py-4 text-xs tracking-[0.3em] uppercase text-[color:var(--charcoal)] transition-all hover:bg-[color:var(--pearl)]", children: [
          "Book Consultation",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "transition-transform group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/treatments", className: "group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[color:var(--pearl)]", children: /* @__PURE__ */ jsx("span", { className: "underline-grow", children: "Explore Treatments" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 1,
      delay: 1.8
    }, className: "absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-8 text-[color:var(--pearl)]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-light)]", children: "Trusted" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 grid grid-cols-2 gap-x-10 gap-y-6", children: STATS.slice(0, 4).map((s) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-[color:var(--gold-light)]", children: s.value }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-[10px] tracking-[0.2em] uppercase text-[color:var(--pearl)]/70", children: s.label })
      ] }, s.label)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-[color:var(--pearl)]/60", children: "Scroll" })
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsx("section", { className: "border-y border-[color:var(--border)] bg-[color:var(--beige)] py-20 lg:hidden", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-10", children: STATS.map((s, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 0.1, className: "text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-[color:var(--gold-dark)]", children: s.value }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-[10px] tracking-[0.24em] uppercase text-[color:var(--muted-foreground)]", children: s.label })
  ] }, s.label)) }) });
}
function SignatureTreatments() {
  return /* @__PURE__ */ jsx("section", { className: "py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid items-end gap-10 md:grid-cols-12", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Signature Treatments" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1.05] md:text-7xl", children: [
          "Procedures crafted with ",
          /* @__PURE__ */ jsx("em", { className: "font-serif-display text-[color:var(--gold-dark)]", children: "surgical artistry." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsx("p", { className: "max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]", children: "Each procedure is tailored to your anatomy and aspirations — performed in a private surgical suite designed for comfort, discretion and care." }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: TREATMENTS.map((t, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxs(Link, { to: "/treatments", hash: t.slug, className: "shine-on-hover group block overflow-hidden bg-[color:var(--card)] luxe-shadow", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: t.image, alt: t.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/80 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 border-t border-[color:var(--gold)]/0 p-6 transition-all duration-500 group-hover:border-[color:var(--gold)]", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold-light)]", children: t.category }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-3xl text-[color:var(--pearl)]", children: t.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[color:var(--pearl)]/70", children: t.myanmar })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-5", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-[color:var(--muted-foreground)]", children: [
          t.duration,
          " · ",
          t.recovery
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.2em] uppercase text-[color:var(--gold-dark)] group-hover:underline", children: "Discover →" })
      ] })
    ] }) }, t.slug)) })
  ] }) });
}
function DoctorHighlight() {
  return /* @__PURE__ */ jsx("section", { className: "bg-[color:var(--beige)] py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-10", children: [
    /* @__PURE__ */ jsxs(Reveal, { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Meet Our Lead Surgeon" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1.05] md:text-6xl", children: [
        "Dr. Smile ",
        /* @__PURE__ */ jsx("em", { className: "font-serif-display text-[color:var(--gold-dark)]", children: "Aesthetic Team" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm tracking-[0.24em] uppercase text-[color:var(--muted-foreground)]", children: "Founder · Plastic & Aesthetic Surgeon" }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]", children: "Korean-trained and internationally certified in aesthetic surgery, our lead specialists bring meticulous experience in facial and body refinement." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-3 gap-6 border-y border-[color:var(--border)] py-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-[color:var(--gold-dark)]", children: /* @__PURE__ */ jsx(Counter, { to: 3e3, suffix: "+" }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-[10px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]", children: "Procedures" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-[color:var(--gold-dark)]", children: /* @__PURE__ */ jsx(Counter, { to: 8, suffix: "+" }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-[10px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]", children: "Years" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-[color:var(--gold-dark)]", children: /* @__PURE__ */ jsx(Counter, { to: 14 }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-[10px] tracking-[0.2em] uppercase text-[color:var(--muted-foreground)]", children: "Awards" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/doctors", className: "mt-10 inline-flex items-center gap-3 border-b border-[color:var(--charcoal)] pb-2 text-xs tracking-[0.3em] uppercase", children: "Full Profile →" })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.2, className: "md:col-span-7", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-3 -z-10 border border-[color:var(--gold)]/40" }),
      /* @__PURE__ */ jsx("div", { className: "animate-reveal-line absolute -bottom-6 left-10 h-px w-2/3 bg-[color:var(--gold)]" }),
      /* @__PURE__ */ jsx("img", { src: doctorPortrait, alt: "SMILE Plastic Surgery doctor", loading: "lazy", className: "w-full object-cover", width: 1024, height: 1280 })
    ] }) })
  ] }) });
}
function BeforeAfterShowcase() {
  return /* @__PURE__ */ jsx("section", { className: "py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid items-end gap-10 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs(Reveal, { className: "md:col-span-7", children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Before & After" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1.05] md:text-7xl", children: [
          "Real results, ",
          /* @__PURE__ */ jsx("em", { className: "font-serif-display text-[color:var(--gold-dark)]", children: "honestly shown." })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.15, className: "md:col-span-5", children: /* @__PURE__ */ jsx("p", { className: "max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]", children: "Drag the slider to compare. All images shared with consent — no retouching, only refinement." }) })
    ] }),
    /* @__PURE__ */ jsx(Reveal, { className: "mt-16", children: /* @__PURE__ */ jsx(BeforeAfter, { before: beforeAfter1, after: beforeAfter1, alt: "Before and after", className: "aspect-[16/10] luxe-shadow" }) })
  ] }) });
}
function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return /* @__PURE__ */ jsxs("section", { className: "border-y border-[color:var(--border)] bg-[color:var(--charcoal)] py-28 text-[color:var(--pearl)] md:py-32", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: /* @__PURE__ */ jsx("div", { className: "grid items-end gap-10 md:grid-cols-12", children: /* @__PURE__ */ jsxs(Reveal, { className: "md:col-span-7", children: [
      /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-light)]", children: "Words from our patients" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1.05] md:text-6xl", children: [
        /* @__PURE__ */ jsx("em", { className: "font-serif-display text-[color:var(--gold-light)]", children: '"' }),
        " Stories of confidence, softly told."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "marquee flex w-max gap-6 px-6", children: items.map((t, i) => /* @__PURE__ */ jsxs("article", { className: "w-[340px] shrink-0 rounded-lg border border-[color:var(--pearl)]/10 bg-[color:var(--pearl)]/5 p-8 md:w-[420px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("img", { src: testimonial1, alt: t.name, loading: "lazy", className: "h-12 w-12 rounded-full object-cover" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-lg", children: t.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-[color:var(--pearl)]/50", children: t.role })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-6 font-serif-display text-xl italic leading-relaxed text-[color:var(--pearl)]/90", children: [
        '"',
        t.quote,
        '"'
      ] })
    ] }, i)) }) })
  ] });
}
function Gallery() {
  return /* @__PURE__ */ jsx("section", { className: "py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between gap-6 flex-wrap", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Atelier Gallery" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1.05] md:text-7xl", children: [
          "A moodboard of ",
          /* @__PURE__ */ jsx("em", { className: "font-serif-display text-[color:var(--gold-dark)]", children: "refined moments." })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "inline-flex items-center gap-3 border-b border-[color:var(--charcoal)] pb-2 text-xs tracking-[0.3em] uppercase", children: "View Gallery →" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[260px]", children: [{
      src: gallery1,
      span: "row-span-2"
    }, {
      src: gallery2,
      span: ""
    }, {
      src: gallery3,
      span: "row-span-2"
    }, {
      src: gallery4,
      span: ""
    }, {
      src: testimonial1,
      span: ""
    }, {
      src: gallery2,
      span: ""
    }].map((g, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.06, className: g.span, children: /* @__PURE__ */ jsxs("div", { className: "group relative h-full w-full overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: g.src, alt: "", loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[color:var(--charcoal)]/0 transition-colors duration-500 group-hover:bg-[color:var(--charcoal)]/30" })
    ] }) }, i)) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden bg-[color:var(--beige)] py-28 md:py-40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] px-6 text-center md:px-10", children: /* @__PURE__ */ jsxs(Reveal, { children: [
    /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Begin Your Journey" }),
    /* @__PURE__ */ jsxs("h2", { className: "mx-auto mt-8 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl", children: [
      "A private consultation,",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("em", { className: "font-serif-display text-[color:var(--gold-dark)]", children: "tailored entirely to you." })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mx-auto mt-8 max-w-xl text-base leading-relaxed text-[color:var(--muted-foreground)]", children: [
      "Visit ",
      CLINIC.name,
      " for a one-on-one consultation with our lead surgeon. Discretion and elegance, in every detail."
    ] }),
    /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "shine-on-hover mt-12 inline-flex items-center gap-4 rounded-full bg-[color:var(--charcoal)] px-10 py-5 text-xs tracking-[0.3em] uppercase text-[color:var(--pearl)] transition-transform hover:scale-105", children: [
      "Reserve a private visit",
      /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
    ] })
  ] }) }) });
}
export {
  HomePage as component
};
