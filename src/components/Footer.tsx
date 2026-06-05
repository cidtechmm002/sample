import { Link } from "@tanstack/react-router";
import { CLINIC } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--dark-forest)] text-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 relative z-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-eyebrow text-[color:var(--gold)]">SMILE Plastic Surgery · Clinic</p>
            <h3 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] text-white">
              High-end medical aesthetics & surgical care.
            </h3>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
              Consult with our board-certified surgeons to receive a custom treatment
              recommendation.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 border-b border-[color:var(--gold)] pb-2 text-xs tracking-[0.3em] uppercase text-[color:var(--gold)] hover:border-white hover:text-white transition-colors"
            >
              Schedule Consultation →
            </Link>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="text-eyebrow text-[color:var(--gold)]/80">Visit</p>
            <p className="mt-5 text-sm leading-relaxed text-white/90">{CLINIC.address}</p>
            <p className="mt-5 text-sm text-white/70">{CLINIC.hours}</p>
          </div>

          <div className="md:col-span-3">
            <p className="text-eyebrow text-[color:var(--gold)]/80">Contact</p>
            <p className="mt-5 text-sm">{CLINIC.phone}</p>
            <p className="mt-2 text-sm text-white/70">{CLINIC.email}</p>
            <div className="mt-6 flex gap-3 text-xs tracking-[0.2em] uppercase text-white/70">
              <a href="#" className="hover:text-[color:var(--gold)] transition-colors">
                Instagram
              </a>
              <span>·</span>
              <a href="#" className="hover:text-[color:var(--gold)] transition-colors">
                TikTok
              </a>
              <span>·</span>
              <a href="#" className="hover:text-[color:var(--gold)] transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs tracking-[0.16em] uppercase text-white/50 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
          <p>Crafted with care · Yangon, Myanmar</p>
        </div>
      </div>
    </footer>
  );
}
