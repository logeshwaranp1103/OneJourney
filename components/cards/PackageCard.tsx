"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/context/AppContext";
import { Package } from "@/data/packages";
import { easeQuint, getAssetPath } from "@/lib/animations";
import { 
  Heart, 
  Star, 
  MapPin, 
  Eye, 
  ArrowRight, 
  Share2, 
  ShieldCheck, 
  Activity, 
  Check, 
  BadgeInfo, 
  Info,
  CalendarDays,
  ActivityIcon,
  Users,
  RefreshCw
} from "lucide-react";
import { toast } from "sonner";

interface PackageCardProps {
  pkg: Package;
  index: number;
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  const { savedIds, toggleSave, compareIds, toggleCompare, setEnquireOpen, setEnquirePackageId } = useApp();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const isSaved = savedIds.includes(pkg.id);
  const isCompared = compareIds.includes(pkg.id);

  const handleEnquireClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setEnquirePackageId(pkg.id);
    setEnquireOpen(true);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== "undefined") {
      const shareUrl = `${window.location.origin}/packages/${pkg.id}`;
      navigator.clipboard.writeText(shareUrl);
      toast.success("Yatra link copied to clipboard!");
    }
  };

  // Mock details based on ID
  const getSeatsRemaining = () => {
    if (pkg.id === "divine-south") return 8;
    if (pkg.id === "awadh-kashi") return 14;
    if (pkg.id === "jyotirlinga-gujarat") return 5;
    return 12;
  };

  const getUrgencyText = () => {
    if (pkg.id === "divine-south") return "Early Bird 15% Off";
    if (pkg.id === "jyotirlinga-gujarat") return "Festival Yatra Special";
    return "Limited Seats Open";
  };

  const getBestMonth = () => {
    if (pkg.region === "South India") return "Oct - Mar";
    if (pkg.region === "North India") return "Nov - Feb";
    return "Sep - Apr";
  };

  const getDifficulty = () => {
    return pkg.seniorFriendly ? "Easy Paced" : "Moderate Paced";
  };

  const toggleTab = (tab: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: easeQuint, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col group relative transition-all duration-300 select-none hover:scale-[1.02] hover:border-[#E8A63B] hover:shadow-md cursor-pointer`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* 1. Image Section (Height 230px) */}
      <div className="relative h-[230px] w-full overflow-hidden bg-slate-100">
        <img
          src={getAssetPath(pkg.image)}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 opacity-90 pointer-events-none" />

        {/* Top Left Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          {pkg.tags && pkg.tags.length > 0 && (
            <span className="px-2.5 py-1 rounded-lg font-bold text-[10px] shadow-sm uppercase tracking-wider bg-[#E8A63B] text-white">
              {pkg.tags[0]}
            </span>
          )}
          {pkg.seatsLeft != null && (
            <span className="px-2.5 py-1 rounded-lg font-bold text-[10px] shadow-sm uppercase tracking-wider bg-red-600 text-white flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              Only {pkg.seatsLeft} Seats Left
            </span>
          )}
        </div>

        {/* Top Right Controls */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          {/* Compare Toggle */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleCompare(pkg.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all shadow-sm active:scale-90 cursor-pointer ${
              isCompared 
                ? "bg-[#0B3A63] text-white border border-[#E8A63B]" 
                : "bg-white/90 hover:bg-white text-slate-700"
            }`}
            title="Compare Package"
          >
            <RefreshCw size={14} className={isCompared ? "animate-spin-slow" : ""} />
          </button>

          {/* Share Button */}
          <button
            onClick={handleShareClick}
            className="p-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full text-slate-700 transition-all shadow-sm active:scale-90 cursor-pointer"
            title="Share Package"
          >
            <Share2 size={14} />
          </button>

          {/* Wishlist Heart */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSave(pkg.id);
            }}
            className="p-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full text-slate-700 hover:text-red-600 transition-all shadow-sm active:scale-90 cursor-pointer"
            title="Save to Wishlist"
          >
            <Heart
              size={14}
              className={isSaved ? "fill-red-600 text-red-600" : "text-slate-600"}
            />
          </button>
        </div>

        {/* Bottom Left Rating Overlays */}
        {(pkg.rating != null || pkg.verified === true) && (
          <div className="absolute bottom-3 left-4 text-white z-10 flex items-center gap-2 text-xs">
            {pkg.rating != null && (
              <div className="flex items-center gap-0.5 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-lg">
                <Star size={11} className="fill-[#E8A63B] text-[#E8A63B]" />
                <span className="font-bold">{pkg.rating}</span>
                {pkg.reviewCount != null && <span className="opacity-75">({pkg.reviewCount})</span>}
              </div>
            )}
            {pkg.verified === true && (
              <span className="bg-emerald-600/80 backdrop-blur-sm px-2 py-0.5 rounded-lg font-bold text-[10px] uppercase tracking-wider flex items-center gap-0.5">
                <ShieldCheck size={10} /> Verified
              </span>
            )}
          </div>
        )}

        {/* Bottom Right Duration Overlays */}
        <div className="absolute bottom-3 right-4 text-white z-10 text-xs bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-lg font-bold">
          {pkg.duration.split(" / ")[0]}
        </div>
      </div>

      {/* 2. Package Content details */}
      <div className="p-5 flex flex-col flex-grow gap-4">
        
        {/* Title & connected routes */}
        <div>
          <h3 
            className="text-[18px] text-[#0B3A63] font-bold leading-snug tracking-tight group-hover:text-[#E8A63B] transition-colors line-clamp-2 h-[48px] text-left"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {pkg.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 truncate text-left">
            <MapPin size={13} className="text-[#E8A63B] shrink-0" />
            <span className="truncate font-medium">{pkg.destinations.split(" - ").join(" → ")}</span>
          </div>
        </div>

        {/* Trust Row */}
        <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-left">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600">
            <Check size={12} className="text-emerald-600" /> Verified Stays
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600">
            <Check size={12} className="text-emerald-600" /> Expert Guides
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600">
            <Check size={12} className="text-emerald-600" /> No Hidden Fees
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600">
            <Check size={12} className="text-emerald-600" /> GST Compliant
          </div>
        </div>

        {/* Quick Info Pills */}
        <div className="flex flex-wrap gap-1.5 select-none">
          <span className="inline-flex items-center gap-1 bg-[#FFF8E8] text-[#E8A63B] border border-[#E8A63B]/20 px-2.5 py-1 rounded-full text-[11px] font-bold">
            <CalendarDays size={11} /> {pkg.bestSeason || getBestMonth()}
          </span>
          <span className="inline-flex items-center gap-1 bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-full text-[11px] font-bold">
            <ActivityIcon size={11} /> {pkg.pace || getDifficulty()}
          </span>
          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-full text-[11px] font-bold">
            <Users size={11} /> {pkg.travellerType || "Family Care"}
          </span>
        </div>

        {/* Circular Inclusions Tray with Custom Tooltips */}
        <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100 select-none">
          <div className="relative group/tooltip flex flex-col items-center gap-0.5 flex-grow border-r border-slate-200/50">
            <span className="material-symbols-outlined text-[18px] text-[#0B3A63] icon-fill">hotel</span>
            <span className="text-[9px] font-bold text-slate-500 uppercase">Hotel</span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] bg-slate-900 text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none shadow">
              3-Star/Ashram stay near temple
            </span>
          </div>

          <div className="relative group/tooltip flex flex-col items-center gap-0.5 flex-grow border-r border-slate-200/50">
            <span className="material-symbols-outlined text-[18px] text-[#0B3A63] icon-fill">restaurant</span>
            <span className="text-[9px] font-bold text-slate-500 uppercase">Meals</span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] bg-slate-900 text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none shadow">
              Hygienic Pure Veg/Satvik meals
            </span>
          </div>

          <div className="relative group/tooltip flex flex-col items-center gap-0.5 flex-grow border-r border-slate-200/50">
            <span className="material-symbols-outlined text-[18px] text-[#0B3A63] icon-fill">directions_bus</span>
            <span className="text-[9px] font-bold text-slate-500 uppercase">Transit</span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] bg-slate-900 text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none shadow">
              AC SUV / Private Luxury Coach
            </span>
          </div>

          <div className="relative group/tooltip flex flex-col items-center gap-0.5 flex-grow">
            <span className="material-symbols-outlined text-[18px] text-[#0B3A63] icon-fill">person_pin_circle</span>
            <span className="text-[9px] font-bold text-slate-500 uppercase">Guide</span>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] bg-slate-900 text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none shadow">
              Dedicated spiritual tour guide
            </span>
          </div>
        </div>

        {/* Social Proof */}
        {pkg.recentBookings != null && (
          <div className="text-left text-xs font-bold text-emerald-600 flex items-center gap-1.5">
            <Activity size={12} className="animate-pulse" />
            <span>Trending this week • Booked {pkg.recentBookings}+ times recently</span>
          </div>
        )}

        {/* Pricing Rows */}
        <div className="flex justify-between items-end border-t border-slate-100 pt-3 text-left">
          {pkg.price != null ? (
            <>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Starting From</span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-[20px] font-extrabold text-[#0B3A63]">
                    ₹{pkg.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    ₹{(pkg.price * 1.25).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">EMI Options</span>
                <span className="text-[11px] font-bold text-[#0B3A63] block mt-1">
                  From ₹{Math.floor(pkg.price / 12).toLocaleString()}/mo
                </span>
              </div>
            </>
          ) : (
            <div className="w-full flex justify-between items-center py-1">
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Package Type</span>
                <span className="text-sm font-bold text-[#0B3A63] flex items-center gap-1">
                  <ShieldCheck size={14} className="text-[#E8A63B]" /> Customizable Package
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Enquire for Pricing
              </span>
            </div>
          )}
        </div>

        {/* Expandable Accordion Tabs inside the card */}
        <div className="border border-slate-200/80 rounded-xl overflow-hidden mt-1">
          <div className="flex bg-slate-50 border-b border-slate-200 divide-x divide-slate-200 text-[10px] font-bold text-slate-600 select-none">
            <button onClick={(e) => toggleTab("highlights", e)} className={`flex-1 py-2 text-center hover:bg-white hover:text-[#0B3A63] transition-colors cursor-pointer ${activeTab === "highlights" ? "bg-white text-[#0B3A63]" : ""}`}>
              Highlights
            </button>
            <button onClick={(e) => toggleTab("timings", e)} className={`flex-1 py-2 text-center hover:bg-white hover:text-[#0B3A63] transition-colors cursor-pointer ${activeTab === "timings" ? "bg-white text-[#0B3A63]" : ""}`}>
              Timings
            </button>
            <button onClick={(e) => toggleTab("tips", e)} className={`flex-1 py-2 text-center hover:bg-white hover:text-[#0B3A63] transition-colors cursor-pointer ${activeTab === "tips" ? "bg-white text-[#0B3A63]" : ""}`}>
              Tips
            </button>
            <button onClick={(e) => toggleTab("policy", e)} className={`flex-1 py-2 text-center hover:bg-white hover:text-[#0B3A63] transition-colors cursor-pointer ${activeTab === "policy" ? "bg-white text-[#0B3A63]" : ""}`}>
              Cancellation
            </button>
          </div>

          <AnimatePresence initial={false}>
            {activeTab && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-white p-3.5 text-xs text-slate-600 border-t border-slate-100 text-left font-medium leading-relaxed leading-normal"
              >
                {activeTab === "highlights" && (
                  <ul className="list-disc pl-4 space-y-1">
                    <li>
                      {pkg.inclusions.guide
                        ? `${String(pkg.inclusions.guide)} with coordinated fast-track assistance at ${pkg.destinationName || pkg.destinations.split("(")[0].trim()}.`
                        : `Dedicated spiritual guide assistance at ${pkg.destinationName || pkg.destinations.split("(")[0].trim()}.`}
                    </li>
                    <li>
                      {pkg.inclusions.meals
                        ? `${String(pkg.inclusions.meals)} served at verified hygienic establishments throughout the journey.`
                        : "Pure vegetarian Satvik meals at verified clean dining establishments."}
                    </li>
                    <li>
                      {pkg.inclusions.transit
                        ? `${String(pkg.inclusions.transit)} with comfort rest stops and first-aid assistance.`
                        : "AC private transport with regular rest stops and luggage assistance."}
                    </li>
                    {pkg.seniorFriendly && (
                      <li>Elder-care support: wheelchair-friendly routes, slow-paced walking, and medical assistance on standby.</li>
                    )}
                  </ul>
                )}
                {activeTab === "timings" && (
                  <p>
                    {pkg.category === "Pilgrimage"
                      ? `Morning prayers are coordinated between 5:30 AM and 11:30 AM at ${pkg.destinationName || "the sacred site"}. Sunset Aarti begins by 6:00 PM with reserved seats for elders.`
                      : pkg.category === "Family"
                      ? `Morning sightseeing at ${pkg.destinationName || pkg.destinations.split("(")[0].trim()} starts at 8:00 AM. Afternoon breaks are scheduled from 1:00–3:00 PM. Evening leisure activities wrap up by 7:30 PM.`
                      : `Morning heritage walks begin at 8:30 AM. Afternoon cultural sessions at 2:00 PM. Evening guided return by 6:30 PM.`}
                    {pkg.duration ? ` This is a ${pkg.duration} package.` : ""}
                  </p>
                )}
                {activeTab === "tips" && (
                  <p>
                    {pkg.category === "Pilgrimage"
                      ? `Carry valid government ID cards. Traditional decency wear is recommended at ${pkg.destinationName || "all sacred sites"}. Avoid carrying electronics inside prayer corridors.`
                      : pkg.region === "International"
                      ? `Carry your passport and travel insurance. Comfortable walking shoes are essential. Respect local customs and photography guidelines at ${pkg.destinationName || "the destination"}.`
                      : `Wear comfortable footwear suitable for ${pkg.pace || "easy-paced"} walks. Carry water and a light jacket. Valid photo ID is required at entry points to ${pkg.destinationName || "the destination"}.`}
                  </p>
                )}
                {activeTab === "policy" && (
                  <p>
                    Get a 100% full refund on cancellations made up to 15 days before the departure
                    {pkg.category === "Pilgrimage" ? " of your yatra" : " of your trip"}.
                    {" "}Rescheduling options are fully flexible up to 7 days prior.
                    {pkg.seniorFriendly ? " Medical emergency cancellations are covered with zero penalty." : ""}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Primary and Secondary CTA Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-1 select-none">
          <Link href={`/packages/${pkg.id}`} className="w-full">
            <button className="w-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold py-2.5 rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 h-11 bg-white">
              View Itinerary
            </button>
          </Link>
          <button
            onClick={handleEnquireClick}
            className="w-full bg-[#0B3A63] hover:bg-[#124d80] text-white font-bold py-2.5 rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 h-11 shadow-sm hover:shadow-md active:scale-97 border border-transparent"
          >
             Enquire Now <ArrowRight size={13} className="text-[#E8A63B] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </motion.article>
  );
}
