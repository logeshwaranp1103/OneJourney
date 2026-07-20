"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { easeQuint } from "@/lib/animations";
import { Menu, X, Heart, RefreshCw, Phone, PhoneCall } from "lucide-react";

interface Props {
  showTransparent?: boolean;
  isCompact?: boolean;
}

export default function MainNavbar({ showTransparent = false, isCompact = false }: Props) {
  const pathname = usePathname();
  const { savedIds, compareIds, setEnquireOpen, setEnquirePackageId } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [justHearted, setJustHearted] = useState(false);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Tour Packages", href: "/packages" },
    { label: "Pilgrimage Tours", href: "/pilgrimage-tours" },
    { label: "Group Tours", href: "/group-tours" },
    { label: "AI Trip Planner", href: "/ai-trip-planner" },
    { label: "About Us", href: "/about" },
  ];

  const handleEnquireClick = () => {
    setEnquirePackageId(null);
    setEnquireOpen(true);
  };

  const handleRefreshClick = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const handleHeartClick = () => {
    setJustHearted(true);
    setTimeout(() => setJustHearted(false), 400);
  };

  return (
    <>
      <header
        className={`w-full transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] z-40 ${
          showTransparent
            ? isCompact
              ? "bg-[#041F35]/25 backdrop-blur-[12px] border-b border-white/10 shadow-none py-2.5"
              : "bg-[#041F35]/20 backdrop-blur-[12px] border-b border-white/10 shadow-none py-3.5"
            : isCompact
            ? "bg-white/95 border-b border-slate-200/80 shadow-md backdrop-blur-md py-2 text-[#062E4F]"
            : "bg-white border-b border-slate-200/80 shadow-md backdrop-blur-none py-3 text-[#062E4F]"
        }`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 flex justify-between items-center">
          {/* Logo with Soft Glow Hover */}
          <Link href="/">
            <motion.div
              className={`font-headline-md font-bold flex items-center gap-2 cursor-pointer select-none transition-all duration-300 group ${
                showTransparent ? "text-white" : "text-[#062E4F]"
              }`}
              whileHover={{ y: -1.5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className={`material-symbols-outlined text-[28px] icon-fill transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(247,200,115,0.7)] ${
                  showTransparent ? "text-[#F7C873]" : "text-[#E9A227]"
                }`}
              >
                temple_hindu
              </span>
              <span>OneJourney</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation Links with Center-Outward Underline */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 relative h-full">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 lg:px-4 py-2 font-body-sm text-[15px] transition-all duration-280 rounded-md focus-visible:ring-2 focus-visible:ring-[#E9A227] outline-none block ${
                      isActive
                        ? "font-bold"
                        : "font-semibold"
                    } ${
                      showTransparent
                        ? isHovered || isActive
                          ? "text-white"
                          : "text-white/90"
                        : isHovered || isActive
                        ? "text-[#E9A227]"
                        : "text-slate-700"
                    }`}
                  >
                    {/* Subtle Hover Background Pill */}
                    {isHovered && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className={`absolute inset-0 rounded-md -z-10 ${
                          showTransparent ? "bg-white/10" : "bg-slate-100"
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    )}

                    {/* Text Label with subtle lift on hover */}
                    <span className={`inline-block transition-transform duration-200 ${isHovered ? "-translate-y-[1px]" : ""}`}>
                      {link.label}
                    </span>

                    {/* Animated Underline (Center Outward Expansion) */}
                    {(isHovered || isActive) && (
                      <motion.div
                        layoutId="nav-center-underline"
                        className={`absolute bottom-0 left-3 lg:left-4 right-3 lg:right-4 h-0.5 rounded-full ${
                          showTransparent ? "bg-[#F7C873]" : "bg-[#E9A227]"
                        }`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ originX: 0.5 }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Action Tray with Micro-Interactions */}
          <div className="flex items-center gap-3">
            {/* Compare Badge button */}
            <div className="relative group">
              <Link href="/compare">
                <motion.button
                  onClick={handleRefreshClick}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className={`w-11 h-11 flex items-center justify-center rounded-full relative transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#E9A227] outline-none ${
                    showTransparent
                      ? "text-white hover:text-[#F7C873] hover:bg-white/10"
                      : "text-slate-700 hover:text-[#E9A227] hover:bg-slate-100"
                  }`}
                  aria-label="Compare Packages"
                >
                  <motion.div
                    animate={{ rotate: isRefreshing ? 360 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={{ rotate: 180 }}
                  >
                    <RefreshCw size={20} className={compareIds.length > 0 ? "animate-spin-slow" : ""} />
                  </motion.div>

                  <AnimatePresence>
                    {compareIds.length > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute top-1.5 right-1.5 text-white text-[10px] font-bold w-4 h-4 bg-[#E9A227] rounded-full flex items-center justify-center shadow-sm"
                      >
                        {compareIds.length}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Link>
              <div className="absolute top-full right-0 mt-2 whitespace-nowrap bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                Compare Packages
              </div>
            </div>

            {/* Favorites / Saved badge button */}
            <div className="relative group">
              <Link href="/saved">
                <motion.button
                  onClick={handleHeartClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-11 h-11 flex items-center justify-center rounded-full relative transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#E9A227] outline-none ${
                    showTransparent
                      ? "text-white hover:text-[#F7C873] hover:bg-white/10 hover:text-red-400"
                      : "text-slate-700 hover:text-[#E9A227] hover:bg-slate-100 hover:text-red-600"
                  }`}
                  aria-label="Saved Packages"
                >
                  <motion.div
                    animate={justHearted ? { scale: [1, 1.25, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart
                      size={20}
                      className={
                        savedIds.length > 0
                          ? "fill-red-500 text-red-500"
                          : "group-hover:text-red-500 transition-colors"
                      }
                    />
                  </motion.div>
                  <AnimatePresence>
                    {savedIds.length > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute top-1.5 right-1.5 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm"
                      >
                        {savedIds.length}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Link>
              <div className="absolute top-full right-0 mt-2 whitespace-nowrap bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                Saved Packages
              </div>
            </div>

            {/* Enquire Now Action Button with Shine & Phone Icon Shift */}
            <motion.button
              onClick={handleEnquireClick}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`hidden md:flex items-center gap-2 font-label-bold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer relative overflow-hidden group focus-visible:ring-2 focus-visible:ring-[#E9A227] outline-none ${
                showTransparent
                  ? "bg-white text-[#062E4F] hover:bg-[#FFF8E8]"
                  : "bg-[#062E4F] hover:bg-[#0B426D] text-white"
              }`}
            >
              {/* Animated Shine Sweep on First Hover */}
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shine_1.5s_ease-out]" />
              <PhoneCall size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              <span>Enquire Now</span>
            </motion.button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-11 h-11 flex items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-[#E9A227] outline-none md:hidden active:scale-95 transition-all ${
                showTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
              aria-label="Toggle Mobile Menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Scroll Lock Backdrop */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
              />

              {/* Drawer Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.35, ease: easeQuint }}
                className="fixed right-0 top-0 bottom-0 w-[280px] bg-white z-40 md:hidden shadow-level-2 p-6 flex flex-col gap-8 justify-between"
              >
                <div className="flex flex-col gap-8">
                  {/* Close Header */}
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#062E4F] flex items-center gap-2 text-lg">
                      <span className="material-symbols-outlined text-[#E9A227] icon-fill text-[26px]">temple_hindu</span>
                      OneJourney
                    </span>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-11 h-11 flex items-center justify-center hover:bg-slate-100 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#E9A227] active:scale-95"
                      aria-label="Close menu"
                    >
                      <X size={20} className="text-slate-700" />
                    </button>
                  </div>

                  {/* Menu Items with Staggered Slide-down */}
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link, i) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, ease: easeQuint }}
                        >
                          <Link
                            href={link.href}
                            className={`block py-2.5 text-base font-semibold border-b border-slate-100 outline-none focus-visible:text-[#E9A227] transition-colors ${
                              isActive ? "text-[#062E4F] border-[#E9A227] font-bold" : "text-slate-700 hover:text-[#E9A227]"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>
                </div>

                {/* Mobile Drawer Footer Actions */}
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+9118007454746"
                    className="flex items-center gap-2 text-[#062E4F] font-bold justify-center py-3 bg-[#EAF2FF] hover:bg-[#D0E4FF] transition-colors rounded-xl min-h-[44px] active:scale-97"
                  >
                    <Phone size={16} />
                    <span>+91 1800-745-4746</span>
                  </a>
                  <button
                    onClick={handleEnquireClick}
                    className="w-full bg-[#062E4F] hover:bg-[#0B426D] text-white py-3 rounded-xl font-bold shadow-sm flex items-center justify-center gap-2 min-h-[44px] active:scale-97 transition-all"
                  >
                    <PhoneCall size={16} />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
