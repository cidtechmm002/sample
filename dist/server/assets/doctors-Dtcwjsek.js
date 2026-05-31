import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { d as doctorPortrait, C as Counter } from "./Counter-CZ4sKktp.js";
import { R as Reveal } from "./Reveal-GVcn0kqg.js";
import { a as TIMELINE } from "./router-BFX5w7eH.js";
import { Award, X } from "lucide-react";
import "framer-motion";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "lenis";
import "zod";
const CERTIFICATES = [{
  title: "ISAPS Diplomate",
  year: "2020",
  img: "https://images.unsplash.com/photo-1632571401005-458e9d244591?w=900&q=80"
}, {
  title: "Seoul National University",
  year: "2017",
  img: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=900&q=80"
}, {
  title: "Korean Aesthetic Surgery",
  year: "2018",
  img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
}, {
  title: "JK Plastic Surgery Fellow",
  year: "2018",
  img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=900&q=80"
}];
function DoctorsPage() {
  const [lightbox, setLightbox] = useState(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative grid min-h-[100svh] items-center bg-[color:var(--beige)] pt-32 md:grid-cols-12", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-[1400px] px-6 py-16 md:col-span-6 md:px-10 md:py-32", children: /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Lead Surgeon · Founder" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-8 font-display text-6xl leading-[0.95] md:text-8xl", children: [
          "SMILE",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "font-serif-display text-[color:var(--gold-dark)]", children: "Aesthetic Team" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-10 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]", children: "A surgeon who believes aesthetic refinement is, above all, an act of listening. Our specialists have performed over three thousand procedures with a quiet, exacting hand — shaped by training in Seoul and a deep care for her patients." }),
        /* @__PURE__ */ jsxs("dl", { className: "mt-12 grid grid-cols-2 gap-x-8 gap-y-6 max-w-md", children: [
          /* @__PURE__ */ jsx(Field, { label: "Position", value: "Founder & Lead Surgeon" }),
          /* @__PURE__ */ jsx(Field, { label: "Experience", value: "8+ Years" }),
          /* @__PURE__ */ jsx(Field, { label: "Specialization", value: "Facial Plastic Surgery" }),
          /* @__PURE__ */ jsx(Field, { label: "Certification", value: "ISAPS Diplomate" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(Reveal, { delay: 0.2, className: "relative h-[60svh] md:col-span-6 md:h-[100svh]", children: [
        /* @__PURE__ */ jsx("img", { src: doctorPortrait, alt: "SMILE Plastic Surgery doctor", className: "h-full w-full object-cover", loading: "eager" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6 rounded-lg glass-dark p-6 text-[color:var(--pearl)] md:bottom-10 md:left-10 md:right-10", children: [
          /* @__PURE__ */ jsx("p", { className: "font-serif-display text-lg italic", children: '"Beauty, when honored with restraint, becomes timeless."' }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-light)]", children: "— SMILE Plastic Surgery" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1100px] px-6 md:px-10", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Career Timeline" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-5xl leading-[1.05] md:text-6xl", children: "A decade in the craft." })
      ] }),
      /* @__PURE__ */ jsx("ol", { className: "mt-16 relative border-l border-[color:var(--border)] pl-10 md:pl-16", children: TIMELINE.map((t, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("li", { className: "relative pb-14 last:pb-0", children: [
        /* @__PURE__ */ jsxs("span", { className: "absolute -left-[44px] md:-left-[68px] top-1 flex h-3 w-3 items-center justify-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute h-3 w-3 rounded-full border border-[color:var(--gold)]" }),
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[color:var(--gold-dark)]" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-[color:var(--gold-dark)]", children: t.year }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-xl", children: t.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[color:var(--muted-foreground)]", children: t.detail })
      ] }) }, t.year)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[color:var(--beige)] py-28 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Credentials" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-5xl leading-[1.05] md:text-6xl", children: "Certificates & Honours." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: CERTIFICATES.map((c, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxs("button", { onClick: () => setLightbox(i), className: "shine-on-hover group block w-full overflow-hidden bg-[color:var(--card)] text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[3/4] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: c.img, alt: c.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-dark)]", children: c.year }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-lg", children: c.title })
        ] })
      ] }) }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[color:var(--charcoal)] py-28 text-[color:var(--pearl)] md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-4 md:px-10", children: [{
      value: 3e3,
      suffix: "+",
      label: "Procedures"
    }, {
      value: 14,
      suffix: "",
      label: "Awards"
    }, {
      value: 8,
      suffix: "+",
      label: "Years Practice"
    }, {
      value: 12,
      suffix: "",
      label: "Publications"
    }].map((s, i) => /* @__PURE__ */ jsxs(Reveal, { delay: i * 0.1, className: "text-center", children: [
      /* @__PURE__ */ jsx(Award, { className: "mx-auto text-[color:var(--gold)]", size: 28 }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 font-display text-6xl text-[color:var(--gold-light)]", children: /* @__PURE__ */ jsx(Counter, { to: s.value, suffix: s.suffix }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-[10px] tracking-[0.3em] uppercase text-[color:var(--pearl)]/60", children: s.label })
    ] }, s.label)) }) }),
    lightbox !== null && /* @__PURE__ */ jsxs("div", { onClick: () => setLightbox(null), className: "fixed inset-0 z-[60] flex items-center justify-center bg-[color:var(--charcoal)]/95 p-6 animate-fade-up", children: [
      /* @__PURE__ */ jsx("button", { className: "absolute right-6 top-6 text-[color:var(--pearl)]", "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { size: 24 }) }),
      /* @__PURE__ */ jsx("img", { src: CERTIFICATES[lightbox].img, alt: CERTIFICATES[lightbox].title, className: "max-h-[85vh] w-auto object-contain", onClick: (e) => e.stopPropagation() })
    ] })
  ] });
}
function Field({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("dt", { className: "text-[10px] tracking-[0.24em] uppercase text-[color:var(--muted-foreground)]", children: label }),
    /* @__PURE__ */ jsx("dd", { className: "mt-2 font-display text-lg", children: value })
  ] });
}
export {
  DoctorsPage as component
};
