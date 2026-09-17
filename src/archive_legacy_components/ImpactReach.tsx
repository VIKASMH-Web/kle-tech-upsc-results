"use client";

import React, { useState } from "react";
import { useClubContent } from "@/data/contentStore";
import { GROWTH_METRICS } from "@/data/stats";
import {
  TrendingUp,
  Users,
  CalendarCheck,
  Award,
  Sparkles,
  BarChart3,
  Edit3,
} from "lucide-react";

interface ImpactReachProps {
  onOpenAdminModal?: () => void;
}

export const ImpactReach: React.FC<ImpactReachProps> = ({ onOpenAdminModal }) => {
  const { stats } = useClubContent();
  const [showChart, setShowChart] = useState(true);

  const statItems = [
    {
      count: stats.sessionsCount,
      label: stats.sessionsLabel,
      icon: CalendarCheck,
      caption: "Interactive orientations, debriefs & study sessions",
    },
    {
      count: stats.participationsCount,
      label: stats.participationsLabel,
      icon: Users,
      caption: "Undergraduates across engineering disciplines",
    },
    {
      count: stats.mentorsCount,
      label: stats.mentorsLabel,
      icon: Award,
      caption: "Civil servants, faculty mentors & alumni guides",
    },
    {
      count: stats.activitiesCount,
      label: stats.activitiesLabel,
      icon: Sparkles,
      caption: "Quizzes, debates, ciphers & mapping challenges",
    },
  ];

  return (
    <section className="py-24 bg-[#060e24] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              CAMPUS ENGAGEMENT METRICS
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              OUR REACH. OUR IMPACT.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">
              AUDITED: {stats.lastUpdated}
            </span>
            {onOpenAdminModal && (
              <button
                onClick={onOpenAdminModal}
                className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-amber-400 transition-colors"
                title="Update Statistics"
              >
                <Edit3 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Large Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="institutional-card p-8 flex flex-col justify-between group hover:border-amber-500/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-slate-500">
                      METRIC 0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#0e214d] border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-2 group-hover:text-amber-300 transition-colors">
                    {item.count}
                  </div>

                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400/90 mb-3">
                    {item.label}
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-light leading-relaxed pt-4 border-t border-white/5">
                  {item.caption}
                </p>
              </div>
            );
          })}
        </div>

        {/* Polished Growth Progression Bar Chart */}
        <div className="p-8 rounded-2xl bg-[#081538] border border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>YEAR-ON-YEAR PROGRESSION AT KLE TECH</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Student Participation Trajectory
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Campus Footprint Growth (2022–2025)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {GROWTH_METRICS.map((g) => {
              const maxParticipation = 700;
              const percentage = Math.round((g.participations / maxParticipation) * 100);
              return (
                <div
                  key={g.academicYear}
                  className="p-5 rounded-xl bg-[#050b1d] border border-white/5 hover:border-amber-500/30 transition-all"
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="font-bold text-amber-400 text-sm">
                      {g.academicYear}
                    </span>
                    <span className="text-slate-400">{g.sessions} Sessions Held</span>
                  </div>

                  <div className="text-2xl font-bold font-display text-white mb-2">
                    {g.participations}+
                    <span className="text-xs font-normal text-slate-400 ml-1.5">
                      Participants
                    </span>
                  </div>

                  {/* Growth Bar */}
                  <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 via-amber-500 to-amber-400 rounded-full transition-all duration-1000"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 flex justify-between">
                    <span>Diagnostic Tests: {g.mockTests}</span>
                    <span className="text-amber-400 font-semibold">{percentage}% Scale</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
