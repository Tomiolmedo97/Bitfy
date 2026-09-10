import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/bitfy/smooth-scroll";
import { CustomCursor } from "@/components/bitfy/custom-cursor";
import { Nav } from "@/components/bitfy/nav";
import { Hero } from "@/components/bitfy/hero";
import { Services } from "@/components/bitfy/services";
import { About } from "@/components/bitfy/about";
import { Work } from "@/components/bitfy/work";
import { Marquee } from "@/components/bitfy/marquee";
import { Orb } from "@/components/bitfy/orb";
import { Contact } from "@/components/bitfy/contact";
import { Footer } from "@/components/bitfy/footer";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Marquee />
        <Orb />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
