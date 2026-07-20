"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Phone, MapPin, ArrowUp, Send } from "lucide-react";
import { easeQuint } from "@/lib/animations";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for back-to-top and circular progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you for subscribing to our newsletter!", {
      description: "You will receive spiritual updates and custom travel guides.",
      icon: "🎉",
    });
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our History", href: "/about#history" },
      { label: "Safety Guide", href: "/pilgrimage-tours#safety" },
      { label: "Support Centre", href: "/packages" },
    ],
    explore: [
      { label: "Tour Packages", href: "/packages" },
      { label: "Pilgrimage Sites", href: "/pilgrimage-tours" },
      { label: "Group Bookings", href: "/group-tours" },
      { label: "AI Custom Plan", href: "/ai-trip-planner" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "Yatra Guidelines", href: "#" },
    ],
  };

  // SVG parameters for circular indicator
  const radius = 20;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <footer className="bg-primary text-on-primary font-body-sm text-[15px] pt-16 pb-8 border-t border-outline-variant/10 relative overflow-hidden select-none">
      {/* Decorative Background Shape */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter items-start mb-12 relative z-10">
        
        {/* Brand Description Column */}
        <div className="lg:col-span-2 space-y-5">
          <Link href="/">
            <div className="font-headline-lg text-secondary-fixed flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[32px] icon-fill">temple_hindu</span>
              <span className="font-bold text-2xl font-display">OneJourney</span>
            </div>
          </Link>
          <p className="text-primary-fixed/80 leading-relaxed max-w-sm">
            Guiding sacred journeys with trust, devotion, and customized senior citizen comfort since 2008. Plan with confidence.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a aria-label="Facebook" href="#" className="w-10 h-10 rounded-full border border-primary-fixed/20 flex items-center justify-center text-primary-fixed/70 hover:text-secondary-fixed hover:border-secondary-fixed transition-all hover:scale-105">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </a>
            <a aria-label="Twitter" href="#" className="w-10 h-10 rounded-full border border-primary-fixed/20 flex items-center justify-center text-primary-fixed/70 hover:text-secondary-fixed hover:border-secondary-fixed transition-all hover:scale-105">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a aria-label="Instagram" href="#" className="w-10 h-10 rounded-full border border-primary-fixed/20 flex items-center justify-center text-primary-fixed/70 hover:text-secondary-fixed hover:border-secondary-fixed transition-all hover:scale-105">
              <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a aria-label="Youtube" href="#" className="w-10 h-10 rounded-full border border-primary-fixed/20 flex items-center justify-center text-primary-fixed/70 hover:text-secondary-fixed hover:border-secondary-fixed transition-all hover:scale-105">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        {/* Link Columns */}
        <div>
          <h4 className="font-label-bold text-secondary-fixed mb-4">Company</h4>
          <ul className="space-y-3">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-primary-fixed/80 hover:text-secondary-fixed transition-colors font-medium border-b border-transparent hover:border-secondary-fixed pb-0.5">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label-bold text-secondary-fixed mb-4">Explore</h4>
          <ul className="space-y-3">
            {footerLinks.explore.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-primary-fixed/80 hover:text-secondary-fixed transition-colors font-medium border-b border-transparent hover:border-secondary-fixed pb-0.5">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Contact Column */}
        <div className="space-y-4">
          <h4 className="font-label-bold text-secondary-fixed">Newsletter</h4>
          <p className="text-primary-fixed/80 text-sm leading-relaxed">
            Subscribe for auspicious dates and special senior tour discounts.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-primary-container text-on-primary pl-4 pr-12 py-3 rounded-lg border border-outline-variant/20 focus:border-secondary-fixed focus:ring-0 outline-none text-sm placeholder:text-primary-fixed/50"
            />
            <button
              type="submit"
              className="absolute right-1 p-2 bg-secondary text-on-secondary rounded-md hover:bg-secondary-container transition-all hover:scale-105 cursor-pointer flex items-center justify-center"
              aria-label="Subscribe"
            >
              <Send size={15} />
            </button>
          </form>
          <div className="space-y-2 pt-2 text-primary-fixed/80 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 1800-PILGRIM</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>support@onejourney.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright border */}
      <div className="border-t border-primary-fixed-variant/10 pt-8 max-w-container-max mx-auto px-margin-mobile md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-fixed/60 text-sm">
        <p>© 2026 OneJourney. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary-fixed transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-primary-fixed transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Circular Back-to-Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 w-12 h-12 bg-surface text-primary rounded-full shadow-level-2 border border-outline-variant/10 flex items-center justify-center cursor-pointer hover:bg-surface-container transition-all z-30"
          aria-label="Scroll to top"
        >
          {/* Circular progress path */}
          <svg className="w-full h-full rotate-270 absolute inset-0">
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="var(--color-outline-variant)"
              strokeWidth={strokeWidth}
              fill="transparent"
              className="opacity-20"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="var(--color-secondary)"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <ArrowUp size={18} className="relative z-10 text-primary" />
        </motion.button>
      )}
    </footer>
  );
}
