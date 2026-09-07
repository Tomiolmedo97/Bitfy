import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

function jumpToTop(lenis?: Lenis) {
  if (typeof window === "undefined") return;
  if (window.history.scrollRestoration) {
    window.history.scrollRestoration = "manual";
  }
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  lenis?.scrollTo(0, { immediate: true });
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    jumpToTop();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduce
      ? undefined
      : new Lenis({
          duration: 1.15,
          smoothWheel: true,
          wheelMultiplier: 0.92,
        });

    jumpToTop(lenis);

    let raf = 0;
    if (lenis) {
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) jumpToTop(lenis);
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      if (raf) cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return children;
}
