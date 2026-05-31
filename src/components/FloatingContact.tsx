import { useState } from "react";
import { MessageCircle, Phone, Send, X, Plus } from "lucide-react";

const ITEMS = [
  { label: "WhatsApp", icon: MessageCircle, href: "https://wa.me/959123456789", color: "bg-[color:var(--teal-dark)]" },
  { label: "Messenger", icon: MessageCircle, href: "https://m.me/smileplasticsurgery", color: "bg-[color:var(--teal)]" },
  { label: "Telegram", icon: Send, href: "https://t.me/smileplasticsurgery", color: "bg-[color:var(--teal-light)]" },
  { label: "Phone", icon: Phone, href: "tel:+959123456789", color: "bg-[color:var(--gold-dark)]" },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 md:bottom-10 md:right-10">
      {open && (
        <div className="flex flex-col gap-3">
          {ITEMS.map((it, i) => (
            <a
              key={it.label}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              style={{ animationDelay: `${i * 60}ms` }}
              className="animate-fade-up group flex items-center gap-3"
            >
              <span className="hidden rounded-full bg-[color:var(--charcoal)] px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-[color:var(--pearl)] md:inline">
                {it.label}
              </span>
              <span className={`${it.color} flex h-12 w-12 items-center justify-center rounded-full text-[color:var(--pearl)] shadow-lg transition-transform hover:scale-110`}>
                <it.icon size={18} />
              </span>
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--charcoal)] text-[color:var(--gold)] shadow-2xl transition-transform hover:scale-105"
      >
        {open ? <X size={20} /> : <Plus size={20} />}
      </button>
    </div>
  );
}
