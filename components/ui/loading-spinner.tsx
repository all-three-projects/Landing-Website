"use client";

import { memo } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingSpinner = memo(
  ({ size = "md", className = "" }: LoadingSpinnerProps) => {
    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-8 w-8",
      lg: "h-12 w-12",
    };

    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div
          className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-[#BFB0A1]/30 border-t-[#42362A]`}
          role="status"
          aria-label="Loading"
        />
      </div>
    );
  }
);

LoadingSpinner.displayName = "LoadingSpinner";

interface SectionLoaderProps {
  className?: string;
}

export const SectionLoader = memo(({ className = "" }: SectionLoaderProps) => {
  return (
    <div className={`flex items-center justify-center py-16 ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        <LoadingSpinner size="lg" />
        <div className="text-sm text-[#8C8C8C] font-medium">Loading...</div>
      </div>
    </div>
  );
});

SectionLoader.displayName = "SectionLoader";
