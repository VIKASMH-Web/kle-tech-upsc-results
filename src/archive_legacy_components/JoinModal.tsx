"use client";

import React, { useState } from "react";
import { useClubContent } from "@/data/contentStore";
import { AshokaChakraEmblem } from "./AshokaChakraEmblem";
import {
  X,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "member" | "volunteer";
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultTab = "member",
}) => {
  const { identity } = useClubContent();
  const [activeTab, setActiveTab] = useState<"member" | "volunteer">(defaultTab);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    email: "",
    branch: "",
    semester: "",
    motivation: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#091535] border-2 border-amber-500/40 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          aria-label="Close join modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-lg mx-auto mb-8">
          <div className="w-12 h-12 rounded-full bg-[#0d204d] border border-amber-500/40 mx-auto flex items-center justify-center text-amber-400 mb-3 shadow">
            <AshokaChakraEmblem size={34} color="#eab308" />
          </div>

          <span className="text-[10px] font-mono font-bold tracking-widest text-amber-400 uppercase block mb-1">
            KLE TECHNOLOGICAL UNIVERSITY
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-wide">
            YOUR UPSC JOURNEY STARTS HERE.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-light">
            “Whether you are exploring the Civil Services for the first time or already
            preparing, the UPSC Aspirants Club provides a platform to learn, connect,
            participate, and grow.”
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex rounded-xl bg-[#050b1d] p-1 border border-white/10 mb-8 max-w-sm mx-auto">
          <button
            onClick={() => {
              setActiveTab("member");
              setSubmitted(false);
            }}
            className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
              activeTab === "member"
                ? "bg-amber-500 text-slate-950 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            JOIN AS ASPIRANT
          </button>
          <button
            onClick={() => {
              setActiveTab("volunteer");
              setSubmitted(false);
            }}
            className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
              activeTab === "volunteer"
                ? "bg-amber-500 text-slate-950 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            BECOME A VOLUNTEER
          </button>
        </div>

        {/* Tab Content */}
        {submitted ? (
          <div className="p-8 rounded-xl bg-[#050b1d] border border-emerald-500/40 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
            <h4 className="font-display font-bold text-xl text-white mb-2">
              APPLICATION RECEIVED
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <span className="text-amber-300 font-semibold">{formData.name}</span>.
              Your interest has been logged at the campus desk. You will receive an onboarding briefing
              from the student coordinators via your registered university email.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={identity.whatsappCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                JOIN WHATSAPP COMMUNITY
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 font-mono text-xs font-bold uppercase"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Quick Link Option to Google Form */}
            <div className="p-4 rounded-xl bg-[#050b1d] border border-amber-500/30 mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-white mb-0.5">
                  Official University Google Form
                </div>
                <div className="text-[11px] text-slate-400">
                  Prefer signing in via university G-Suite account?
                </div>
              </div>

              <a
                href={
                  activeTab === "member"
                    ? identity.registrationFormUrl
                    : identity.volunteerFormUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>OPEN OFFICIAL FORM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* In-Modal Direct Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white placeholder:text-slate-600 text-xs font-sans focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    USN (UNIVERSITY SEAT NUMBER) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.usn}
                    onChange={(e) =>
                      setFormData({ ...formData, usn: e.target.value.toUpperCase() })
                    }
                    placeholder="e.g. 01FE22BCS045"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white placeholder:text-slate-600 text-xs font-mono uppercase focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    COLLEGE EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="usn@kletech.ac.in"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white placeholder:text-slate-600 text-xs font-sans focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    BRANCH / PROGRAMME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    placeholder="e.g. CSE / ECE / MECH"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white placeholder:text-slate-600 text-xs font-sans focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                    CURRENT SEMESTER *
                  </label>
                  <select
                    required
                    value={formData.semester}
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-amber-400"
                  >
                    <option value="">Select Semester</option>
                    <option value="1st / 2nd Sem">1st / 2nd Semester</option>
                    <option value="3rd / 4th Sem">3rd / 4th Semester</option>
                    <option value="5th / 6th Sem">5th / 6th Semester</option>
                    <option value="7th / 8th Sem">7th / 8th Semester</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  {activeTab === "member"
                    ? "AREAS OF INTEREST / EXAM FOCUS"
                    : "VOLUNTEERING SKILLS / WING INTEREST (ACADEMICS, TECH, EVENTS)"}
                </label>
                <textarea
                  rows={2}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  placeholder="Share a brief line about your goals..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white placeholder:text-slate-600 text-xs font-sans focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all flex items-center justify-center gap-2"
              >
                <span>
                  {activeTab === "member"
                    ? "SUBMIT ASPIRANT ENROLLMENT"
                    : "SUBMIT VOLUNTEER APPLICATION"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Footnote */}
        <div className="text-center text-[10px] font-mono text-slate-500 mt-6 pt-4 border-t border-white/10">
          UPSC ASPIRANTS CLUB • B. V. BHOOMARADDI CAMPUS, HUBBALLI
        </div>
      </div>
    </div>
  );
};
