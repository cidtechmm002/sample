import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
function BeforeAfter({ before, after, alt = "", className = "" }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);
  const setFromClient = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = (clientX - r.left) / r.width * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: `relative select-none overflow-hidden rounded-lg ${className}`,
      onMouseDown: (e) => {
        dragging.current = true;
        setFromClient(e.clientX);
      },
      onMouseMove: (e) => {
        if (dragging.current) setFromClient(e.clientX);
      },
      onMouseUp: () => dragging.current = false,
      onMouseLeave: () => dragging.current = false,
      onTouchStart: (e) => {
        dragging.current = true;
        setFromClient(e.touches[0].clientX);
      },
      onTouchMove: (e) => {
        if (dragging.current) setFromClient(e.touches[0].clientX);
      },
      onTouchEnd: () => dragging.current = false,
      children: [
        /* @__PURE__ */ jsx("img", { src: after, alt, className: "block w-full h-full object-cover", draggable: false }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", style: { width: `${pos}%` }, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: before,
            alt,
            className: "block h-full object-cover",
            style: { width: ref.current?.clientWidth ?? "100%", maxWidth: "none" },
            draggable: false
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-4 left-4 rounded-full bg-[color:var(--charcoal)]/55 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-[color:var(--pearl)]", children: "Before" }),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-4 right-4 rounded-full bg-[color:var(--gold)]/90 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-[color:var(--charcoal)]", children: "After" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-y-0 w-px bg-[color:var(--gold)]",
            style: { left: `${pos}%` },
            children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--gold)] bg-[color:var(--pearl)] text-[color:var(--charcoal)] shadow-lg", children: /* @__PURE__ */ jsx("span", { className: "text-xs tracking-widest", children: "⇆" }) })
          }
        )
      ]
    }
  );
}
const beforeAfter1 = "/assets/before-after-1-cM7L5vPD.jpg";
const gallery1 = "/assets/gallery-1-BK89NMYb.jpg";
const gallery2 = "/assets/gallery-2-C0bQNz5D.jpg";
const gallery3 = "/assets/gallery-3-Bsi6IdDY.jpg";
const gallery4 = "/assets/gallery-4-783vzpNq.jpg";
const testimonial1 = "/assets/testimonial-1-BvQehbvZ.jpg";
export {
  BeforeAfter as B,
  gallery2 as a,
  beforeAfter1 as b,
  gallery3 as c,
  gallery4 as d,
  gallery1 as g,
  testimonial1 as t
};
