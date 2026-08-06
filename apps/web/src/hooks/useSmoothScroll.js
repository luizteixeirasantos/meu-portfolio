import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useSmoothScroll = () => {
  useEffect(() => {
    // A condição de verificar se é mobile ou servidor vem para DENTRO do hook
    if (typeof window === "undefined" || window.innerWidth <= 768) return;

    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
