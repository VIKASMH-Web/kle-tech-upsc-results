"use client";

import React from "react";
import { AshokaChakraEmblem } from "./AshokaChakraEmblem";
import { ArrowRight, Compass, BookOpen, Users, Award, ShieldCheck, MapPin } from "lucide-react";

interface HeroProps {
  onOpenJoinModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050b1d]"
    >
      {/* Background Motifs: Subtle Geographic Grid & India Map Geometry */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-navy pointer-events-none" />

      {/* Ashoka Chakra Centerpiece Backdrop (Subtle, Slow Rotation, Non-distracting) */}
      <div className="absolute right-[-10%] top-[15%] sm:right-[5%] sm:top-[20%] opacity-[0.06] pointer-events-none select-none">
        <AshokaChakraEmblem size={680} color="#eab308" spokeOpacity={0.8} />
      </div>

      {/* Lat/Long Coordinate Accent Lines (Hubballi, Karnataka) */}
      <div className="absolute top-24 left-8 hidden lg:flex items-center gap-3 text-[10px] font-mono tracking-widest text-slate-500 uppercase select-none">
        <MapPin className="w-3.5 h-3.5 text-amber-500/70" />
        <span>KLE TECH CAMPUS • 15.3647° N, 75.1240° E</span>
        <span className="w-12 h-[1px] bg-slate-700/60" />
        <span className="text-amber-500/80">HUBBALLI, INDIA</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow / Institutional Category */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d1c44]/80 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>KLE TECHNOLOGICAL UNIVERSITY</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">UPSC ASPIRANTS CLUB</span>
          </div>

          {/* Main Headline — Bold Editorial Typography */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.08] mb-6">
            FROM CAMPUS <br />
            <span className="gold-gradient-text">TO CIVIL SERVICES.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-2xl text-slate-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed mb-6 italic">
            “Building awareness, strengthening preparation, connecting aspirants,
            and nurturing the spirit of public service.”
          </p>

          {/* Additional Institutional Description */}
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            The KLE Tech UPSC Aspirants Club provides students with a platform
            to explore the Civil Services, engage with experienced mentors,
            develop competitive-examination skills, and grow through meaningful
            intellectual and collaborative experiences.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onOpenJoinModal}
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(217,119,6,0.4)] hover:shadow-[0_0_35px_rgba(217,119,6,0.65)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
            >
              <span>JOIN THE CLUB</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#journey"
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#091535]/80 hover:bg-[#0f2252] border border-amber-500/25 hover:border-amber-400/50 text-slate-200 font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <span>EXPLORE OUR JOURNEY</span>
            </a>
          </div>

          {/* Quick Institutional Anchor Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-left">
            <div className="p-3 rounded-lg bg-[#081432]/60 border border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80 mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>ORIENTATION</span>
              </div>
              <div className="text-xs font-semibold text-slate-200">The First Glimpse</div>
            </div>

            <div className="p-3 rounded-lg bg-[#081432]/60 border border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80 mb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>KNOWLEDGE QUIZ</span>
              </div>
              <div className="text-xs font-semibold text-slate-200">Quizkaar 2025</div>
            </div>

            <div className="p-3 rounded-lg bg-[#081432]/60 border border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>DEBATE & DISCOURSE</span>
              </div>
              <div className="text-xs font-semibold text-slate-200">Manthan 2.0</div>
            </div>

            <div className="p-3 rounded-lg bg-[#081432]/60 border border-white/5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80 mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>ANNUAL CONCLAVE</span>
              </div>
              <div className="text-xs font-semibold text-slate-200">Pragya 5.0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subdued Bottom Edge Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#050b1d] to-transparent pointer-events-none" />
    </section>
  );
};
