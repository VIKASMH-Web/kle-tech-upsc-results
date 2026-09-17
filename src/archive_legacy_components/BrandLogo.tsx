"use client";

import React from "react";
import { AshokaChakraEmblem } from "./AshokaChakraEmblem";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  withUniversityName?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  withUniversityName = true,
  className = "",
}) => {
  const emblemSizes = {
    sm: 34,
    md: 46,
    lg: 60,
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Institutional Crest Shield */}
      <div className="relative flex items-center justify-center">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-b from-[#0e214d] to-[#08122a] border border-amber-500/40 p-1 flex items-center justify-center shadow-[0_0_15px_rgba(200,150,62,0.2)]">
          <AshokaChakraEmblem size={emblemSizes[size]} color="#eab308" spokeOpacity={0.9} />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-blue-900 border border-blue-400/40 text-[9px] font-bold text-amber-300 px-1 py-0.2 rounded leading-tight shadow">
          KLE
        </div>
      </div>

      {/* Typography Hierarchy */}
      <div className="flex flex-col justify-center">
        {withUniversityName && (
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-amber-400/90 uppercase font-sans">
            KLE Technological University
          </span>
        )}
        <div className="flex items-center gap-1.5">
          <span className="font-display font-bold text-sm sm:text-base tracking-wide text-white drop-shadow-sm">
            UPSC ASPIRANTS CLUB
          </span>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        </div>
        <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider font-mono">
          HUBBALLI, KARNATAKA
        </span>
      </div>
    </div>
  );
};
