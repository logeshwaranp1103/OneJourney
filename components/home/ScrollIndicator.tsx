"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth"
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      onClick={scrollToNextSection}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5 cursor-pointer group"
      aria-label="Scroll down to content"
    >
      <span className="text-[11px] font-label-bold uppercase tracking-[0.25em] text-[#FFF8E8]/70 group-hover:text-white drop-shadow-md transition-colors">
        Scroll
      </span>
      <motion.div
        className="w-6 h-10 border-2 border-[#FFF8E8]/40 group-hover:border-white rounded-full flex justify-center p-1.5 transition-colors shadow-sm"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-2 bg-[#F7C873] rounded-full"
        />
      </motion.div>
    </motion.button>
  );
}
