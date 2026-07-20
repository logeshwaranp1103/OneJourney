"use client";

import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import ScrollProgress from "@/components/animations/ScrollProgress";
import PackageCard from "@/components/cards/PackageCard";
import { mockPackages } from "@/data/packages";
import { useApp } from "@/context/AppContext";
import { Heart, Search, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { easeQuint } from "@/lib/animations";

export default function SavedPackages() {
  const { savedIds } = useApp();

  const savedPackages = mockPackages.filter((pkg) => savedIds.includes(pkg.id));

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
              <span className="text-on-surface font-bold">Favorites</span>
            </nav>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-display-lg-mobile md:font-display-lg text-primary font-bold">
                  Your Saved Packages
                </h1>
                <p className="text-sm text-on-surface-variant font-medium mt-1">
                  Keep track of the journeys you are interested in.
                </p>
              </div>
              <Link href="/packages">
                <button className="flex items-center gap-1.5 border border-primary text-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-surface-container transition-all cursor-pointer">
                  <ArrowLeft size={14} /> Back to Browse
                </button>
              </Link>
            </div>
          </div>

          {/* Favorites List Grid */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {savedPackages.length === 0 ? (
                /* Empty state */
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-20 bg-surface-container-lowest rounded-xl shadow-level-1 border border-outline-variant/10 px-6 gap-4"
                >
                  <div className="w-16 h-16 bg-error-container/20 text-error rounded-full flex items-center justify-center mb-1">
                    <Heart size={28} className="text-error" />
                  </div>
                  <h3 className="font-headline-lg text-primary text-xl font-bold font-display">No Saved Journeys</h3>
                  <p className="text-on-surface-variant font-body-sm text-sm max-w-sm">
                    You haven&apos;t favorited any tour packages yet. Click the heart icon on any package card to save it here.
                  </p>
                  <Link href="/packages">
                    <button className="mt-4 bg-primary text-on-primary font-bold px-6 py-2.5 rounded-lg hover:bg-primary-container transition-colors cursor-pointer flex items-center gap-1">
                      <Search size={16} /> Browse Packages
                    </button>
                  </Link>
                </motion.div>
              ) : (
                /* Cards list */
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter text-left"
                >
                  {savedPackages.map((pkg, index) => (
                    <PackageCard key={pkg.id} pkg={pkg} index={index} />
                  ))}
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
