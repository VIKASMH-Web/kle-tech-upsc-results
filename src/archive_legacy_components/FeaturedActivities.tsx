"use client";

import React, { useState } from "react";
import { ACTIVITIES_DATA, Activity } from "@/data/activities";
import {
  Calendar,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle,
  X,
  Target,
  Brain,
  Compass,
} from "lucide-react";

export const FeaturedActivities: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const filters = [
    "ALL",
    "ORIENTATION",
    "INTERACTIVE LEARNING",
    "KNOWLEDGE QUIZ",
    "DEBATE & DISCUSSION",
    "COMPETITIVE KNOWLEDGE CHALLENGE",
    "CIVIL SERVICES INTERACTION",
  ];

  const filteredActivities =
    activeFilter === "ALL"
      ? ACTIVITIES_DATA
      : ACTIVITIES_DATA.filter((a) =>
          a.category.toUpperCase().includes(activeFilter.toUpperCase())
        );

  return (
    <section id="activities" className="py-24 bg-[#060e24] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              ACTIVE PEDAGOGY
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              FEATURED ACTIVITIES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light">
            Dynamic learning formats crafted to transition students from theoretical curiosity
            into structured competitive examination skills.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider whitespace-nowrap transition-all uppercase ${
                activeFilter === f
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                  : "bg-[#091535] text-slate-400 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {f === "COMPETITIVE KNOWLEDGE CHALLENGE"
                ? "CHALLENGE"
                : f === "CIVIL SERVICES INTERACTION"
                ? "INTERACTION"
                : f}
            </button>
          ))}
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              className="institutional-card p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header / Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${act.badgeColor}`}
                  >
                    {act.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {act.pillar}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-display font-bold text-xl text-white tracking-wide mb-2 group-hover:text-amber-300 transition-colors">
                  {act.title}
                </h3>

                {act.theme && (
                  <p className="text-xs text-amber-400/90 italic font-serif mb-3">
                    “{act.theme}”
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6 line-clamp-3">
                  {act.description}
                </p>

                {/* Skills / Focus Preview */}
                {act.skills && (
                  <div className="mb-4">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                      SKILLS CULTIVATED:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {act.skills.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5 font-mono"
                        >
                          {s}
                        </span>
                      ))}
                      {act.skills.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-500 font-mono">
                          +{act.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-amber-500/80" />
                  <span>{act.date}</span>
                </div>

                <button
                  onClick={() => setSelectedActivity(act)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 tracking-wider uppercase transition-colors"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Details Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#091535] border border-amber-500/40 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedActivity(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${selectedActivity.badgeColor}`}
              >
                {selectedActivity.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {selectedActivity.date}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide mb-2">
              {selectedActivity.title}
            </h3>

            {selectedActivity.theme && (
              <p className="text-sm text-amber-300 italic font-serif mb-4">
                “{selectedActivity.theme}”
              </p>
            )}

            <p className="text-sm text-slate-200 leading-relaxed mb-6 font-light">
              {selectedActivity.description}
            </p>

            {/* Rounds / Phases Breakdown */}
            {selectedActivity.rounds && (
              <div className="mb-6 p-5 rounded-xl bg-[#060d1f] border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>STRUCTURED ROUNDS</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedActivity.rounds.map((r, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="text-xs font-bold text-white mb-2 font-mono">
                        {r.title}
                      </div>
                      <ul className="space-y-1.5">
                        {r.details.map((d, di) => (
                          <li key={di} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="text-amber-400">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedActivity.phases && (
              <div className="mb-6 p-5 rounded-xl bg-[#060d1f] border border-white/10">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-amber-400" />
                  <span>COMPETITION PHASES</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedActivity.phases.map((p, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                      <div className="text-xs font-bold text-amber-300 mb-2 font-mono">
                        {p.name}
                      </div>
                      <ul className="space-y-1.5">
                        {p.items.map((item, itemI) => (
                          <li key={itemI} className="text-xs text-slate-300 flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills & Focus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {selectedActivity.focus && (
                <div className="p-4 rounded-xl bg-[#060d1f] border border-white/10">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
                    CORE FOCUS AREAS
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedActivity.focus.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <span className="text-amber-400">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedActivity.skills && (
                <div className="p-4 rounded-xl bg-[#060d1f] border border-white/10">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
                    COMPETITIVE EXAMINATION SKILLS
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedActivity.skills.map((s, si) => (
                      <span
                        key={si}
                        className="text-xs px-2.5 py-1 rounded bg-[#0e214d] text-slate-200 border border-amber-500/20 font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-4 border-t border-white/10">
              <span>VENUE: {selectedActivity.venue}</span>
              <button
                onClick={() => setSelectedActivity(null)}
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
