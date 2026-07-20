"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { FadeIn } from "@/components/animations/Reveals";
import { Package } from "@/data/packages";
import { useApp } from "@/context/AppContext";
import { easeQuint, getAssetPath } from "@/lib/animations";
import { ArrowLeft, MapPin, Check, ShieldAlert, Heart, PhoneCall, ChevronDown, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PackageDetailsClientProps {
  pkg: Package | undefined;
}

export default function PackageDetailsClient({ pkg }: PackageDetailsClientProps) {
  const router = useRouter();
  const { savedIds, toggleSave, setEnquireOpen, setEnquirePackageId, addToRecentlyViewed } = useApp();

  const isSaved = savedIds.includes(pkg?.id || "");

  // Itinerary Accordion State
  const [openDays, setOpenDays] = useState<Record<number, boolean>>({ 1: true });

  // Guest counters for booking sticky card
  const [adults, setAdults] = useState(2);
  const [seniors, setSeniors] = useState(0);
  const [travelDate, setTravelDate] = useState("");

  // Gallery Active Image
  const [activeImage, setActiveImage] = useState(pkg?.image || "");

  useEffect(() => {
    if (pkg) {
      setActiveImage(pkg.image);
      addToRecentlyViewed(pkg.id);
    }
  }, [pkg, addToRecentlyViewed]);

  if (!pkg) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center select-none">
          <ShieldAlert size={48} className="text-error" />
          <h2 className="font-headline-lg text-primary font-bold">Package Not Found</h2>
          <p className="text-on-surface-variant font-body-sm max-w-sm">
            The pilgrimage tour package you are looking for does not exist or has been removed.
          </p>
          <Link href="/packages">
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-bold hover:bg-primary-container transition-all">
              Browse All Packages
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const toggleDay = (day: number) => {
    setOpenDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const handleBookNow = () => {
    setEnquirePackageId(pkg.id);
    setEnquireOpen(true);
  };

  // Mock secondary images for gallery
  const galleryImages = [
    pkg.image,
    "/images/hero_dawn_temple.png",
    "/images/family_temple_prayer.png"
  ];

  // Price calculations
  const pricePerPerson = pkg.price;
  const totalPrice = (adults + seniors) * pricePerPerson;

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <main className="w-full flex-grow pb-16">
          
          {/* 1. Page Header / Breadcrumbs banner */}
          <div className="bg-surface-container-low py-6 border-b border-outline-variant/15 select-none text-left">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 flex flex-col gap-3">
              <nav className="text-xs font-semibold text-outline flex items-center gap-1.5 font-body-sm">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <Link href="/packages" className="hover:text-primary transition-colors">Packages</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-on-surface font-bold">{pkg.title}</span>
              </nav>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <button 
                  onClick={() => router.back()}
                  className="flex items-center gap-1 text-sm font-bold text-primary hover:text-secondary transition-colors cursor-pointer"
                >
                  <ArrowLeft size={16} /> Back to packages
                </button>

                <button
                  onClick={() => toggleSave(pkg.id)}
                  className="flex items-center gap-1.5 text-xs font-bold border border-outline-variant px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-container transition-all cursor-pointer"
                >
                  <Heart size={14} className={isSaved ? "fill-error text-error" : "text-on-surface-variant"} />
                  {isSaved ? "Saved in Favorites" : "Save to Favorites"}
                </button>
              </div>
            </div>
          </div>

          {/* 2. Main Details Layout Grid */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            
            {/* Left Column: Details, Accordion, Gallery, Reviews */}
            <div className="lg:col-span-8 flex flex-col gap-10 text-left">
              
              {/* Core Information Section */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 select-none">
                  {pkg.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-0.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-3 py-0.5 bg-primary text-on-primary rounded-full text-xs font-bold shadow-sm">
                    {pkg.category}
                  </span>
                </div>

                <h1 className="font-display-lg text-primary font-bold leading-tight">
                  {pkg.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-on-surface-variant text-sm font-medium">
                  <span className="flex items-center gap-1"><MapPin size={16} className="text-secondary" /> {pkg.destinations}</span>
                  <span className="text-outline-variant/30">|</span>
                  <span className="flex items-center gap-1">★ {pkg.rating} ({pkg.reviewCount} verified reviews)</span>
                  <span className="text-outline-variant/30">|</span>
                  <span className="flex items-center gap-1">⏱ {pkg.duration}</span>
                </div>
              </div>

              {/* Dynamic Image Gallery */}
              <div className="space-y-3">
                <div className="h-96 md:h-[450px] w-full rounded-2xl overflow-hidden bg-surface-container shadow-level-1 relative select-none">
                  <img src={getAssetPath(activeImage)} alt={pkg.title} className="w-full h-full object-cover transition-all duration-300" />
                </div>
                
                {/* Thumbnails selector */}
                <div className="flex gap-3 select-none">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-24 h-16 rounded-lg overflow-hidden border-2 bg-surface-container cursor-pointer transition-all shadow-sm ${
                        activeImage === img ? "border-secondary scale-102" : "border-transparent opacity-75 hover:opacity-100"
                      }`}
                    >
                      <img src={getAssetPath(img)} alt="temple thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Package Inclusions Detailed Checklist Grid */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-level-1 border border-outline-variant/10">
                <h3 className="font-headline-md text-[18px] text-primary font-bold mb-5 select-none">
                  What is included in this journey
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-tertiary-container/30 text-tertiary rounded-full flex items-center justify-center shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-label-bold text-sm text-primary font-bold">Accommodations Stay</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        {pkg.inclusions.hotel ? String(pkg.inclusions.hotel) : "Ashram stay pre-booked"} Stays closer to temples.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-tertiary-container/30 text-tertiary rounded-full flex items-center justify-center shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-label-bold text-sm text-primary font-bold">Vegetarian Meals</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        {pkg.inclusions.meals ? String(pkg.inclusions.meals) : "Pure Vegetarian food"} served at hygienically run kitchens.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-tertiary-container/30 text-tertiary rounded-full flex items-center justify-center shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-label-bold text-sm text-primary font-bold">AC Travel Transit</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        {pkg.inclusions.transit ? String(pkg.inclusions.transit) : "AC SUV/Bus transport"} with regular rest breaks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-tertiary-container/30 text-tertiary rounded-full flex items-center justify-center shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-label-bold text-sm text-primary font-bold">Dedicated Local Guide</h4>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        {pkg.inclusions.guide ? String(pkg.inclusions.guide) : "Devoted travel coordinator"} trained in first-aid and elder care.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Detailed Itinerary Experience */}
              <div className="space-y-6">
                <div className="flex justify-between items-center select-none">
                  <h3 className="font-headline-md text-[18px] text-primary font-bold">
                    Detailed Day-by-Day Itinerary
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    Assisted Walking Pace
                  </span>
                </div>

                {/* Vertical timeline start */}
                <div className="relative border-l-2 border-slate-200 ml-4 space-y-6">
                  {pkg.itinerary.map((day) => {
                    const isOpen = !!openDays[day.day];
                    const isFirstDay  = day.day === 1;
                    const isLastDay   = day.day === pkg.itinerary.length;

                    // --- Weather by region ---
                    const weatherMap: Record<string, string> = {
                      "South India":  "Warm & humid: 26°C – 32°C. Carry light cotton clothing and stay hydrated.",
                      "North India":  "Moderate: 18°C – 28°C. Carry a light jacket for early mornings and evenings.",
                      "Char Dham":    "Cool mountain climate: 10°C – 20°C. Warm layers essential, especially at dawn.",
                      "Maharashtra":  "Pleasant: 20°C – 30°C. Sunscreen and a hat are recommended for outdoor visits.",
                      "Pan India":    "Comfortable yatra weather: 22°C – 26°C with low humidity.",
                      "International":"Variable; check local forecast. Light layers and travel insurance recommended.",
                    };
                    const weather = weatherMap[pkg.region] ?? "Comfortable weather: 22°C – 26°C with low humidity.";

                    // --- Dress code by category & region ---
                    const dressCode = pkg.category === "Pilgrimage"
                      ? "Traditional attire (sari / dhoti-kurta). Remove footwear before entering temples. Avoid leather accessories."
                      : pkg.region === "International"
                      ? "Smart-casual wear. Comfortable walking shoes. Check local dress codes for heritage sites."
                      : "Comfortable casuals with a light shawl. Slip-on shoes for quick entry at heritage monuments.";

                    // --- Day-specific morning / afternoon / evening schedule ---
                    // Derive the primary attraction from actual itinerary data
                    const attraction = day.stay && day.stay !== "N/A"
                      ? day.stay
                      : pkg.destinationName || pkg.route?.[pkg.route.length - 1] || "the destination";
                    const cityName = pkg.location?.split(",")[0] || pkg.route?.[0] || "the city";
                    const dayTitleLower = day.title.toLowerCase();

                    const schedule = (() => {
                      if (isFirstDay) {
                        return {
                          morning:   `Arrive at ${pkg.location || cityName}. Welcome by our guide, hotel check-in, and room allocation.`,
                          afternoon: `Settle in, freshen up, and take a short orientation stroll around the ${attraction} neighbourhood.`,
                          evening:   `Welcome briefing on the itinerary ahead. ${pkg.inclusions.meals ? String(pkg.inclusions.meals) : "Dinner"} at hotel. Early rest for next day.`,
                        };
                      }
                      if (isLastDay) {
                        return {
                          morning:   `Leisurely breakfast at hotel. Final visit to ${attraction} gift shops or local market for souvenirs.`,
                          afternoon: `Luggage checkout (by 12:00 PM). ${pkg.inclusions.transit ? String(pkg.inclusions.transit) : "AC vehicle"} transfer to railway/bus station or airport.`,
                          evening:   `Depart from ${cityName} with cherished memories of ${attraction}. Safe journey home!`,
                        };
                      }

                      // Mid-trip days — derive from day title keywords and package details
                      const isBoatDay   = dayTitleLower.includes("backwater") || dayTitleLower.includes("houseboat") || dayTitleLower.includes("lake") || dayTitleLower.includes("cruise");
                      const isTempleDay = dayTitleLower.includes("temple") || dayTitleLower.includes("shrine") || dayTitleLower.includes("darshan") || dayTitleLower.includes("mandir") || pkg.category === "Pilgrimage";
                      const isFortDay   = dayTitleLower.includes("fort") || dayTitleLower.includes("palace") || dayTitleLower.includes("monument") || dayTitleLower.includes("heritage");
                      const isNatureDay = dayTitleLower.includes("waterfall") || dayTitleLower.includes("forest") || dayTitleLower.includes("wildlife") || dayTitleLower.includes("trek");
                      const isCityDay   = dayTitleLower.includes("city") || dayTitleLower.includes("market") || dayTitleLower.includes("local") || dayTitleLower.includes("tour");
                      const isBeachDay  = dayTitleLower.includes("beach") || dayTitleLower.includes("coast") || dayTitleLower.includes("sea");

                      if (isBoatDay) {
                        return {
                          morning:   `Board a traditional ${attraction.includes("Backwater") ? "Kerala kettuvallam houseboat" : "scenic boat"} at ${attraction}. Glide through serene waterways as locals start their day.`,
                          afternoon: `Cruise along the canals passing through fishing villages and paddy fields. ${pkg.inclusions.meals ? String(pkg.inclusions.meals) : "Lunch"} served on the boat.`,
                          evening:   `Anchor at a scenic spot for a spectacular sunset over the water. Return to shore. ${pkg.seniorFriendly ? "Assisted disembarkation for senior travellers." : "Dinner at lakeside restaurant."}`,
                        };
                      }
                      if (isTempleDay) {
                        return {
                          morning:   `Early morning darshan at ${attraction} (5:30–11:30 AM). VIP fast-track queue entry managed by our guides. Witness the morning aarti rituals.`,
                          afternoon: `Satvik lunch at a certified restaurant near ${attraction}. Rest period (1:00–3:00 PM). Afternoon visit to secondary shrines or sacred ghats nearby.`,
                          evening:   `Attend the evening Aarti / lamp ceremony at ${attraction}. ${pkg.seniorFriendly ? "Seated arrangement for senior pilgrims." : ""} Return to hotel for dinner and spiritual discourse.`,
                        };
                      }
                      if (isFortDay) {
                        return {
                          morning:   `Guided tour of ${attraction} begins at 9:00 AM. Explore the ramparts, royal halls, and historic artefacts with a certified heritage guide.`,
                          afternoon: `Lunch break at a local restaurant. Continue to explore the inner chambers, treasury, and elephant stables (if applicable) at ${attraction}.`,
                          evening:   `Enjoy the Sound & Light show at ${attraction} (if available) or visit the nearby local bazaar for handicrafts and souvenirs.`,
                        };
                      }
                      if (isNatureDay) {
                        return {
                          morning:   `Early drive to ${attraction}. Begin the nature walk / trail with our experienced guide. Best light for photography in the golden hour.`,
                          afternoon: `${pkg.inclusions.meals ? String(pkg.inclusions.meals) : "Packed lunch"} at a scenic picnic spot near ${attraction}. Rest by the waterway or forest clearing.`,
                          evening:   `Return drive to ${cityName}. ${pkg.seniorFriendly ? "Comfortable AC vehicle with rest stops en route." : ""} Dinner at hotel and leisure time.`,
                        };
                      }
                      if (isBeachDay) {
                        return {
                          morning:   `Sunrise walk at ${attraction}. Enjoy the cool morning breeze and photograph the coastline before crowds arrive.`,
                          afternoon: `Beach activities and leisure time at ${attraction}. ${pkg.inclusions.meals ? String(pkg.inclusions.meals) : "Seafood lunch"} at a nearby restaurant.`,
                          evening:   `Sunset at ${attraction} — one of the finest views of the trip. Return to hotel. Dinner and free time.`,
                        };
                      }
                      if (isCityDay) {
                        return {
                          morning:   `City sightseeing tour of ${cityName} — visit iconic landmarks, local markets, and cultural hotspots near ${attraction}.`,
                          afternoon: `${pkg.inclusions.meals ? String(pkg.inclusions.meals) : "Lunch"} at a popular local restaurant. Continue exploring ${attraction} and surrounding areas.`,
                          evening:   `Evening leisure in ${cityName}. Optional visit to a cultural show or shopping at local markets. Dinner at hotel.`,
                        };
                      }
                      // Generic fallback — still uses destination name
                      return {
                        morning:   `Morning sightseeing at ${attraction} (8:00 AM – 12:00 PM). Guided exploration with photography stops.`,
                        afternoon: `${pkg.inclusions.meals ? String(pkg.inclusions.meals) : "Meals"} break (1–3 PM). Indoor cultural exhibit or leisure time at ${attraction}.`,
                        evening:   `Sunset viewpoint near ${attraction} (if available). Return to hotel in ${cityName}. Dinner and rest.`,
                      };
                    })();

                    // --- Temple timings (only meaningful for pilgrimage or spiritual days) ---
                    const timings = pkg.category === "Pilgrimage" || day.activityType === "spiritual"
                      ? `Darshan: 5:30 AM – 11:30 AM | Aarti: 6:30 PM | VIP slots: 7:00 AM & 10:00 AM`
                      : isFirstDay
                      ? "Check-in by 2:00 PM | Orientation at 5:00 PM | Dinner at 7:30 PM"
                      : isLastDay
                      ? "Breakfast by 8:00 AM | Checkout by 11:00 AM | Departure transfer at 12:00 PM"
                      : `Site opens: 8:00 AM – 6:00 PM | Best visit window: 9:00 AM – 12:00 PM`;

                    // --- Meals description ---
                    const foodText = day.meals
                      ? `${day.meals}${pkg.vegMeals ? " – Pure vegetarian / Satvik preparations." : " – Choice of veg & non-veg available."}`
                      : pkg.inclusions.meals
                      ? `${String(pkg.inclusions.meals)} – Hygienically prepared, locally sourced ingredients.`
                      : "Meals arranged at certified establishments along the route.";

                    // --- Accommodation ---
                    const accommodation = day.stay && day.stay !== "N/A"
                      ? `${pkg.inclusions.hotel ? String(pkg.inclusions.hotel) : "Verified Hotel"} near ${day.stay}${pkg.wheelchairAccess ? " — wheelchair accessible, elevators, western bathrooms." : "."}`
                      : "No overnight stay — check-out day.";

                    // --- Walking level ---
                    const walkingLevel = pkg.seniorFriendly
                      ? "Elder-Friendly: Slow pace, ramps, flat surfaces, zero steep stairs."
                      : pkg.pace === "Easy Paced"
                      ? "Easy Paced: Gentle walks with frequent rest stops."
                      : "Moderate: Comfortable walks with guide assistance available.";

                    // --- Packing suggestions vary by day & region ---
                    const packingItems = [
                      ...(isFirstDay ? ["Travel documents & ID", "Confirmation voucher"] : []),
                      ...(pkg.category === "Pilgrimage" ? ["Yatra registration card", "Small pooja items (flowers, agarbatti)"] : ["Camera / phone with charged battery", "Light snacks for the road"]),
                      "Sun protection & water bottle",
                      "Personal medications",
                      pkg.region === "Char Dham" || pkg.region === "North India" ? "Warm jacket / shawl" : "Light cotton clothing",
                    ].slice(0, 4).join(", ");

                    return (
                      <div key={day.day} className="relative pl-8">
                        {/* Timeline dot */}
                        <div
                          className={`absolute -left-[9px] top-4 w-4 h-4 rounded-full border-4 border-white transition-all duration-300 ${
                            isOpen ? "bg-[#E9A227] scale-110 shadow-sm" : "bg-slate-300"
                          }`}
                        />

                        {/* Accordion container card */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                          {/* Toggle Header */}
                          <button
                            onClick={() => toggleDay(day.day)}
                            className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50/50 transition-all duration-200 cursor-pointer select-none"
                          >
                            <span className="font-label-bold text-primary font-bold text-[15px] flex items-center gap-2">
                              <span className="text-[#E9A227]">Day {day.day}:</span>
                              <span>{day.title}</span>
                            </span>
                            <ChevronDown
                              size={18}
                              className={`text-slate-500 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Expanded Content Panel */}
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: easeQuint }}
                              >
                                <div className="p-5 border-t border-slate-100 space-y-4 bg-white text-sm">
                                  <p className="text-slate-700 leading-relaxed text-[14.5px]">
                                    {day.description}
                                  </p>

                                  {/* Multi-Period Timeline Segments */}
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl">
                                    <div>
                                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Morning</span>
                                      <p className="text-xs text-slate-700 mt-1">{schedule.morning}</p>
                                    </div>
                                    <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-4">
                                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Afternoon</span>
                                      <p className="text-xs text-slate-700 mt-1">{schedule.afternoon}</p>
                                    </div>
                                    <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-4">
                                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Evening</span>
                                      <p className="text-xs text-slate-700 mt-1">{schedule.evening}</p>
                                    </div>
                                  </div>

                                  {/* Detailed Logistics Grid */}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                                    <div className="space-y-2">
                                      <div className="flex justify-between py-1 border-b border-slate-100">
                                        <span className="text-slate-500 font-semibold">{pkg.category === "Pilgrimage" ? "Temple Timings:" : "Schedule:"}</span>
                                        <span className="text-slate-800 font-bold text-right max-w-[60%]">{timings}</span>
                                      </div>
                                      <div className="flex justify-between py-1 border-b border-slate-100">
                                        <span className="text-slate-500 font-semibold">{pkg.vegMeals ? "Satvik Meals:" : "Meals:"}</span>
                                        <span className="text-slate-800 font-bold text-right max-w-[60%]">{foodText}</span>
                                      </div>
                                      <div className="flex justify-between py-1 border-b border-slate-100">
                                        <span className="text-slate-500 font-semibold">Travel Transit:</span>
                                        <span className="text-slate-800 font-bold text-right max-w-[60%]">{pkg.inclusions.transit ? `${String(pkg.inclusions.transit)} with dedicated first-aid assistance` : "AC transport provided"}</span>
                                      </div>
                                      <div className="flex justify-between py-1 border-b border-slate-100">
                                        <span className="text-slate-500 font-semibold">Walking Level:</span>
                                        <span className="text-[#E9A227] font-bold text-right max-w-[60%]">{walkingLevel}</span>
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <div className="flex justify-between py-1 border-b border-slate-100">
                                        <span className="text-slate-500 font-semibold">Stay Hotel:</span>
                                        <span className="text-slate-800 font-bold text-right max-w-[60%]">{accommodation}</span>
                                      </div>
                                      <div className="flex justify-between py-1 border-b border-slate-100">
                                        <span className="text-slate-500 font-semibold">Daily Weather:</span>
                                        <span className="text-slate-800 font-bold text-right max-w-[60%]">{weather}</span>
                                      </div>
                                      <div className="flex justify-between py-1 border-b border-slate-100">
                                        <span className="text-slate-500 font-semibold">Dress Code:</span>
                                        <span className="text-slate-800 font-bold text-right max-w-[60%]">{dressCode}</span>
                                      </div>
                                      <div className="flex justify-between py-1 border-b border-slate-100">
                                        <span className="text-slate-500 font-semibold">Suggested Packing:</span>
                                        <span className="text-slate-800 font-bold text-right max-w-[60%]">{packingItems}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Booking Card & Pricing Breakdown */}
            <div className="lg:col-span-4 sticky top-28 select-none">
              <FadeIn>
                <div className="bg-white rounded-2xl shadow-level-2 border border-slate-200/80 p-6 flex flex-col gap-6 text-left">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Starting Price</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="font-headline-lg text-[#062E4F] text-3xl font-extrabold font-display">
                          ₹{pricePerPerson.toLocaleString()}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">/ person</span>
                      </div>
                    </div>
                    {/* Trust guarantee badge */}
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <ShieldCheck size={12} /> No Hidden Charges
                    </span>
                  </div>

                  <div className="border-t border-slate-100 pt-4 space-y-4">
                    {/* Date Selector input */}
                    <div className="relative">
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Preferred travel date
                      </label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-slate-50 text-slate-800 p-3 rounded-lg border border-slate-200 focus:border-[#062E4F] outline-none text-sm font-semibold"
                      />
                    </div>

                    {/* Passenger selections */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Adults
                        </label>
                        <select
                          value={adults}
                          onChange={(e) => setAdults(parseInt(e.target.value))}
                          className="w-full bg-slate-50 p-2.5 rounded-lg border border-slate-200 outline-none text-xs font-semibold text-slate-800"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i} value={i}>
                              {i} Adults
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Seniors (60+)
                        </label>
                        <select
                          value={seniors}
                          onChange={(e) => setSeniors(parseInt(e.target.value))}
                          className="w-full bg-slate-50 p-2.5 rounded-lg border border-slate-200 outline-none text-xs font-semibold text-slate-800"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i} value={i}>
                              {i} Seniors
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Breakdown Cards */}
                  <div className="bg-slate-50 p-5 rounded-2xl space-y-3 border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block border-b border-slate-200 pb-1.5">Cost breakdown</span>
                    
                    <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                      <div className="flex justify-between">
                        <span>Base Package cost:</span>
                        <span>₹{(pricePerPerson * 0.5 * (adults + seniors)).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hotel Stay share:</span>
                        <span>₹{(pricePerPerson * 0.2 * (adults + seniors)).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transport & Guides:</span>
                        <span>₹{(pricePerPerson * 0.25 * (adults + seniors)).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>VIP entry passes & GST:</span>
                        <span>₹{(pricePerPerson * 0.05 * (adults + seniors)).toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Discounts section */}
                    {(seniors > 0 || (adults + seniors >= 4)) && (
                      <div className="space-y-1.5 text-xs font-semibold border-t border-slate-200 pt-2 text-emerald-700">
                        <div className="flex justify-between">
                          <span>Early Booking Discount:</span>
                          <span>- ₹1,500</span>
                        </div>
                        {seniors > 0 && (
                          <div className="flex justify-between">
                            <span>Senior citizen concession:</span>
                            <span>- ₹{(seniors * 1000).toLocaleString()}</span>
                          </div>
                        )}
                        {adults + seniors >= 4 && (
                          <div className="flex justify-between">
                            <span>Group booking rebate:</span>
                            <span>- ₹2,000</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="border-t border-slate-200 pt-3 flex justify-between text-[15px] font-bold text-[#062E4F]">
                      <span>Final Net Price</span>
                      <span>
                        ₹{Math.max(
                          0,
                          totalPrice - 1500 - (seniors * 1000) - (adults + seniors >= 4 ? 2000 : 0)
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <button
                    onClick={handleBookNow}
                    className="w-full bg-[#E9A227] hover:bg-[#d58e1c] text-white py-3.5 rounded-xl font-bold text-sm hover:shadow-md transition-all active:scale-97 cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    Send Yatra Enquiry
                  </button>

                  <p className="text-[10px] text-slate-500 text-center leading-normal">
                    This booking form acts as a prefilled enquiry checklist. No payment is required client-side. A travel expert will coordinate reservations.
                  </p>
                </div>
              </FadeIn>
            </div>

          </div>

        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
