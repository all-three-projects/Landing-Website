import { Suspense, lazy, memo } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { PAGE_CONTENT } from "@/lib/constants";

// Load critical sections immediately (above and near above-the-fold)
import ServicesFlow from "@/components/services-flow";

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

export default function VASServicesPage() {
  return (
    <>
      {/* Critical content - load immediately */}
      <ErrorBoundary>
        <Suspense fallback={<HeroFallback />}>
          <HeroSection
            title={PAGE_CONTENT.vasServices.title}
            titleHighlight={PAGE_CONTENT.vasServices.titleHighlight}
            subtitle={PAGE_CONTENT.vasServices.subtitle}
            features={PAGE_CONTENT.vasServices.features}
            ctaText={PAGE_CONTENT.vasServices.ctaText}
            ctaVariant="primary"
            microcopy={PAGE_CONTENT.vasServices.microcopy}
          />
        </Suspense>
      </ErrorBoundary>

      {/* University Banner - positioned after Hero Section */}
      <Suspense fallback={<BannerFallback />}>
        <UniversityBanner className="-mt-6 sm:-mt-2 mb-1 sm:mb-2 md:mb-4" />
      </Suspense>

      {/* Near above-the-fold - load immediately for better UX */}
      <ErrorBoundary>
        <ServicesFlow />
      </ErrorBoundary>
    </>
  );
}
