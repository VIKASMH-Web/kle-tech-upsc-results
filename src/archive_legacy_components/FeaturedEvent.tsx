"use client";

import React from "react";
import { useClubContent } from "@/data/contentStore";
import {
  Calendar,
  MapPin,
  UserCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BellRing,
} from "lucide-react";

interface FeaturedEventProps {
  onOpenJoinModal: () => void;
}

export const FeaturedEvent: React.FC<FeaturedEventProps> = ({ onOpenJoinModal }) => {
  const { featuredEvent } = useClubContent();

  return (
    <section id="events" className="py-24 bg-[#050b1d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
            <BellRing className="w-3.5 h-3.5" />
            <span>CAMPUS CALENDAR</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            FEATURED EVENT
          </h2>
        </div>

        {/* Visually Dominant Featured Event Card */}
        {featuredEvent ? (
          <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#0d1d44] via-[#08132e] to-[#050b1d] border-2 border-amber-500/40 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Event Badge & Category */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 font-mono text-xs font-extrabold uppercase tracking-wider shadow">
                  {featuredEvent.badgeText || "FEATURED INTERACTION"}
                </span>
                <span className="text-xs font-mono text-slate-400 tracking-wider">
                  CATEGORY: {featuredEvent.category}
                </span>
              </div>

              {/* Event Title */}
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
                {featuredEvent.title}
              </h3>

              {/* Event Meta Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#050b1d]/80 border border-white/5 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      DATE & SCHEDULE
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      {featuredEvent.date}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#050b1d]/80 border border-white/5 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      VENUE
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5 line-clamp-1">
                      {featuredEvent.venue}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#050b1d]/80 border border-white/5 flex items-center gap-3">
                  <UserCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      SPEAKER / GUEST
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5 line-clamp-1">
                      {featuredEvent.speaker || "VERIFIED GUEST DIGNITARY"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Description */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light mb-8 max-w-3xl">
                {featuredEvent.description}
              </p>

              {/* Key Takeaways */}
              {featuredEvent.keyTakeaways && featuredEvent.keyTakeaways.length > 0 && (
                <div className="p-6 rounded-2xl bg-[#050b1d]/90 border border-white/10 mb-10">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>SESSION TAKEAWAYS FOR ASPIRANTS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuredEvent.keyTakeaways.map((takeaway, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={featuredEvent.registrationUrl || "#contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5"
                >
                  <span>REGISTER NOW</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <button
                  onClick={onOpenJoinModal}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#071330] hover:bg-[#0c1e4c] border border-white/10 text-slate-200 font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors"
                >
                  BECOME A VOLUNTEER ORGANIZER
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* When no event is available */
          <div className="max-w-2xl mx-auto p-12 rounded-3xl bg-[#081538] border border-white/10 text-center">
            <h3 className="font-display font-bold text-2xl text-slate-300 mb-3">
              UPCOMING EVENTS WILL APPEAR HERE.
            </h3>
            <p className="text-sm text-slate-400">
              The club is currently finalizing the upcoming semester schedule with the university
              administration. Check back shortly or join our WhatsApp community for instant announcements.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
