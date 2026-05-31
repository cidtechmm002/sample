import { jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
const doctorPortrait = "/assets/doctor-portrait-tVcZjvbc.jpg";
function Counter({ to, suffix = "", duration = 2e3 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    n.toLocaleString(),
    suffix
  ] });
}
export {
  Counter as C,
  doctorPortrait as d
};
