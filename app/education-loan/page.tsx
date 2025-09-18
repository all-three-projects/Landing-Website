import { Suspense, lazy, memo } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { SectionLoader } from "@/components/ui/loading-spinner";
import { PAGE_CONTENT } from "@/lib/constants";

// Lazy load page-specific components with dynamic imports
const HeroSection = lazy(() =>
  import("@/components/hero-section-v2").then((mod) => ({
    default: mod.HeroSection,
  }))
);
const UniversityBanner = lazy(() =>
  import("@/components/university-banner").then((mod) => ({
    default: mod.UniversityBanner,
  }))
);
const FAQSection = lazy(() => import("@/components/faq-section-unified"));

// Memoized fallback components for better performance
const HeroFallback = memo(() => (
  <div className="h-96 bg-gradient-to-r from-[#F9F9F8] to-[#BFB0A1]/30 animate-pulse" />
));

const BannerFallback = memo(() => (
  <div className="h-20 bg-gradient-to-r from-[#F9F9F8] to-[#BFB0A1]/30 animate-pulse" />
));

HeroFallback.displayName = "HeroFallback";
BannerFallback.displayName = "BannerFallback";

export default function EducationLoanPage() {
  return (
    <>
      {/* Critical content - load immediately */}
      <ErrorBoundary>
        <Suspense fallback={<HeroFallback />}>
          <HeroSection
            title={PAGE_CONTENT.educationLoan.title}
            titleHighlight={PAGE_CONTENT.educationLoan.titleHighlight}
            subtitle={PAGE_CONTENT.educationLoan.subtitle}
            features={PAGE_CONTENT.educationLoan.features}
            ctaText={PAGE_CONTENT.educationLoan.ctaText}
            ctaVariant="primary"
            compactCard={true}
          />
        </Suspense>
      </ErrorBoundary>

      {/* University Banner - positioned after Hero Section */}
      <Suspense fallback={<BannerFallback />}>
        <UniversityBanner className="-mt-6 sm:-mt-2 mb-1 sm:mb-2 md:mb-4" />
      </Suspense>

      {/* Below-the-fold content - lazy load only the heaviest */}
      <Suspense fallback={<SectionLoader />}>
        <FAQSection defaultCategory="Edu Loan" showTabs={false} />
      </Suspense>
    </>
  );
}
