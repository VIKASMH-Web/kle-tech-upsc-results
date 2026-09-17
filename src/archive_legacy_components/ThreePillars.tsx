"use client";

import React from "react";
import { THREE_KEY_PILLARS } from "@/data/clubData";
import { Compass, BookOpenCheck, Award, CheckCircle2, ArrowUpRight } from "lucide-react";

export const ThreePillars: React.FC = () => {
  const pillarIcons = [Compass, BookOpenCheck, Award];

  return (
    <section id="pillars" className="py-24 bg-[#050b1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            FOUNDATIONAL ARCHITECTURE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-5">
            THREE KEY PILLARS
          </h2>
          <p className="text-base text-slate-400 font-normal leading-relaxed">
            The fundamental institutional tenets anchoring our student-driven initiatives
            at KLE Technological University.
          </p>
        </div>

        {/* Exactly Three Architectural Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {THREE_KEY_PILLARS.map((pillar, index) => {
            const Icon = pillarIcons[index] || Compass;
            return (
              <div
                key={pillar.number}
                className="group relative rounded-2xl p-8 bg-gradient-to-b from-[#0a183d] to-[#06102a] border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent group-hover:via-amber-400 transition-all" />

                <div>
                  {/* Pillar Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono font-bold text-2xl text-amber-400/90 tracking-widest">
                      PILLAR {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#0f245c] border border-amber-500/30 flex items-center justify-center text-amber-300 shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-2xl text-white tracking-wide mb-2">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-mono tracking-wider font-semibold text-amber-300/90 uppercase mb-5 leading-snug">
                    {pillar.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                    “{pillar.description}”
                  </p>

                  {/* Focus Areas List */}
                  <div className="pt-5 border-t border-white/10">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                      KEY FOCUS DOMAINS
                    </div>
                    <ul className="space-y-2.5">
                      {pillar.focusAreas.map((area) => (
                        <li
                          key={area}
                          className="flex items-start gap-2.5 text-xs text-slate-300 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Signature Tag */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>KLE TECH CIVIL SERVICES</span>
                  <span className="text-amber-400/80 font-semibold">TENET {pillar.number}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominently Displayed Signature Triad */}
        <div className="text-center py-8 border-y border-amber-500/20 bg-gradient-to-r from-transparent via-[#091538]/60 to-transparent">
          <p className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-widest gold-gradient-text uppercase">
            DISCOVER. PREPARE. LEARN.
          </p>
          <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-widest mt-2 uppercase">
            KLE TECHNOLOGICAL UNIVERSITY • HUBBALLI
          </p>
        </div>
      </div>
    </section>
  );
};
