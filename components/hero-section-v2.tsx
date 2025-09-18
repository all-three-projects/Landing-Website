"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WorldMap } from "@/components/ui/world-map";
import { WORLD_MAP_DOTS, EXTERNAL_LINKS } from "@/lib/constants";
import { FeatureItem } from "@/components/ui/reusable-components";
import { memo, useCallback } from "react";

interface HeroSectionProps {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  features: readonly string[];
  ctaText: string;
  ctaVariant?: "primary" | "secondary";
  showSecondaryCta?: boolean;
  secondaryCtaText?: string;
  microcopy?: string;
  compactCard?: boolean;
}

export const HeroSection = memo(function HeroSection({
  title,
  titleHighlight,
  subtitle,
  features,
  ctaText,
  ctaVariant = "primary",
  showSecondaryCta = false,
  secondaryCtaText,
  microcopy,
  compactCard = false,
}: HeroSectionProps) {
  const handlePrimaryCTA = useCallback(() => {
    window.open(EXTERNAL_LINKS.CTA_PRIMARY, "_blank", "noopener,noreferrer");
  }, []);

  const handleSecondaryCTA = useCallback(() => {
    window.open(EXTERNAL_LINKS.CTA_SECONDARY, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden py-12 sm:py-4 lg:py-16 -mb-4 sm:mb-0"
        aria-labelledby="hero-title"
      >
        {/* World Map Background */}
        <div
          className="absolute inset-0 z-0 opacity-50 sm:opacity-40 h-full w-full"
          aria-hidden="true"
        >
          <WorldMap
            dots={
              WORLD_MAP_DOTS as unknown as Array<{
                start: { lat: number; lng: number; label?: string };
                end: { lat: number; lng: number; label?: string };
              }>
            }
            lineColor="rgba(42, 93, 159, 0.3)"
          />
        </div>

        <div className="container px-4 sm:px-4 mx-auto relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto w-full px-2 sm:px-0 pb-8 sm:pb-0">
            <h1
              id="hero-title"
              className="text-5xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-4 sm:mb-4 leading-tight font-gabarito"
            >
              {title}{" "}
              {titleHighlight && (
                <span className="text-[#42362A]">{titleHighlight}</span>
              )}
            </h1>

            <p className="text-base sm:text-base md:text-lg lg:text-xl text-[#060606] mb-6 sm:mb-6 max-w-3xl mx-auto font-medium px-2 sm:px-0 font-gabarito-regular">
              {subtitle}
            </p>

            {/* Feature highlights */}
            <Card
              className={`${
                compactCard ? "max-w-xs sm:max-w-sm" : "max-w-sm sm:max-w-xl"
              } mx-auto mb-4 sm:mb-6 p-3 sm:p-6 bg-card/50 backdrop-blur`}
            >
              <div
                className="space-y-2 sm:space-y-4"
                role="list"
                aria-label="Key features"
              >
                {features.map((feature, index) => (
                  <FeatureItem key={index} feature={feature} />
                ))}
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center items-center px-4 sm:px-0 mt-6 sm:mt-12">
              <Button
                size="lg"
                className={`text-sm sm:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-4 w-full sm:w-auto font-gabarito-medium ${
                  ctaVariant === "primary"
                    ? "bg-[#1F6F5C] hover:bg-[#28997B] text-white"
                    : "bg-transparent border-[#42362A] text-[#42362A] hover:bg-[#42362A] hover:text-white"
                }`}
                onClick={handlePrimaryCTA}
              >
                {ctaText}
              </Button>

              {showSecondaryCta && secondaryCtaText && (
                <Button
                  variant="outline"
                  size="lg"
                  className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-4 bg-transparent border-[#42362A] text-[#42362A] hover:bg-[#42362A] hover:text-white w-full sm:w-auto font-gabarito-medium"
                  onClick={handleSecondaryCTA}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>

            {/* Microcopy */}
            {microcopy && (
              <p className="text-sm text-[#8C8C8C] max-w-2xl mx-auto mt-4 px-4 sm:px-0 font-gabarito-regular">
                {microcopy}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
});
