import { useState } from "react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    n: "01",
    title: "Catálogos web",
    copy: "Mostrá productos o servicios con claridad. El visitante entiende qué vendés y cómo escribirte.",
    image: "/work/atelier.jpg",
  },
  {
    n: "02",
    title: "Landing pages",
    copy: "Una página, una oferta, una acción. Lista para captar consultas sin vueltas.",
    image: "/work/panaderia.jpg",
  },
  {
    n: "03",
    title: "Páginas institucionales",
    copy: "Presencia sólida para el negocio que ya existe. Confianza, orden y contacto a un clic.",
    image: "/work/estudio-legal.jpg",
  },
  {
    n: "04",
    title: "Webs de productos o servicios",
    copy: "La web justa para este momento del negocio. A medida, sin vender de más.",
    image: "/work/estudio.jpg",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-crema px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-castano uppercase">Servicios</p>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.04em] text-espresso md:text-6xl">
            La web justa para el momento de tu negocio.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-line">
          {SERVICES.map((s, i) => {
            const open = active === i;
            return (
              <article
                key={s.n}
                data-cursor="VIEW"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className={cn(
                  "group relative grid border-b border-line py-6 transition-[opacity,padding] duration-500 md:grid-cols-[88px_1fr_auto] md:items-start md:py-7",
                  active !== null && !open && "opacity-35",
                )}
              >
                <span className="font-display text-sm tracking-[0.18em] text-castano">{s.n}</span>
                <div>
                  <h3 className="font-display text-3xl tracking-[-0.03em] text-espresso md:text-5xl">
                    {s.title}
                  </h3>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden pt-3 max-w-xl text-base leading-relaxed text-muted">
                      {s.copy}
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "pointer-events-none absolute top-1/2 right-0 hidden w-56 -translate-y-1/2 overflow-hidden rounded-md md:block",
                    "origin-right scale-95 opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    open && "scale-100 opacity-100",
                  )}
                >
                  <img src={s.image} alt="" className="aspect-[4/3] w-full object-cover" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
