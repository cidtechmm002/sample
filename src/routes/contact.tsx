import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { CLINIC, TREATMENTS } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import clinicExterior from "@/assets/clinic-exterior.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Consultation — SMILE Plastic Surgery" },
      { name: "description", content: "Book a private consultation at SMILE Plastic Surgery in Yangon. Reach us via phone, WhatsApp, or our booking form." },
      { property: "og:title", content: "Contact & Consultation" },
      { property: "og:description", content: "Reserve a private consultation at SMILE Plastic Surgery." },
    ],
  }),
  component: ContactPage,
});

const Schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(6, "Please enter a valid phone"),
  procedure: z.string().min(1, "Choose a procedure"),
  date: z.string().min(1, "Choose a date"),
  message: z.string().max(500).optional(),
});
type FormData = z.infer<typeof Schema>;

function ContactPage() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Booking", data);
    setDone(true);
    reset();
    setTimeout(() => setDone(false), 5000);
  };

  return (
    <>
      <section className="relative grid min-h-[100svh] pt-24 md:grid-cols-12">
        {/* Left: form */}
        <div className="bg-[color:var(--pearl)] px-6 py-20 md:col-span-7 md:px-16 md:py-32 lg:px-24">
          <Reveal>
            <p className="text-eyebrow text-[color:var(--gold-dark)]">Private Consultation</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
              Begin <em className="font-serif-display text-[color:var(--gold-dark)]">a quiet conversation.</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)]">
              Share a few details and our concierge will respond within one working day to arrange your visit.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-8">
              <Field label="Your Name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  placeholder="As you'd like to be addressed"
                  className="w-full border-b border-[color:var(--border)] bg-transparent py-3 text-base text-[color:var(--foreground)] placeholder:text-[color:var(--muted-foreground)]/60 focus:border-[color:var(--gold)] focus:outline-none"
                />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input
                  {...register("phone")}
                  placeholder="+95 9 ..."
                  className="w-full border-b border-[color:var(--border)] bg-transparent py-3 text-base focus:border-[color:var(--gold)] focus:outline-none"
                />
              </Field>
              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Procedure of Interest" error={errors.procedure?.message}>
                  <select
                    {...register("procedure")}
                    defaultValue=""
                    className="w-full border-b border-[color:var(--border)] bg-transparent py-3 text-base focus:border-[color:var(--gold)] focus:outline-none"
                  >
                    <option value="" disabled>Choose one…</option>
                    {TREATMENTS.map((t) => (
                      <option key={t.slug} value={t.name}>{t.name}</option>
                    ))}
                    <option value="other">Something else</option>
                  </select>
                </Field>
                <Field label="Preferred Date" error={errors.date?.message}>
                  <input
                    type="date"
                    {...register("date")}
                    className="w-full border-b border-[color:var(--border)] bg-transparent py-3 text-base focus:border-[color:var(--gold)] focus:outline-none"
                  />
                </Field>
              </div>
              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Anything you'd like our concierge to know"
                  className="w-full border-b border-[color:var(--border)] bg-transparent py-3 text-base focus:border-[color:var(--gold)] focus:outline-none resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-4 inline-flex items-center gap-4 rounded-full bg-[color:var(--charcoal)] px-10 py-5 text-xs tracking-[0.3em] uppercase text-[color:var(--pearl)] transition-all hover:bg-[color:var(--gold-dark)] disabled:opacity-50"
              >
                {isSubmitting ? "Sending…" : done ? <><Check size={16} /> Request received</> : "Request Consultation →"}
              </button>
              {done && (
                <p className="text-sm text-[color:var(--gold-dark)] animate-fade-up">
                  Thank you. Our concierge will be in touch within one working day.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        {/* Right: clinic info + map */}
        <aside className="relative bg-[color:var(--charcoal)] text-[color:var(--pearl)] md:col-span-5">
          <img src={clinicExterior} alt="Clinic exterior" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--charcoal)]/60 to-[color:var(--charcoal)]" />
          <div className="relative flex h-full flex-col gap-12 px-8 py-20 md:px-12 md:py-32">
            <div>
              <p className="text-eyebrow text-[color:var(--gold-light)]">Visit Us</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.1]">{CLINIC.name}</h2>
              <p className="mt-2 font-serif-display text-lg italic text-[color:var(--pearl)]/70">Luxury medical aesthetics · Yangon</p>
            </div>

            <ul className="space-y-6 text-sm">
              <Info icon={MapPin} label="Address" value={CLINIC.address} />
              <Info icon={Phone} label="Phone" value={CLINIC.phone} />
              <Info icon={Mail} label="Email" value={CLINIC.email} />
              <Info icon={Clock} label="Hours" value={CLINIC.hours} />
            </ul>

            <div className="mt-auto overflow-hidden rounded-lg border border-[color:var(--pearl)]/15">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=96.135%2C16.795%2C96.155%2C16.815&layer=mapnik&marker=16.805%2C96.145"
                className="block h-64 w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--muted-foreground)]">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="mt-2 block text-xs text-[color:var(--destructive)]">{error}</span>}
    </label>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--gold)]/50 text-[color:var(--gold-light)]">
        <Icon size={14} />
      </span>
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--gold-light)]/70">{label}</p>
        <p className="mt-1 text-[color:var(--pearl)]/90">{value}</p>
      </div>
    </li>
  );
}
