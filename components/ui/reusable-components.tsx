// Reusable button component with proper styling
import { cn } from "@/lib/utils";
import { memo } from "react";
import type React from "react";

// Simple SVG icon to avoid hydration issues
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4 12 14.01l-3-3" />
  </svg>
);

interface NavigationButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  variant?: "nav" | "cta";
}

export function NavigationButton({
  children,
  onClick,
  className,
  variant = "nav",
}: NavigationButtonProps) {
  const baseClasses =
    "transition-all duration-300 ease-in-out cursor-pointer focus:outline-none rounded relative";

  const variantClasses = {
    nav: "text-sm lg:text-base font-normal text-[#060606] hover:text-[#060606] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-[#42362A] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
    cta: "px-4 py-2 bg-[#1F6F5C] hover:bg-[#28997B] text-white rounded-sm font-medium transition-colors duration-200 focus:ring-[#1F6F5C]",
  };

  // If button text is 'Get Loan Assistance', override onClick
  const isLoanButton =
    typeof children === "string" && children.trim() === "Get Loan Assistance";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoanButton) {
      window.open("https://deformity.ai/d/wME1f8Ry4hpH", "_blank");
      e.preventDefault();
      return;
    }
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      {children}
    </button>
  );
}

// Reusable feature item component
interface FeatureItemProps {
  feature: string;
}

export const FeatureItem = memo(({ feature }: FeatureItemProps) => (
  <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
    <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
    <span className="leading-relaxed flex-1 text-left">{feature}</span>
  </div>
));

FeatureItem.displayName = "FeatureItem";

// Reusable service card component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = memo(
  ({ icon, title, description }: ServiceCardProps) => {
    const titleWords = title.split(" ");

    return (
      <div
        className="group relative mx-auto w-full max-w-[400px] h-[240px] mb-6 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1"
        role="article"
        aria-labelledby={`service-title-${title
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        {/* offset block to mimic thick black drop shadow */}
        <div
          className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-black transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:translate-y-4"
          aria-hidden="true"
        />
        <div className="relative rounded-xl border-2 border-black bg-white h-full transition-all duration-300 ease-out group-hover:shadow-lg">
          {/* title bar with centered service name */}
          <div className="flex items-center justify-between pt-2 px-4 sm:px-3 h-14">
            <div className="flex items-center gap-1">
              <span className="sr-only">Window controls</span>
              <span className="size-3 rounded-full bg-[#42362A]" />
              <span className="size-3 rounded-full bg-[#BFB0A1]" />
              <span className="size-3 rounded-full bg-[#1F6F5C]" />
            </div>
            <h3
              id={`service-title-${title.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xl sm:text-lg md:text-xl font-semibold text-center flex-1 font-gabarito leading-tight"
            >
              {titleWords.map((word, index) => (
                <span
                  key={index}
                  className={index === 0 ? "text-[#060606]" : "text-[#42362A]"}
                >
                  {word}
                  {index < titleWords.length - 1 ? " " : ""}
                </span>
              ))}
            </h3>
            <div className="w-12" aria-hidden="true"></div>
          </div>
          {/* dashed inner container with description */}
          <div className="m-1 flex items-center justify-center rounded-md border-2 border-dashed border-[#BFB0A1]/40 p-2 h-[calc(100%-4rem)]">
            <div className="inline-flex w-full items-center gap-3 sm:gap-4 rounded-md border border-[#BFB0A1]/20 bg-white px-3 sm:px-4 py-1 sm:py-2 md:py-3 text-[#060606] shadow-sm h-full">
              <div
                className="flex size-8 sm:size-9 items-center justify-center rounded-md text-[#645C54] flex-shrink-0"
                aria-hidden="true"
              >
                {icon}
              </div>
              <p className="text-lg sm:text-base md:text-lg font-medium leading-6 text-[#645C54] font-gabarito-regular line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";
