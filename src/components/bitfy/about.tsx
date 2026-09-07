import { Reveal } from "./reveal";

const VALUES = [
  { t: "Simplicidad", d: "Procesos claros. El cliente entiende qué se hace, cuándo y para qué." },
  { t: "Velocidad", d: "Entregas ágiles, sin sacrificar calidad. Una web a tiempo empieza a trabajar." },
  { t: "Cercanía", d: "Trato directo. Un interlocutor, no un área de cuentas." },
  { t: "Resultados", d: "Se diseña para que se entienda, se encuentre y se contacte." },
];

const AUDIENCE = [
  {
    t: "Emprendedores",
    d: "Presencia online económica, clara y rápida: una landing o un catálogo que explique qué vendés.",
  },
  {
    t: "Profesionales",
    d: "Portfolio o landing que transmita confianza y concentre servicios, sobre y contacto.",
  },
  {
    t: "PyMEs",
    d: "Digitalizarse con un sitio institucional o un catálogo, sin montar una operación compleja.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-espresso px-5 py-28 text-crema md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-trigo uppercase">Estudio</p>
          <h2 className="max-w-4xl font-display text-4xl leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Convertimos la oferta de un negocio en una experiencia digital clara.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-crema/70">
            No apuntamos a plataformas sobredimensionadas. El foco está en soluciones web simples y
            funcionales que sirvan como herramienta de negocio.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-crema/10 pt-12 md:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.06}>
              <p className="mb-3 font-display text-2xl tracking-[-0.03em] text-trigo">{v.t}</p>
              <p className="text-sm leading-relaxed text-crema/65">{v.d}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-4 md:grid-cols-3">
          {AUDIENCE.map((a, i) => (
            <Reveal key={a.t} delay={i * 0.08}>
              <article className="h-full rounded-lg bg-crema/5 px-6 py-8">
                <p className="mb-4 text-[11px] tracking-[0.22em] text-trigo uppercase">0{i + 1}</p>
                <h3 className="font-display text-2xl tracking-[-0.03em]">{a.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-crema/65">{a.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
