import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
};

export function useScrollReveal<T extends HTMLElement>(opts: RevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { y = 32, opacity = 0, duration = 0.75, stagger = 0, delay = 0 } = opts;
    const targets = stagger > 0 ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y, opacity },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
          stagger: stagger > 0 ? stagger : undefined,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
