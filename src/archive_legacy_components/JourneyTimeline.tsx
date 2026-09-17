"use client";

import React, { useState } from "react";
import { JOURNEY_TIMELINE, TimelineItem } from "@/data/journey";
import {
  Calendar,
  Compass,
  ArrowRight,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export const JourneyTimeline: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  return (
    <section id="journey" className="py-24 bg-[#050b1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            CHRONOLOGY OF EXCELLENCE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-5">
            FROM THE FIRST GLIMPSE TO GREATER IMPACT
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            “Over the years, the UPSC Club has evolved from creating awareness about
            Civil Services to developing an engaging ecosystem of learning, discussion,
            mentorship, and competitive-examination preparation.”
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="relative">
          {/* Vertical Central Connecting Spine (Desktop) */}
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-500/10 via-amber-500/40 to-amber-500/10" />

          <div className="space-y-12 sm:space-y-16">
            {JOURNEY_TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Left / Right Card */}
                  <div className="w-full md:w-1/2">
                    <div
                      className={`institutional-card p-6 sm:p-8 ${
                        isEven ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {/* Step Badge & Category */}
                      <div
                        className={`flex items-center gap-2 mb-3 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                          INITIATIVE 0{item.step}
                        </span>
                        <span className="text-xs font-mono text-slate-400 tracking-wider">
                          {item.category}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide mb-2">
                        {item.title}
                      </h3>

                      {/* Date Indicator */}
                      <div
                        className={`flex items-center gap-1.5 text-xs text-amber-400/90 font-mono mb-4 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.yearDate}</span>
                      </div>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-light">
                        {item.shortDescription}
                      </p>

                      {/* Action Button */}
                      <button
                        onClick={() => setSelectedItem(item)}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline tracking-wider uppercase transition-all ${
                          isEven ? "md:ml-auto" : ""
                        }`}
                      >
                        <span>VIEW DETAILS</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Central Node Dot */}
                  <div className="hidden md:flex relative z-10 w-12 h-12 rounded-full bg-[#081538] border-2 border-amber-500/80 items-center justify-center text-amber-300 font-mono font-bold text-xs shadow-[0_0_15px_rgba(245,158,11,0.3)] shrink-0">
                    0{item.step}
                  </div>

                  {/* Empty Spacer Column for Desktop alternating balance */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#091535] border border-amber-500/40 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                INITIATIVE 0{selectedItem.step} • {selectedItem.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {selectedItem.yearDate}
              </span>
            </div>

            {/* Modal Title */}
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide mb-4">
              {selectedItem.title}
            </h3>

            {/* Full Narrative */}
            <p className="text-sm text-slate-200 leading-relaxed mb-6 font-light">
              {selectedItem.fullDescription}
            </p>

            {/* Highlights List */}
            <div className="p-5 rounded-xl bg-[#060e24] border border-white/10 mb-6">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>KEY HIGHLIGHTS & OUTCOMES</span>
              </div>
              <ul className="space-y-2.5">
                {selectedItem.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Institutional Footnote */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-4 border-t border-white/10">
              <span>KLE TECH UPSC ASPIRANTS CLUB ARCHIVES</span>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-amber-400 hover:text-amber-300 font-bold"
              >
                CLOSE [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
