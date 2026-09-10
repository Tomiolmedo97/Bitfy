import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";

const LINKS = [
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#work", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-[padding,background,backdrop-filter] duration-500",
          scrolled ? "bg-crema/80 px-5 py-3 backdrop-blur-md md:px-8" : "px-5 py-6 md:px-10",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <a
            href="#top"
            data-cursor="HOME"
            className={cn(
              "font-logo text-[22px] leading-none",
              open ? "text-crema md:text-castano" : "text-espresso md:text-castano",
            )}
          >
            Bitfy
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cursor="GO"
                className="font-body text-[11px] tracking-[0.22em] text-espresso/80 uppercase transition-colors duration-300 hover:text-castano"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className={cn(
              "relative z-50 grid size-11 place-items-center md:hidden",
              open ? "text-crema" : "text-espresso",
            )}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={2.2} /> : <Menu size={22} strokeWidth={2.2} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-end bg-espresso px-6 pb-10 md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="flex flex-col gap-2 pb-16">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl tracking-[-0.04em] text-crema"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-trigo"
            >
              WhatsApp · {WHATSAPP_DISPLAY}
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
