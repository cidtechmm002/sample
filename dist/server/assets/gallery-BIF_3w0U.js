import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { R as Reveal } from "./Reveal-GVcn0kqg.js";
import { b as beforeAfter1, B as BeforeAfter, g as gallery1, a as gallery2, c as gallery3, d as gallery4, t as testimonial1 } from "./testimonial-1-Ban0OGF4.js";
import { Play } from "lucide-react";
import "framer-motion";
const CATEGORIES = ["All", "Nose", "Eyes", "Face", "Body", "Skin"];
const RESULTS = [{
  cat: "Nose",
  img: beforeAfter1,
  label: "Rhinoplasty"
}, {
  cat: "Eyes",
  img: beforeAfter1,
  label: "Double Eyelid"
}, {
  cat: "Face",
  img: beforeAfter1,
  label: "Face Contour"
}, {
  cat: "Body",
  img: beforeAfter1,
  label: "Liposuction"
}, {
  cat: "Skin",
  img: beforeAfter1,
  label: "Rejuvenation"
}, {
  cat: "Face",
  img: beforeAfter1,
  label: "Lift"
}];
const REELS = [gallery1, gallery2, gallery3, gallery4, testimonial1];
const STORIES = [{
  name: "Hnin Ei",
  quote: "I was nervous about the consultation, but the team listened so carefully.",
  img: testimonial1
}, {
  name: "Phyu Phyu",
  quote: "Truly the most professional clinic I have visited.",
  img: gallery2
}, {
  name: "May Thu",
  quote: "Travelled from Singapore — worth every mile.",
  img: gallery3
}];
function GalleryPage() {
  const [cat, setCat] = useState("All");
  const list = RESULTS.filter((r) => cat === "All" || r.cat === cat);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "flex min-h-[60svh] items-end bg-[color:var(--charcoal)] pt-32 text-[color:var(--pearl)]", children: /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24", children: /* @__PURE__ */ jsxs(Reveal, { children: [
      /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-light)]", children: "Gallery" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-6xl leading-[0.95] md:text-8xl", children: [
        "The proof, ",
        /* @__PURE__ */ jsx("em", { className: "font-serif-display text-[color:var(--gold-light)]", children: "unretouched." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1200px] px-6 md:px-10", children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx(BeforeAfter, { before: beforeAfter1, after: beforeAfter1, className: "aspect-[16/10] luxe-shadow" }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-[color:var(--border)] py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxs(Reveal, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Before & After" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-4xl md:text-5xl", children: "Premium comparisons" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setCat(c), className: `rounded-full border px-5 py-2 text-[11px] tracking-[0.24em] uppercase transition-all ${cat === c ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--pearl)]" : "border-[color:var(--border)] text-[color:var(--muted-foreground)] hover:border-[color:var(--gold)]"}`, children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: list.map((r, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(BeforeAfter, { before: r.img, after: r.img, className: "aspect-[4/3]" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-lg", children: r.label }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.24em] uppercase text-[color:var(--gold-dark)]", children: r.cat })
        ] })
      ] }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[color:var(--beige)] py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Video Results" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-4xl md:text-5xl", children: "In motion." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory", children: REELS.map((src, i) => /* @__PURE__ */ jsxs("div", { className: "group relative aspect-[9/16] w-[260px] shrink-0 snap-start overflow-hidden md:w-[300px]", children: [
        /* @__PURE__ */ jsx("img", { src, alt: "", loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/80 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--gold)] bg-[color:var(--charcoal)]/60 text-[color:var(--gold)] backdrop-blur", children: /* @__PURE__ */ jsx(Play, { size: 18 }) }) }),
        /* @__PURE__ */ jsxs("p", { className: "absolute bottom-4 left-4 text-xs tracking-[0.2em] uppercase text-[color:var(--pearl)]", children: [
          "Reel · ",
          i + 1
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 md:px-10", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Real Patient Stories" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-4xl md:text-5xl", children: "In their own words." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: STORIES.map((s, i) => /* @__PURE__ */ jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxs("article", { className: "group h-full overflow-hidden border border-[color:var(--border)] bg-[color:var(--card)] luxe-shadow", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: s.img, alt: s.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsxs("p", { className: "font-serif-display text-xl italic leading-relaxed", children: [
            '"',
            s.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-6 text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold-dark)]", children: [
            "— ",
            s.name
          ] })
        ] })
      ] }) }, s.name)) })
    ] }) })
  ] });
}
export {
  GalleryPage as component
};
