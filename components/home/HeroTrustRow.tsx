"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, HeartHandshake, PhoneCall } from "lucide-react";

export default function HeroTrustRow() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.8 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-2 mb-6"
    >
      <motion.div 
        variants={item} 
        className="flex items-center gap-2.5 text-white bg-[#041F35]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#F7C873]/20 shadow-level-1 hover:border-[#F7C873]/40 transition-colors"
      >
        <ShieldCheck size={18} className="text-[#F7C873]" />
        <span className="font-body-sm text-[14px] font-semibold tracking-wide">Verified stays</span>
      </motion.div>
      
      <motion.div 
        variants={item} 
        className="flex items-center gap-2.5 text-white bg-[#041F35]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#F7C873]/20 shadow-level-1 hover:border-[#F7C873]/40 transition-colors"
      >
        <HeartHandshake size={18} className="text-[#F7C873]" />
        <span className="font-body-sm text-[14px] font-semibold tracking-wide">Senior-friendly journeys</span>
      </motion.div>
      
      <motion.div 
        variants={item} 
        className="flex items-center gap-2.5 text-white bg-[#041F35]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#F7C873]/20 shadow-level-1 hover:border-[#F7C873]/40 transition-colors"
      >
        <PhoneCall size={18} className="text-[#F7C873]" />
        <span className="font-body-sm text-[14px] font-semibold tracking-wide">24/7 travel assistance</span>
      </motion.div>
    </motion.div>
  );
}
