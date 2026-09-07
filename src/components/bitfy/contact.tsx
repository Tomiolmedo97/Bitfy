import { type FormEvent } from "react";
import { Reveal } from "./reveal";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";

export function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const need = String(data.get("need") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const parts = [
      "Hola Bitfy, quiero pedir una cotización.",
      name ? `Soy ${name}.` : "",
      need ? `Necesito: ${need}.` : "",
      message,
    ].filter(Boolean);
    window.open(whatsappUrl(parts.join(" ")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-hielo px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="mb-4 text-[11px] tracking-[0.28em] text-castano uppercase">Contacto</p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] text-espresso md:text-6xl">
            Pedí una cotización por WhatsApp.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Escribime directo. Alcance, plazos y siguiente paso, sin vueltas.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            data-cursor="CHAT"
            className="mt-8 inline-block font-display text-2xl text-castano md:text-3xl"
          >
            {WHATSAPP_DISPLAY}
          </a>
          <p className="mt-2 text-sm text-muted">WhatsApp</p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="flex flex-col gap-5 rounded-xl bg-crema px-6 py-8 md:px-8">
            <label className="flex flex-col gap-2 text-[11px] tracking-[0.18em] text-muted uppercase">
              Nombre
              <input
                required
                name="name"
                className="h-12 border-b border-line bg-transparent text-base tracking-normal text-espresso outline-none transition-colors duration-300 focus:border-castano"
              />
            </label>
            <label className="flex flex-col gap-2 text-[11px] tracking-[0.18em] text-muted uppercase">
              Qué necesitás
              <select
                name="need"
                className="h-12 border-b border-line bg-transparent text-base tracking-normal text-espresso outline-none focus:border-castano"
                defaultValue="Landing"
              >
                <option>Landing</option>
                <option>Catálogo</option>
                <option>Institucional</option>
                <option>Otra solución simple</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-[11px] tracking-[0.18em] text-muted uppercase">
              Mensaje
              <textarea
                required
                name="message"
                rows={4}
                className="resize-none border-b border-line bg-transparent py-3 text-base tracking-normal text-espresso outline-none transition-colors duration-300 focus:border-castano"
              />
            </label>
            <button
              type="submit"
              data-cursor="CHAT"
              className="group relative mt-2 inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-espresso text-sm text-crema active:scale-[0.96]"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-castano transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              <span className="relative">Escribir por WhatsApp</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
