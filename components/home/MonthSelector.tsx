"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { Calendar, ChevronDown, Sparkles } from "lucide-react";
import Popover from "@/components/ui/Popover";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function MonthSelector({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateMonths = () => {
    const months = [];
    const date = new Date();
    // Start from next month to show upcoming 10 months
    date.setMonth(date.getMonth() + 1);
    
    for (let i = 0; i < 10; i++) {
      const monthName = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      const val = `${monthName.toLowerCase()}-${year}`;
      const label = `${monthName} ${year}`;
      
      // Mark specific months as recommended (e.g., Oct, Nov, Feb)
      const m = date.getMonth();
      const isRecommended = m === 9 || m === 10 || m === 1; // Oct, Nov, Feb (0-indexed)

      months.push({ value: val, label, isRecommended });
      date.setMonth(date.getMonth() + 1);
    }
    return months;
  };

  const monthsList = generateMonths();
  const selectedLabel = monthsList.find(m => m.value === value)?.label || "";

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  const handleTriggerKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <>
      <div 
        className="relative flex flex-col p-4 hover:bg-surface-container-low transition-colors text-left h-full justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9A227]" 
        ref={containerRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleTriggerKeyDown}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
      >
        <label className="font-label-bold text-[12px] uppercase tracking-wider text-outline mb-1 cursor-pointer select-none">Travel Month</label>
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-primary flex-shrink-0" />
          <div className="flex-grow font-body-md text-[15px] truncate text-on-surface select-none">
            {selectedLabel || <span className="text-outline-variant">Any Month</span>}
          </div>
          <ChevronDown size={16} className={`text-outline transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>

      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchorRef={containerRef}
        mobileTitle="Select Travel Month"
        className="w-full md:w-[340px]"
      >
        <div className="flex flex-col bg-white">
          <button
            type="button"
            onClick={() => handleSelect("")}
            className={`w-full flex items-center justify-between p-4 border-b border-outline-variant/15 text-left transition-colors min-h-[48px]
              ${value === "" ? "bg-blue-50/50 text-primary font-bold" : "hover:bg-surface-container-lowest text-on-surface font-medium"}
            `}
          >
            Flexible Dates
          </button>
          
          <div className="p-3">
            <div className="grid grid-cols-2 gap-2">
              {monthsList.map((month) => {
                const isSelected = value === month.value;
                return (
                  <button
                    key={month.value}
                    type="button"
                    onClick={() => handleSelect(month.value)}
                    className={`relative flex flex-col items-start p-3 rounded-xl border transition-colors min-h-[64px] ${
                      isSelected
                        ? "bg-primary-container/10 border-[#E9A227] text-primary"
                        : "border-outline-variant/20 hover:bg-surface-container-low hover:border-outline-variant/40 text-on-surface"
                    }`}
                  >
                    {month.isRecommended && (
                      <span
                        className="absolute top-1.5 right-1.5 text-[9px] flex items-center gap-0.5 text-secondary font-bold bg-secondary-fixed/30 px-1.5 py-0.5 rounded-full"
                        title="Best season to travel"
                      >
                        <Sparkles size={9} /> Best
                      </span>
                    )}
                    <span className={`text-sm ${isSelected ? "font-bold" : "font-semibold"}`}>
                      {month.label.split(' ')[0]}
                    </span>
                    <span className={`text-[11px] mt-0.5 ${isSelected ? "text-primary/80" : "text-outline-variant"}`}>
                      {month.label.split(' ')[1]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}
