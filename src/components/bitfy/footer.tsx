import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-espresso px-5 pt-24 pb-8 text-crema md:px-10 md:pt-32">
      <div className="mx-auto max-w-[1400px]">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          data-cursor="CHAT"
          className="group block font-display text-[11vw] leading-[0.88] tracking-[-0.06em] md:text-[7.4vw]"
        >
          <span className="block text-trigo">Let's create</span>
          <span className="inline-flex items-end gap-4">
            something great.
            <ArrowUpRight className="mb-2 size-[8vw] max-w-16 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 md:mb-4" />
          </span>
        </a>

        <div className="mt-16 flex flex-col gap-8 border-t border-crema/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-logo text-2xl text-trigo">Bitfy</p>
            <p className="mt-2 text-sm text-crema/55">Tu presencia digital, sin vueltas.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-crema/70">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" data-cursor="CHAT" className="hover:text-trigo">
              WhatsApp · {WHATSAPP_DISPLAY}
            </a>
          </div>
          <p className="text-xs tracking-[0.16em] text-crema/40 uppercase">© 2026 Bitfy</p>
        </div>
      </div>
    </footer>
  );
}
