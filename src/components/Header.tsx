import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CLINIC } from "@/lib/data";
import { motion } from "framer-motion";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/treatments", label: "Treatments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--ivory)]/90 backdrop-blur-xl border-b border-[color:var(--border)]"
          : "bg-[color:var(--ivory)]/50 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3.5 md:px-10 md:py-4">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl text-[color:var(--dark-forest)]">
            {CLINIC.name}
          </span>
          <span className="hidden text-eyebrow text-[color:var(--gold)] md:inline">Clinic</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative pb-1.5 text-sm tracking-[0.18em] uppercase font-sans transition-colors ${
                  active
                    ? "text-[color:var(--gold)]"
                    : "text-[color:var(--emerald)]/80 hover:text-[color:var(--emerald)]"
                }`}
              >
                {item.label}
                {active && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[color:var(--gold)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="shine-on-hover group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[color:var(--emerald)] bg-[color:var(--emerald)] px-6 py-3 text-xs tracking-[0.24em] uppercase text-white transition-all hover:bg-[color:var(--gold)] hover:border-[color:var(--gold)] hover:text-[color:var(--dark-forest)]"
          >
            Book Consultation
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-full border border-[color:var(--border)] p-2 text-[color:var(--foreground)]"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--ivory)]">
          <nav className="flex flex-col px-6 py-6">
            {NAV.map((item) => {
              const active =
                item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`border-b border-[color:var(--border)] py-4 text-sm tracking-[0.18em] uppercase ${
                    active ? "text-[color:var(--gold)]" : "text-[color:var(--emerald)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--emerald)] px-6 py-3 text-xs tracking-[0.24em] uppercase text-white hover:bg-[color:var(--gold)]"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
