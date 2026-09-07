import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

const TITLE = ["Tu presencia", "digital,", "sin vueltas."];

export function Hero() {
  const light = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = light.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      el.style.background = `radial-gradient(520px circle at ${x}% ${y}%, color-mix(in oklab, var(--color-trigo) 22%, transparent), transparent 55%)`;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-crema px-5 pb-10 md:px-10 md:pb-14"
    >
      <div ref={light} className="pointer-events-none absolute inset-0 z-0 transition-[background] duration-700" />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]">
        <div className="absolute -top-24 -right-16 size-[46vw] max-w-[560px] rounded-full bg-hielo" />
        <div className="absolute bottom-[12%] left-[-8%] size-[28vw] max-w-[340px] rounded-full bg-trigo/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <div className="mb-8 flex items-center justify-between md:mb-12">
          <p className="max-w-[280px] text-sm leading-relaxed text-muted md:max-w-sm md:text-base">
            Diseño y desarrollo web para emprendedores, profesionales y PyMEs.
          </p>
          <span className="hidden font-display text-xs tracking-[0.28em] text-castano uppercase md:block">
            Estudio · AR
          </span>
        </div>

        <h1 className="font-display text-[13vw] leading-[0.88] tracking-[-0.055em] text-espresso sm:text-[11vw] md:text-[8.4vw] lg:text-[7.2vw]">
          {TITLE.map((word, i) => (
            <span key={word} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%", opacity: 0, filter: "blur(12px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.95,
                  delay: 0.12 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              data-cursor="CHAT"
              className="group relative inline-flex h-12 items-center overflow-hidden rounded-full bg-espresso px-7 text-sm text-crema"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-castano transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              <span className="relative flex items-center gap-2 transition-transform duration-400 group-hover:translate-x-0.5">
                Empezar un proyecto
                <ArrowDownRight size={16} />
              </span>
            </a>
            <a
              href="#services"
              data-cursor="VIEW"
              className="inline-flex h-12 items-center rounded-full border border-espresso/15 px-7 text-sm text-espresso transition-colors duration-300 hover:border-castano hover:text-castano"
            >
              Ver servicios
            </a>
          </div>
          <a
            href="#about"
            className="hidden items-center gap-3 text-[11px] tracking-[0.22em] text-muted uppercase md:inline-flex"
          >
            Scroll
            <span className="block h-10 w-px bg-espresso/20" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
