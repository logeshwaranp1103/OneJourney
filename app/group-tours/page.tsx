"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { FadeIn, FadeUp, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations/Reveals";
import PackageCard from "@/components/cards/PackageCard";
import { mockPackages } from "@/data/packages";
import { useApp } from "@/context/AppContext";
import { easeQuint, getAssetPath } from "@/lib/animations";
import { Users, Search, SlidersHorizontal, RefreshCw, X, Calendar, MapPin, Eye, ArrowRight } from "lucide-react";

export default function GroupTours() {
  const { setEnquireOpen, setEnquirePackageId } = useApp();
  const [activeView, setActiveView] = useState<"landing" | "listing">("landing");

  // Search/Filter states for the listing view
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [selectedSize, setSelectedSize] = useState<string>("Any");
  const [isSeniorFriendlyOnly, setIsSeniorFriendlyOnly] = useState(false);

  // Group Tours packages (filter out packages with group tags/sizes)
  const groupPackages = mockPackages.filter((pkg) => {
    // Only return packages suited for groups/families
    if (pkg.category !== "Family" && pkg.category !== "Heritage" && !pkg.tags.includes("Best for Families")) {
      // Allow others too but prioritize these
    }

    if (searchText) {
      const matchTitle = pkg.title.toLowerCase().includes(searchText.toLowerCase());
      const matchDest = pkg.destinations.toLowerCase().includes(searchText.toLowerCase());
      if (!matchTitle && !matchDest) return false;
    }

    if (selectedRegion !== "All" && pkg.region !== selectedRegion) return false;
    if (isSeniorFriendlyOnly && !pkg.seniorFriendly) return false;

    return true;
  });

  const handleEnquireClick = () => {
    setEnquirePackageId(null);
    setEnquireOpen(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveView("listing");
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <main className="w-full flex-grow">

          {/* Main Container Switch */}
          <AnimatePresence mode="wait">
            {activeView === "landing" ? (
              /* View A: Landing Page (group_tours/code.html) */
              <motion.div
                key="landing-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hero Section */}
                <section className="relative w-full min-h-[720px] flex items-center justify-center overflow-hidden select-none">
                  <div className="absolute inset-0 w-full h-full z-0">
                    <div
                      className="bg-cover bg-center w-full h-full absolute inset-0 transform scale-102"
                      style={{
                        backgroundImage: `url("${getAssetPath("/images/elderly_pilgrims.png")}")`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-surface/95 to-surface/40" />
                  </div>

                  <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-12 py-16 w-full flex flex-col items-start text-left max-w-3xl ml-0 lg:ml-24">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/20 text-on-secondary-container font-label-bold text-sm mb-6 backdrop-blur-sm border border-secondary-fixed-dim/30">
                      <Users size={16} className="text-secondary" />
                      Group Travel Experts
                    </span>
                    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:font-display-lg text-primary mb-6">
                      Travel Together,<br /> Plan with Confidence.
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
                      Experience the joy of spiritual journeys and heritage tours with those who matter most. We handle the logistics, so your group can focus on connection and devotion.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto select-none">
                      <button
                        onClick={() => setActiveView("listing")}
                        className="bg-primary text-on-primary h-14 px-8 rounded-lg font-label-bold text-label-bold hover:bg-primary-container hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
                      >
                        Explore Group Packages
                        <ArrowRight size={18} />
                      </button>
                      <button
                        onClick={handleEnquireClick}
                        className="bg-transparent text-primary border-2 border-primary h-14 px-8 rounded-lg font-label-bold text-label-bold hover:bg-surface-variant transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
                      >
                        Request Custom Plan
                        <span className="material-symbols-outlined text-[18px]">edit_document</span>
                      </button>
                    </div>
                  </div>
                </section>
              </motion.div>
            ) : (
              /* View B: Listing View (group_tour_packages_listing_desktop/code.html) */
              <motion.div
                key="listing-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: easeQuint }}
                className="max-w-container-max mx-auto w-full px-margin-mobile md:px-12 py-10 flex flex-col gap-10 text-left"
              >
                {/* Breadcrumbs & Title */}
                <div className="flex flex-col gap-4 select-none">
                  <nav className="text-xs font-semibold text-outline flex items-center gap-1.5 font-body-sm">
                    <button onClick={() => setActiveView("landing")} className="hover:text-primary transition-colors cursor-pointer">Group Tours</button>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-on-surface font-bold">Group Packages</span>
                  </nav>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                      <h1 className="font-display-lg text-primary font-bold">Explore Group Tour Packages</h1>
                      <p className="font-body-lg text-on-surface-variant mt-2 max-w-3xl leading-relaxed">
                        Experience the spiritual journey of a lifetime with our carefully organized, affordable group tours. Ideal for families, friends, and multigenerational travelers seeking shared moments of devotion.
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveView("landing")}
                      className="border border-primary text-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-surface-container transition-all cursor-pointer flex-shrink-0"
                    >
                      Back to Overview
                    </button>
                  </div>
                </div>

                {/* Search Panel inside Listing */}
                <FadeUp>
                  <div className="bg-surface-container-lowest rounded-xl p-6 shadow-level-1 border border-surface-variant select-none">
                    <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                      <div className="flex flex-col gap-2">
                        <label className="font-label-bold text-xs uppercase tracking-wider text-outline">Destination</label>
                        <div className="relative">
                          <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                          <input
                            type="text"
                            placeholder="Where to?"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full h-12 pl-9 pr-3 rounded-lg border border-outline-variant focus:border-primary text-sm outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-label-bold text-xs uppercase tracking-wider text-outline">Group Region</label>
                        <select
                          value={selectedRegion}
                          onChange={(e) => setSelectedRegion(e.target.value)}
                          className="w-full h-12 px-3 rounded-lg border border-outline-variant focus:border-primary text-sm outline-none cursor-pointer"
                        >
                          <option value="All">All Regions</option>
                          <option value="North India">North India</option>
                          <option value="South India">South India</option>
                          <option value="Char Dham">Char Dham</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-label-bold text-xs uppercase tracking-wider text-outline">Group Size</label>
                        <select
                          value={selectedSize}
                          onChange={(e) => setSelectedSize(e.target.value)}
                          className="w-full h-12 px-3 rounded-lg border border-outline-variant focus:border-primary text-sm outline-none cursor-pointer"
                        >
                          <option value="Any">Any Size</option>
                          <option value="small">10-20 People</option>
                          <option value="large">20+ People</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="bg-primary text-on-primary h-12 rounded-lg font-bold text-sm hover:bg-primary-container transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm w-full"
                      >
                        <Search size={16} />
                        Filter Group Tours
                      </button>
                    </form>
                  </div>
                </FadeUp>

                {/* Sidebar + Packages Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

                  {/* Sidebar Filters */}
                  <aside className="lg:col-span-3 bg-surface-container-lowest rounded-xl p-6 shadow-level-1 border border-surface-variant flex flex-col gap-6 sticky top-28 select-none">
                    <div className="flex justify-between items-center border-b border-outline-variant/10 pb-3">
                      <h2 className="font-headline-md text-base text-primary font-bold">Filters</h2>
                      <button
                        onClick={() => { setSelectedRegion("All"); setSelectedSize("Any"); setIsSeniorFriendlyOnly(false); }}
                        className="text-secondary font-label-bold text-xs hover:underline"
                      >
                        Clear All
                      </button>
                    </div>

                    {/* Region */}
                    <div className="space-y-2">
                      <h3 className="font-label-bold text-xs uppercase tracking-wider text-outline">Region</h3>
                      <div className="flex flex-col gap-2">
                        {["North India", "South India", "Char Dham"].map((region) => (
                          <label key={region} className="flex items-center gap-2 cursor-pointer group text-sm font-medium">
                            <input
                              type="radio"
                              name="region-grp"
                              checked={selectedRegion === region}
                              onChange={() => setSelectedRegion(region)}
                              className="text-primary focus:ring-primary w-4 h-4 border-outline-variant"
                            />
                            <span className="group-hover:text-primary transition-colors">{region}</span>
                          </label>
                        ))}
                        <label className="flex items-center gap-2 cursor-pointer group text-sm font-medium">
                          <input
                            type="radio"
                            name="region-grp"
                            checked={selectedRegion === "All"}
                            onChange={() => setSelectedRegion("All")}
                            className="text-primary focus:ring-primary w-4 h-4 border-outline-variant"
                          />
                          <span>All Regions</span>
                        </label>
                      </div>
                    </div>

                    {/* Special requirements */}
                    <div className="space-y-2 border-t border-outline-variant/10 pt-4">
                      <h3 className="font-label-bold text-xs uppercase tracking-wider text-outline">Requirements</h3>
                      <div className="flex flex-col gap-2.5">
                        <label className="flex items-center gap-2.5 cursor-pointer text-sm font-medium">
                          <input
                            type="checkbox"
                            checked={isSeniorFriendlyOnly}
                            onChange={(e) => setIsSeniorFriendlyOnly(e.target.checked)}
                            className="rounded text-primary focus:ring-primary w-4.5 h-4.5 border-outline-variant"
                          />
                          <span>Senior Friendly</span>
                        </label>
                      </div>
                    </div>
                  </aside>

                  {/* Listings Grid */}
                  <div className="lg:col-span-9 flex flex-col gap-6">

                    {/* List Header */}
                    <div className="flex justify-between items-center bg-surface-container-lowest p-4 rounded-xl shadow-level-1 border border-surface-variant select-none">
                      <span className="text-sm font-bold text-primary">
                        {groupPackages.length} Group Packages found
                      </span>
                    </div>

                    {/* Cards */}
                    {groupPackages.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-16 bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/10 gap-3">
                        <span className="text-outline font-bold">No matching group packages found.</span>
                        <button
                          onClick={() => { setSelectedRegion("All"); setSelectedSize("Any"); setSearchText(""); }}
                          className="text-primary text-xs font-bold underline"
                        >
                          Clear Filters
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                        {groupPackages.map((pkg, i) => (
                          <PackageCard key={pkg.id} pkg={pkg} index={i} />
                        ))}
                      </div>
                    )}

                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
