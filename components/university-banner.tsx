"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { UNIVERSITY_LOGOS } from "@/lib/constants";
import { memo, useMemo } from "react";

interface UniversityBannerProps {
  className?: string;
}

export const UniversityBanner = memo(function UniversityBanner({
  className = "",
}: UniversityBannerProps) {
  const { firstHalfLogos, secondHalfLogos } = useMemo(
    () => ({
      firstHalfLogos: UNIVERSITY_LOGOS.slice(0, 10),
      secondHalfLogos: UNIVERSITY_LOGOS.slice(10),
    }),
    []
  );

  return (
    <div className={`w-full ${className}`}>
      {/* First Banner */}
      <InfiniteSlider
        gap={32}
        duration={30}
        className="w-full py-4 sm:py-3 bg-white/50 backdrop-blur-sm"
      >
        {firstHalfLogos.map((logo, index) => (
          <div
            key={index}
            className="h-14 w-auto flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-lg p-2"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={120}
              className="h-12 w-auto object-contain hover:opacity-80 transition-all duration-300"
              style={{ backgroundColor: "white" }}
              quality={95}
              priority={index < 4}
            />
          </div>
        ))}
      </InfiniteSlider>

      {/* Second Banner */}
      <InfiniteSlider
        gap={32}
        duration={30}
        reverse
        className="w-full py-4 sm:py-3 bg-white/30 backdrop-blur-sm"
      >
        {secondHalfLogos.map((logo, index) => (
          <div
            key={index}
            className="h-14 w-auto flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-lg p-2"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={120}
              className="h-12 w-auto object-contain hover:opacity-80 transition-all duration-300"
              style={{ backgroundColor: "white" }}
              quality={95}
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
});
