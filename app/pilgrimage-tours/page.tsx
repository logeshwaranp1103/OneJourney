"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { FadeIn, FadeUp, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations/Reveals";
import { useApp } from "@/context/AppContext";
import { ShieldCheck, HeartHandshake, Utensils, ShieldAlert, Compass, Calendar, BookOpen, Clock, MapPin, ChevronRight, Activity, Heart, ArrowRight } from "lucide-react";
import { easeQuint, getAssetPath } from "@/lib/animations";

export default function PilgrimageTours() {
  const { setEnquireOpen, setEnquirePackageId } = useApp();

  const handleEnquireClick = () => {
    setEnquirePackageId(null);
    setEnquireOpen(true);
  };

  const handlePackageEnquire = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setEnquirePackageId(id);
    setEnquireOpen(true);
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <main className="w-full flex-grow">

          {/* 1. Hero Section */}
          <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden select-none">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full z-0 transform scale-102"
              style={{
                backgroundImage: `url("${getAssetPath("/images/hero_dawn_temple.png")}")`
              }}
            />
            {/* Dark gradient mask for legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/45 z-10" />

            <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-12 w-full text-left flex flex-col items-start gap-6 pt-12">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeQuint }}
                className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary max-w-3xl leading-tight"
              >
                Sacred Journeys,<br /> Carefully Organised
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeQuint }}
                className="font-body-lg text-body-lg text-surface-container-high max-w-2xl"
              >
                Experience spiritual fulfillment with our expertly guided pilgrimage tours. Designed for comfort, safety, and deep reverence, ensuring peace of mind for every generation of your family.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: easeQuint }}
                className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto"
              >
                <Link href="/packages?category=pilgrimage" className="w-full sm:w-auto">
                  <button className="bg-secondary text-on-secondary font-label-bold text-label-bold h-[56px] px-8 rounded-lg shadow-level-1 hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
                    Explore Pilgrimage Packages
                    <span className="material-symbols-outlined text-[18px]">explore</span>
                  </button>
                </Link>
                <Link href="/ai-trip-planner" className="w-full sm:w-auto">
                  <button className="bg-transparent border-2 border-on-primary text-on-primary font-label-bold text-label-bold h-[56px] px-8 rounded-lg hover:bg-on-primary/10 transition-all flex items-center justify-center cursor-pointer w-full" >
                    Plan My Sacred Journey
                  </button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* 2. Trust Badges Bar */}
          <div className="bg-surface-container py-6 border-b border-outline-variant/20 select-none">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 flex flex-wrap justify-between items-center gap-6">

              <div className="flex items-center gap-3 text-primary">
                <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-sm text-secondary">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-label-bold text-sm">Vetted Local Guides</span>
              </div>

              <div className="flex items-center gap-3 text-primary">
                <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-sm text-secondary">
                  <HeartHandshake size={20} />
                </div>
                <span className="font-label-bold text-sm">Senior Citizen Friendly</span>
              </div>

              <div className="flex items-center gap-3 text-primary">
                <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-sm text-secondary">
                  <Utensils size={20} />
                </div>
                <span className="font-label-bold text-sm">Pure Veg / Satvik Meals</span>
              </div>

              <div className="flex items-center gap-3 text-primary">
                <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-sm text-secondary">
                  <ShieldAlert size={20} />
                </div>
                <span className="font-label-bold text-sm">Emergency Medical Support</span>
              </div>

            </div>
          </div>

          {/* 3. Sacred Destinations Bento Grid */}
          <section className="max-w-container-max mx-auto px-margin-mobile md:px-12 py-16">
            <div className="mb-8 text-left select-none">
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Sacred Destinations</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Discover holiest sites across India, curated for profound spiritual experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch select-none">
              {/* Large Featured Card (Tamil Nadu) */}
              <Link
                href="/packages?dest=South"
                className="md:col-span-2 group relative h-[400px] rounded-card overflow-hidden shadow-level-1 cursor-pointer block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-103"
                  style={{
                    backgroundImage: `url("${getAssetPath("/images/rameswaram_temple.png")}")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end text-left">
                  <div>
                    <span className="bg-secondary/20 text-secondary-fixed border border-secondary/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-label-bold mb-3 inline-block">
                      South India
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-on-primary font-bold">Divine Tamil Nadu</h3>
                    <p className="text-surface-container-high mt-1 text-sm flex items-center gap-1">
                      <Clock size={14} /> 7 Days | 6 Nights
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-[11px] text-surface-container-high mb-0.5">Starting from</span>
                    <span className="font-headline-md text-headline-md text-secondary-fixed font-bold">₹35,000</span>
                  </div>
                </div>
              </Link>

              {/* Smaller Card 1 (Kashi) */}
              <Link
                href="/packages?dest=Kashi"
                className="group relative h-[400px] rounded-card overflow-hidden shadow-level-1 cursor-pointer block text-left"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-103"
                  style={{
                    backgroundImage: `url("${getAssetPath("/images/kashi_ganga_aarti.png")}")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-between h-auto">
                  <div>
                    <span className="bg-secondary/20 text-secondary-fixed border border-secondary/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-label-bold mb-3 inline-block">
                      North India
                    </span>
                    <h3 className="font-headline-md text-[20px] text-on-primary font-bold">Kashi Darshan</h3>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-surface-container-high text-xs flex items-center gap-1">
                      <Clock size={12} /> 4 Days
                    </span>
                    <span className="font-headline-md text-[20px] text-secondary-fixed font-bold">₹22,000</span>
                  </div>
                </div>
              </Link>

              {/* Smaller Card 2 (Himalayan Chardham) */}
              <Link
                href="/packages?dest=Char"
                className="group relative h-[300px] rounded-card overflow-hidden shadow-level-1 cursor-pointer block text-left"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-103"
                  style={{
                    backgroundImage: `url("${getAssetPath("/images/himalayas_kedarnath.png")}")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <span className="bg-secondary/20 text-secondary-fixed border border-secondary/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-label-bold mb-2 inline-block">
                    Himalayas
                  </span>
                  <h3 className="font-headline-md text-[18px] text-on-primary font-bold">Himalayan Chardham</h3>
                </div>
              </Link>

              {/* Smaller Card 3 (Shirdi) */}
              <Link
                href="/packages?dest=Shirdi"
                className="group relative h-[300px] rounded-card overflow-hidden shadow-level-1 cursor-pointer block text-left"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-103"
                  style={{
                    backgroundImage: `url("${getAssetPath("/images/somnath_seaside.png")}")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <span className="bg-secondary/20 text-secondary-fixed border border-secondary/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-label-bold mb-2 inline-block">
                    Maharashtra
                  </span>
                  <h3 className="font-headline-md text-[18px] text-on-primary font-bold">Shirdi Darshan</h3>
                </div>
              </Link>

              {/* Smaller Card 4 (Jyotirlinga) */}
              <Link
                href="/packages?dest=somnath"
                className="group relative h-[300px] rounded-card overflow-hidden shadow-level-1 cursor-pointer block text-left"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-103"
                  style={{
                    backgroundImage: `url("${getAssetPath("/images/somnath_seaside.png")}")`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <span className="bg-secondary/20 text-secondary-fixed border border-secondary/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-label-bold mb-2 inline-block">
                    Pan India
                  </span>
                  <h3 className="font-headline-md text-[18px] text-on-primary font-bold">12 Jyotirlinga Yatra</h3>
                </div>
              </Link>
            </div>
          </section>

          {/* 4. Comprehensive Pilgrimage Packages Section */}
          <section className="bg-surface-container-lowest rounded-card p-6 md:p-10 shadow-level-1 border border-outline-variant/10 max-w-container-max mx-auto md:mx-12 my-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 select-none">
              <div className="text-left">
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Comprehensive Pilgrimage Packages</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                  Fully managed tours ensuring comfort and devotion focus.
                </p>
              </div>
              <Link href="/packages">
                <button className="text-secondary font-label-bold text-label-bold flex items-center gap-1.5 hover:text-secondary-fixed-dim transition-colors cursor-pointer group">
                  View All Packages
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter text-left">

              {/* Detailed Package Card 1 */}
              <div className="bg-surface flex flex-col sm:flex-row rounded-card overflow-hidden border border-outline-variant/20 hover:shadow-level-2 transition-shadow duration-300">
                <div className="w-full sm:w-2/5 h-48 sm:h-auto relative select-none bg-surface-container">
                  <img
                    src={getAssetPath("/images/rameswaram_temple.png")}
                    alt="Rameswaram Temple Details"
                    className="absolute inset-0 w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-primary text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                    BEST SELLER
                  </div>
                </div>
                <div className="w-full sm:w-3/5 p-5 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="font-headline-md text-[18px] text-primary font-bold">Rameswaram & Madurai Yatra</h3>
                    <p className="text-sm text-on-surface-variant line-clamp-2 mt-1.5 leading-relaxed">
                      A profound journey covering the majestic Meenakshi Temple and the sacred Ramanathaswamy Temple, with guided VIP Darshan.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 select-none">
                      <span className="inline-flex items-center gap-1 bg-surface-container-high text-primary px-2.5 py-1 rounded-md text-xs font-semibold">
                        <Activity size={13} className="text-secondary" /> Low Walking
                      </span>
                      <span className="inline-flex items-center gap-1 bg-surface-container-high text-primary px-2.5 py-1 rounded-md text-xs font-semibold">
                        <ShieldCheck size={13} className="text-secondary" /> Medical Kit
                      </span>
                      <span className="inline-flex items-center gap-1 bg-secondary/15 text-secondary px-2.5 py-1 rounded-md text-xs font-bold">
                        ★ VIP Darshan
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    {/* Inclusions Tray */}
                    <div className="flex gap-4 border-t border-outline-variant/15 pt-3 mb-3 text-secondary select-none">
                      <span className="material-symbols-outlined text-[20px] icon-fill" title="Premium Hotel">hotel</span>
                      <span className="material-symbols-outlined text-[20px] icon-fill" title="Pure Veg Meals">restaurant</span>
                      <span className="material-symbols-outlined text-[20px] icon-fill" title="Expert Guide">person_pin_circle</span>
                      <span className="material-symbols-outlined text-[20px] icon-fill" title="AC Transport">directions_bus</span>
                    </div>
                    <div className="flex justify-between items-center select-none">
                      <Link href="/packages/divine-south">
                        <button className="text-secondary font-label-bold text-sm hover:underline cursor-pointer">View Details</button>
                      </Link>
                      <span className="font-headline-md text-primary font-extrabold text-[20px]">₹28,500</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Package Card 2 */}
              <div className="bg-surface flex flex-col sm:flex-row rounded-card overflow-hidden border border-outline-variant/20 hover:shadow-level-2 transition-shadow duration-300">
                <div className="w-full sm:w-2/5 h-48 sm:h-auto relative select-none bg-surface-container">
                  <img
                    src={getAssetPath("/images/kashi_ganga_aarti.png")}
                    alt="Haridwar ashram side view"
                    className="absolute inset-0 w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-primary text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                    SATVIK
                  </div>
                </div>
                <div className="w-full sm:w-3/5 p-5 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="font-headline-md text-[18px] text-primary font-bold">Haridwar & Rishikesh Retreat</h3>
                    <p className="text-sm text-on-surface-variant line-clamp-2 mt-1.5 leading-relaxed">
                      Experience the divine Ganga Aarti, stay in peaceful ashrams, and enjoy comfortable, accessible transport throughout.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 select-none">
                      <span className="inline-flex items-center gap-1 bg-surface-container-high text-primary px-2.5 py-1 rounded-md text-xs font-semibold">
                        <Activity size={13} className="text-secondary" /> Wheelchair Friendly
                      </span>
                      <span className="inline-flex items-center gap-1 bg-secondary/15 text-secondary px-2.5 py-1 rounded-md text-xs font-bold">
                        ★ Satsang Included
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    {/* Inclusions Tray */}
                    <div className="flex gap-4 border-t border-outline-variant/15 pt-3 mb-3 text-secondary select-none">
                      <span className="material-symbols-outlined text-[20px] icon-fill" title="Ashram Stay">gite</span>
                      <span className="material-symbols-outlined text-[20px] icon-fill" title="Satvik Meals">restaurant</span>
                      <span className="material-symbols-outlined text-[20px] icon-fill" title="Spiritual Guide">person_pin_circle</span>
                      <span className="material-symbols-outlined text-[20px] icon-fill" title="AC Transport">directions_bus</span>
                    </div>
                    <div className="flex justify-between items-center select-none">
                      <Link href="/packages/haridwar-rishikesh-retreat">
                        <button className="text-secondary font-label-bold text-sm hover:underline cursor-pointer">View Details</button>
                      </Link>
                      <span className="font-headline-md text-primary font-extrabold text-[20px]">₹15,000</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 5. Route Timeline & Senior Assistance Split Layout */}
          <section className="max-w-container-max mx-auto px-margin-mobile md:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">

            {/* Left: Example Route Timeline */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-card p-6 md:p-8 shadow-level-1 border border-outline-variant/10 text-left">
              <h2 className="font-headline-md text-headline-md text-primary font-bold mb-8 flex items-center gap-2 select-none">
                <span className="material-symbols-outlined text-secondary text-[26px]">route</span>
                Example Route: South India Yatra
              </h2>

              <div className="relative border-l-2 border-outline-variant/30 ml-4 space-y-8 pb-4 select-none">

                {/* Timeline Day 1 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-surface-container-lowest" />
                  <h3 className="font-label-bold text-label-bold text-primary font-bold">
                    Day 1: Arrival in Madurai
                  </h3>
                  <p className="text-[14px] text-on-surface-variant mt-1 max-w-xl leading-relaxed">
                    Check-in at premium hotel. Rest period. Evening VIP Darshan and guided visit to Meenakshi Amman Temple.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[11px] font-bold bg-surface-container px-2.5 py-1 rounded flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-[13px]">hotel</span> Stay: Madurai
                    </span>
                  </div>
                </div>

                {/* Timeline Day 2 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-tertiary-container border-4 border-surface-container-lowest" />
                  <h3 className="font-label-bold text-label-bold text-primary font-bold">
                    Day 2: Madurai to Rameswaram
                  </h3>
                  <p className="text-[14px] text-on-surface-variant mt-1 max-w-xl leading-relaxed">
                    Morning drive (3.5 hrs) in comfortable AC SUV. Rest period. Evening rituals at Ramanathaswamy Temple.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[11px] font-bold bg-tertiary-container/15 text-tertiary px-2.5 py-1 rounded flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px] icon-fill">health_and_safety</span> Safety Checkpoint
                    </span>
                    <span className="text-[11px] font-bold bg-surface-container px-2.5 py-1 rounded flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-[13px]">hotel</span> Stay: Rameswaram
                    </span>
                  </div>
                </div>

                {/* Timeline Day 3 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-surface-container-lowest" />
                  <h3 className="font-label-bold text-label-bold text-primary font-bold">
                    Day 3: Agni Theertham & Dhanushkodi
                  </h3>
                  <p className="text-[14px] text-on-surface-variant mt-1 max-w-xl leading-relaxed">
                    Early morning holy bath at Agni Theertham. Guided excursion to historic Dhanushkodi beach point.
                  </p>
                </div>

                {/* Timeline Day 4 */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-surface-container-lowest" />
                  <h3 className="font-label-bold text-label-bold text-primary font-bold">
                    Day 4: Rameswaram to Kanyakumari
                  </h3>
                  <p className="text-[14px] text-on-surface-variant mt-1 max-w-xl leading-relaxed">
                    Scenic coastal drive. Visit Vivekananda Rock Memorial via pre-arranged accessible boat ferry.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-[11px] font-bold bg-surface-container px-2.5 py-1 rounded flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-[13px]">hotel</span> Stay: Kanyakumari
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Senior Citizen Care Guidelines Card */}
            <div className="bg-primary text-on-primary rounded-card p-6 md:p-8 shadow-level-1 flex flex-col justify-between text-left">
              <div>
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6 text-secondary-fixed">
                  <span className="material-symbols-outlined text-[26px]">elderly</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-primary font-bold mb-3">
                  Senior Citizen Care
                </h3>
                <p className="text-sm text-on-primary/80 leading-relaxed mb-6">
                  We understand the unique needs of elderly pilgrims. Our tours are meticulously planned to minimize physical strain while maximizing spiritual engagement.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px] icon-fill mt-0.5">check_circle</span>
                    <div>
                      <h4 className="font-label-bold text-sm text-on-primary font-bold">Zero-Hassle Darshan</h4>
                      <p className="text-xs text-on-primary/70 mt-0.5">Pre-arranged VIP access to avoid long standing queues.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px] icon-fill mt-0.5">check_circle</span>
                    <div>
                      <h4 className="font-label-bold text-sm text-on-primary font-bold">On-Call Medical Support</h4>
                      <p className="text-xs text-on-primary/70 mt-0.5">First-aid trained guides and ties with local hospitals.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px] icon-fill mt-0.5">check_circle</span>
                    <div>
                      <h4 className="font-label-bold text-sm text-on-primary font-bold">Mobility Assistance</h4>
                      <p className="text-xs text-on-primary/70 mt-0.5">Wheelchairs and battery carts arranged where permitted.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleEnquireClick}
                className="w-full mt-8 bg-secondary text-on-secondary font-label-bold text-sm h-[48px] rounded-lg hover:bg-secondary-container hover:text-on-secondary-container transition-colors cursor-pointer"
              >
                Read Care Guidelines
              </button>
            </div>

          </section>

          {/* 6. Preparation section */}
          <section className="max-w-3xl mx-auto text-center px-margin-mobile py-8 select-none">
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-4">Prepare for Your Journey</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
              Access detailed information regarding temple timings, dress codes, and local customs to ensure a respectful and smooth pilgrimage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/packages">
                <div className="bg-surface-container-lowest p-5 rounded-xl shadow-level-1 border border-outline-variant/10 flex flex-col items-center w-40 hover:-translate-y-1 transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-3xl text-primary mb-2">schedule</span>
                  <span className="font-label-bold text-sm text-primary text-center font-bold">Temple<br />Timings</span>
                </div>
              </Link>
              <Link href="/packages">
                <div className="bg-surface-container-lowest p-5 rounded-xl shadow-level-1 border border-outline-variant/10 flex flex-col items-center w-40 hover:-translate-y-1 transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-3xl text-primary mb-2">checkroom</span>
                  <span className="font-label-bold text-sm text-primary text-center font-bold">Dress<br />Codes</span>
                </div>
              </Link>
              <Link href="/packages">
                <div className="bg-surface-container-lowest p-5 rounded-xl shadow-level-1 border border-outline-variant/10 flex flex-col items-center w-40 hover:-translate-y-1 transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-3xl text-primary mb-2">calendar_month</span>
                  <span className="font-label-bold text-sm text-primary text-center font-bold">Auspicious<br />Dates</span>
                </div>
              </Link>
            </div>
          </section>

        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
