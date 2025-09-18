"use client";

import { useState, memo, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_CATEGORIES, getQuestionIcon } from "@/lib/faq-utils";

// Import InfiniteSlider dynamically to prevent hydration issues
const InfiniteSlider = dynamic(
  () =>
    import("@/components/ui/infinite-slider").then((mod) => mod.InfiniteSlider),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center space-x-4 sm:space-x-8 text-[#F9F9F8] font-gabarito font-bold text-base sm:text-xl md:text-2xl whitespace-nowrap flex-shrink-0">
        <span>Truly Transparent</span>
        <span className="text-[#BFB0A1]">•</span>
        <span>
          All official fees are paid directly from your account, we only charge
          our service fee at visa filing.
        </span>
        <span className="text-[#BFB0A1]">•</span>
        <span>Unbiased Choices</span>
        <span className="text-[#BFB0A1]">•</span>
        <span>
          800+ universities across 30+ countries — no tied agendas, just the
          best fit for you.
        </span>
        <span className="text-[#BFB0A1]">•</span>
      </div>
    ),
  }
);

// Simple SVG icons to avoid hydration issues
const BookOpenIcon = ({ className }: { className?: string }) => (
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
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const HelpCircleIcon = ({ className }: { className?: string }) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

interface FAQSectionProps {
  defaultCategory?: string;
  showTabs?: boolean;
  title?: string;
  description?: string;
}

const FAQSection = memo(function FAQSection({
  defaultCategory,
  showTabs = true,
  title = "Frequently Asked Questions",
  description,
}: FAQSectionProps) {
  const [activeTab, setActiveTab] = useState(defaultCategory || "Edu Loan");
  const [isClient, setIsClient] = useState(false);
  const shouldShowTabs = showTabs && !defaultCategory;

  // Only render client-side to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  const getDescription = () => {
    if (description) return description;
    if (defaultCategory) {
      return "Everything you need to know about education loans for studying abroad";
    }
    return "Everything you need to know about studying abroad, education loans, and our services";
  };

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  return (
    <section id="faq" className="bg-white relative overflow-hidden">
      {/* Horizontal Scrolling Strip - Client-side only */}
      <div className="relative w-full overflow-hidden bg-[#1F6F5C] py-4">
        {isClient ? (
          <InfiniteSlider gap={32} duration={30} className="w-full">
            <div className="flex items-center space-x-4 sm:space-x-8 text-[#F9F9F8] font-gabarito whitespace-nowrap flex-shrink-0">
              <span className="font-bold text-base sm:text-xl md:text-2xl">
                Truly Transparent
              </span>
              <span className="text-[#BFB0A1]">•</span>
              <span className="font-normal text-sm sm:text-base md:text-lg">
                All official fees are paid directly from your account, we only
                charge our service fee at visa filing.
              </span>
              <span className="text-[#BFB0A1]">•</span>
              <span className="font-bold text-base sm:text-xl md:text-2xl">
                Unbiased Choices
              </span>
              <span className="text-[#BFB0A1]">•</span>
              <span className="font-normal text-sm sm:text-base md:text-lg">
                800+ universities across 30+ countries — no tied agendas, just
                the best fit for you.
              </span>
              <span className="text-[#BFB0A1]">•</span>
            </div>
          </InfiniteSlider>
        ) : (
          <div className="flex items-center space-x-4 sm:space-x-8 text-[#F9F9F8] font-gabarito whitespace-nowrap flex-shrink-0">
            <span className="font-bold text-base sm:text-xl md:text-2xl">
              Truly Transparent
            </span>
            <span className="text-[#BFB0A1]">•</span>
            <span className="font-normal text-sm sm:text-base md:text-lg">
              All official fees are paid directly from your account, we only
              charge our service fee at visa filing.
            </span>
            <span className="text-[#BFB0A1]">•</span>
            <span className="font-bold text-base sm:text-xl md:text-2xl">
              Unbiased Choices
            </span>
            <span className="text-[#BFB0A1]">•</span>
            <span className="font-normal text-sm sm:text-base md:text-lg">
              800+ universities across 30+ countries — no tied agendas, just the
              best fit for you.
            </span>
            <span className="text-[#BFB0A1]">•</span>
          </div>
        )}
      </div>

      {/* FAQ Content */}
      <div className="py-8 sm:py-12 md:py-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[#BFB0A1] opacity-10"></div>
        </div>

        <div className="container px-3 sm:px-4 mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 text-[#060606] leading-tight px-3 sm:px-0 font-gabarito">
              {title.split(" ").map((word, index) =>
                word === "Questions" ? (
                  <span key={index} className="text-[#42362A]">
                    {" "}
                    {word}
                  </span>
                ) : (
                  <span key={index}>{index === 0 ? word : ` ${word}`}</span>
                )
              )}
            </h2>
            <p className="text-lg sm:text-xl text-[#645C54] max-w-3xl mx-auto leading-relaxed font-gabarito-regular">
              {getDescription()}
            </p>
          </div>

          {/* Tab Navigation - Only show if not education loan only */}
          {shouldShowTabs && (
            <div className="mb-6 md:mb-12">
              {/* Desktop: 2 rows of 3 tabs each */}
              <div className="hidden md:block">
                <div className="flex justify-center gap-4 mb-6">
                  {Object.keys(FAQ_CATEGORIES)
                    .slice(0, 3)
                    .map((category) => (
                      <button
                        key={category}
                        onClick={() => handleTabClick(category)}
                        className={`px-6 py-3 rounded-sm text-base font-semibold transition-all duration-300 backdrop-blur-sm font-gabarito cursor-pointer ${
                          activeTab === category
                            ? "bg-[#42362A] text-white transform scale-105 ring-2 ring-[#42362A]/20"
                            : "bg-white/80 text-[#060606] hover:bg-white hover:scale-105 border border-[#BFB0A1]/50"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                </div>
                <div className="flex justify-center gap-4">
                  {Object.keys(FAQ_CATEGORIES)
                    .slice(3, 6)
                    .map((category) => (
                      <button
                        key={category}
                        onClick={() => handleTabClick(category)}
                        className={`px-6 py-3 rounded-sm text-base font-semibold transition-all duration-300 backdrop-blur-sm font-gabarito cursor-pointer ${
                          activeTab === category
                            ? "bg-[#42362A] text-white transform scale-105 ring-2 ring-[#42362A]/20"
                            : "bg-white/80 text-[#060606] hover:bg-white hover:scale-105 border border-[#BFB0A1]/50"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                </div>
              </div>

              {/* Mobile: Scrollable single row */}
              <div className="md:hidden">
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide px-4">
                  {Object.keys(FAQ_CATEGORIES).map((category) => (
                    <button
                      key={category}
                      onClick={() => handleTabClick(category)}
                      className={`px-5 py-2.5 rounded-sm text-base font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 backdrop-blur-sm font-gabarito cursor-pointer ${
                        activeTab === category
                          ? "bg-[#42362A] text-white ring-2 ring-[#42362A]/20"
                          : "bg-white/80 text-[#060606] hover:bg-white border border-[#BFB0A1]/50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_CATEGORIES[activeTab as keyof typeof FAQ_CATEGORIES]?.map(
                (question, index) => {
                  const iconName = getQuestionIcon(
                    question.question,
                    activeTab
                  );
                  const IconComponent =
                    iconName === "book-open" ? BookOpenIcon : HelpCircleIcon;
                  return (
                    <AccordionItem
                      key={index}
                      value={question.question}
                      className="border border-[#BFB0A1]/30 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 text-left hover:no-underline group cursor-pointer">
                        <div className="flex items-start gap-3 sm:gap-4 w-full">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-[#42362A] flex-shrink-0 mt-0.5" />
                          <span className="text-base sm:text-lg font-bold text-[#060606] leading-relaxed flex-1 text-left">
                            {question.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5">
                        <div className="text-[#645C54] leading-relaxed text-sm sm:text-base font-gabarito-regular">
                          {question.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
});

FAQSection.displayName = "FAQSection";
export default FAQSection;
