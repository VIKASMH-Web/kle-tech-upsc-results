"use client";

import React, { useState } from "react";
import { INITIAL_TEAM_DATA, TeamMember, TeamSectionType } from "@/data/team";
import { UserCheck, Shield, GraduationCap, Users, Mail, Sparkles } from "lucide-react";

interface TeamSectionProps {
  onOpenAdminModal?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenAdminModal }) => {
  const sections: TeamSectionType[] = [
    "FACULTY / UNIVERSITY GUIDANCE",
    "CLUB LEADERSHIP",
    "CORE TEAM",
    "STUDENT VOLUNTEERS",
  ];

  return (
    <section id="team" className="py-24 bg-[#050b1d] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5" />
            <span>ORGANIZATIONAL GOVERNANCE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            THE PEOPLE BEHIND THE PLATFORM
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            A committed alliance of university mentors, student leaders, and undergraduate coordinators
            nurturing public administration aspiration across KLE Technological University.
          </p>
        </div>

        {/* Sections Iteration */}
        <div className="space-y-16">
          {sections.map((secName) => {
            const members = INITIAL_TEAM_DATA.filter((m) => m.section === secName);
            if (members.length === 0) return null;

            return (
              <div key={secName} className="space-y-6">
                <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <h3 className="font-mono text-xs sm:text-sm font-bold tracking-widest text-amber-300 uppercase">
                    {secName}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="institutional-card p-6 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Avatar & Role Header */}
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-[#0e214d] to-[#071330] border border-amber-500/30 flex items-center justify-center text-amber-300 font-mono font-bold text-xs shadow group-hover:scale-105 transition-transform">
                            <UserCheck className="w-6 h-6 text-amber-400" />
                          </div>

                          <div>
                            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block font-semibold">
                              {member.role}
                            </span>
                            <h4 className="font-display font-bold text-base text-white tracking-wide group-hover:text-amber-300 transition-colors">
                              {member.name}
                            </h4>
                            <span className="text-[11px] text-slate-400 font-sans">
                              {member.designation}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                          {member.description}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>{member.department}</span>
                        {member.isPlaceholder && (
                          <span className="text-amber-500/80">OFFICIAL DESK</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Admin Governance Notice */}
        <div className="mt-16 p-6 rounded-2xl bg-[#081538] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
              INSTITUTIONAL APPOINTMENTS & ELECTIONS
            </div>
            <p className="text-xs text-slate-400">
              Club leadership roles are appointed annually under faculty mentorship. New core positions
              and volunteer teams are onboarded at the start of each academic year.
            </p>
          </div>

          {onOpenAdminModal && (
            <button
              onClick={onOpenAdminModal}
              className="px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold transition-colors whitespace-nowrap"
            >
              MANAGE TEAM LISTINGS
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
