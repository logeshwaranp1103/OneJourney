"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import DestinationSelector from "./DestinationSelector";
import MonthSelector from "./MonthSelector";
import DurationSelector from "./DurationSelector";
import TravellerSelector, { TravellersState } from "./TravellerSelector";

export default function PackageSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [travelMonth, setTravelMonth] = useState("");
  const [duration, setDuration] = useState("");
  const [travellers, setTravellers] = useState<TravellersState>({
    adults: 2,
    children: 0,
    seniors: 0,
    rooms: 1,
  });
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate loading state for 600-900ms
    await new Promise(resolve => setTimeout(resolve, 750));

    // Build query params
    const params = new URLSearchParams();
    if (destination) params.append("dest", destination);
    if (travelMonth) params.append("month", travelMonth);
    if (duration) params.append("duration", duration);
    
    const total = travellers.adults + travellers.children + travellers.seniors;
    if (total > 0) params.append("travellers", total.toString());

    router.push(`/packages?${params.toString()}`);
    setIsSearching(false);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="w-full max-w-6xl bg-white/95 backdrop-blur-md p-4 md:p-3 rounded-[24px] shadow-level-2 border border-slate-200/80 flex flex-col md:flex-row items-stretch md:items-center gap-4 transition-all duration-300 hover:shadow-level-3"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grow divide-y md:divide-y-0 md:divide-x divide-slate-100">
        <div className="h-full">
          <DestinationSelector value={destination} onChange={setDestination} />
        </div>
        <div className="h-full">
          <MonthSelector value={travelMonth} onChange={setTravelMonth} />
        </div>
        <div className="h-full">
          <DurationSelector value={duration} onChange={setDuration} />
        </div>
        <div className="h-full">
          <TravellerSelector value={travellers} onChange={setTravellers} />
        </div>
      </div>

      {/* Saffron Primary Search CTA button */}
      <button
        type="submit"
        disabled={isSearching}
        className="bg-[#E9A227] hover:bg-[#d58e1c] text-white h-16 md:h-auto lg:h-[72px] px-12 rounded-2xl font-label-bold text-lg hover:shadow-md active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-85 disabled:scale-100 group flex-shrink-0"
      >
        {isSearching ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <Search size={22} className="group-hover:scale-110 transition-transform" />
        )}
        <span className="inline">{isSearching ? "Searching..." : "Find Packages"}</span>
      </button>
    </form>
  );
}
