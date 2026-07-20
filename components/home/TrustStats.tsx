"use client";

import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { ShieldCheck, Users, Star, MapPinned } from "lucide-react";

export default function TrustStats() {
  const stats = [
    {
      icon: ShieldCheck,
      value: 15,
      suffix: "+",
      title: "Years of Trust",
      description: "Serving pilgrims since 2009",
      type: "years" as const,
    },
    {
      icon: Users,
      value: 10,
      suffix: "k+",
      title: "Happy Yatris",
      description: "Safe family yatras completed",
      type: "yatris" as const,
    },
    {
      icon: Star,
      value: 4.8,
      decimals: 1,
      suffix: "",
      title: "Average Rating",
      description: "Highly rated on Google reviews",
      type: "rating" as const,
    },
    {
      icon: MapPinned,
      value: 50,
      suffix: "+",
      title: "Sacred Destinations",
      description: "Sacred spots across India",
      type: "destinations" as const,
    },
  ];

  // Container motion stagger variants
  const containerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-12 py-8 select-none text-center relative overflow-hidden">
      
      {/* Decorative low-opacity mandala backdrop overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-center scale-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23062E4F' d='M50,10A40,40 0 1,0 90,50A40,40 0 0,0 50,10M50,20A30,30 0 1,1 20,50A30,30 0 0,1 50,20'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
        }}
      />

      <motion.div
        variants={containerVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1280px] mx-auto bg-white/94 backdrop-blur-md border border-slate-200/50 shadow-[0_8px_32px_rgba(6,46,79,0.04)] rounded-2xl p-6 sm:p-8 relative overflow-hidden"
      >
        {/* Soft animated gradient mesh layer */}
        <motion.div 
          animate={{
            backgroundImage: [
              "radial-gradient(circle at 10% 20%, rgba(255, 248, 232, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 90% 80%, rgba(234, 242, 255, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 10% 20%, rgba(255, 248, 232, 0.3) 0%, transparent 60%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none opacity-[0.8]"
        />

        {/* Top Header Text */}
        <div className="space-y-1 z-10 relative mb-5 text-center">
          <span className="text-[#E9A227] font-bold text-[11px] sm:text-[12px] uppercase tracking-widest block">
            OneJourney Trust
          </span>
          <h2 className="text-lg sm:text-[22px] md:text-[24px] font-extrabold text-[#062E4F] font-display leading-tight">
            Trusted by Thousands of Pilgrims Across India
          </h2>
        </div>

        {/* Grid Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          {stats.map((stat) => (
            <motion.div key={stat.title} variants={itemVariants as any}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Supporting Description */}
        <div className="mt-5 pt-4 border-t border-slate-100 max-w-2xl mx-auto relative z-10 text-center">
          <p className="text-[12px] sm:text-[13px] text-slate-500 font-medium leading-normal">
            Helping families experience safe, comfortable and spiritually meaningful journeys for over 15 years.
          </p>
        </div>

      </motion.div>
    </section>
  );
}
