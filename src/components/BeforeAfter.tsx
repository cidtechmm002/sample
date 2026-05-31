import { useRef, useState, useCallback } from "react";

type Props = { before: string; after: string; alt?: string; className?: string };

export function BeforeAfter({ before, after, alt = "", className = "" }: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClient = useCallback((clientX: number) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <div
      ref={ref}
      className={`relative select-none overflow-hidden rounded-lg ${className}`}
      onMouseDown={(e) => { dragging.current = true; setFromClient(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) setFromClient(e.clientX); }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => { dragging.current = true; setFromClient(e.touches[0].clientX); }}
      onTouchMove={(e) => { if (dragging.current) setFromClient(e.touches[0].clientX); }}
      onTouchEnd={() => (dragging.current = false)}
    >
      <img src={after} alt={alt} className="block w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={alt}
          className="block h-full object-cover"
          style={{ width: ref.current?.clientWidth ?? "100%", maxWidth: "none" }}
          draggable={false}
        />
      </div>
      <div className="pointer-events-none absolute top-4 left-4 rounded-full bg-[color:var(--charcoal)]/55 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-[color:var(--pearl)]">
        Before
      </div>
      <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-[color:var(--gold)]/90 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-[color:var(--charcoal)]">
        After
      </div>
      <div
        className="absolute inset-y-0 w-px bg-[color:var(--gold)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--gold)] bg-[color:var(--pearl)] text-[color:var(--charcoal)] shadow-lg">
          <span className="text-xs tracking-widest">⇆</span>
        </div>
      </div>
    </div>
  );
}
