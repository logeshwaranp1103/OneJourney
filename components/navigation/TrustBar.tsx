"use client";

import { motion } from "framer-motion";
import { Globe, Phone, CheckCircle2, Hotel, Headphones, Type, Eye } from "lucide-react";
import { useApp } from "@/context/AppContext";

interface Props {
  showTransparent?: boolean;
  isScrolled?: boolean;
}

export default function TrustBar({ showTransparent = false, isScrolled = false }: Props) {
  const { fontSizeClass, setFontSizeClass, highContrast, setHighContrast } = useApp();

  return (
    <div
      className={`w-full font-body-sm text-[13px] select-none z-50 relative transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] origin-top ${
        isScrolled
          ? "max-h-0 opacity-0 -translate-y-full overflow-hidden pointer-events-none py-0 border-b-0"
          : "max-h-[44px] opacity-100 translate-y-0 py-2 border-b"
      } ${
        showTransparent
          ? "bg-[#041F35]/20 text-white/90 border-white/10 backdrop-blur-md"
          : "bg-[#EAF2FF] text-[#1F2937] border-blue-100"
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 flex justify-center md:justify-between items-center h-full">
        {/* Left Trust Items */}
        <div className="hidden md:flex items-center gap-6 text-xs font-semibold">
          <span
            className={`flex items-center gap-1.5 transition-all duration-200 cursor-default group ${
              showTransparent ? "text-white/90 hover:text-white" : "text-[#1F2937] hover:text-[#062E4F]"
            }`}
          >
            <CheckCircle2
              size={14}
              className={`transition-transform duration-200 group-hover:-translate-y-0.5 ${
                showTransparent ? "text-emerald-400" : "text-emerald-600"
              }`}
            />
            <span>No hidden charges</span>
          </span>

          <span
            className={`flex items-center gap-1.5 transition-all duration-200 cursor-default group ${
              showTransparent ? "text-white/90 hover:text-white" : "text-[#1F2937] hover:text-[#062E4F]"
            }`}
          >
            <Hotel
              size={14}
              className={`transition-transform duration-200 group-hover:-translate-y-0.5 ${
                showTransparent ? "text-emerald-400" : "text-emerald-600"
              }`}
            />
            <span>Verified hotels</span>
          </span>

          <span
            className={`hidden sm:flex items-center gap-1.5 transition-all duration-200 cursor-default group ${
              showTransparent ? "text-white/90 hover:text-white" : "text-[#1F2937] hover:text-[#062E4F]"
            }`}
          >
            <Headphones
              size={14}
              className={`transition-transform duration-200 group-hover:-translate-y-0.5 ${
                showTransparent ? "text-emerald-400" : "text-emerald-600"
              }`}
            />
            <span>24/7 support</span>
          </span>
        </div>

        {/* Right Action Items */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Accessibility Settings */}
          <div
            className={`flex items-center gap-3 border-r pr-4 ${showTransparent ? "border-white/20" : "border-slate-200"}`}
          >
            <button
              onClick={() => setFontSizeClass(fontSizeClass === "text-normal" ? "text-large" : "text-normal")}
              className={`focus-visible:ring-2 focus-visible:ring-[#E9A227] rounded px-1.5 py-0.5 outline-none transition-all duration-200 cursor-pointer flex items-center font-bold text-[11.5px] gap-1 group active:scale-95 ${
                showTransparent ? "text-white/90 hover:text-white" : "text-[#1F2937] hover:text-[#E9A227]"
              }`}
              title="Scale Font Size (Elder Friendly)"
            >
              <Type size={12} className="transition-transform duration-200 group-hover:scale-110" />
              <span>{fontSizeClass === "text-large" ? "Normal A" : "Large A"}</span>
            </button>

            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`focus-visible:ring-2 focus-visible:ring-[#E9A227] rounded px-1.5 py-0.5 outline-none transition-all duration-200 cursor-pointer flex items-center font-bold text-[11.5px] gap-1 group active:scale-95 ${
                showTransparent ? "text-white/90 hover:text-white" : "text-[#1F2937] hover:text-[#E9A227]"
              }`}
              title="Toggle High Contrast"
            >
              <Eye size={12} className="transition-transform duration-200 group-hover:scale-110" />
              <span>{highContrast ? "Normal Contrast" : "High Contrast"}</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              aria-label="Language Selector"
              className={`focus-visible:ring-2 focus-visible:ring-[#E9A227] rounded px-1.5 py-0.5 outline-none transition-all duration-200 cursor-pointer flex items-center font-semibold group active:scale-95 ${
                showTransparent ? "text-white/90 hover:text-white" : "text-[#1F2937] hover:text-[#E9A227]"
              }`}
            >
              <Globe size={14} className={`mr-1.5 transition-transform duration-200 group-hover:rotate-12 ${showTransparent ? "text-white/70" : "text-slate-500"}`} />
              <span>EN</span>
            </button>
          </div>

          <a
            href="tel:+9118007454746"
            className={`flex items-center gap-1.5 font-label-bold text-[13px] focus-visible:ring-2 focus-visible:ring-[#E9A227] rounded px-1.5 py-0.5 outline-none transition-all duration-200 group ${
              showTransparent ? "text-white hover:text-[#F7C873]" : "text-[#062E4F] hover:text-[#E9A227]"
            }`}
          >
            <motion.div
              whileHover={{ rotate: [0, -6, 6, -3, 3, 0] }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Phone size={13} className={`${showTransparent ? "text-white/70" : "text-slate-500"}`} />
            </motion.div>
            <span>+91 1800-745-4746</span>
          </a>
        </div>
      </div>
    </div>
  );
}
