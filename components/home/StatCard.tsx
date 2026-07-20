"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  decimals?: number;
  suffix?: string;
  title: string;
  description: string;
  type: "years" | "yatris" | "rating" | "destinations";
}

export default function StatCard({
  icon: Icon,
  value,
  decimals = 0,
  suffix = "",
  title,
  description,
  type,
}: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const getIconAnimation = () => {
    if (!isHovered) return {};
    
    switch (type) {
      case "years": // ShieldCheck softly pulses
        return {
          scale: [1, 1.06, 0.97, 1.03, 1],
          transition: { duration: 0.5, ease: "easeOut" }
        };
      case "yatris": // Users gently beats
        return {
          scale: [1, 1.08, 1, 1.08, 1],
          transition: { duration: 0.5, ease: "easeInOut" }
        };
      case "rating": // Star sparkles once
        return {
          rotate: [0, 20, -20, 0],
          scale: [1, 1.12, 0.95, 1],
          transition: { duration: 0.5, ease: "easeOut" }
        };
      case "destinations": // MapPinned bounces once
        return {
          y: [0, -6, 0, -3, 0],
          transition: { duration: 0.5, ease: "easeOut" }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden bg-white/94 backdrop-blur-md rounded-xl p-[18px] border border-slate-200/50 hover:border-[#F4BE5B]/50 shadow-[0_4px_16px_rgba(6,46,79,0.04)] hover:shadow-[0_8px_24px_rgba(6,46,79,0.08)] cursor-pointer group flex flex-col justify-between h-[130px] sm:h-[140px] text-left select-none"
    >
      {/* Spotlight overlay effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(120px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(244, 190, 91, 0.08), transparent 80%)`,
        }}
      />

      {/* Row containing Icon Frame and counter */}
      <div className="flex items-center gap-3">
        {/* Icon Frame */}
        <div className="relative w-10 h-10 rounded-full bg-[#FFF8E8] flex items-center justify-center border border-[#FFF8E8] shadow-sm overflow-hidden shrink-0">
          <motion.div animate={getIconAnimation() as any}>
            <Icon className="w-5 h-5 text-[#F4BE5B] stroke-[2.2px]" />
          </motion.div>
        </div>

        {/* Numeric Text */}
        <div className="text-[28px] sm:text-[32px] font-extrabold text-[#062E4F] transition-colors duration-300 font-display leading-none tracking-tight">
          <AnimatedCounter value={value} decimals={decimals} suffix={suffix} duration={1.6} />
        </div>
      </div>

      {/* Label and description */}
      <div className="space-y-0.5 mt-auto z-10">
        <h4 className="text-[14px] sm:text-[15px] font-bold text-[#062E4F] tracking-wide leading-tight">
          {title}
        </h4>
        <p className="text-[11.5px] sm:text-[12px] text-slate-500 font-medium leading-snug">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
