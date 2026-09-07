import { useEffect, useRef } from "react";
import { Reveal } from "./reveal";

export function Orb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let mx = 0.5;
    let my = 0.5;
    let tx = 0.5;
    let ty = 0.5;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      tx = (e.clientX - rect.left) / rect.width;
      ty = (e.clientY - rect.top) / rect.height;
    };

    const draw = () => {
      t += 0.008;
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      ctx.clearRect(0, 0, w, h);

      const cx = w * (0.5 + (mx - 0.5) * 0.18);
      const cy = h * (0.5 + (my - 0.5) * 0.18);
      const radius = Math.min(w, h) * 0.32;

      const g = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius * 1.6);
      g.addColorStop(0, "rgba(196, 165, 116, 0.55)");
      g.addColorStop(0.35, "rgba(139, 94, 60, 0.28)");
      g.addColorStop(1, "rgba(44, 33, 28, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.55, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(196, 165, 116, 0.28)";
      ctx.lineWidth = 1;
      const rings = 7;
      for (let i = 0; i < rings; i++) {
        const p = i / rings;
        const rx = radius * (0.35 + p * 0.85);
        const ry = rx * (0.62 + Math.sin(t + i) * 0.06);
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, t * 0.4 + i * 0.35 + (mx - 0.5), 0, Math.PI * 2);
        ctx.stroke();
      }

      const dots = 42;
      for (let i = 0; i < dots; i++) {
        const a = (i / dots) * Math.PI * 2 + t * 0.6;
        const r = radius * (0.55 + Math.sin(t + i) * 0.08);
        const x = cx + Math.cos(a) * r * (1 + (mx - 0.5) * 0.2);
        const y = cy + Math.sin(a) * r * 0.7 * (1 + (my - 0.5) * 0.2);
        ctx.fillStyle = i % 5 === 0 ? "rgba(196,165,116,0.9)" : "rgba(247,244,240,0.35)";
        ctx.beginPath();
        ctx.arc(x, y, i % 5 === 0 ? 2.2 : 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (fine) canvas.addEventListener("pointermove", onMove, { passive: true });
    if (!reduce) raf = requestAnimationFrame(draw);
    else draw();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-espresso px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-trigo uppercase">Proceso</p>
          <h2 className="font-display text-4xl tracking-[-0.04em] text-crema md:text-5xl">
            Alcance cerrado. Trato directo. Web lista para usar.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-crema/65">
            Tiempos cortos, precios accesibles y diseño enfocado en que el visitante entienda y
            contacte. Digitalizá tu negocio, a tu ritmo.
          </p>
        </Reveal>
        <div className="relative h-[320px] md:h-[460px]">
          <canvas ref={canvasRef} className="h-full w-full" aria-hidden />
        </div>
      </div>
    </section>
  );
}
