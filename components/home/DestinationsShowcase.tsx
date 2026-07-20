"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, Compass, Sparkles } from "lucide-react";
import { destinationsData, Destination } from "@/data/destinations";
import { useApp } from "@/context/AppContext";
import { getAssetPath } from "@/lib/animations";

export default function DestinationsShowcase() {
  const { setEnquireOpen, setEnquirePackageId } = useApp();
  const [primaryFilter, setPrimaryFilter] = useState<"All" | "Family" | "Pilgrimage">("All");
  const [faithFilter, setFaithFilter] = useState<"All" | "Hinduism" | "Buddhism" | "Christianity" | "Islam">("All");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleExploreClick = () => {
    setEnquirePackageId(null);
    setEnquireOpen(true);
  };

  // Filtered destinations list
  const filteredDestinations = useMemo(() => {
    return destinationsData.filter((item) => {
      if (primaryFilter === "Family") {
        return item.mainCategory === "Family";
      }
      if (primaryFilter === "Pilgrimage") {
        if (item.mainCategory !== "Pilgrimage") return false;
        if (faithFilter !== "All") {
          return item.faithCategory === faithFilter;
        }
        return true;
      }
      return true;
    });
  }, [primaryFilter, faithFilter]);

  return (
    <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-12 py-20 select-none flex flex-col gap-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-2 text-left">
          <span className="inline-flex items-center gap-1.5 bg-[#EAF2FF] text-[#062E4F] border border-blue-100 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Compass size={14} className="text-[#E9A227]" />
            Sacred & Family Destinations
          </span>
          <h2 className="font-headline-lg text-headline-lg text-[#062E4F] font-bold">
            Explore Handcrafted Destinations
          </h2>
          <p className="font-body-md text-body-md text-slate-600 leading-relaxed max-w-2xl">
            Discover iconic heritage landmarks, family tours, and revered pilgrimage sanctuaries around the world.
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-col gap-4">
        {/* Primary Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-2 px-2 scroll-smooth">
          {(["All", "Family", "Pilgrimage"] as const).map((cat) => {
            const isActive = primaryFilter === cat;
            const label = cat === "All" ? "All Destinations" : cat === "Family" ? "Family Tours" : "Pilgrimage Tours";
            return (
              <button
                key={cat}
                onClick={() => {
                  setPrimaryFilter(cat);
                  if (cat !== "Pilgrimage") setFaithFilter("All");
                }}
                className={`px-5 py-2.5 rounded-xl font-label-bold text-sm transition-all duration-200 whitespace-nowrap cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#E9A227] ${
                  isActive
                    ? "bg-[#062E4F] text-white shadow-sm font-bold"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 font-semibold"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Secondary Faith Filter Tabs (Shown when Pilgrimage Tours is selected) */}
        {primaryFilter === "Pilgrimage" && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 pt-1 -mx-2 px-2 scroll-smooth bg-[#F7F9FF] p-2 rounded-2xl border border-slate-200/60"
          >
            <span className="text-xs font-bold text-[#062E4F] shrink-0 px-2 uppercase tracking-wider flex items-center gap-1">
              <Sparkles size={12} className="text-[#E9A227]" />
              Faith Traditions:
            </span>
            {(["All", "Hinduism", "Buddhism", "Christianity", "Islam"] as const).map((faith) => {
              const isActive = faithFilter === faith;
              const label = faith === "All" ? "All Pilgrimages" : faith;
              return (
                <button
                  key={faith}
                  onClick={() => setFaithFilter(faith)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#E9A227] ${
                    isActive
                      ? "bg-[#E9A227] text-white shadow-xs"
                      : "bg-white text-slate-600 hover:text-[#062E4F] hover:bg-slate-100 border border-slate-200/60"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Grid of Destination Cards */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Image Box */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden shrink-0">
                  <img
                    src={failedImages[dest.id] ? getAssetPath("/images/golden_temple_amritsar.png") : getAssetPath(dest.image)}
                    alt={dest.altText}
                    loading="lazy"
                    onError={() => handleImageError(dest.id)}
                    className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Category Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-[#062E4F]/85 backdrop-blur-md text-[#F7C873] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {dest.categoryBadge}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex flex-col justify-between flex-grow gap-3 text-left">
                  <div className="space-y-1.5">
                    {/* Destination Name */}
                    <h3 className="font-headline-sm font-bold text-[#062E4F] text-[17px] leading-snug group-hover:text-[#E9A227] transition-colors">
                      {dest.name}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1 text-slate-500 text-xs font-semibold">
                      <MapPin size={13} className="text-[#E9A227] shrink-0" />
                      <span>{dest.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-xs leading-relaxed font-medium line-clamp-2 pt-1">
                      {dest.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={handleExploreClick}
                    className="mt-2 w-full py-2.5 px-4 bg-[#EAF2FF] hover:bg-[#062E4F] text-[#062E4F] hover:text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#E9A227]"
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        /* Empty State */
        <div className="w-full py-16 px-6 text-center bg-white rounded-2xl border border-slate-200/80 space-y-3">
          <p className="text-slate-600 font-semibold text-base">
            More destinations are being added to this category.
          </p>
          <button
            onClick={() => {
              setPrimaryFilter("All");
              setFaithFilter("All");
            }}
            className="text-xs font-bold text-[#E9A227] hover:underline cursor-pointer"
          >
            View All Destinations
          </button>
        </div>
      )}
    </section>
  );
}
