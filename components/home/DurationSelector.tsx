"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { Clock, ChevronDown } from "lucide-react";
import Popover from "@/components/ui/Popover";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const DURATIONS = [
  { value: "1-3", label: "1–3 Days" },
  { value: "4-6", label: "4–6 Days" },
  { value: "7-10", label: "7–10 Days" },
  { value: "10+", label: "More than 10 Days" }
];

export default function DurationSelector({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = DURATIONS.find(d => d.value === value)?.label || "";

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
        <label className="font-label-bold text-[12px] uppercase tracking-wider text-outline mb-1 cursor-pointer select-none">Duration</label>
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-primary flex-shrink-0" />
          <div className="flex-grow font-body-md text-[15px] truncate text-on-surface select-none">
            {selectedLabel || <span className="text-outline-variant">Any Duration</span>}
          </div>
          <ChevronDown size={16} className={`text-outline transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </div>

      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchorRef={containerRef}
        mobileTitle="Select Duration"
        className="w-full md:w-[280px]"
      >
        <div className="flex flex-col bg-white">
          <button
            type="button"
            onClick={() => handleSelect("")}
            className={`w-full text-left px-5 py-4 hover:bg-surface-container-lowest transition-colors border-b border-outline-variant/15
              ${value === "" ? "bg-blue-50/50 text-primary font-bold" : "text-on-surface font-medium"}`}
          >
            Any Duration
          </button>
          {DURATIONS.map((dur) => (
            <button
              key={dur.value}
              type="button"
              onClick={() => handleSelect(dur.value)}
              className={`w-full text-left px-5 py-4 hover:bg-surface-container-lowest transition-colors min-h-[48px]
                ${value === dur.value ? "bg-blue-50/50 text-primary font-bold" : "text-on-surface font-medium"}`}
            >
              {dur.label}
            </button>
          ))}
        </div>
      </Popover>
    </>
  );
}
