import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        autoRaf: false,
      });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    } catch {
      // graceful fallback if Lenis fails in sandboxed environments
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);
}
