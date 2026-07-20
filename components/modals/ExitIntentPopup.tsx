"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { X, Gift, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { setEnquireOpen, setEnquirePackageId } = useApp();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger only if mouse moves up out of viewport
      if (e.clientY < 5 && !localStorage.getItem("dharmayatra_exit_triggered")) {
        setIsOpen(true);
        localStorage.setItem("dharmayatra_exit_triggered", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleClaim = () => {
    setIsOpen(false);
    setEnquirePackageId(null);
    setEnquireOpen(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 text-center space-y-5 relative shadow-level-2 border border-slate-200"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="w-16 h-16 bg-[#FFF8E8] text-[#E9A227] rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <Gift size={32} />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E9A227] bg-[#FFF8E8] px-2.5 py-1 rounded">
                Yatra Special Gift
              </span>
              <h3 className="text-xl font-bold text-[#062E4F] font-display">Don&apos;t Miss Out on Sacred Slots</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                Book your family pilgrimage this week to secure a **Free VIP Special Entry Darshan Pass** for all senior citizen members.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={handleClaim}
                className="w-full bg-[#E9A227] hover:bg-[#d58e1c] text-white py-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                Claim Free VIP Passes <ArrowRight size={13} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-slate-50 text-slate-500 hover:text-slate-700 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
              >
                No thanks, I will browse further
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
