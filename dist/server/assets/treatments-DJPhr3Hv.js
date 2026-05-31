import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { b as TREATMENTS } from "./router-BFX5w7eH.js";
import { R as Reveal } from "./Reveal-GVcn0kqg.js";
import { ChevronDown } from "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "lenis";
import "zod";
import "framer-motion";
const CATEGORIES = ["All", "Face", "Eyes", "Nose", "Body", "Skin"];
function TreatmentsPage() {
  const [cat, setCat] = useState("All");
  const list = TREATMENTS.filter((t) => cat === "All" || t.category === cat);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative flex h-[60svh] items-end overflow-hidden bg-[color:var(--charcoal)] pt-28 text-[color:var(--pearl)]", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.86_0.06_80/0.18),transparent_60%)]" }) }),
      /* @__PURE__ */ jsx("div", { className: "relative mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-10 md:pb-24", children: /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-light)]", children: "Our Treatments" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-5xl leading-[0.95] md:text-8xl", children: [
          "The full ",
          /* @__PURE__ */ jsx("em", { className: "font-serif-display text-[color:var(--gold-light)]", children: "menu of refinement." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "sticky top-[72px] z-30 border-y border-[color:var(--border)] bg-[color:var(--pearl)]/90 backdrop-blur", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-6 py-4 scrollbar-hide md:px-10", children: CATEGORIES.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setCat(c), className: `whitespace-nowrap rounded-full border px-5 py-2 text-[11px] tracking-[0.24em] uppercase transition-all ${cat === c ? "border-[color:var(--charcoal)] bg-[color:var(--charcoal)] text-[color:var(--pearl)]" : "border-[color:var(--border)] text-[color:var(--muted-foreground)] hover:border-[color:var(--gold)] hover:text-[color:var(--gold-dark)]"}`, children: c }, c)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[1400px] space-y-24 px-6 md:px-10", children: list.map((t, i) => /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("article", { id: t.slug, className: "grid gap-10 md:grid-cols-12", children: [
      /* @__PURE__ */ jsx("div", { className: `md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`, children: /* @__PURE__ */ jsx("div", { className: "group relative overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: t.image, alt: t.name, loading: "lazy", className: "aspect-[4/3] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5 md:py-12", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: [
          t.category,
          " · ",
          t.duration
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-5xl leading-[1.05]", children: t.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 font-serif-display text-xl italic text-[color:var(--muted-foreground)]", children: t.myanmar }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-relaxed text-[color:var(--muted-foreground)]", children: t.blurb }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 grid grid-cols-3 gap-4 border-y border-[color:var(--border)] py-6", children: [
          /* @__PURE__ */ jsx(Meta, { label: "Duration", value: t.duration }),
          /* @__PURE__ */ jsx(Meta, { label: "Recovery", value: t.recovery }),
          /* @__PURE__ */ jsx(Meta, { label: "From", value: t.price })
        ] }),
        /* @__PURE__ */ jsx(Accordion, { title: "Procedure", children: /* @__PURE__ */ jsx("p", { children: t.procedure }) }),
        /* @__PURE__ */ jsx(Accordion, { title: "Benefits", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: t.benefits.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-2 h-px w-4 bg-[color:var(--gold)]" }),
          /* @__PURE__ */ jsx("span", { children: b })
        ] }, b)) }) }),
        /* @__PURE__ */ jsx(Accordion, { title: "FAQ", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: t.faq.map((f) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: f.q }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[color:var(--muted-foreground)]", children: f.a })
        ] }, f.q)) }) })
      ] })
    ] }) }, t.slug)) }) })
  ] });
}
function Meta({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.24em] uppercase text-[color:var(--muted-foreground)]", children: label }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-lg text-[color:var(--charcoal)]", children: value })
  ] });
}
function Accordion({
  title,
  children
}) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-[color:var(--border)]", children: [
    /* @__PURE__ */ jsxs("button", { onClick: () => setOpen((v) => !v), className: "flex w-full items-center justify-between py-5 text-left text-xs tracking-[0.24em] uppercase", children: [
      title,
      /* @__PURE__ */ jsx(ChevronDown, { size: 16, className: `transition-transform ${open ? "rotate-180 text-[color:var(--gold-dark)]" : ""}` })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`, children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden text-sm leading-relaxed text-[color:var(--muted-foreground)]", children }) })
  ] });
}
export {
  TreatmentsPage as component
};
