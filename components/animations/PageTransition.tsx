"use client";

import { motion } from "framer-motion";
import { easeQuint } from "@/lib/animations";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: easeQuint }}
      className="w-full flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
}
