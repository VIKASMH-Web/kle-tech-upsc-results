"use client";

import React, { useState } from "react";
import { ServiceType, AlumniProfile } from "@/data/alumni";
import { useClubContent } from "@/data/contentStore";
import { AlumniModal } from "./AlumniModal";
import { AshokaChakraEmblem } from "./AshokaChakraEmblem";
import {
  Award,
  ArrowRight,
  GraduationCap,
  Shield,
  Briefcase,
  ExternalLink,
  PlusCircle,
} from "lucide-react";

interface AlumniSectionProps {
  onOpenAdminModal?: () => void;
}

export const AlumniSection: React.FC<AlumniSectionProps> = ({ onOpenAdminModal }) => {
  const { alumniList } = useClubContent();
  const [selectedService, setSelectedService] = useState<ServiceType>("ALL");
  const [activeProfile, setActiveProfile] = useState<AlumniProfile | null>(null);

  const filterTabs: ServiceType[] = [
    "ALL",
    "IAS",
    "IPS",
    "IFS",
    "IRS",
    "OTHER SERVICES",
  ];

  const filteredAlumni =
    selectedService === "ALL"
      ? alumniList
      : alumniList.filter((a) => a.service === selectedService);

  return (
    <section
      id="alumni"
      className="py-24 bg-[#050b1d] relative border-t border-b border-amber-500/20"
    >
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>FLAGSHIP ALUMNI DIRECTORY</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-3">
            OUR ALUMNI IN SERVICE
          </h2>

          <div className="text-sm sm:text-base font-mono font-semibold tracking-widest text-amber-400 uppercase mb-6">
            FROM KLE TECH TO PUBLIC SERVICE.
          </div>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            “Our alumni continue to carry the spirit of KLE Technological University
            into public service. Their journeys serve as an inspiration to students
            and demonstrate how aspirations nurtured on campus can translate into
            meaningful contributions to society and the nation.”
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedService(tab)}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                selectedService === tab
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "bg-[#091535] text-slate-400 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Alumni Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {filteredAlumni.map((profile) => (
            <div
              key={profile.id}
              className="group rounded-2xl p-7 bg-gradient-to-b from-[#091638] to-[#050e24] border border-amber-500/25 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Ashoka watermark in card corner */}
              <div className="absolute -right-6 -bottom-6 opacity-[0.05] pointer-events-none">
                <AshokaChakraEmblem size={140} color="#eab308" />
              </div>

              <div>
                {/* Top Badge & Service */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono font-extrabold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 tracking-wider uppercase">
                    {profile.service}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {profile.batch}
                  </span>
                </div>

                {/* Profile Photo / Institutional Insignia Frame */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-[#0d2252] to-[#071330] border-2 border-amber-500/30 flex items-center justify-center text-amber-300 mb-5 shadow-inner group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-10 h-10 text-amber-400" />
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-xl text-white tracking-wide mb-2 group-hover:text-amber-200 transition-colors">
                  {profile.name}
                </h3>

                {/* Designation / Service */}
                <div className="text-xs font-bold font-mono text-amber-400/90 uppercase tracking-wide mb-2">
                  {profile.designation}
                </div>

                {/* Alma Mater Branch */}
                <div className="text-[11px] text-slate-400 font-sans mb-3">
                  Branch: {profile.branch}
                </div>

                {/* Current Role */}
                <p className="text-xs text-slate-300 leading-relaxed font-light mb-6 border-l-2 border-amber-500/30 pl-3">
                  {profile.currentRole}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setActiveProfile(profile)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 tracking-wider uppercase group-hover:translate-x-1 transition-transform"
                >
                  <span>READ JOURNEY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  SPOTLIGHT
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Administrator Record Notice */}
        <div className="p-6 rounded-2xl bg-[#081538] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
              KLE TECH ALUMNI IN SERVICE DIRECTORY
            </div>
            <p className="text-xs text-slate-300">
              Are you a KLE Tech graduate serving in the Civil Services or state administration?
              Or have official records to verify?
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:upsc.club@kletech.ac.in?subject=KLE%20Tech%20Alumni%20in%20Civil%20Services%20Verification"
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white text-xs font-mono font-semibold transition-colors whitespace-nowrap"
            >
              SUBMIT ALUMNI RECORD
            </a>

            {onOpenAdminModal && (
              <button
                onClick={onOpenAdminModal}
                className="px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold transition-colors whitespace-nowrap"
              >
                ADMIN EDIT
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 5-Stage Journey Spotlight Modal */}
      <AlumniModal
        profile={activeProfile}
        onClose={() => setActiveProfile(null)}
      />
    </section>
  );
};
