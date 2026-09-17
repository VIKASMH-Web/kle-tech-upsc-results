"use client";

import React from "react";
import {
  Compass,
  TrendingUp,
  Brain,
  MessageSquare,
  Users2,
  Globe2,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export const WhoWeAre: React.FC = () => {
  const aims = [
    {
      icon: Compass,
      title: "Create Awareness",
      description: "Demystifying the Civil Services Examination and public administration pathways early in campus life.",
    },
    {
      icon: TrendingUp,
      title: "Provide Direction",
      description: "Structured roadmaps, recommended literature, and systematic timelines for steady preparation.",
    },
    {
      icon: Brain,
      title: "Encourage Critical Thinking",
      description: "Cultivating objective, multi-dimensional reasoning and analytical problem solving.",
    },
    {
      icon: MessageSquare,
      title: "Develop Communication & Leadership",
      description: "Nurturing clear articulation, debate discipline, and ethical public administration leadership.",
    },
    {
      icon: Users2,
      title: "Connect Students with Mentors",
      description: "Direct interactions with serving civil servants, university faculty, and successful candidates.",
    },
    {
      icon: Globe2,
      title: "Engage with National & Global Issues",
      description: "In-depth understanding of constitutional governance, socio-economic dynamics, and international relations.",
    },
    {
      icon: HeartHandshake,
      title: "Build a Supportive Aspirant Community",
      description: "A collaborative, student-driven ecosystem where peers study, review answers, and grow together.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#060e24] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Main Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold tracking-widest uppercase mb-4">
            INSTITUTIONAL PURPOSE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            MORE THAN EXAM PREPARATION.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            “The UPSC Aspirants Club is a student-driven platform at KLE Technological
            University dedicated to creating awareness about the Civil Services and fostering
            a culture of learning, discussion, mentorship, and public-service aspiration.”
          </p>
        </div>

        {/* The Progression Chain Banner */}
        <div className="mb-16 p-6 rounded-xl bg-gradient-to-r from-[#091536] via-[#0d1f4d] to-[#091536] border border-amber-500/30 shadow-xl">
          <div className="text-center mb-4">
            <span className="text-[11px] font-mono tracking-widest text-amber-300 uppercase font-semibold">
              THE ASCENT PATHWAY
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold tracking-wider uppercase">
            <span className="px-3.5 py-1.5 rounded-md bg-[#102454] text-white border border-white/10 shadow-sm">
              Awareness
            </span>
            <ArrowRight className="w-4 h-4 text-amber-400 hidden sm:inline" />
            <span className="px-3.5 py-1.5 rounded-md bg-[#102454] text-white border border-white/10 shadow-sm">
              Preparation
            </span>
            <ArrowRight className="w-4 h-4 text-amber-400 hidden sm:inline" />
            <span className="px-3.5 py-1.5 rounded-md bg-[#102454] text-white border border-white/10 shadow-sm">
              Mentorship
            </span>
            <ArrowRight className="w-4 h-4 text-amber-400 hidden sm:inline" />
            <span className="px-3.5 py-1.5 rounded-md bg-[#102454] text-white border border-white/10 shadow-sm">
              Aspiration
            </span>
            <ArrowRight className="w-4 h-4 text-amber-400 hidden sm:inline" />
            <span className="px-3.5 py-1.5 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              Public Service
            </span>
          </div>
        </div>

        {/* 7 Aims Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aims.map((aim, idx) => {
            const Icon = aim.icon;
            return (
              <div
                key={aim.title}
                className={`institutional-card p-6 flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0e214d] border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-wide font-sans">
                    {aim.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {aim.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>DIMENSION 0{idx + 1}</span>
                  <span className="text-amber-500/70">KLE TECH</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
