"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { mockPackages, Package } from "@/data/packages";
import { useApp } from "@/context/AppContext";
import { RefreshCw, Search, ArrowLeft, Trash2, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { easeQuint, getAssetPath } from "@/lib/animations";

export default function ComparePackages() {
  const { compareIds, toggleCompare, setEnquireOpen, setEnquirePackageId } = useApp();
  const [highlightDifferences, setHighlightDifferences] = useState(false);

  const comparedPackages = mockPackages.filter((pkg) => compareIds.includes(pkg.id));

  const handleEnquireClick = (id: string) => {
    setEnquirePackageId(id);
    setEnquireOpen(true);
  };

  // Helper mappings for additional fields
  const getPackageTier = (pkg: Package) => {
    if (pkg.price >= 35000) return "Premium Gold Tier";
    if (pkg.price >= 18000) return "VIP Silver Tier";
    return "Standard Comfort Tier";
  };

  const getGuide = (pkg: Package) => {
    return pkg.inclusions.guide ? "Included (Language Assist)" : "Not Included";
  };

  const getMedicalSupport = (pkg: Package) => {
    return pkg.seniorFriendly || pkg.wheelchairAccess 
      ? "24/7 Care Guide + Emergency Oxygen & Doctor on Call" 
      : "Standard Travel First-Aid Support";
  };

  const getSeniorFriendly = (pkg: Package) => {
    return pkg.seniorFriendly ? "100% Elder Assist (Paced, Ramps, Cooldown stops)" : "Standard Pace (Moderate Stairs)";
  };

  const getCancellationPolicy = (pkg: Package) => {
    if (pkg.price >= 30000) return "Free cancellation up to 72 hours before departure";
    return "100% Refund within 7 days, 50% refund afterwards";
  };

  const getBestSeason = (pkg: Package) => {
    if (pkg.region === "South India") return "October to March (Pleasant Weather)";
    if (pkg.region === "North India") return "October to April (Spiritual Festivals)";
    if (pkg.region === "Char Dham") return "May to June & September to October";
    return "September to March (Vasant & Autumn)";
  };

  const getGroupSize = (pkg: Package) => {
    if (pkg.category === "Pilgrimage") return "Max 25 (Senior Friendly Coordinated)";
    return "Max 15 (Premium Family Circle)";
  };

  const getHighlights = (pkg: Package) => {
    return pkg.itinerary.map(i => i.title).slice(0, 3).join(" → ");
  };

  const getTempleVisits = (pkg: Package) => {
    return pkg.destinations.split(" - ").join(", ") + " Temples & Ghats";
  };

  const getIncludedServices = (pkg: Package) => {
    const list = [];
    if (pkg.inclusions.hotel) list.push(`${pkg.inclusions.hotel}`);
    if (pkg.inclusions.meals) list.push("Pure Veg/Satvik Meals");
    if (pkg.inclusions.transit) list.push(`${pkg.inclusions.transit}`);
    if (pkg.inclusions.guide) list.push("Spiritual Guide Services");
    if (pkg.inclusions.darshan) list.push("VIP Special entry darshan tickets");
    return list.join(", ");
  };

  const getExcludedServices = (pkg: Package) => {
    return "Personal offerings/prasad, dry cleaning, flight/train travel to pickup hub, insurance add-ons.";
  };

  // Helper check to check if row values are different
  const isRowDifferent = (fieldGetter: (p: Package) => string | number | boolean) => {
    if (comparedPackages.length < 2) return false;
    const firstVal = fieldGetter(comparedPackages[0]);
    return comparedPackages.some(p => fieldGetter(p) !== firstVal);
  };

  const renderRow = (label: string, fieldGetter: (p: Package) => string | number | boolean) => {
    const differencesFound = isRowDifferent(fieldGetter);
    const highlight = highlightDifferences && differencesFound;

    return (
      <tr className={`border-b border-slate-100 hover:bg-slate-50/50 transition-all ${highlight ? "bg-amber-50/30" : ""}`}>
        <td className="py-4 pr-6 font-bold text-xs uppercase tracking-wider text-slate-500 select-none">
          <div className="flex items-center gap-1.5">
            {label}
            {differencesFound && (
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" title="Values differ" />
            )}
          </div>
        </td>
        {comparedPackages.map((pkg) => (
          <td key={pkg.id} className="py-4 px-6 text-sm text-slate-800 font-medium">
            {String(fieldGetter(pkg))}
          </td>
        ))}
      </tr>
    );
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <main className="w-full flex-grow max-w-container-max mx-auto px-margin-mobile md:px-12 py-10 flex flex-col gap-8">
          
          {/* Header */}
          <div className="flex flex-col gap-3 text-left select-none">
            <nav className="text-xs font-semibold text-outline flex items-center gap-1.5 font-body-sm">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link href="/packages" className="hover:text-primary transition-colors">Packages</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-on-surface font-bold">Comparison Board</span>
            </nav>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="font-display-lg-mobile md:font-display-lg text-primary font-bold">
                  Compare Pilgrimage Packages
                </h1>
                <p className="text-sm text-on-surface-variant font-medium mt-1">
                  Compare side-by-side to select the perfect spiritual journey.
                </p>
              </div>
              <div className="flex items-center gap-3">
                {comparedPackages.length > 1 && (
                  <button 
                    onClick={() => setHighlightDifferences(!highlightDifferences)}
                    className={`flex items-center gap-1.5 border px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      highlightDifferences 
                        ? "bg-amber-100 border-amber-300 text-amber-800" 
                        : "border-slate-300 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <AlertCircle size={14} /> {highlightDifferences ? "Differences Highlighted" : "Highlight Differences"}
                  </button>
                )}
                <Link href="/packages">
                  <button className="flex items-center gap-1.5 border border-primary text-primary px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#EAF2FF] transition-all cursor-pointer">
                    <ArrowLeft size={14} /> Back to Browse
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Comparison Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {comparedPackages.length === 0 ? (
                /* Empty state */
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-xl shadow-level-1 border border-slate-200/60 px-6 gap-4 select-none"
                >
                  <div className="w-16 h-16 bg-[#EAF2FF] text-primary rounded-full flex items-center justify-center mb-1">
                    <RefreshCw size={28} className="text-primary animate-spin-slow" />
                  </div>
                  <h3 className="font-headline-lg text-[#062E4F] text-xl font-bold font-display">Comparison Board is Empty</h3>
                  <p className="text-slate-600 font-body-sm text-sm max-w-sm">
                    You haven&apos;t added any tour packages to compare. Add packages from search cards to compare up to 3 side-by-side.
                  </p>
                  <Link href="/packages">
                    <button className="mt-4 bg-[#E9A227] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#d58e1c] shadow-sm transition-colors cursor-pointer flex items-center gap-2">
                      <Search size={16} /> Choose Packages
                    </button>
                  </Link>
                </motion.div>
              ) : (
                /* Comparison Table */
                <motion.div
                  key="table"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="overflow-x-auto bg-white rounded-2xl shadow-level-1 border border-slate-200/80 p-6"
                >
                  <table className="w-full text-left border-collapse min-w-[850px]">
                    <thead>
                      <tr className="border-b border-slate-200">
                        {/* Title label column */}
                        <th className="py-4 pr-6 font-bold text-[#062E4F] font-display text-base w-[22%] select-none">
                          Spiritual Features
                        </th>
                        
                        {/* Package headers */}
                        {comparedPackages.map((pkg) => {
                          // Award tags
                          const isBestValue = pkg.price < 15000 && (pkg.rating != null && pkg.rating >= 4.8);
                          const isMostPopular = pkg.reviewCount != null && pkg.reviewCount > 200;
                          const isBestForSeniors = pkg.seniorFriendly && pkg.wheelchairAccess;

                          return (
                            <th key={pkg.id} className="py-4 px-6 w-[26%] align-top select-none relative group">
                              <div className="flex flex-col gap-3">
                                
                                {/* Badges */}
                                <div className="flex flex-wrap gap-1 min-h-[22px]">
                                  {isBestValue && (
                                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                      Best Value
                                    </span>
                                  )}
                                  {isMostPopular && (
                                    <span className="bg-[#EAF2FF] text-[#062E4F] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                      Most Popular
                                    </span>
                                  )}
                                  {isBestForSeniors && (
                                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                      Best for Seniors
                                    </span>
                                  )}
                                </div>

                                {/* Remove button */}
                                <button 
                                  onClick={() => toggleCompare(pkg.id)}
                                  className="absolute top-4 right-6 p-2 bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-full transition-colors cursor-pointer"
                                  title="Remove package"
                                >
                                  <Trash2 size={14} />
                                </button>
                                
                                <div className="w-full h-36 rounded-xl overflow-hidden shadow-sm border border-slate-200">
                                  <img 
                                    src={getAssetPath(pkg.image)} 
                                    alt={pkg.title} 
                                    className="w-full h-full object-cover" 
                                  />
                                </div>
                                
                                <h3 className="font-bold text-[#062E4F] text-[16px] font-display leading-snug line-clamp-2 h-[44px]">
                                  {pkg.title}
                                </h3>
                                
                                <span className="font-extrabold text-[#062E4F] text-xl">
                                  ₹{pkg.price.toLocaleString()} <span className="text-[11px] font-normal text-slate-500">/person</span>
                                </span>
                              </div>
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Core Specs */}
                      {renderRow("Destination", (p) => p.destinations)}
                      {renderRow("Duration", (p) => p.duration)}
                      {renderRow("Package Tier", getPackageTier)}
                      {renderRow("Accommodation", (p) => p.inclusions.hotel || "Standard Ashram Stay")}
                      {renderRow("Meal Type", (p) => p.inclusions.meals || "Pure Vegetarian Stays")}
                      {renderRow("Transport", (p) => p.inclusions.transit || "Standard Sleeper/Coach")}
                      {renderRow("Guide Included", getGuide)}
                      {renderRow("Medical Support", getMedicalSupport)}
                      {renderRow("Senior Friendly", getSeniorFriendly)}
                      {renderRow("Cancellation Policy", getCancellationPolicy)}
                      {renderRow("Best Season", getBestSeason)}
                      {renderRow("Group Size", getGroupSize)}
                      {renderRow("Highlights", getHighlights)}
                      {renderRow("Temple Visits", getTempleVisits)}
                      {renderRow("Included Services", getIncludedServices)}
                      {renderRow("Excluded Services", getExcludedServices)}

                      {/* Action buttons */}
                      <tr className="select-none bg-slate-50/30">
                        <td className="py-6 pr-6 w-[22%]" />
                        {comparedPackages.map((pkg) => (
                          <td key={pkg.id} className="py-6 px-6 align-middle">
                            <div className="flex flex-col gap-2">
                              <button 
                                onClick={() => handleEnquireClick(pkg.id)}
                                className="w-full bg-[#062E4F] hover:bg-[#0B426D] text-white py-3 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                              >
                                Enquire Now <ArrowRight size={13} />
                              </button>
                              <button 
                                onClick={() => toggleCompare(pkg.id)}
                                className="w-full border border-slate-300 text-slate-600 hover:text-red-600 hover:border-red-300 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer bg-white"
                              >
                                Remove
                              </button>
                            </div>
                          </td>
                        ))}
                      </tr>

                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
