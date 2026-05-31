import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { R as Reveal } from "./Reveal-GVcn0kqg.js";
import { b as TREATMENTS, C as CLINIC } from "./router-BFX5w7eH.js";
import { Check, MapPin, Phone, Mail, Clock } from "lucide-react";
import "framer-motion";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "lenis";
const clinicExterior = "/assets/clinic-exterior-mY3jxLEg.jpg";
const Schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(6, "Please enter a valid phone"),
  procedure: z.string().min(1, "Choose a procedure"),
  date: z.string().min(1, "Choose a date"),
  message: z.string().max(500).optional()
});
function ContactPage() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    reset
  } = useForm({
    resolver: zodResolver(Schema)
  });
  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Booking", data);
    setDone(true);
    reset();
    setTimeout(() => setDone(false), 5e3);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("section", { className: "relative grid min-h-[100svh] pt-24 md:grid-cols-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[color:var(--pearl)] px-6 py-20 md:col-span-7 md:px-16 md:py-32 lg:px-24", children: [
      /* @__PURE__ */ jsxs(Reveal, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Private Consultation" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-5xl leading-[1.02] md:text-7xl", children: [
          "Begin ",
          /* @__PURE__ */ jsx("em", { className: "font-serif-display text-[color:var(--gold-dark)]", children: "a quiet conversation." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]", children: "Share a few details and our concierge will respond within one working day to arrange your visit." })
      ] }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "mt-12 space-y-8", children: [
        /* @__PURE__ */ jsx(Field, { label: "Your Name", error: errors.name?.message, children: /* @__PURE__ */ jsx("input", { ...register("name"), placeholder: "As you'd like to be addressed", className: "w-full border-b border-[color:var(--border)] bg-transparent py-3 text-base text-[color:var(--foreground)] placeholder:text-[color:var(--muted-foreground)]/60 focus:border-[color:var(--gold)] focus:outline-none" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Phone", error: errors.phone?.message, children: /* @__PURE__ */ jsx("input", { ...register("phone"), placeholder: "+95 9 ...", className: "w-full border-b border-[color:var(--border)] bg-transparent py-3 text-base focus:border-[color:var(--gold)] focus:outline-none" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Procedure of Interest", error: errors.procedure?.message, children: /* @__PURE__ */ jsxs("select", { ...register("procedure"), defaultValue: "", className: "w-full border-b border-[color:var(--border)] bg-transparent py-3 text-base focus:border-[color:var(--gold)] focus:outline-none", children: [
            /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Choose one…" }),
            TREATMENTS.map((t) => /* @__PURE__ */ jsx("option", { value: t.name, children: t.name }, t.slug)),
            /* @__PURE__ */ jsx("option", { value: "other", children: "Something else" })
          ] }) }),
          /* @__PURE__ */ jsx(Field, { label: "Preferred Date", error: errors.date?.message, children: /* @__PURE__ */ jsx("input", { type: "date", ...register("date"), className: "w-full border-b border-[color:var(--border)] bg-transparent py-3 text-base focus:border-[color:var(--gold)] focus:outline-none" }) })
        ] }),
        /* @__PURE__ */ jsx(Field, { label: "Message", error: errors.message?.message, children: /* @__PURE__ */ jsx("textarea", { ...register("message"), rows: 3, placeholder: "Anything you'd like our concierge to know", className: "w-full border-b border-[color:var(--border)] bg-transparent py-3 text-base focus:border-[color:var(--gold)] focus:outline-none resize-none" }) }),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: isSubmitting, className: "group mt-4 inline-flex items-center gap-4 rounded-full bg-[color:var(--charcoal)] px-10 py-5 text-xs tracking-[0.3em] uppercase text-[color:var(--pearl)] transition-all hover:bg-[color:var(--gold-dark)] disabled:opacity-50", children: isSubmitting ? "Sending…" : done ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check, { size: 16 }),
          " Request received"
        ] }) : "Request Consultation →" }),
        done && /* @__PURE__ */ jsx("p", { className: "text-sm text-[color:var(--gold-dark)] animate-fade-up", children: "Thank you. Our concierge will be in touch within one working day." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("aside", { className: "relative bg-[color:var(--charcoal)] text-[color:var(--pearl)] md:col-span-5", children: [
      /* @__PURE__ */ jsx("img", { src: clinicExterior, alt: "Clinic exterior", className: "absolute inset-0 h-full w-full object-cover opacity-30", loading: "lazy" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[color:var(--charcoal)]/60 to-[color:var(--charcoal)]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative flex h-full flex-col gap-12 px-8 py-20 md:px-12 md:py-32", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-light)]", children: "Visit Us" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-4xl leading-[1.1]", children: CLINIC.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 font-serif-display text-lg italic text-[color:var(--pearl)]/70", children: "Luxury medical aesthetics · Yangon" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-6 text-sm", children: [
          /* @__PURE__ */ jsx(Info, { icon: MapPin, label: "Address", value: CLINIC.address }),
          /* @__PURE__ */ jsx(Info, { icon: Phone, label: "Phone", value: CLINIC.phone }),
          /* @__PURE__ */ jsx(Info, { icon: Mail, label: "Email", value: CLINIC.email }),
          /* @__PURE__ */ jsx(Info, { icon: Clock, label: "Hours", value: CLINIC.hours })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-auto overflow-hidden rounded-lg border border-[color:var(--pearl)]/15", children: /* @__PURE__ */ jsx("iframe", { title: "Map", src: "https://www.openstreetmap.org/export/embed.html?bbox=96.135%2C16.795%2C96.155%2C16.815&layer=mapnik&marker=16.805%2C96.145", className: "block h-64 w-full grayscale", loading: "lazy" }) })
      ] })
    ] })
  ] }) });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[10px] tracking-[0.3em] uppercase text-[color:var(--muted-foreground)]", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-1", children }),
    error && /* @__PURE__ */ jsx("span", { className: "mt-2 block text-xs text-[color:var(--destructive)]", children: error })
  ] });
}
function Info({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("li", { className: "flex gap-4", children: [
    /* @__PURE__ */ jsx("span", { className: "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--gold)]/50 text-[color:var(--gold-light)]", children: /* @__PURE__ */ jsx(Icon, { size: 14 }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold-light)]/70", children: label }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-[color:var(--pearl)]/90", children: value })
    ] })
  ] });
}
export {
  ContactPage as component
};
