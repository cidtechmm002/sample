import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useRouterState, Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { X, Menu, MessageCircle, Send, Phone, Plus } from "lucide-react";
import Lenis from "lenis";
import { z } from "zod";
const appCss = "/assets/styles-C6KHHHFv.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const treatmentNose = "/assets/treatment-nose-r9KGyfBH.jpg";
const treatmentEyes = "/assets/treatment-eyes-COp0feFs.jpg";
const treatmentFace = "/assets/treatment-face-Cs6qM1yL.jpg";
const treatmentBody = "/assets/treatment-body-DTOlSJFt.jpg";
const treatmentSkin = "/assets/treatment-skin-B3CRyT6w.jpg";
const treatmentLipo = "/assets/treatment-lipo-CFM8iXit.jpg";
const CLINIC = {
  name: "SMILE Plastic Surgery",
  phone: "+95 9 123 456 789",
  email: "hello@smileplasticsurgery.mm",
  address: "No. 88, Pyay Road, Bahan Township, Yangon",
  hours: "Mon – Sat · 09:00 – 18:00"
};
const STATS = [
  { value: "8+", label: "Years of Practice" },
  { value: "3,000+", label: "Procedures" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "12", label: "Board-Certified Specialists" }
];
const TREATMENTS = [
  {
    slug: "rhinoplasty",
    name: "Rhinoplasty",
    myanmar: "နှာခေါင်းပြုပြင်ခြင်း",
    category: "Nose",
    image: treatmentNose,
    duration: "2 – 4 hrs",
    recovery: "7 – 14 days",
    price: "From $2,800",
    blurb: "Refining the nose to harmonize with your natural features.",
    benefits: [
      "Customized to facial proportions",
      "Improved breathing function",
      "Minimal-incision techniques",
      "Long-lasting natural results"
    ],
    procedure: "Performed under general anesthesia using closed or open techniques, depending on the desired outcome. Surgery typically lasts two to four hours with a discreet recovery suite stay.",
    faq: [
      { q: "When can I return to work?", a: "Most clients return after 10–14 days." },
      { q: "Is the result permanent?", a: "Yes — once healing completes, results are lifelong." }
    ]
  },
  {
    slug: "double-eyelid",
    name: "Double Eyelid",
    myanmar: "မျက်ခွံနှစ်ထပ်ပြုပြင်ခြင်း",
    category: "Eyes",
    image: treatmentEyes,
    duration: "45 – 90 min",
    recovery: "5 – 7 days",
    price: "From $1,200",
    blurb: "Soft, defined eyes through incisional or non-incisional methods.",
    benefits: ["Natural defined crease", "Brighter, more open look", "Minimal scarring", "Tailored fold height"],
    procedure: "Performed under local anesthesia with sedation. Discreet sutures are removed within a week.",
    faq: [
      { q: "Incision or non-incision?", a: "Our surgeon recommends the right method based on tissue analysis." },
      { q: "Is bruising visible?", a: "Mild bruising fades within 5–7 days." }
    ]
  },
  {
    slug: "face-contouring",
    name: "Face Contouring",
    myanmar: "မျက်နှာပုံစံပြုပြင်ခြင်း",
    category: "Face",
    image: treatmentFace,
    duration: "1 – 3 hrs",
    recovery: "10 – 21 days",
    price: "From $3,400",
    blurb: "Sculpted jawline and cheek architecture for refined elegance.",
    benefits: ["Slimmer V-line", "Defined cheekbones", "Symmetric proportions", "Lasting transformation"],
    procedure: "Combines bone contouring, buccal fat removal and fillers in a single session under general anesthesia.",
    faq: [
      { q: "Will it look natural?", a: "We design to preserve your individual character." },
      { q: "Can I eat normally after?", a: "Soft diet for 7 days, normal diet from day 14." }
    ]
  },
  {
    slug: "breast-surgery",
    name: "Breast Surgery",
    myanmar: "ရင်အလှပြုပြင်ခြင်း",
    category: "Body",
    image: treatmentBody,
    duration: "2 – 3 hrs",
    recovery: "14 – 21 days",
    price: "From $4,200",
    blurb: "Augmentation, lift and reshaping with motiva implants.",
    benefits: ["Premium ergonomic implants", "Sub-fascial placement", "Hidden incision", "Soft natural movement"],
    procedure: "Performed under general anesthesia with an overnight stay in our recovery suite.",
    faq: [
      { q: "How long do implants last?", a: "Modern implants are designed for lifetime use." },
      { q: "Scar visibility?", a: "Hidden in the inframammary fold, fades over 12 months." }
    ]
  },
  {
    slug: "liposuction",
    name: "Liposuction",
    myanmar: "အဆီစုပ်ထုတ်ခြင်း",
    category: "Body",
    image: treatmentLipo,
    duration: "1 – 4 hrs",
    recovery: "7 – 14 days",
    price: "From $2,600",
    blurb: "VASER ultrasound-assisted body sculpting for precise definition.",
    benefits: ["Smooth refined silhouette", "Skin tightening effect", "Minimal downtime", "Permanent fat removal"],
    procedure: "Tumescent VASER liposuction under twilight sedation, returning home the same day.",
    faq: [
      { q: "Is it permanent?", a: "Fat cells removed do not return with stable weight." },
      { q: "Compression garment?", a: "Worn for 4 weeks for optimal contour." }
    ]
  },
  {
    slug: "skin-rejuvenation",
    name: "Skin Rejuvenation",
    myanmar: "အသားအရေပြုပြင်ခြင်း",
    category: "Skin",
    image: treatmentSkin,
    duration: "30 – 60 min",
    recovery: "0 – 3 days",
    price: "From $480",
    blurb: "Laser, exosome and bio-stimulator protocols for luminous skin.",
    benefits: ["Radiant tone", "Reduced pores & lines", "Even pigment", "No surgical downtime"],
    procedure: "Customized in-clinic protocol combining laser, micro-needling and topical exosomes.",
    faq: [
      { q: "How many sessions?", a: "A series of 3–6 sessions for transformative results." },
      { q: "Maintenance?", a: "Quarterly touch-ups maintain the glow." }
    ]
  }
];
const TIMELINE = [
  { year: "2015", title: "Graduation", detail: "Doctor of Medicine, University of Medicine 1, Yangon" },
  { year: "2017", title: "Fellowship", detail: "Plastic Surgery Fellowship, Seoul National University" },
  { year: "2018", title: "International Training", detail: "Advanced Aesthetic Surgery, JK Plastic Surgery, Korea" },
  { year: "2020", title: "Board Certification", detail: "Diplomate, International Society of Aesthetic Plastic Surgery" },
  { year: "2023", title: "SMILE Plastic Surgery", detail: "Founded the clinic with a vision of refined, ethical aesthetics" }
];
const TESTIMONIALS = [
  { name: "Hnin Ei", role: "Yangon", quote: "The team treated me with such care. My results feel like a more confident version of me." },
  { name: "Phyu Phyu", role: "Mandalay", quote: "Truly the most professional clinic I have visited. Every detail was considered." },
  { name: "May Thu", role: "Singapore", quote: "Travelled from abroad — worth every mile. Natural, elegant outcome." },
  { name: "Su Lwin", role: "Bangkok", quote: "From consultation to recovery, the experience was unmatched." }
];
const NAV = [
  { to: "/", label: "Home" },
  { to: "/treatments", label: "Treatments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];
function Header() {
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
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[color:var(--pearl)]/85 backdrop-blur-xl border-b border-[color:var(--border)]" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "group flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-2xl", children: CLINIC.name }),
            /* @__PURE__ */ jsx("span", { className: "hidden text-eyebrow text-[color:var(--gold-dark)] md:inline", children: "Clinic" })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-10 md:flex", children: NAV.map((item) => {
            const active = item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
            return /* @__PURE__ */ jsx(
              Link,
              {
                to: item.to,
                className: `underline-grow text-sm tracking-[0.18em] uppercase font-sans transition-colors ${active ? "text-[color:var(--gold-dark)]" : "text-[color:var(--foreground)]/80 hover:text-[color:var(--foreground)]"}`,
                children: item.label
              },
              item.to
            );
          }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "shine-on-hover group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[color:var(--charcoal)] bg-[color:var(--charcoal)] px-6 py-3 text-xs tracking-[0.24em] uppercase text-[color:var(--pearl)] transition-all hover:bg-transparent hover:text-[color:var(--charcoal)]",
              children: "Book Consultation"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Menu",
              onClick: () => setOpen((v) => !v),
              className: "md:hidden rounded-full border border-[color:var(--border)] p-2 text-[color:var(--foreground)]",
              children: open ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-[color:var(--border)] bg-[color:var(--pearl)]", children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col px-6 py-6", children: [
          NAV.map((item) => /* @__PURE__ */ jsx(Link, { to: item.to, className: "border-b border-[color:var(--border)] py-4 text-sm tracking-[0.18em] uppercase", children: item.label }, item.to)),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "mt-6 inline-flex items-center justify-center rounded-full bg-[color:var(--charcoal)] px-6 py-3 text-xs tracking-[0.24em] uppercase text-[color:var(--pearl)]",
              children: "Book Consultation"
            }
          )
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative bg-[color:var(--charcoal)] text-[color:var(--pearl)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[1400px] px-6 py-20 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-16 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold)]", children: "SMILE Plastic Surgery · Clinic" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-display text-4xl md:text-5xl leading-[1.05]", children: "An invitation to your most refined self." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed text-[color:var(--pearl)]/70", children: "Begin with a private consultation. Our team will craft a plan as individual as you are." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact",
            className: "mt-10 inline-flex items-center gap-3 border-b border-[color:var(--gold)] pb-2 text-xs tracking-[0.3em] uppercase text-[color:var(--gold)]",
            children: "Reserve a private visit →"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3 md:col-start-7", children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold)]/70", children: "Visit" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm leading-relaxed text-[color:var(--pearl)]/85", children: CLINIC.address }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-[color:var(--pearl)]/70", children: CLINIC.hours })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold)]/70", children: "Contact" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm", children: CLINIC.phone }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[color:var(--pearl)]/70", children: CLINIC.email }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-3 text-xs tracking-[0.2em] uppercase text-[color:var(--pearl)]/70", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[color:var(--gold)]", children: "Instagram" }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[color:var(--gold)]", children: "TikTok" }),
          /* @__PURE__ */ jsx("span", { children: "·" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-[color:var(--gold)]", children: "Facebook" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-20 flex flex-col gap-4 border-t border-[color:var(--pearl)]/10 pt-8 text-xs tracking-[0.16em] uppercase text-[color:var(--pearl)]/50 md:flex-row md:justify-between", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        CLINIC.name,
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Crafted with care · Yangon, Myanmar" })
    ] })
  ] }) });
}
const ITEMS = [
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/959123456789", color: "bg-[color:var(--teal-dark)]" },
  { label: "Messenger", icon: MessageCircle, href: "https://m.me/smileplasticsurgery", color: "bg-[color:var(--teal)]" },
  { label: "Telegram", icon: Send, href: "https://t.me/smileplasticsurgery", color: "bg-[color:var(--teal-light)]" },
  { label: "Phone", icon: Phone, href: "tel:+959123456789", color: "bg-[color:var(--gold-dark)]" }
];
function FloatingContact() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 md:bottom-10 md:right-10", children: [
    open && /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3", children: ITEMS.map((it, i) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: it.href,
        target: "_blank",
        rel: "noreferrer",
        style: { animationDelay: `${i * 60}ms` },
        className: "animate-fade-up group flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsx("span", { className: "hidden rounded-full bg-[color:var(--charcoal)] px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-[color:var(--pearl)] md:inline", children: it.label }),
          /* @__PURE__ */ jsx("span", { className: `${it.color} flex h-12 w-12 items-center justify-center rounded-full text-[color:var(--pearl)] shadow-lg transition-transform hover:scale-110`, children: /* @__PURE__ */ jsx(it.icon, { size: 18 }) })
        ]
      },
      it.label
    )) }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        "aria-label": "Contact",
        className: "flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--charcoal)] text-[color:var(--gold)] shadow-2xl transition-transform hover:scale-105",
        children: open ? /* @__PURE__ */ jsx(X, { size: 20 }) : /* @__PURE__ */ jsx(Plus, { size: 20 })
      }
    )
  ] });
}
function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return null;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-[color:var(--pearl)] px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-eyebrow text-[color:var(--gold-dark)]", children: "Page not found" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-6 font-display text-7xl", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-[color:var(--muted-foreground)]", children: "The page you're looking for has moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-[color:var(--charcoal)] px-6 py-3 text-xs tracking-[0.24em] uppercase text-[color:var(--pearl)]",
        children: "Return Home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-[color:var(--pearl)] px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "font-display text-2xl", children: "Something didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-[color:var(--muted-foreground)]", children: "Please try again in a moment." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => {
          router2.invalidate();
          reset();
        },
        className: "rounded-full bg-[color:var(--charcoal)] px-6 py-3 text-xs tracking-[0.24em] uppercase text-[color:var(--pearl)]",
        children: "Try again"
      }
    ) })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SMILE Plastic Surgery — Luxury Medical Aesthetics" },
      { name: "description", content: "Luxury plastic surgery and aesthetic medicine in Yangon. Rhinoplasty, double eyelid, contouring and skin rejuvenation by experienced surgeons." },
      { property: "og:title", content: "SMILE Plastic Surgery — Luxury Medical Aesthetics" },
      { name: "twitter:title", content: "SMILE Plastic Surgery — Luxury Medical Aesthetics" },
      { property: "og:description", content: "Luxury plastic surgery and aesthetic medicine in Yangon. Rhinoplasty, double eyelid, contouring and skin rejuvenation by experienced surgeons." },
      { name: "twitter:description", content: "Luxury plastic surgery and aesthetic medicine in Yangon. Rhinoplasty, double eyelid, contouring and skin rejuvenation by experienced surgeons." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/471896d2-cc98-44ce-94d2-97dc7780755c/id-preview-b2ca3b88--a7c966a5-839c-416a-9b90-478c83fefb1a.lovable.app-1780158243154.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/471896d2-cc98-44ce-94d2-97dc7780755c/id-preview-b2ca3b88--a7c966a5-839c-416a-9b90-478c83fefb1a.lovable.app-1780158243154.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingContact, {})
  ] });
}
const $$splitComponentImporter$4 = () => import("./treatments-DJPhr3Hv.js");
const Route$4 = createFileRoute("/treatments")({
  head: () => ({
    meta: [{
      title: "Treatments — SMILE Plastic Surgery"
    }, {
      name: "description",
      content: "Rhinoplasty, double eyelid, face contouring, breast surgery, liposuction and skin rejuvenation in Yangon."
    }, {
      property: "og:title",
      content: "Treatments — SMILE Plastic Surgery"
    }, {
      property: "og:description",
      content: "Surgical and non-surgical aesthetic treatments at SMILE Plastic Surgery."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./gallery-BIF_3w0U.js");
const Route$3 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — SMILE Plastic Surgery"
    }, {
      name: "description",
      content: "Before & after, video results and real patient stories from SMILE Plastic Surgery."
    }, {
      property: "og:title",
      content: "Gallery — Real Results"
    }, {
      property: "og:description",
      content: "Real, unretouched aesthetic results from our patients."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./doctors-Dtcwjsek.js");
const Route$2 = createFileRoute("/doctors")({
  head: () => ({
    meta: [{
      title: "Doctors — SMILE Plastic Surgery"
    }, {
      name: "description",
      content: "Meet our board-certified aesthetic surgeons trained in Korea and internationally certified."
    }, {
      property: "og:title",
      content: "Our Doctors — SMILE Plastic Surgery"
    }, {
      property: "og:description",
      content: "Board-certified surgeons trained in Korea and certified by ISAPS."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./contact-C_hPU4dL.js");
const Route$1 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact & Consultation — SMILE Plastic Surgery"
    }, {
      name: "description",
      content: "Book a private consultation at SMILE Plastic Surgery in Yangon. Reach us via phone, WhatsApp, or our booking form."
    }, {
      property: "og:title",
      content: "Contact & Consultation"
    }, {
      property: "og:description",
      content: "Reserve a private consultation at SMILE Plastic Surgery."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(6, "Please enter a valid phone"),
  procedure: z.string().min(1, "Choose a procedure"),
  date: z.string().min(1, "Choose a date"),
  message: z.string().max(500).optional()
});
const $$splitComponentImporter = () => import("./index-DOOF7Q6y.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "SMILE Plastic Surgery — Luxury Medical Aesthetics"
    }, {
      name: "description",
      content: "An atelier of refined aesthetic medicine. Rhinoplasty, contouring, and skin rejuvenation by board-certified surgeons in Yangon."
    }, {
      property: "og:title",
      content: "SMILE Plastic Surgery — Luxury Medical Aesthetics"
    }, {
      property: "og:description",
      content: "An atelier of refined aesthetic medicine in Yangon, Myanmar."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TreatmentsRoute = Route$4.update({
  id: "/treatments",
  path: "/treatments",
  getParentRoute: () => Route$5
});
const GalleryRoute = Route$3.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$5
});
const DoctorsRoute = Route$2.update({
  id: "/doctors",
  path: "/doctors",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$1.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  DoctorsRoute,
  GalleryRoute,
  TreatmentsRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CLINIC as C,
  STATS as S,
  TESTIMONIALS as T,
  TIMELINE as a,
  TREATMENTS as b,
  router as r
};
