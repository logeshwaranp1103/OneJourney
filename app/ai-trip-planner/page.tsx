"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import ScrollProgress from "@/components/animations/ScrollProgress";
import PackageCard from "@/components/cards/PackageCard";
import { mockPackages } from "@/data/packages";
import { useApp } from "@/context/AppContext";
import { easeQuint } from "@/lib/animations";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { 
  Sparkles, MessageSquare, ArrowRight, RotateCcw, Save, ShieldAlert, 
  BadgeInfo, Users, Map, Calendar, Settings, ShieldCheck, HeartPulse, 
  Edit2, Check, User, CalendarDays, MapPin, Smile, Globe, Coins, Heart,
  MoreHorizontal
} from "lucide-react";

interface Option {
  label: string;
  value: any;
  icon?: React.ReactNode;
  desc?: string;
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: Option[];
  field?: string;
  multiSelect?: boolean;
}

const STEPS = [
  "Travellers",
  "Journey Type",
  "Destination",
  "Dates",
  "Comfort & Accessibility",
  "Budget",
  "Review"
];

export default function AITripPlanner() {
  const { setEnquireOpen, setEnquirePackageId } = useApp();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  

  const [preferences, setPreferences] = useState({
    travelers: "",
    journeyType: "",
    faith: "",
    destination: [] as string[],
    dates: [] as string[],
    duration: "",
    needs: [] as string[],
    budget: "",
    transport: "",
  });

  // Start conversation
  useEffect(() => {
    startConversation();
  }, []);

  const startConversation = () => {
    setMessages([
      {
        id: "msg-1",
        sender: "bot",
        text: "Pranam! I’m your OneJourney AI guide. I’ll create a journey that matches your group, comfort, accessibility, and spiritual preferences. Who will be travelling?",
        options: [
          { label: "Elders & Family", value: "Elders & Family", icon: <Users size={18} />, desc: "Multigenerational group" },
          { label: "Seniors Only", value: "Seniors Only", icon: <HeartPulse size={18} />, desc: "Comfortable routes with rest stops" },
          { label: "Family or Couple", value: "Family or Couple", icon: <Smile size={18} />, desc: "Relaxed and engaging" },
          { label: "Solo Traveller", value: "Solo Traveller", icon: <User size={18} />, desc: "Independent and safe" },
          { label: "Friends or Group", value: "Friends or Group", icon: <Globe size={18} />, desc: "Fun and adventurous" }
        ],
        field: "travelers"
      }
    ]);
  };

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isTyping, showResults]);

  const triggerNextQuestion = (stepOverride?: number) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const nextStep = stepOverride !== undefined ? stepOverride : currentStepIndex + 1;
      setCurrentStepIndex(nextStep);

      if (nextStep === 1) { // Journey Type
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-journey-${Date.now()}`,
            sender: "bot",
            text: "Great. What kind of journey are you planning?",
            options: [
              { label: "Pilgrimage", value: "Pilgrimage", icon: <Sparkles size={18}/>, desc: "Sacred and devotional" },
              { label: "Family holiday", value: "Family holiday", icon: <Smile size={18}/>, desc: "Relaxing and fun" },
              { label: "Cultural journey", value: "Cultural journey", icon: <Map size={18}/>, desc: "Heritage and history" },
              { label: "Group tour", value: "Group tour", icon: <Users size={18}/>, desc: "Shared experience" },
              { label: "Mixed spiritual and leisure trip", value: "Mixed spiritual & leisure", icon: <Globe size={18}/>, desc: "Best of both worlds" }
            ],
            field: "journeyType"
          }
        ]);
      } else if (nextStep === 2) { // Destination
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-dest-${Date.now()}`,
            sender: "bot",
            text: "Where would you like to go? You can choose one or let me suggest.",
            options: [
              { label: "Suggest for me", value: "Suggest", icon: <Sparkles size={18}/> },
              { label: "North India (Char Dham, Varanasi)", value: "North India", icon: <MapPin size={18}/> },
              { label: "South India (Madurai, Rameswaram)", value: "South India", icon: <MapPin size={18}/> },
              { label: "Maharashtra (Jyotirlinga, Shirdi)", value: "Maharashtra", icon: <MapPin size={18}/> }
            ],
            field: "destination",
            multiSelect: true
          }
        ]);
      } else if (nextStep === 3) { // Dates
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-dates-${Date.now()}`,
            sender: "bot",
            text: "When are you planning to travel and for how long?",
            options: [
              { label: "Flexible Dates (Recommend best time)", value: "Flexible Dates", icon: <CalendarDays size={18}/> },
              { label: "Next 3 Months", value: "Next 3 Months", icon: <Calendar size={18}/> },
              { label: "Short Trip (1-3 Days)", value: "Short Trip", icon: <Map size={18}/> },
              { label: "Long Trip (5+ Days)", value: "Long Trip", icon: <Globe size={18}/> }
            ],
            field: "dates",
            multiSelect: true
          }
        ]);
      } else if (nextStep === 4) { // Comfort
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-needs-${Date.now()}`,
            sender: "bot",
            text: "Safety and comfort are priority. Please select any special assistance or meal requirements:",
            options: [
              { label: "Senior-friendly route", value: "Senior-friendly route", icon: <HeartPulse size={18}/> },
              { label: "Minimal walking & Rest breaks", value: "Minimal walking", icon: <User size={18}/> },
              { label: "Wheelchair accessibility", value: "Wheelchair accessibility", icon: <ShieldCheck size={18}/> },
              { label: "Satvik meals (no onion/garlic)", value: "Satvik meals", icon: <Heart size={18}/> },
              { label: "No special requirements", value: "None", icon: <Check size={18}/> }
            ],
            field: "needs",
            multiSelect: true
          }
        ]);
      } else if (nextStep === 5) { // Budget
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-budget-${Date.now()}`,
            sender: "bot",
            text: "Lastly, what is your preferred budget and accommodation style?",
            options: [
              { label: "Premium / Luxury", value: "Premium / Luxury", icon: <Sparkles size={18}/>, desc: "5-Star, VIP Darshan, Private SUV" },
              { label: "Comfort Standard", value: "Comfort Standard", icon: <Check size={18}/>, desc: "3/4-Star, AC Transport, Guided" },
              { label: "Budget Friendly", value: "Budget Friendly", icon: <Coins size={18}/>, desc: "Ashrams, Standard Transport" }
            ],
            field: "budget"
          }
        ]);
      } else if (nextStep === 6) { // Review
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-review-${Date.now()}`,
            sender: "bot",
            text: "Dhanyawad! I have gathered your preferences. Please review your trip summary on the right. Once you're ready, click 'Generate My Journey' below.",
            field: "review"
          }
        ]);
      }
    }, 800);
  };

  // When a user selects an option
  const handleOptionSelect = (option: Option, field: string, isMulti?: boolean) => {
    // Determine if it's the final action for this field
    let moveNext = !isMulti; 
    let newValue: any;

    if (isMulti) {
      const arr = (preferences as any)[field] as string[];
      if (arr.includes(option.value)) {
        newValue = arr.filter((x) => x !== option.value);
      } else {
        if (option.value === "None" || option.value === "Suggest") {
          newValue = [option.value];
        } else {
          newValue = [...arr.filter((x) => x !== "None" && x !== "Suggest"), option.value];
        }
      }
    } else {
      newValue = option.value;
    }

    setPreferences({ ...preferences, [field]: newValue });

    if (moveNext) {
      finalizeUserAnswer(option.label, field);
    }
  };

  const finalizeMultiSelect = (field: string) => {
    const vals = (preferences as any)[field] as string[];
    if (vals.length === 0) return;
    finalizeUserAnswer(vals.join(", "), field);
  };

  const finalizeUserAnswer = (text: string, field: string) => {
    // Convert the options into a user bubble, remove options from bot msg
    setMessages((prev) => {
      const updated = [...prev];
      for (let i = updated.length - 1; i >= 0; i--) {
        if (updated[i].sender === "bot" && updated[i].field === field) {
          updated[i] = { ...updated[i], options: undefined };
          break;
        }
      }
      return [
        ...updated,
        { id: `user-${Date.now()}`, sender: "user", text }
      ];
    });

    // Special case handling
    if (field === "journeyType" && preferences.journeyType === "Pilgrimage") {
       // Ask Faith
       setIsTyping(true);
       setTimeout(() => {
         setIsTyping(false);
         setMessages((prev) => [
           ...prev,
           {
             id: `bot-faith-${Date.now()}`,
             sender: "bot",
             text: "Which spiritual path would you like to explore?",
             options: [
               { label: "Hinduism", value: "Hinduism" },
               { label: "Buddhism", value: "Buddhism" },
               { label: "Christianity", value: "Christianity" },
               { label: "Islam", value: "Islam" },
               { label: "Multi-faith", value: "Multi-faith" },
               { label: "No specific preference", value: "No specific preference" }
             ],
             field: "faith"
           }
         ]);
       }, 800);
    } else if (field === "faith") {
      triggerNextQuestion(2);
    } else {
      triggerNextQuestion();
    }
  };

  const generateAIPlan = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setIsLoading(false);
    setShowResults(true);
    toast.success("Personalized Yatra Itinerary Generated!", { icon: "✨" });
  };

  const handleRegenerate = () => {
    setShowResults(false);
    setCurrentStepIndex(0);
    setPreferences({
      travelers: "",
      journeyType: "",
      faith: "",
      destination: [],
      dates: [],
      duration: "",
      needs: [],
      budget: "",
      transport: "",
    });
    startConversation();
  };



  const getCompletionPercentage = () => {
    return Math.round((currentStepIndex / 6) * 100);
  };

  const matchedPackages = mockPackages.filter((p) => {
    if (preferences.destination.length > 0 && !preferences.destination.includes("Suggest")) {
      const matchRegion = preferences.destination.some(d => p.region.includes(d) || p.destinations.includes(d));
      if (!matchRegion) return false;
    }
    if (preferences.journeyType === "Pilgrimage" && preferences.faith && preferences.faith !== "Multi-faith" && preferences.faith !== "No specific preference") {
      if (p.subCategory !== preferences.faith && p.category !== preferences.faith) return false;
    }
    return true;
  }).slice(0, 3);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <main className="w-full flex-grow mx-auto flex flex-col pt-6 pb-12">
          
          {/* Hero Section */}
          <section className="flex flex-col gap-3 items-center text-center select-none pb-4 px-4 md:px-12 max-w-4xl mx-auto">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed text-[10px] font-bold flex items-center gap-1 shadow-sm uppercase tracking-wider">
              <Sparkles size={10} className="animate-pulse" />
              Intelligent Routing
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary font-bold">
              AI Devotional Trip Planner
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
              Plan a personalized journey based on your faith, group, comfort, accessibility, budget, and travel preferences.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <span className="flex items-center gap-1.5 text-xs font-bold text-primary bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">
                <HeartPulse size={14} className="text-secondary" /> Senior-friendly planning
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-primary bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">
                <ShieldCheck size={14} className="text-secondary" /> Accessibility-aware routes
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-primary bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">
                <Sparkles size={14} className="text-secondary" /> Personalized itinerary
              </span>
            </div>
          </section>

          {!showResults && (
            <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6">
              {/* Progress Indicator */}
              <div className="hidden md:flex items-center justify-between w-full max-w-4xl mx-auto select-none mt-4 mb-6">
                {STEPS.map((stepName, i) => {
                  const isCompleted = i < currentStepIndex;
                  const isCurrent = i === currentStepIndex;
                  return (
                    <div key={stepName} className="flex flex-col items-center gap-2 relative flex-1">
                      {i !== 0 && (
                        <div className={`absolute top-3 right-[50%] left-[-50%] h-[2px] -z-10 transition-colors duration-300 ${isCompleted || isCurrent ? "bg-[#E9A227]" : "bg-outline-variant/30"}`} />
                      )}
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                        isCompleted ? "bg-[#E9A227] text-white" :
                        isCurrent ? "bg-[#062E4F] border-2 border-[#E9A227] text-white" :
                        "bg-surface-variant text-on-surface-variant border border-outline-variant/30"
                      }`}>
                        {isCompleted ? <Check size={12} /> : i + 1}
                      </div>
                      <span className={`text-[10px] font-bold ${isCurrent ? "text-primary" : "text-outline"} text-center max-w-[80px]`}>
                        {stepName}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="md:hidden text-center text-xs font-bold text-outline mb-4">
                Step {currentStepIndex + 1} of {STEPS.length}: {STEPS[currentStepIndex]}
              </div>

              {/* Responsive Two-Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full h-auto lg:h-[620px]">
                
                {/* Left Column: AI Conversation */}
                <div className="lg:col-span-8 flex flex-col bg-surface-container-lowest rounded-2xl shadow-level-1 border border-outline-variant/15 overflow-hidden">
                  
                  {/* Chat Area */}
                  <div ref={chatContainerRef} className="flex-grow p-4 md:p-6 overflow-y-auto space-y-6" aria-live="polite">
                    <AnimatePresence>
                      {messages.map((msg) => {
                        const isBot = msg.sender === "bot";
                        return (
                          <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`flex ${isBot ? "justify-start" : "justify-end"}`}
                          >
                            <div className="flex gap-3 max-w-[90%] md:max-w-[85%]">
                              {isBot && (
                                <div className="w-8 h-8 rounded-full bg-[#062E4F] flex items-center justify-center flex-shrink-0 text-[#E9A227] mt-1 shadow-sm">
                                  <Sparkles size={14} />
                                </div>
                              )}
                              
                              <div className="flex flex-col gap-2">
                                <div
                                  className={`rounded-2xl p-4 text-[15px] leading-relaxed shadow-sm ${
                                    isBot
                                      ? "bg-[#F0F4F8] text-[#062E4F] rounded-tl-none font-medium border border-[#E1E8F0]"
                                      : "bg-[#062E4F] text-white rounded-tr-none font-semibold"
                                  }`}
                                >
                                  {msg.text}
                                </div>
                                
                                {/* Option Cards */}
                                {isBot && msg.options && (
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 select-none">
                                    {msg.options.map((opt) => {
                                      const isSelected = msg.multiSelect && (preferences as any)[msg.field!]?.includes(opt.value);
                                      return (
                                        <button
                                          key={opt.label}
                                          onClick={() => handleOptionSelect(opt, msg.field!, msg.multiSelect)}
                                          className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex flex-col gap-1 focus:outline-none focus:ring-2 focus:ring-[#E9A227]/50 min-h-[44px] ${
                                            isSelected
                                              ? "bg-[#FFF9F0] border-[#E9A227] shadow-sm"
                                              : "bg-white border-outline-variant/30 hover:border-[#E9A227]/60 hover:bg-slate-50"
                                          }`}
                                        >
                                          <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                              <span className={isSelected ? "text-[#E9A227]" : "text-[#062E4F]"}>
                                                {opt.icon || <Check size={16} />}
                                              </span>
                                              <span className="font-bold text-sm text-[#062E4F]">{opt.label}</span>
                                            </div>
                                            {isSelected && <Check size={14} className="text-[#E9A227]" />}
                                          </div>
                                          {opt.desc && (
                                            <span className="text-[11px] text-slate-500 font-medium ml-6">
                                              {opt.desc}
                                            </span>
                                          )}
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                                
                                {/* Submit button for multi-select */}
                                {isBot && msg.options && msg.multiSelect && (
                                  <button
                                    onClick={() => finalizeMultiSelect(msg.field!)}
                                    disabled={!(preferences as any)[msg.field!]?.length}
                                    className="self-end mt-2 bg-[#062E4F] text-white text-xs font-bold px-5 py-2.5 rounded-lg disabled:opacity-50 hover:bg-[#0B426D] transition-colors flex items-center gap-1.5"
                                  >
                                    Confirm <ArrowRight size={14}/>
                                  </button>
                                )}

                                {/* Generate Journey CTA */}
                                {isBot && msg.field === "review" && (
                                  <button
                                    onClick={generateAIPlan}
                                    className="self-start mt-2 bg-[#E9A227] text-[#062E4F] font-bold px-6 py-3 rounded-xl hover:bg-[#F5B036] transition-all shadow-sm flex items-center gap-2"
                                  >
                                    <Sparkles size={16} /> Generate My Journey
                                  </button>
                                )}

                                {/* Edit button for completed user answer */}
                                {!isBot && (
                                  <button onClick={() => {}} className="text-[10px] text-outline self-end hover:text-primary flex items-center gap-1 opacity-0 hover:opacity-100 transition-opacity">
                                    <Edit2 size={10} /> Edit
                                  </button>
                                )}

                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>

                    {/* Loading indicator */}
                    {isTyping && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                        <div className="flex gap-3">
                           <div className="w-8 h-8 rounded-full bg-[#062E4F] flex items-center justify-center text-[#E9A227] mt-1">
                             <Sparkles size={14} />
                           </div>
                           <div className="bg-[#F0F4F8] text-primary rounded-2xl rounded-tl-none p-4 flex items-center gap-1.5 border border-[#E1E8F0]">
                            <span className="w-1.5 h-1.5 bg-[#062E4F] rounded-full animate-[bounce_1s_infinite]" />
                            <span className="w-1.5 h-1.5 bg-[#062E4F] rounded-full animate-[bounce_1s_infinite_0.2s]" />
                            <span className="w-1.5 h-1.5 bg-[#062E4F] rounded-full animate-[bounce_1s_infinite_0.4s]" />
                           </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                </div>

                {/* Right Column: Live Summary */}
                <aside className="lg:col-span-4 bg-surface-container-lowest rounded-2xl shadow-level-1 border border-outline-variant/15 p-6 flex flex-col h-auto lg:h-[620px] sticky top-24 overflow-y-auto">
                  <div className="flex items-center gap-2 pb-4 border-b border-outline-variant/15">
                    <div className="w-8 h-8 bg-[#FFF9F0] rounded-full flex items-center justify-center text-[#E9A227]">
                      <BadgeInfo size={16} />
                    </div>
                    <h3 className="font-headline-md text-primary font-bold text-lg">Live Trip Summary</h3>
                  </div>

                  {/* Summary Content */}
                  <div className="flex-grow mt-6 space-y-5">
                    <SummaryItem label="Travellers" value={preferences.travelers} icon={<Users size={16}/>} />
                    <SummaryItem label="Journey Type" value={preferences.journeyType} icon={<Map size={16}/>} />
                    {preferences.faith && <SummaryItem label="Faith" value={preferences.faith} icon={<Sparkles size={16}/>} />}
                    <SummaryItem label="Destination" value={preferences.destination.join(", ")} icon={<MapPin size={16}/>} />
                    <SummaryItem label="Dates & Duration" value={preferences.dates.join(", ")} icon={<Calendar size={16}/>} />
                    <SummaryItem label="Accessibility" value={preferences.needs.join(", ")} icon={<ShieldCheck size={16}/>} />
                    <SummaryItem label="Budget Level" value={preferences.budget} icon={<Coins size={16}/>} />
                    
                    {currentStepIndex === 0 && (
                      <p className="text-sm text-outline italic text-center mt-10">
                        Your journey summary will appear here as you answer the questions.
                      </p>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-outline-variant/15">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-primary">Journey profile completion</span>
                      <span className="text-xs font-bold text-[#E9A227]">{getCompletionPercentage()}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#E9A227]" 
                        initial={{ width: 0 }}
                        animate={{ width: `${getCompletionPercentage()}%` }}
                        transition={{ duration: 0.5, ease: easeQuint }}
                      />
                    </div>
                  </div>
                </aside>

              </div>
            </div>
          )}

          {/* Generated Plan results */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, ease: easeQuint }}
                className="space-y-8 select-none text-left print:p-0 w-full max-w-5xl mx-auto px-4 md:px-12"
              >
                {/* Result UI */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-sm">
                  <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Plan ID: #DY-{Math.floor(Math.random() * 900000 + 100000)}</span>
                      <h3 className="text-2xl font-bold text-[#062E4F] font-display mt-1">Your Curated Journey Plan</h3>
                    </div>
                    <button onClick={handleRegenerate} className="flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline">
                      <Edit2 size={12} /> Modify Preferences
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Suggested Daily Outline */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-[#062E4F] text-sm uppercase tracking-wider border-b border-slate-100 pb-1.5">Suggested Timeline</h4>
                      <div className="space-y-3 text-sm text-slate-700">
                        <div className="flex gap-3">
                          <span className="font-extrabold text-[#E9A227] shrink-0">Day 1:</span>
                          <p>Arrival at sacred hub. Assisted low-pace AC transfer to hotel. Evening temple assembly and Satvik welcome dinner.</p>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-extrabold text-[#E9A227] shrink-0">Day 2:</span>
                          <p>VIP Darshan queue assembly. Priority wheelchair/rickshaw assists to temple complex. Rest hours after lunch.</p>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-extrabold text-[#E9A227] shrink-0">Day 3:</span>
                          <p>Local heritage walk or Ganga Aarti attendance. Group prayer sessions and souvenir collection. Hometown departure transfers.</p>
                        </div>
                      </div>
                    </div>

                    {/* Travel Preparation advice */}
                    <div className="space-y-4 bg-slate-50 p-5 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-[#062E4F] text-sm uppercase tracking-wider mb-2">Spiritual Gear & Safety</h4>
                      <div className="grid grid-cols-1 gap-4 text-sm text-slate-700">
                        <div className="flex gap-3 items-start">
                          <Check size={16} className="text-[#E9A227] shrink-0 mt-0.5" />
                          <div><span className="font-bold block">Clothing:</span> Traditional modest attire. Cotton layers. Slip-on walking shoes.</div>
                        </div>
                        <div className="flex gap-3 items-start">
                          <Check size={16} className="text-[#E9A227] shrink-0 mt-0.5" />
                          <div><span className="font-bold block">Essentials:</span> Water bottle, hand towels, holy container, copy of national ID.</div>
                        </div>
                        {preferences.needs.length > 0 && (
                          <div className="flex gap-3 items-start">
                            <ShieldAlert size={16} className="text-secondary shrink-0 mt-0.5" />
                            <div><span className="font-bold block">Accessibility Confirmed:</span> {preferences.needs.join(", ")} arranged.</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="space-y-4 text-left print:hidden">
                  <h2 className="font-headline-lg text-primary font-bold flex items-center gap-2">
                    <Sparkles className="text-[#E9A227]" size={24} />
                    Recommended Tour Packages:
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {matchedPackages.map((pkg, idx) => (
                      <PackageCard key={pkg.id} pkg={pkg} index={idx} />
                    ))}
                    {matchedPackages.length === 0 && (
                      <div className="col-span-3 text-center py-10 bg-slate-50 rounded-xl text-slate-500 text-sm">
                        No exact pre-made packages found. Our agents will custom-build this for you!
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions footer */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 select-none print:hidden pb-10">
                  <button
                    onClick={() => window.print()}
                    className="bg-[#062E4F] text-white font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#0B426D] cursor-pointer transition-all active:scale-97 shadow-sm"
                  >
                    <Save size={18} /> Save & Download Plan
                  </button>
                  <button
                    onClick={() => {}}
                    className="border border-[#062E4F] text-[#062E4F] font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 cursor-pointer transition-all active:scale-97"
                  >
                    Enquire About This Journey
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* Full Screen Loader overlay during plan creation */}
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center gap-4"
              >
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <div className="w-full h-full border-4 border-secondary border-t-transparent rounded-full animate-spin" />
                  <Sparkles size={28} className="text-secondary absolute animate-pulse" />
                </div>
                <h4 className="font-headline-lg text-primary font-bold mt-2">Preparing your itinerary...</h4>
                <div className="flex flex-col items-center gap-2 mt-4 text-sm font-bold text-slate-500">
                   <span className="flex items-center gap-2"><Check size={16} className="text-[#E9A227]"/> Checking travel preferences</span>
                   <span className="flex items-center gap-2"><Check size={16} className="text-[#E9A227]"/> Finding suitable destinations</span>
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

function SummaryItem({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  if (!value) return null;
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-start gap-3"
    >
      <div className="text-slate-400 mt-0.5">{icon}</div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase font-bold tracking-wider text-outline">{label}</span>
        <span className="text-sm font-bold text-primary">{value}</span>
      </div>
    </motion.div>
  );
}
