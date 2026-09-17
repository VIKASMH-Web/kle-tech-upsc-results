"use client";

import React from "react";
import { AlumniProfile } from "@/data/alumni";
import { AshokaChakraEmblem } from "./AshokaChakraEmblem";
import {
  X,
  Award,
  GraduationCap,
  BookOpen,
  Trophy,
  ShieldCheck,
  MessageSquareQuote,
  Compass,
  ExternalLink,
  Building,
} from "lucide-react";

interface AlumniModalProps {
  profile: AlumniProfile | null;
  onClose: () => void;
}

export const AlumniModal: React.FC<AlumniModalProps> = ({ profile, onClose }) => {
  if (!profile) return null;

  const steps = [
    {
      title: "1. KLE TECH JOURNEY",
      icon: GraduationCap,
      content: profile.journey?.kleTechJourney,
      label: "Campus Roots & Engineering Rigor",
    },
    {
      title: "2. THE PREPARATION",
      icon: BookOpen,
      content: profile.journey?.thePreparation,
      label: "Study Discipline & Strategy",
    },
    {
      title: "3. THE BREAKTHROUGH",
      icon: Trophy,
      content: profile.journey?.theBreakthrough,
      label: "UPSC Recommendation",
    },
    {
      title: "4. THE SERVICE",
      icon: ShieldCheck,
      content: profile.journey?.theService,
      label: "Public Administration & Impact",
    },
    {
      title: "5. MESSAGE TO ASPIRANTS",
      icon: MessageSquareQuote,
      content: profile.journey?.messageToAspirants,
      label: "Guiding Words for Students",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#091535] border-2 border-amber-500/40 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          aria-label="Close spotlight modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>JOURNEY SPOTLIGHT</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              FROM ENGINEERING STUDENT TO PUBLIC SERVICE
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-wide mt-1">
              {profile.name}
            </h3>
          </div>

          <div className="flex flex-col sm:items-end">
            <span className="px-3.5 py-1 rounded-full bg-amber-500 text-slate-950 font-mono text-xs font-extrabold uppercase tracking-wider shadow">
              {profile.service}
            </span>
            <span className="text-xs font-mono text-slate-400 mt-1">
              {profile.batch}
            </span>
          </div>
        </div>

        {/* Bio Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#050b1d] border border-white/5 mb-8">
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase">
              DESIGNATION / CADRE
            </div>
            <div className="text-xs font-bold text-white mt-0.5">
              {profile.designation}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase">
              ALMA MATER BRANCH
            </div>
            <div className="text-xs font-semibold text-amber-300 mt-0.5">
              {profile.branch}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase">
              CURRENT ASSIGNMENT
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-0.5">
              {profile.currentRole}
            </div>
          </div>
        </div>

        {/* 5-Stage Timeline Sequence */}
        <div className="mb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-6 flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>THE 5-STAGE TRANSFORMATION TIMELINE</span>
          </div>

          <div className="space-y-6">
            {steps.map((step, idx) => {
              if (!step.content) return null;
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#061028] border border-white/5 hover:border-amber-500/30 transition-all flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0e224e] border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
                        {step.title}
                      </span>
                      <span className="text-[10px] font-mono text-amber-400/80 uppercase">
                        {step.label}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {step.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Advice to Aspirants Quote Box */}
        {profile.advice && (
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#0d1f4d] via-[#091738] to-[#0d1f4d] border border-amber-500/30 mb-8">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 mb-2">
              WORDS OF COUNSEL FOR KLE TECH ASPIRANTS:
            </div>
            <p className="text-sm text-slate-100 italic leading-relaxed font-serif">
              “{profile.advice}”
            </p>
          </div>
        )}

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 pt-4 border-t border-white/10 gap-2">
          <span>KLE TECHNOLOGICAL UNIVERSITY ALUMNI IN PUBLIC SERVICE</span>
          <button
            onClick={onClose}
            className="text-amber-400 hover:text-amber-300 font-bold"
          >
            CLOSE PROFILE [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
