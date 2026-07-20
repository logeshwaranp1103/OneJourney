"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Users, ChevronDown, Plus, Minus, X } from "lucide-react";
import Popover from "@/components/ui/Popover";

export interface TravellersState {
  adults: number;
  children: number;
  seniors: number;
  rooms: number;
}

interface Props {
  value: TravellersState;
  onChange: (val: TravellersState) => void;
}

interface CounterRowProps {
  label: string;
  description?: string;
  type: keyof TravellersState;
  min?: number;
  max?: number;
  value: TravellersState;
  onChange: (type: keyof TravellersState, val: number) => void;
}

function CounterRow({
  label,
  description,
  type,
  min = 0,
  max = 12,
  value,
  onChange,
}: CounterRowProps) {
  const currentValue = value[type];
  
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <div className="text-[15px] font-bold text-primary">{label}</div>
        {description && <div className="text-[13px] text-outline-variant">{description}</div>}
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (currentValue > min) onChange(type, currentValue - 1);
          }}
          disabled={currentValue <= min}
          className="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-outline disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#E9A227] hover:text-[#E9A227] hover:bg-orange-50/50 transition-colors"
        >
          <Minus size={16} />
        </button>
        <span className="w-4 text-center text-[15px] font-bold text-primary inline-block">
          {currentValue}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (currentValue < max) onChange(type, currentValue + 1);
          }}
          disabled={currentValue >= max}
          className="w-9 h-9 rounded-full border border-outline-variant/30 flex items-center justify-center text-outline disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#E9A227] hover:text-[#E9A227] hover:bg-orange-50/50 transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}

export default function TravellerSelector({ value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState<TravellersState>(value);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync draft when opened
  useEffect(() => {
    if (isOpen) setDraft(value);
  }, [isOpen, value]);

  const handleUpdate = (type: keyof TravellersState, val: number) => {
    setDraft(prev => {
      const next = { ...prev, [type]: val };
      // Ensure at least 1 adult or senior if rooms > 0
      if ((next.adults + next.seniors) === 0) {
        if (type === 'children' || type === 'rooms') {
           next.adults = 1;
        }
      }
      return next;
    });
  };

  const handleApply = () => {
    onChange(draft);
    setIsOpen(false);
  };

  const handleReset = () => {
    const defaultState = { adults: 2, children: 0, seniors: 0, rooms: 1 };
    setDraft(defaultState);
  };

  const formatSummary = (state: TravellersState) => {
    const parts = [];
    if (state.adults > 0) parts.push(`${state.adults} Adult${state.adults > 1 ? 's' : ''}`);
    if (state.seniors > 0) parts.push(`${state.seniors} Senior${state.seniors > 1 ? 's' : ''}`);
    if (state.children > 0) parts.push(`${state.children} Child${state.children > 1 ? 'ren' : ''}`);
    if (state.rooms > 0) parts.push(`${state.rooms} Room${state.rooms > 1 ? 's' : ''}`);
    return parts.join(', ') || 'Select Travellers';
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
        className="relative flex flex-col p-4 hover:bg-surface-container-low transition-colors rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none text-left h-full justify-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E9A227]"
        ref={containerRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleTriggerKeyDown}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
      >
        <label className="font-label-bold text-[12px] uppercase tracking-wider text-outline mb-1 cursor-pointer select-none">
          Travellers
        </label>
        <div className="flex items-center gap-2">
          <Users size={18} className="text-primary flex-shrink-0" />
          <div className="flex-grow font-body-md text-[15px] truncate text-on-surface select-none">
            {formatSummary(value)}
          </div>
          <ChevronDown
            size={16}
            className={`text-outline flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      <Popover
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchorRef={containerRef}
        mobileTitle="Select Travellers"
        className="w-full md:w-[400px]"
      >
        <div className="flex flex-col bg-white">
          <div className="p-5 flex flex-col divide-y divide-outline-variant/15">
            <CounterRow
              label="Adults"
              description="Ages 18 - 59"
              type="adults"
              min={draft.seniors > 0 ? 0 : 1}
              value={draft}
              onChange={handleUpdate}
            />
            <CounterRow
              label="Children"
              description="Ages 2 - 12"
              type="children"
              min={0}
              value={draft}
              onChange={handleUpdate}
            />
            <CounterRow
              label="Seniors"
              description="Ages 60+"
              type="seniors"
              min={0}
              value={draft}
              onChange={handleUpdate}
            />
            <CounterRow
              label="Rooms"
              type="rooms"
              min={1}
              max={5}
              value={draft}
              onChange={handleUpdate}
            />
          </div>
          
          <div className="flex items-center justify-between p-4 bg-surface-container-lowest border-t border-outline-variant/15">
            <button 
              type="button" 
              onClick={handleReset}
              className="text-[14px] font-bold text-secondary hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Reset
            </button>
            <button 
              type="button" 
              onClick={handleApply}
              className="bg-primary hover:bg-[#041F35] text-white px-6 py-2.5 rounded-lg text-[14px] font-bold shadow-sm transition-all hover:shadow active:scale-95"
            >
              Apply
            </button>
          </div>
        </div>
      </Popover>
    </>
  );
}
