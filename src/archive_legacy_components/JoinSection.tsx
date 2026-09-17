"use client";

import React from "react";
import { useClubContent } from "@/data/contentStore";
import { AshokaChakraEmblem } from "./AshokaChakraEmblem";
import { ArrowRight, Users, Sparkles, BookOpen, Compass } from "lucide-react";

interface JoinSectionProps {
  onOpenJoinModal: (tab?: "member" | "volunteer") => void;
}

export const JoinSection: React.FC<JoinSectionProps> = ({ onOpenJoinModal }) => {
  const { identity } = useClubContent();

  return (
    <section className="py-24 bg-[#050b1d] relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-900/10 via-amber-500/10 to-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#0d1f4d] via-[#081538] to-[#040918] border-2 border-amber-500/40 p-8 sm:p-16 text-center shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle Ashoka watermark in background */}
          <div className="absolute -left-12 -top-12 opacity-[0.06] pointer-events-none">
            <AshokaChakraEmblem size={360} color="#eab308" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE INVITATION TO SERVE</span>
            </div>

            {/* Heading */}
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              YOUR UPSC JOURNEY <br />
              <span className="gold-gradient-text">CAN START HERE.</span>
            </h2>

            {/* Narrative */}
            <p className="text-base sm:text-xl text-slate-200 font-light leading-relaxed mb-10">
              “Whether you are exploring the Civil Services for the first time or already
              preparing, the UPSC Aspirants Club provides a platform to learn, connect,
              participate, and grow.”
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenJoinModal("member")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.65)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>JOIN THE CLUB</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenJoinModal("volunteer")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#09183d] hover:bg-[#0e255c] border border-amber-500/30 text-slate-200 font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <span>BECOME A VOLUNTEER</span>
                <Users className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Footnote */}
            <p className="text-[11px] font-mono text-slate-400 mt-8">
              Open to all enrolled undergraduate and postgraduate students of KLE Technological University.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
