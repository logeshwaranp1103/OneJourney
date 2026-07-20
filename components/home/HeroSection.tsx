"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import PackageSearch from "./PackageSearch";
import HeroTrustRow from "./HeroTrustRow";
import { getAssetPath } from "@/lib/animations";
import { useApp } from "@/context/AppContext";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const { setEnquireOpen } = useApp();

  // Parallax background (very slow and smooth using spring)
  const yTransform = useTransform(scrollY, [0, 1000], [0, 120]);
  const y = useSpring(yTransform, { stiffness: 400, damping: 90, mass: 0.1 });

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen md:min-h-[760px] lg:min-h-[720px] flex flex-col items-center justify-center pt-32 md:pt-40 pb-24 px-6 md:px-10 select-none overflow-hidden"
    >
      {/* Background Parallax Image & Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ 
            y, 
            willChange: "transform",
            backgroundImage: `url("${getAssetPath('/images/hero_dawn_temple.png')}")`,
          }}
          className="absolute inset-0 bg-cover bg-center w-full h-[120%]"
        />
        
        {/* Symmetrical dark tint to even out left/right contrast */}
        <div className="absolute inset-0 bg-[#041F35]/45 mix-blend-multiply" />
        
        {/* Navy gradient to darken the top section for transparent navbar readability */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#041F35]/80 via-[#041F35]/40 to-transparent" />
        
        {/* Soft vignette around outer edges */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />

        {/* Floating particles (subtle) */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)", backgroundSize: "120px 120px" }} />

        {/* Bottom soft cream gradient transition (reduced to prevent blocking the temple image) */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f7f9ff] to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1180px] mx-auto flex flex-col items-center text-center gap-6 md:gap-8">
        
        {/* Animated Spiritual Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="flex items-center gap-2 px-4 py-1.5 bg-[#FFF8E8] border border-[#E9A227]/30 text-[#041F35] rounded-full shadow-sm"
          >
            <Sparkles size={14} className="text-[#E9A227]" />
            <span className="font-label-bold text-[13px] tracking-wide">Curated Spiritual Experiences</span>
          </motion.div>
        </motion.div>

        {/* Headline */}
        <div className="flex flex-col items-center max-w-[960px]">
          <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] font-display font-[800] leading-[1.12] drop-shadow-md text-center">
            {/* "One Journey" with Golden Mask Reveal */}
            <span className="relative inline-block text-[#F7C873] me-2 sm:me-3">
              <motion.span
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                One Journey
              </motion.span>
            </span>

            {/* "That Brings Us Together." Fade-up */}
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white inline-block"
            >
              That Brings Us Together.
            </motion.span>
          </h1>
        </div>

        {/* Supporting Description with Staggered Entrance */}
        <div className="flex flex-wrap justify-center items-center gap-x-2 text-[#FFF8E8]/90 font-body-lg text-[18px] md:text-[20px] max-w-[650px] leading-relaxed drop-shadow-md font-medium text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Many faiths.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Many paths.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.34, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#F7C873] font-semibold"
          >
            One journey.
          </motion.span>
        </div>

        {/* Trust Row */}
        <HeroTrustRow />

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full relative z-30 flex flex-col items-center"
        >
          <PackageSearch />
        </motion.div>

        {/* Secondary Actions for users not ready to search */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-2 text-sm font-semibold select-none"
        >
          <span className="text-[#FFF8E8]/70">Not ready to search?</span>
          <Link href="/pilgrimage-tours" className="text-[#F7C873] hover:text-[#E9A227] underline underline-offset-4 decoration-[#F7C873]/40 transition-colors">
            Explore Pilgrimage Tours
          </Link>
          <span className="text-white/20 hidden sm:inline">|</span>
          <button 
            onClick={() => setEnquireOpen(true)}
            className="text-[#F7C873] hover:text-[#E9A227] underline underline-offset-4 decoration-[#F7C873]/40 transition-colors cursor-pointer"
          >
            Talk to a Travel Expert
          </button>
        </motion.div>

      </div>
    </section>
  );
}
