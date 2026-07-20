"use client";

import { Suspense } from "react";
import PackageListContent from "./PackageListContent";

export default function PackagesPage() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <span className="font-semibold text-primary">Loading OneJourney Packages...</span>
          </div>
        </div>
      }
    >
      <PackageListContent />
    </Suspense>
  );
}
