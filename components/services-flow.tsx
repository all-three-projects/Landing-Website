"use client";

import type React from "react";
import { SERVICES_DATA } from "@/lib/services-data";
import { ServiceCard } from "@/components/ui/reusable-components";
import { memo, useMemo, useState } from "react";

// Simple SVG icons to avoid hydration issues
const GraduationCapIcon = ({ className }: { className?: string }) => (
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
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

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

const DollarSignIcon = ({ className }: { className?: string }) => (
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
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const FileTextIcon = ({ className }: { className?: string }) => (
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const FileCheckIcon = ({ className }: { className?: string }) => (
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <path d="M9 15l2 2 4-4" />
  </svg>
);

const HomeIcon = ({ className }: { className?: string }) => (
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
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

const CreditCardIcon = ({ className }: { className?: string }) => (
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
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const SmartphoneIcon = ({ className }: { className?: string }) => (
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
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const PlaneIcon = ({ className }: { className?: string }) => (
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
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2-3v-3l2.5 2.5.5.3c.5.2 1 .1 1.3-.3l.5-.3c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ScaleIcon = ({ className }: { className?: string }) => (
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
    <path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z" />
    <path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
);

// Icon mapping for services
const ICON_MAP = {
  GraduationCap: GraduationCapIcon,
  BookOpen: BookOpenIcon,
  DollarSign: DollarSignIcon,
  FileText: FileTextIcon,
  Shield: ShieldIcon,
  FileCheck: FileCheckIcon,
  Home: HomeIcon,
  CreditCard: CreditCardIcon,
  Smartphone: SmartphoneIcon,
  Plane: PlaneIcon,
  Users: UsersIcon,
  Scale: ScaleIcon,
} as const;

export default memo(function ServicesFlow() {
  const [activeTab, setActiveTab] = useState("study-prep");

  // Categorize services by journey stage - 3 tabs with 4 cards each
  const serviceCategories = useMemo(
    () => ({
      "study-prep": [
        SERVICES_DATA[1], // E-Learning Prep
        SERVICES_DATA[3], // SOP Guidance
        SERVICES_DATA[2], // Education Loans
        SERVICES_DATA[4], // Student Insurance
      ],
      applications: [
        SERVICES_DATA[0], // Admissions Support
        SERVICES_DATA[5], // Visa Filing
        SERVICES_DATA[6], // Student Housing
        SERVICES_DATA[10], // Family Visa
      ],
      "living-abroad": [
        SERVICES_DATA[7], // Forex & GIC
        SERVICES_DATA[8], // Prepaid SIMs
        SERVICES_DATA[9], // Air Ticketing
        SERVICES_DATA[11], // Extended Legal Support
      ],
    }),
    []
  );

  return (
    <section
      id="services"
      className="relative py-8 sm:py-12 md:py-16 bg-[#BFB0A1]/20"
      aria-labelledby="services-title"
    >
      <div className="container px-3 sm:px-4 mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="services-title"
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 text-[#060606] px-3 sm:px-4 leading-tight tracking-tight font-gabarito"
          >
            <div className="mb-2 sm:mb-3">
              We handle all the <span className="text-[#42362A]">details</span>
            </div>
            <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              you focus on the <span className="text-[#42362A]">dream</span>
            </div>
          </h2>
        </div>

        {/* Tabbed Services Interface */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {[
              { id: "study-prep", label: "Study Preparation" },
              { id: "applications", label: "Applications" },
              { id: "living-abroad", label: "Living Abroad" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-gabarito font-semibold text-sm sm:text-base transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#42362A] text-white shadow-lg"
                    : "bg-white text-[#060606] hover:bg-[#060606] hover:text-white border border-[#BFB0A1]/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Services Grid for Active Tab - 2x2 layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviceCategories[activeTab as keyof typeof serviceCategories].map(
              (service, index) => {
                const IconComponent =
                  ICON_MAP[service.icon as keyof typeof ICON_MAP];
                return (
                  <ServiceCard
                    key={`${activeTab}-service-${index}`}
                    icon={
                      <IconComponent
                        className="size-4 sm:size-5"
                        aria-hidden="true"
                      />
                    }
                    title={service.title}
                    description={service.description}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
