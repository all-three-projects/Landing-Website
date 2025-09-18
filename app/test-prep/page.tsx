import { Suspense, lazy, memo } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { PAGE_CONTENT } from "@/lib/constants";

// Lazy load only the heaviest components with dynamic imports
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

// Memoized fallback components for better performance
const HeroFallback = memo(() => (
  <div className="h-96 bg-gradient-to-r from-[#F9F9F8] to-[#BFB0A1]/30 animate-pulse" />
));

const BannerFallback = memo(() => (
  <div className="h-20 bg-gradient-to-r from-[#F9F9F8] to-[#BFB0A1]/30 animate-pulse" />
));

HeroFallback.displayName = "HeroFallback";
BannerFallback.displayName = "BannerFallback";

export default function TestPrepPage() {
  return (
    <>
      {/* Critical content - load immediately */}
      <ErrorBoundary>
        <Suspense fallback={<HeroFallback />}>
          <HeroSection
            title={PAGE_CONTENT.testPrep.title}
            titleHighlight={PAGE_CONTENT.testPrep.titleHighlight}
            subtitle={PAGE_CONTENT.testPrep.subtitle}
            features={PAGE_CONTENT.testPrep.features}
            ctaText={PAGE_CONTENT.testPrep.ctaText}
            ctaVariant="primary"
            microcopy={PAGE_CONTENT.testPrep.microcopy}
          />
        </Suspense>
      </ErrorBoundary>

      {/* University Banner - positioned after Hero Section */}
      <Suspense fallback={<BannerFallback />}>
        <UniversityBanner className="-mt-6 sm:-mt-2 mb-1 sm:mb-2 md:mb-4" />
      </Suspense>
    </>
  );
}
