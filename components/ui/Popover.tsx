"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement | null>;
  children: ReactNode;
  className?: string;
  mobileTitle?: string;
}

export default function Popover({ isOpen, onClose, anchorRef, children, className = "", mobileTitle = "Select Option" }: PopoverProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const popoverRef = useRef<HTMLDivElement>(null);

  // Handle mounting for portals
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Window resize and scroll handling
  useEffect(() => {
    if (!isOpen) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updatePosition = () => {
      if (window.innerWidth < 768) {
        setStyle({});
        return;
      }

      if (anchorRef.current) {
        const rect = anchorRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        
        let top = rect.bottom + scrollTop + 10;
        let left: number | undefined = rect.left + scrollLeft;
        let right: number | undefined = undefined;

        // Determine if popover overflows the right edge of the screen
        // Assume max width of 420px for safety
        if (rect.left + 420 > window.innerWidth) {
          left = undefined;
          right = document.documentElement.scrollWidth - rect.right - scrollLeft;
        }

        // Simple collision detection for bottom
        if (rect.bottom + 350 > window.innerHeight) {
          // Open upwards instead
          top = rect.top + scrollTop - 10;
          setStyle({
            position: "absolute",
            bottom: document.documentElement.scrollHeight - top + 20,
            left: left,
            right: right,
          });
        } else {
          setStyle({
            position: "absolute",
            top: top,
            left: left,
            right: right,
          });
        }
      }
    };

    checkMobile();
    updatePosition();

    window.addEventListener("resize", () => {
      checkMobile();
      updatePosition();
    });
    
    // Use capture phase for scroll so we catch all scrolls, not just window
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen, anchorRef]);

  // Click outside and Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        if (anchorRef.current) anchorRef.current.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      // Don't close if clicking the anchor itself (the anchor's onClick will handle toggling)
      if (anchorRef.current && anchorRef.current.contains(e.target as Node)) {
        return;
      }
      
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    // Use a slight delay before attaching the click listener so the initial click that opened it doesn't immediately close it
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 10);
    
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, anchorRef]);

  // Prevent body scroll on mobile when open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMobile]);

  if (!mounted) return null;

  const content = (
    <AnimatePresence>
      {isOpen && (
        isMobile ? (
          // Mobile Bottom Sheet
          <div key="mobile-popover-container" className="fixed inset-0 z-[2000] flex flex-col justify-end">
            <motion.div 
              key="mobile-popover-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#041F35]/40 backdrop-blur-sm"
              onClick={onClose}
            />
            <motion.div
              key="mobile-popover-content"
              ref={popoverRef}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col max-h-[85vh] overflow-hidden ${className}`}
            >
              <div className="flex items-center justify-between p-5 border-b border-outline-variant/15 sticky top-0 bg-white z-10">
                <h3 className="font-headline-md font-bold text-primary">{mobileTitle}</h3>
                <button onClick={onClose} className="p-2 rounded-full bg-surface-variant hover:bg-outline-variant/20 transition-colors">
                  <X size={20} className="text-secondary" />
                </button>
              </div>
              <div className="overflow-y-auto w-full">
                {children}
              </div>
            </motion.div>
          </div>
        ) : style.position ? (
          // Desktop Anchored Popover
          <motion.div
            key="desktop-popover"
            ref={popoverRef}
            initial={{ opacity: 0, y: style.bottom !== undefined ? 10 : -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: style.bottom !== undefined ? 10 : -10, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={style}
            className={`z-[1000] bg-white rounded-[16px] border border-outline-variant/20 shadow-[0_16px_40px_rgba(15,45,70,0.16)] overflow-hidden ${className}`}
          >
            {children}
          </motion.div>
        ) : null
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}
