import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const PROJECTS = [
  {
    n: "01",
    name: "LC Arquitectura",
    kind: "Institucional",
    copy: "Estudio en Nordelta. Un sitio para mostrar obra comercial, hotelera y residencial, con el tono de un estudio premium.",
    href: "https://lc-arquitectura-web.vercel.app/",
    image: "/work/lc-arquitectura.jpg",
  },
  {
    n: "02",
    name: "Oltre Frutti",
    kind: "Catálogo",
    copy: "Frutas y verduras a domicilio en Zona Norte. Catálogo para armar el pedido y cerrarlo por WhatsApp, sin vueltas.",
    href: "https://oltre-frutti.vercel.app/",
    image: "/work/oltre-frutti.jpg",
  },
  {
    n: "03",
    name: "M22shop",
    kind: "Catálogo",
    copy: "Remeras de algodón con diseños de videojuegos clásicos. Tienda simple: talles, precio y compra por WhatsApp.",
    href: "https://m22-store.vercel.app/",
    image: "/work/m22-store.jpg",
  },
  {
    n: "04",
    name: "INOrum",
    kind: "Institucional",
    copy: "Infraestructura IT, soporte y nube para empresas en Buenos Aires. Presencia clara para servicios y contacto.",
    href: "https://inorum.vercel.app/",
    image: "/work/inorum.jpg",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-crema px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-castano uppercase">Proyectos</p>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.04em] text-espresso md:text-6xl">
            Sitios en el aire. Negocios reales.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Landings, catálogos e institucionales publicados. Cada uno, a la medida del rubro.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="VER"
                className="group block"
              >
                <div className="overflow-hidden rounded-lg bg-hielo">
                  <img
                    src={p.image}
                    alt={`Sitio de ${p.name}`}
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <p className="text-[11px] tracking-[0.22em] text-castano uppercase">
                    {p.n} · {p.kind}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] tracking-[0.18em] text-espresso/50 uppercase transition-colors duration-300 group-hover:text-castano">
                    Ver sitio
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <h3 className="mt-2 font-display text-3xl tracking-[-0.03em] text-espresso md:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{p.copy}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
