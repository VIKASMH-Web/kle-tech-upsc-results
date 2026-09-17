"use client";

import React from "react";
import { Sparkles, Shield, Compass, BookOpen } from "lucide-react";

export const Vision: React.FC = () => {
  return (
    <section className="py-24 bg-[#060e24] relative overflow-hidden border-b border-white/5">
      {/* Background Subtle Ashoka Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL PHILOSOPHY</span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-8">
            OUR VISION
          </h2>

          {/* Main Statement */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl text-slate-100 font-light leading-relaxed mb-8 italic border-l-2 sm:border-l-0 border-amber-500 pl-4 sm:pl-0">
            “To build a strong and informed community of future public-service leaders
            by creating awareness, providing meaningful mentorship, strengthening
            competitive-examination preparation, and nurturing leadership, integrity,
            analytical thinking, and a deep commitment to nation-building.”
          </blockquote>

          {/* Supporting Statement */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl mx-auto mb-16">
            “Our objective is not merely to prepare students for an examination, but to
            inspire them to understand the larger purpose of public administration and their
            potential role in shaping society.”
          </p>

          {/* Final Visual Progression Statement */}
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#0a183d] via-[#08132f] to-[#040a1c] border border-amber-500/30 shadow-2xl relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 px-4 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase shadow">
              THE ASCENT OF PURPOSE
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10 pt-4">
              <div className="pt-4 md:pt-0">
                <span className="text-[11px] font-mono text-amber-400/90 uppercase tracking-widest block mb-2">
                  STAGE I
                </span>
                <div className="font-display font-bold text-lg sm:text-xl text-white tracking-wide leading-snug">
                  FROM AWARENESS <br />
                  <span className="text-amber-300">TO ASPIRATION.</span>
                </div>
              </div>

              <div className="pt-4 md:pt-0 md:pl-6">
                <span className="text-[11px] font-mono text-amber-400/90 uppercase tracking-widest block mb-2">
                  STAGE II
                </span>
                <div className="font-display font-bold text-lg sm:text-xl text-white tracking-wide leading-snug">
                  FROM ASPIRATION <br />
                  <span className="text-amber-300">TO PREPARATION.</span>
                </div>
              </div>

              <div className="pt-4 md:pt-0 md:pl-6">
                <span className="text-[11px] font-mono text-amber-400/90 uppercase tracking-widest block mb-2">
                  STAGE III
                </span>
                <div className="font-display font-bold text-lg sm:text-xl text-white tracking-wide leading-snug">
                  FROM PREPARATION <br />
                  <span className="gold-gradient-text font-extrabold">TO PURPOSEFUL SERVICE.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
