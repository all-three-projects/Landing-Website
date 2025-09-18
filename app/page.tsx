"use client";

import { Suspense, lazy, memo } from "react";
import { ErrorBoundary } from "@/components/ui/error-boundary";
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
const ServicesFlow = lazy(() => import("@/components/services-flow"));
const FAQSection = lazy(() => import("@/components/faq-section-unified"));

// Memoized fallback components for better performance
const HeroFallback = memo(() => (
  <div className="h-96 bg-gradient-to-r from-[#F9F9F8] to-[#BFB0A1]/30 animate-pulse" />
));

const BannerFallback = memo(() => (
  <div className="h-20 bg-gradient-to-r from-[#F9F9F8] to-[#BFB0A1]/30 animate-pulse" />
));

const ServicesFallback = memo(() => (
  <div className="h-64 bg-gradient-to-r from-[#F9F9F8] to-[#BFB0A1]/20 animate-pulse" />
));

const FAQFallback = memo(() => (
  <div className="h-96 bg-gradient-to-r from-[#F9F9F8] to-[#BFB0A1]/10 animate-pulse" />
));

HeroFallback.displayName = "HeroFallback";
BannerFallback.displayName = "BannerFallback";
ServicesFallback.displayName = "ServicesFallback";
FAQFallback.displayName = "FAQFallback";

export default function HomePage() {
  return (
    <>
      {/* Critical above-the-fold content */}
      <ErrorBoundary>
        <Suspense fallback={<HeroFallback />}>
          <HeroSection
            title={PAGE_CONTENT.home.title}
            titleHighlight={PAGE_CONTENT.home.titleHighlight}
            subtitle={PAGE_CONTENT.home.subtitle}
            features={PAGE_CONTENT.home.features}
            ctaText={PAGE_CONTENT.home.ctaText}
            ctaVariant="primary"
            showSecondaryCta={true}
            secondaryCtaText={PAGE_CONTENT.home.secondaryCtaText}
          />
        </Suspense>
      </ErrorBoundary>

      {/* University Banner - positioned after Hero Section */}
      <Suspense fallback={<BannerFallback />}>
        <UniversityBanner className="-mt-6 sm:-mt-2 mb-1 sm:mb-2 md:mb-4" />
      </Suspense>

      {/* Services Section - important for conversion */}
      <Suspense fallback={<ServicesFallback />}>
        <ServicesFlow />
      </Suspense>

      {/* Below-the-fold content */}
      <Suspense fallback={<FAQFallback />}>
        <FAQSection />
      </Suspense>
    </>
  );
}
