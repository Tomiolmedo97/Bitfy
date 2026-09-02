import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  Layout,
  Layers,
  Menu,
  MessageCircle,
  Store,
  X,
} from "lucide-react";
import { Logo } from "./logo";

const WHATSAPP_URL =
  "https://wa.me/5491130249702?text=" +
  encodeURIComponent("Hola Bitfy, quiero consultar por una web.");

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#para-quien", label: "Para quién" },
  { href: "#contacto", label: "Contacto" },
];

const SERVICES = [
  {
    title: "Catálogos web",
    body: "Tu oferta ordenada, clara y fácil de recorrer. Para que te encuentren y elijan.",
    icon: Layers,
  },
  {
    title: "Landing pages",
    body: "Una página, un objetivo: explicar qué hacés y que te escriban.",
    icon: Layout,
  },
  {
    title: "Sitios institucionales",
    body: "La cara digital de tu negocio. Profesional, limpia y sin vueltas.",
    icon: Store,
  },
  {
    title: "Productos y servicios",
    body: "Una web para mostrar lo que vendés y cómo contactarte.",
    icon: MessageCircle,
  },
];

const STEPS = [
  { n: "01", title: "Hablamos", body: "Contame qué vendés y para quién. Definimos alcance, plazos y la web justa para este momento." },
  { n: "02", title: "Diseñamos", body: "Estructura clara, textos que se entienden y un look alineado a tu negocio. Sin tecnicismos de más." },
  { n: "03", title: "Desarrollamos", body: "Sitio rápido, responsive y listo para publicar. Vos ves avances, no un black box." },
  { n: "04", title: "Lanzamos", body: "Queda online y trabajando: que te encuentren, te entiendan y te escriban." },
];

const AUDIENCE = [
  {
    title: "Emprendedores",
    body: "Recién arrancás o estás ordenando la oferta. Una landing o un catálogo simple que explique qué vendés.",
  },
  {
    title: "Profesionales",
    body: "Un sitio tipo portfolio o landing que concentre servicios, sobre y contacto, con cara de confianza.",
  },
  {
    title: "PyMEs",
    body: "Ya tenés negocio. Digitalizate con un sitio institucional o un catálogo, sin montar una operación compleja.",
  },
];

const VALUES = [
  { title: "Simplicidad", body: "Procesos claros. Entendés qué se hace, cuándo y para qué." },
  { title: "Velocidad", body: "Entregas ágiles, sin sacrificar calidad." },
  { title: "Cercanía", body: "Un interlocutor, trato directo. No un área de cuentas." },
  { title: "Resultados", body: "La web es herramienta de negocio, no vidriera." },
];

export function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-surface">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-pill bg-primary px-5 text-sm font-semibold text-fg-on-ink transition-colors hover:bg-primary-deep"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </nav>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {menuOpen ? (
          <nav className="border-t border-border bg-surface px-5 py-4 md:hidden" aria-label="Móvil">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base font-medium text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-primary text-sm font-semibold text-fg-on-ink"
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle className="size-4" />
                Escribime por WhatsApp
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      <main>
        <Hero />
        <Services />
        <Process />
        <Audience />
        <Values />
        <Contact />
      </main>

      <footer className="bg-ink text-fg-on-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <Logo variant="onInk" />
            <p className="mt-2 text-sm text-muted-on-ink">Tu presencia digital, sin vueltas.</p>
          </div>
          <p className="text-sm text-muted-on-ink">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-fg-on-ink underline-offset-4 hover:underline"
            >
              WhatsApp
            </a>
            {" · "}
            Bitfy · Diseño y desarrollo web
          </p>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-r from-ink via-ink-soft to-primary-deep text-fg-on-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Tu presencia digital, sin vueltas.
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Diseño y desarrollo web para emprendedores, profesionales y PyMEs.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-on-ink sm:text-lg">
            Catálogos, landings, sitios institucionales y webs para mostrar productos o
            servicios. Simples, claras y listas para que te escriban.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-fg-on-ink transition-colors hover:bg-primary-deep"
            >
              Escribime por WhatsApp
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex h-12 items-center justify-center rounded-pill border border-ice/20 px-6 text-sm font-semibold text-fg-on-ink transition-colors hover:bg-ink-soft"
            >
              Ver servicios
            </a>
          </div>
        </div>
        <HeroPanel />
      </div>
    </section>
  );
}

function HeroPanel() {
  return (
    <div className="rounded-lg border border-ice/10 bg-ink-soft p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-lime uppercase">El núcleo</p>
      <ul className="mt-5 space-y-4">
        {SERVICES.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-fg-on-ink">
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            <div>
              <p className="font-display font-semibold">{item.title}</p>
              <p className="text-sm leading-relaxed text-muted-on-ink">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Servicios</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Webs simples y funcionales. Esto es lo que hacemos.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-lg border border-border bg-ice p-6 sm:p-8"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-primary text-fg-on-ink">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="proceso" className="bg-ice">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Proceso</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Del primer mensaje a una web online, sin vueltas.
        </h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="rounded-lg bg-surface p-6">
              <p className="font-display text-sm font-bold text-primary">{step.n}</p>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section id="para-quien" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Para quién</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Tres perfiles. La misma promesa: una web profesional y lista para usar.
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {AUDIENCE.map((item) => (
            <article key={item.title} className="rounded-lg border border-border p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-ink text-fg-on-ink">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.18em] text-lime uppercase">Cómo trabajamos</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Simplicidad, velocidad, cercanía y resultados.
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((item) => (
            <article key={item.title}>
              <div className="mb-4 h-1 w-8 bg-primary" />
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-on-ink">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kind, setKind] = useState("Landing page");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      "Hola Bitfy, quiero consultar por una web.",
      `Nombre: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Tipo: ${kind}`,
      message.trim() ? `Proyecto: ${message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/5491130249702?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <section id="contacto" className="bg-ice">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Contacto</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            ¿Necesitás una web? Hablemos de tu proyecto.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Contame qué negocio tenés y qué tipo de sitio buscás. Te respondo por
            WhatsApp con una propuesta clara: alcance, plazos y siguiente paso.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-pill bg-primary px-6 text-sm font-semibold text-fg-on-ink transition-colors hover:bg-primary-deep"
          >
            <MessageCircle className="size-4" />
            Escribime por WhatsApp
          </a>
        </div>

        {sent ? (
          <div className="rounded-lg bg-surface p-8">
            <p className="font-display text-xl font-bold text-ink">Listo, lo recibí.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Gracias{name.trim() ? `, ${name.trim()}` : ""}. Si no se abrió WhatsApp,
              usá el botón de acá abajo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-pill bg-primary px-5 text-sm font-semibold text-fg-on-ink"
            >
              <MessageCircle className="size-4" />
              Abrir WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="rounded-lg bg-surface p-6 sm:p-8">
            <label className="block text-sm font-medium text-ink">
              Nombre
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 h-12 w-full rounded-md border border-border bg-surface px-3 text-base text-ink outline-none ring-primary/30 focus:ring-2"
                autoComplete="name"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-ink">
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 h-12 w-full rounded-md border border-border bg-surface px-3 text-base text-ink outline-none ring-primary/30 focus:ring-2"
                autoComplete="email"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-ink">
              Tipo de web
              <select
                value={kind}
                onChange={(e) => setKind(e.target.value)}
                className="mt-1.5 h-12 w-full rounded-md border border-border bg-surface px-3 text-base text-ink outline-none ring-primary/30 focus:ring-2"
              >
                <option>Catálogo web</option>
                <option>Landing page</option>
                <option>Sitio institucional</option>
                <option>Productos y servicios</option>
                <option>Todavía no lo sé</option>
              </select>
            </label>
            <label className="mt-4 block text-sm font-medium text-ink">
              Contame el proyecto
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-border bg-surface px-3 py-3 text-base text-ink outline-none ring-primary/30 focus:ring-2"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-pill bg-primary text-sm font-semibold text-fg-on-ink transition-colors hover:bg-primary-deep sm:w-auto sm:px-8"
            >
              Enviar consulta
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
