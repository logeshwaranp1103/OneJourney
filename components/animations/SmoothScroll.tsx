"use client";

import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Disable smooth scroll on touch devices to avoid lagging/scroll-jacking
    if (typeof window !== "undefined" && !("ontouchstart" in window)) {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      let rafId: number;
      
      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    }
  }, []);

  return <>{children}</>;
}
