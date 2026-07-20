"use client";

import { useApp } from "@/context/AppContext";
import ExitIntentPopup from "@/components/modals/ExitIntentPopup";

export default function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const { fontSizeClass, highContrast } = useApp();

  return (
    <div className={`${fontSizeClass === "text-large" ? "text-large" : ""} ${highContrast ? "high-contrast-mode" : ""} min-h-screen flex flex-col`}>
      {children}
      <ExitIntentPopup />
    </div>
  );
}
