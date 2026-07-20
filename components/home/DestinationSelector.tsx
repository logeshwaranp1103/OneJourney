"use client";

import { useState, useRef, useMemo, KeyboardEvent, useEffect } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import Popover from "@/components/ui/Popover";
import { mockPackages } from "@/data/packages";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function DestinationSelector({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Extract unique destinations from local data
  const suggestedDestinations = useMemo(() => {
    const destMap = new Map<string, string>();
    mockPackages.forEach(pkg => {
      if (pkg.destinationName && pkg.location) {
        if (!destMap.has(pkg.destinationName)) {
          destMap.set(pkg.destinationName, pkg.location);
        }
      }
    });
    // Add some fallback top destinations if data is small
    if (destMap.size === 0) {
      destMap.set("Varanasi", "Uttar Pradesh");
      destMap.set("Rameswaram", "Tamil Nadu");
      destMap.set("Tirupati", "Andhra Pradesh");
      destMap.set("Kedarnath", "Uttarakhand");
      destMap.set("Madurai", "Tamil Nadu");
      destMap.set("Shirdi", "Maharashtra");
    }
    
    return Array.from(destMap.entries()).map(([name, location]) => ({ name, location }));
  }, []);

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return suggestedDestinations.slice(0, 10); // Show top 10
    
    return suggestedDestinations.filter(dest => 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      dest.location.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 10);
  }, [searchQuery, suggestedDestinations]);

  // Reset focus when search changes
  useEffect(() => {
    setFocusedIndex(-1);
  }, [searchQuery, isOpen]);

  const handleSelect = (dest: string) => {
    onChange(dest);
    setSearchQuery("");
    setIsOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex(prev => (prev < filtered.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (focusedIndex >= 0 && focusedIndex < filtered.length) {
        handleSelect(filtered[focusedIndex].name);
      }
    }
  };

  const handleTriggerKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(true);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? 
            <strong key={i} className="text-[#E9A227] font-bold">{part}</strong> : 
            <span key={i}>{part}</span>
        )}
      </>
    );
  };

  return (
    <>
      <div 
        className="relative flex flex-col p-4 hover:bg-surface-container-low transition-colors rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none text-left h-full justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9A227]" 
        ref={containerRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleTriggerKeyDown}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="destination-listbox"
      >
        <label className="font-label-bold text-[12px] uppercase tracking-wider text-outline mb-1 cursor-pointer select-none">Destination</label>
        <div className="flex items-center gap-2">
          <Search size={18} className="text-primary flex-shrink-0" />
          <div className="flex-grow font-body-md text-[15px] truncate text-on-surface select-none">
            {value || <span className="text-outline-variant">Where to?</span>}
          </div>
          <ChevronDown size={16} className={`text-outline transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>

      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchorRef={containerRef}
        mobileTitle="Search Destination"
        className="w-full md:w-[360px]"
      >
        <div className="flex flex-col bg-white">
          <div className="p-3 border-b border-outline-variant/15 sticky top-0 bg-white z-10">
            <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/30 px-3 py-2.5 rounded-lg focus-within:border-[#E9A227] focus-within:ring-1 focus-within:ring-[#E9A227]/50 transition-all">
              <Search size={16} className="text-outline flex-shrink-0" />
              <input
                ref={inputRef}
                autoFocus
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent border-none p-0 text-[15px] text-primary focus:ring-0 outline-none placeholder:text-outline-variant"
                aria-autocomplete="list"
                aria-controls="destination-listbox"
              />
            </div>
            {searchQuery === "" && (
              <p className="text-[11px] font-bold text-outline uppercase tracking-wider mt-3 px-1">
                Recent or Popular Destinations
              </p>
            )}
          </div>
          
          <div
            data-lenis-prevent
            className="overflow-y-auto py-2 max-h-[280px] filter-panel-scroll overscroll-contain"
            id="destination-listbox"
            role="listbox"
          >
            {filtered.length > 0 ? (
              filtered.map((dest, index) => {
                const isFocused = index === focusedIndex;
                const isSelected = value === dest.name;
                
                return (
                  <button
                    key={`${dest.name}-${index}`}
                    type="button"
                    onClick={() => handleSelect(dest.name)}
                    onMouseEnter={() => setFocusedIndex(index)}
                    role="option"
                    aria-selected={isSelected}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors min-h-[48px]
                      ${isFocused ? "bg-surface-container-low" : "hover:bg-surface-container-lowest"}
                      ${isSelected ? "bg-blue-50/50" : ""}
                    `}
                  >
                    <div className={`p-2 rounded-full flex-shrink-0 ${isFocused || isSelected ? "bg-white shadow-sm text-primary" : "bg-surface-container-low text-secondary"}`}>
                      <MapPin size={16} className={isSelected ? "text-[#E9A227]" : ""} />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className={`text-[15px] font-medium truncate ${isSelected ? "text-primary font-bold" : "text-on-surface"}`}>
                        {highlightMatch(dest.name, searchQuery)}
                      </span>
                      <span className="text-[12px] text-outline truncate">
                        {highlightMatch(dest.location, searchQuery)}
                      </span>
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="px-4 py-8 text-sm text-outline flex flex-col items-center justify-center gap-2">
                <MapPin size={24} className="text-outline-variant opacity-50" />
                <span>No matching destinations found.</span>
              </div>
            )}
          </div>
        </div>
      </Popover>
    </>
  );
}
