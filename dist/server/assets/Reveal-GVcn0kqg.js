import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
function Reveal({ delay = 0, y = 28, children, ...rest }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
      ...rest,
      children
    }
  );
}
function WordReveal({ text, className = "", delay = 0 }) {
  const words = text.split(" ");
  return /* @__PURE__ */ jsx("span", { className, children: words.map((w, i) => /* @__PURE__ */ jsx("span", { className: "inline-block overflow-hidden align-bottom", children: /* @__PURE__ */ jsxs(
    motion.span,
    {
      initial: { y: "110%" },
      whileInView: { y: "0%" },
      viewport: { once: true },
      transition: { duration: 0.9, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] },
      className: "inline-block",
      children: [
        w,
        i < words.length - 1 ? " " : ""
      ]
    }
  ) }, i)) });
}
export {
  Reveal as R,
  WordReveal as W
};
