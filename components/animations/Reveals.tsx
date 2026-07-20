"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { easeQuint } from "@/lib/animations";

interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeIn({ children, delay = 0, duration = 0.5 }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration, ease: easeQuint, delay }}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, delay = 0, duration = 0.6, y = 30 }: AnimationProps & { y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration, ease: easeQuint, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, duration = 0.5 }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration, ease: easeQuint, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, delay = 0, duration = 0.6, direction = "left", distance = 40 }: AnimationProps & { direction?: "left" | "right" | "up" | "down"; distance?: number }) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left": return { x: -distance, y: 0 };
      case "right": return { x: distance, y: 0 };
      case "up": return { x: 0, y: distance };
      case "down": return { x: 0, y: -distance };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration, ease: easeQuint, delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, y = 20 }: { children: React.ReactNode; y?: number }) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeQuint },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <div className={`overflow-hidden flex flex-wrap ${className}`}>
      <StaggerContainer delay={delay}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className="inline-block"
              variants={{
                initial: { y: "100%" },
                animate: { y: 0, transition: { duration: 0.6, ease: easeQuint } },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </StaggerContainer>
    </div>
  );
}

export function ImageReveal({ src, alt, className = "", delay = 0 }: { src: string; alt: string; className?: string; delay?: number }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 bg-primary z-10"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.6, ease: easeQuint, delay }}
        style={{ originX: 0 }}
      />
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.15, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.8, ease: easeQuint, delay: delay + 0.1 }}
      />
    </div>
  );
}

export function AnimatedCounter({ value, duration = 1.5, delay = 0 }: { value: number; duration?: number; delay?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing out function
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              requestAnimationFrame(step);
            }, delay * 1000);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [value, duration, delay]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}
