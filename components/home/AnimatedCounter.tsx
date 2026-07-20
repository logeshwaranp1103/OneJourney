"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2,
  decimals = 0,
  suffix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 25,
    stiffness: 60,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value, duration]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, decimals, suffix]);

  return <span ref={ref}>0</span>;
}
