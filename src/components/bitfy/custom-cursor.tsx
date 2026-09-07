import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;
    let hovering = false;
    let text = "";

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const over = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      if (t) {
        hovering = true;
        text = t.dataset.cursor ?? "";
      } else {
        hovering = false;
        text = "";
      }
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring.current) {
        const s = hovering ? 2.35 : 1;
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) scale(${s})`;
        ring.current.style.opacity = hovering ? "0.85" : "0.55";
      }
      if (label.current) {
        label.current.textContent = text;
        label.current.style.opacity = text ? "1" : "0";
        label.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden md:block" aria-hidden>
      <div
        ref={dot}
        className="absolute top-0 left-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-castano"
      />
      <div
        ref={ring}
        className="absolute top-0 left-0 size-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-castano/50 mix-blend-multiply transition-opacity duration-300"
      />
      <span
        ref={label}
        className="absolute top-6 left-0 -translate-x-1/2 font-display text-[10px] tracking-[0.28em] text-castano uppercase opacity-0"
      />
    </div>
  );
}
