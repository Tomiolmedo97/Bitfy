import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function Marquee() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["8%", "-18%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-12%", "14%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["6%", "-16%"]);

  return (
    <section ref={ref} className="overflow-hidden bg-crema py-20 md:py-28">
      <div className="flex flex-col gap-3 md:gap-4">
        <motion.p
          style={{ x: x1 }}
          className="font-display text-[14vw] leading-[0.86] tracking-[-0.06em] text-espresso whitespace-nowrap md:text-[10vw]"
        >
          CREAMOS
        </motion.p>
        <motion.p
          style={{ x: x2 }}
          className="font-display text-[14vw] leading-[0.86] tracking-[-0.06em] text-castano whitespace-nowrap md:text-[10vw]"
        >
          EXPERIENCIAS
        </motion.p>
        <motion.p
          style={{ x: x3 }}
          className="font-display text-[14vw] leading-[0.86] tracking-[-0.06em] text-espresso/25 whitespace-nowrap md:text-[10vw]"
        >
          DIGITALES
        </motion.p>
      </div>
    </section>
  );
}
