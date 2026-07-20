"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import TrustBar from "./TrustBar";
import MainNavbar from "./MainNavbar";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect fast downward scroll to compact navbar slightly
      if (currentY > 100 && currentY - lastScrollY.current > 15) {
        setIsCompact(true);
      } else if (lastScrollY.current - currentY > 5 || currentY <= 70) {
        setIsCompact(false);
      }

      lastScrollY.current = currentY;
    };

    // Initialize state on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomepage = pathname === "/";
  const showTransparent = isHomepage && !isScrolled;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]">
        <TrustBar showTransparent={showTransparent} isScrolled={isScrolled} />
        <MainNavbar showTransparent={showTransparent} isCompact={isCompact} />
      </div>
      {!isHomepage && <div className="h-[114px] w-full shrink-0" aria-hidden="true" />}
    </>
  );
}
