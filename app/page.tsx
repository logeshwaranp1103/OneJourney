"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { FadeIn, FadeUp, ScaleIn, StaggerContainer, StaggerItem, AnimatedCounter } from "@/components/animations/Reveals";
import PackageCard from "@/components/cards/PackageCard";
import { mockPackages } from "@/data/packages";
import { useApp } from "@/context/AppContext";
import { 
  ArrowRight, 
  Heart, 
  AlertCircle, 
  MessageSquare, 
  Calendar, 
  ShieldCheck, 
  UserCheck, 
  CheckCircle2, 
  Star, 
  HelpCircle, 
  ChevronDown, 
  Clock, 
  Award,
  ThumbsUp, 
  Volume2, 
  Activity, 
  Users,
  Compass
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetPath } from "@/lib/animations";
import HeroSection from "@/components/home/HeroSection";
import TrustStats from "@/components/home/TrustStats";
import DestinationsShowcase from "@/components/home/DestinationsShowcase";

export default function Home() {
  const { setEnquireOpen, setEnquirePackageId } = useApp();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Get first 3 featured packages
  const featuredPackages = mockPackages.slice(0, 3);

  const handleEnquireClick = () => {
    setEnquirePackageId(null);
    setEnquireOpen(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is included in the base package price?",
      a: "Our base yatra price includes accommodation in verified 3-Star/Ashram comfort stays near temples, pure vegetarian (Satvik) breakfast and dinners, air-conditioned road transportation, guided assistance, and primary first-aid support. Tolls, parking, and driver allowances are fully inclusive."
    },
    {
      q: "What is the cancellation and refund policy?",
      a: "We offer a 100% full refund on cancellations made at least 15 days prior to yatra departure. For cancellations within 7 to 14 days, a 50% refund is initiated. No refunds are available for cancellations made within 72 hours of departure due to pre-booked temple VIP tickets and hotel stays."
    },
    {
      q: "How do you coordinate senior medical support?",
      a: "Every yatra coach has dedicated travel care coordinators. We carry medical kits with oxygen cylinders, blood pressure monitors, and basic medicines. Additionally, we have tie-ups with verified local clinics and doctors on-call at every overnight stop."
    },
    {
      q: "Are the meals strictly pure vegetarian (Satvik)?",
      a: "Yes. All meals are strictly pure vegetarian (Satvik). Meals are prepared under hygienic conditions without onion and garlic on prior request to cater perfectly to senior and orthodox preferences."
    },
    {
      q: "How close are the hotels located to the temples?",
      a: "We select hotels located within 500m to 1.5km of the temple complex. For locations with restricted vehicle entry, we coordinate battery-operated rickshaws/carts directly from the hotel gates to the temple gates."
    },
    {
      q: "Is pickup and drop-off provided from my home city?",
      a: "Our packages include pickup and drop-off from the nearest major railway station or airport hub (e.g. Madurai for Rameswaram, Varanasi for Kashi). Private doorstep pickup can be added as an optional premium add-on."
    },
    {
      q: "What is the yatra deposit and payment schedule?",
      a: "To secure early-bird slots and VIP temple entry passes, we require a 25% deposit at yatra booking verification. The remaining 75% balance can be settled up to 10 days before the journey starts."
    },
    {
      q: "Are there child concessions or senior discounts?",
      a: "Yes. Senior citizens (aged 60+) receive a flat concession of ₹1,000 per person. Children under 5 years travel free of charge if no extra bed is requested. Group bookings of 4+ members receive additional discounts."
    }
  ];

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <main className="w-full flex-grow bg-[#F7F9FF]">
          {/* 1. Hero Section with Search Panel */}
          <HeroSection />

          {/* 2. Redesigned Trust Stats Section */}
          <TrustStats />

          {/* 3. Featured Packages Section */}
          <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-12 py-16 flex flex-col gap-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-slate-200 pb-6">
              <div className="space-y-2 text-left">
                <h2 className="font-headline-lg text-headline-lg text-[#062E4F] font-bold">Featured Pilgrimages</h2>
                <p className="font-body-md text-body-md text-slate-600 leading-relaxed">
                  Carefully crafted itineraries for a deeply fulfilling spiritual journey.
                </p>
              </div>
              <Link href="/packages">
                <button className="font-label-bold text-label-bold text-[#E9A227] hover:text-[#d58e1c] flex items-center gap-1.5 transition-colors cursor-pointer group font-bold">
                  View All Packages
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {featuredPackages.map((pkg, index) => (
                  <StaggerItem key={pkg.id}>
                    <PackageCard pkg={pkg} index={index} />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </section>

          {/* 3b. Local Tourist Destinations Showcase Section */}
          <DestinationsShowcase />

          {/* 4. Specialized Elder Care Section */}
          <section className="w-full bg-white py-20 border-y border-slate-200">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 flex flex-col md:flex-row items-center gap-12">
              {/* Image box */}
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-level-2 border-4 border-slate-50">
                <ScaleIn>
                  <img
                    src={getAssetPath("/images/elderly_pilgrims.png")}
                    alt="Elderly couple assisted by travel guide"
                    className="w-full h-auto object-cover aspect-[4/3] hover:scale-103 transition-transform duration-500"
                  />
                </ScaleIn>
              </div>

              {/* Text details */}
              <div className="w-full md:w-1/2 space-y-6 text-left">
                <FadeUp>
                  <span className="inline-flex items-center gap-2 bg-[#FFF8E8] text-[#E9A227] border border-[#E9A227]/30 px-4 py-2 rounded-full font-label-bold text-sm">
                    <Heart size={16} className="fill-[#E9A227] text-[#E9A227]" />
                    Specialized Elder Care
                  </span>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <h2 className="font-headline-lg text-headline-lg text-[#062E4F] font-bold">
                    Journeys Designed for Comfort and Pace
                  </h2>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <p className="font-body-lg text-body-lg text-slate-600 leading-relaxed">
                    We understand that physical comfort is essential for a peaceful spiritual experience. Our specialized itineraries for senior citizens prioritize ease of access and constant support.
                  </p>
                </FadeUp>

                {/* Key features lists */}
                <StaggerContainer delay={0.3}>
                  <div className="space-y-5 pt-4">
                    <StaggerItem>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0 text-[#062E4F] shadow-sm">
                          <CheckCircle2 size={20} className="text-[#062E4F]" />
                        </div>
                        <div>
                          <h4 className="font-label-bold text-label-bold text-[#062E4F] font-bold">Reduced Walking & Easy Access</h4>
                          <p className="text-body-sm text-sm text-slate-500 mt-1 max-w-md font-medium">
                            Hotels located close to temples and arranged transport right to the closest permitted drop-off points.
                          </p>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0 text-[#062E4F] shadow-sm">
                          <CheckCircle2 size={20} className="text-[#062E4F]" />
                        </div>
                        <div>
                          <h4 className="font-label-bold text-label-bold text-[#062E4F] font-bold">On-Call Medical Support</h4>
                          <p className="text-body-sm text-sm text-slate-500 mt-1 max-w-md font-medium">
                            24/7 access to local doctors and basic first-aid kits available in all our transport vehicles.
                          </p>
                        </div>
                      </div>
                    </StaggerItem>

                    <StaggerItem>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0 text-[#062E4F] shadow-sm">
                          <CheckCircle2 size={20} className="text-[#062E4F]" />
                        </div>
                        <div>
                          <h4 className="font-label-bold text-label-bold text-[#062E4F] font-bold">Dedicated Coordinators</h4>
                          <p className="text-body-sm text-sm text-slate-500 mt-1 max-w-md font-medium">
                            Compassionate guides trained to assist elders, handle luggage, and manage queue arrangements.
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  </div>
                </StaggerContainer>
              </div>
            </div>
          </section>

          {/* 5. Group Tour Advantages Section */}
          <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-12 py-20 select-none">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                <span className="bg-[#EAF2FF] text-[#062E4F] text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
                  Community Yatras
                </span>
                <h2 className="font-display-lg text-[#062E4F] font-extrabold leading-tight">
                  The Benefits of Group Travel
                </h2>
                <p className="text-slate-600 text-sm font-medium">
                  Why traveling together creates a safer, cheaper, and more fulfilling pilgrimage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 text-left">
                  <div className="w-10 h-10 bg-amber-50 text-[#E9A227] rounded-xl flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <h3 className="font-bold text-[#062E4F] text-[16px]">Spiritual Brotherhood</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Travel with like-minded pilgrims. Share prayers, chant hymns, and build lasting spiritual bonds on our pacing journeys.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 text-left">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-bold text-[#062E4F] text-[16px]">Double the Safety Margin</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Dedicated coordinators guide the group. Senior members are never left unattended in queues or during temple visits.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 text-left">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <ThumbsUp size={20} />
                  </div>
                  <h3 className="font-bold text-[#062E4F] text-[16px]">Cost-Sharing Savings</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Group bookings unlock lower accommodation rates and shared coach transport savings, which we pass back to you.
                  </p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* 6. Why Book Early? Section (Booking Confidence) */}
          <section className="w-full bg-[#041F35] text-white py-20 border-y border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="w-full lg:w-5/12 text-left space-y-5">
                <span className="bg-[#FFF8E8]/10 text-[#F7C873] border border-[#F7C873]/20 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Advance Reservations yatra
                </span>
                <h2 className="font-display-lg text-white font-extrabold leading-tight">
                  Why Book Your Sacred Journey Early?
                </h2>
                <p className="text-slate-300 font-medium text-sm leading-relaxed">
                  Seasonal pilgrimage openings sell out months in advance. Securing your booking early ensures a stress-free experience for your family.
                </p>
              </div>

              <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[#F7C873] font-bold text-xs">Benefit 1</span>
                    <Clock size={16} className="text-[#F7C873]" />
                  </div>
                  <h4 className="font-bold text-white text-base">Locked-in Lower Prices</h4>
                  <p className="text-xs text-slate-300 leading-normal font-medium">
                    Avoid high-demand hotel hikes near top temples. Early bookings lock in our low seasonal starting rates.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[#F7C873] font-bold text-xs">Benefit 2</span>
                    <CheckCircle2 size={16} className="text-[#F7C873]" />
                  </div>
                  <h4 className="font-bold text-white text-base">Prime Hotel Allocation</h4>
                  <p className="text-xs text-slate-300 leading-normal font-medium">
                    We secure properties within walking distance of the main gates only for early bookings to avoid long travel fatigue.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[#F7C873] font-bold text-xs">Benefit 3</span>
                    <Users size={16} className="text-[#F7C873]" />
                  </div>
                  <h4 className="font-bold text-white text-base">Guaranteed VIP Entry Passes</h4>
                  <p className="text-xs text-slate-300 leading-normal font-medium">
                    Special temple corridors limit daily entries. Booking early lets us request priority pooja slots in advance.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[#F7C873] font-bold text-xs">Benefit 4</span>
                    <Calendar size={16} className="text-[#F7C873]" />
                  </div>
                  <h4 className="font-bold text-white text-base">Flexible Rescheduling</h4>
                  <p className="text-xs text-slate-300 leading-normal font-medium">
                    Change travel dates free of charge up to 15 days before yatra departure if your family plans shift.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Trust & Credibility Grid Section */}
          <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-12 py-20 select-none">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                <span className="bg-[#EAF2FF] text-[#062E4F] text-xs font-bold px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
                  Accredited & Safe
                </span>
                <h2 className="font-display-lg text-[#062E4F] font-extrabold leading-tight">
                  Trusted by Over 10,000+ Pilgrims
                </h2>
                <p className="text-slate-600 text-sm font-medium">
                  Verified safety parameters, government accreditations, and local certifications.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm text-center space-y-2">
                  <Award size={24} className="text-[#E9A227] mx-auto" />
                  <h5 className="font-bold text-[#062E4F] text-sm">Govt. Registered</h5>
                  <p className="text-[11px] text-slate-500 font-medium">Ministry of Tourism License: #TR-994528</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm text-center space-y-2">
                  <ShieldCheck size={24} className="text-emerald-600 mx-auto" />
                  <h5 className="font-bold text-[#062E4F] text-sm">GST Compliant</h5>
                  <p className="text-[11px] text-slate-500 font-medium">GSTIN: 09AAPCD4823M1Z9 (Tax Invoice)</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm text-center space-y-2">
                  <UserCheck size={24} className="text-blue-600 mx-auto" />
                  <h5 className="font-bold text-[#062E4F] text-sm">Certified Guides</h5>
                  <p className="text-[11px] text-slate-500 font-medium">Local spiritual guides licensed in senior care</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm text-center space-y-2">
                  <Activity size={24} className="text-red-500 mx-auto" />
                  <h5 className="font-bold text-[#062E4F] text-sm">Emergency Medical</h5>
                  <p className="text-[11px] text-slate-500 font-medium">Equipped yatra transport & clinical partner networks</p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* 8. Premium Testimonials Social Proof Section */}
          <section className="w-full bg-[#EAF2FF]/40 py-20 border-y border-slate-200">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 flex flex-col gap-12">
              <div className="text-center max-w-2xl mx-auto space-y-3 select-none">
                <span className="text-[#E9A227] font-bold text-xs uppercase tracking-wider">Testimonials</span>
                <h2 className="font-display-lg text-[#062E4F] font-extrabold leading-tight">
                  Heartwarming Yatra Stories
                </h2>
                <p className="text-slate-600 text-sm font-medium">
                  Overall Rating: <span className="text-[#062E4F] font-bold">4.8 / 5.0</span> based on 1,240+ Google & Facebook traveler reviews.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testimonial Card 1 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between text-left gap-4">
                  <div className="space-y-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={15} className="fill-[#E9A227] text-[#E9A227]" />)}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      &quot;We were very anxious about traveling to Rameswaram because of my arthritis. OneJourney took care of everything—pre-arranged wheelchairs, zero walking in queues, and hotel just steps from the temple. A blessed experience!&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                      <img src={getAssetPath("/images/avatar_female_senior.png")} alt="Ramesh & Savitri Iyer" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#062E4F]">Ramesh & Savitri Iyer (68)</h4>
                      <p className="text-[10px] text-slate-500 font-semibold">Chennai • Divine South Yatra</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 2 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between text-left gap-4">
                  <div className="space-y-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={15} className="fill-[#E9A227] text-[#E9A227]" />)}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      &quot;The VIP Darshan in Kashi Vishwanath was organized seamlessly. As senior citizens, avoiding the chaotic queues made our pilgrimage peaceful and fully spiritual. The coordinator was exceptionally respectful and caring.&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                      <img src={getAssetPath("/images/avatar_male_senior.png")} alt="Prof. Alok Sharma" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#062E4F]">Prof. Alok Sharma (72)</h4>
                      <p className="text-[10px] text-slate-500 font-semibold">New Delhi • Kashi Serenity Tour</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial Card 3 */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between text-left gap-4">
                  <div className="space-y-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={15} className="fill-[#E9A227] text-[#E9A227]" />)}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      &quot;Our family group package to Somnath and Dwarka was excellently managed. Pure vegetarian food at all stops, comfortable AC transport with medical kits on-board. Recommended for anyone travelling with elders.&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                      <img src={getAssetPath("/images/avatar_female_young.png")} alt="Meenakshi Kulkarni" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#062E4F]">Meenakshi Kulkarni (62)</h4>
                      <p className="text-[10px] text-slate-500 font-semibold">Mumbai • Gujarat Jyotirlinga Yatra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 9. FAQ Section */}
          <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-12 py-20 select-none">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* FAQ Header */}
              <div className="w-full lg:w-4/12 text-left space-y-4">
                <span className="bg-[#EAF2FF] text-[#062E4F] text-xs font-bold px-3 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
                  Yatra Support
                </span>
                <h2 className="font-display-lg text-[#062E4F] font-extrabold leading-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-600 text-sm font-medium">
                  Have questions about transport facilities, medical safety, meals, or booking schedules? Browse our compiled answers.
                </p>
                <div className="bg-[#FFF8E8] border border-[#E9A227]/20 p-4 rounded-xl text-xs font-semibold text-slate-700">
                  Still have queries? Talk to our yatra helpline directly at <span className="text-[#062E4F] font-extrabold">+91 1800-745-4746</span>.
                </div>
              </div>

              {/* FAQ Accordion list */}
              <div className="w-full lg:w-8/12 space-y-4 text-left">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div 
                      key={index} 
                      className="bg-white border border-slate-200/80 rounded-xl shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-5 flex justify-between items-center text-left hover:bg-slate-50/50 transition-colors duration-250 cursor-pointer outline-none"
                      >
                        <span className="font-bold text-[#062E4F] text-[15px] font-display flex items-center gap-2">
                          <HelpCircle size={16} className="text-[#E9A227] flex-shrink-0" />
                          {faq.q}
                        </span>
                        <ChevronDown 
                          size={18} 
                          className={`text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                        />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                          >
                            <div className="p-5 border-t border-slate-100 text-xs text-slate-600 font-medium leading-relaxed bg-[#F7F9FF]/20">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 10. Final CTA Banner */}
          <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-12 py-16 my-8">
            <ScaleIn>
              <div className="bg-[#062E4F] rounded-2xl p-8 md:p-16 text-center flex flex-col items-center gap-6 shadow-level-2 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />

                <h2 className="font-display-lg-mobile md:font-display-lg text-white relative z-10 max-w-2xl font-bold font-display leading-tight">
                  Ready to Plan Your Sacred Journey?
                </h2>

                <p className="font-body-lg text-body-lg text-slate-300 relative z-10 max-w-xl leading-relaxed font-medium">
                  Our travel experts are ready to curate a customized itinerary for your family, ensuring a seamless and divine experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 relative z-10 w-full sm:w-auto justify-center select-none">
                  <button
                    onClick={handleEnquireClick}
                    className="bg-[#E9A227] hover:bg-[#d58e1c] text-white h-14 px-8 rounded-xl font-label-bold text-label-bold transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-sm cursor-pointer active:scale-97 font-bold outline-none"
                  >
                    Enquire Now
                  </button>
                  <a
                    href="https://wa.me/9118007454746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-white/20 text-white h-14 px-8 rounded-xl font-label-bold text-label-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer active:scale-97 font-bold outline-none"
                  >
                    <MessageSquare size={18} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </ScaleIn>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
