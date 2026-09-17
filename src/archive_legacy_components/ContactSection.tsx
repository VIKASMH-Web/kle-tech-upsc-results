"use client";

import React, { useState } from "react";
import { useClubContent } from "@/data/contentStore";
import {
  Mail,
  Instagram,
  MessageCircle,
  Linkedin,
  MapPin,
  ExternalLink,
  Send,
  HelpCircle,
  ChevronDown,
  Building2,
  CheckCircle2,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { identity } = useClubContent();
  const [formSent, setFormSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    usn: "",
    subject: "",
    message: "",
  });

  const faqs = [
    {
      q: "Who can join the KLE Tech UPSC Aspirants Club?",
      a: "Any actively enrolled undergraduate or postgraduate student of KLE Technological University across all engineering disciplines, computer applications, and management programmes is eligible to join.",
    },
    {
      q: "Is prior knowledge of the Civil Services Examination required?",
      a: "No prior experience is necessary. Our initiatives start from foundational awareness (The First Glimpse) and progress methodically through mapping, quizzes, debates, and structured mentorship.",
    },
    {
      q: "How are mock test and challenge results evaluated?",
      a: "Diagnostic tests and quizzes are conducted using standard UPSC CSE negative marking formats. Performance scores and certificates can be verified anytime using the USN Results search portal above.",
    },
    {
      q: "How can students access one-on-one mentorship with civil servants?",
      a: "Flagship interaction events such as Pragya 5.0 provide direct floor interactions with invited civil servants and alumni. Regular study circle review cohorts are facilitated under faculty advisors.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#060e24] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>CAMPUS DESK</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-3">
            CONNECT WITH US.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            KLE Technological University • Hubballi, Karnataka, India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Left Column: Official Contact Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="institutional-card p-6 sm:p-8">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                KLE Tech UPSC Aspirants Club
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                OFFICIAL STUDENT ORGANISATION
              </p>

              {/* Physical Address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 mb-6">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Campus Location:</div>
                  <div>{identity.address}</div>
                  <div>
                    {identity.city}, {identity.state} - {identity.pincode}, {identity.country}
                  </div>
                  <div className="text-[11px] font-mono text-amber-400/80 mt-1">
                    Geo: {identity.coordinates.lat}, {identity.coordinates.lng}
                  </div>
                </div>
              </div>

              {/* Official Channels */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                  FOR QUERIES & OFFICIAL CHANNELS
                </div>

                <a
                  href={`mailto:${identity.contactEmail}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 hover:text-white transition-colors border border-white/5"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{identity.contactEmail}</span>
                </a>

                <a
                  href={identity.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 hover:text-white transition-colors border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Instagram Official</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={identity.whatsappCommunityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 hover:text-white transition-colors border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp Aspirant Community</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={identity.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 hover:text-white transition-colors border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>LinkedIn Network</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Query Form */}
          <div className="lg:col-span-7">
            <div className="institutional-card p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                <Send className="w-4 h-4" />
                <span>SUBMIT AN ACADEMIC OR EVENT QUERY</span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Send a Message to the Coordinator Desk
              </h3>

              {formSent ? (
                <div className="p-8 rounded-xl bg-[#040918] border border-emerald-500/40 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Query Submitted
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been relayed to the UPSC Aspirants Club student executive
                    committee. A response will be provided to your email within 2 working days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter full name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#040918] border border-white/10 text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@kletech.ac.in"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#040918] border border-white/10 text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                        USN (IF APPLICABLE)
                      </label>
                      <input
                        type="text"
                        value={formData.usn}
                        onChange={(e) =>
                          setFormData({ ...formData, usn: e.target.value.toUpperCase() })
                        }
                        placeholder="e.g. 01FE22BCS000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#040918] border border-white/10 text-white placeholder:text-slate-600 text-xs font-mono uppercase focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                        QUERY NATURE *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#040918] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                      >
                        <option value="">Select subject</option>
                        <option value="Event Registration">Event Registration</option>
                        <option value="USN Result / Certificate Query">
                          USN Result / Certificate Query
                        </option>
                        <option value="Mock Test Syllabus">Mock Test Syllabus</option>
                        <option value="Alumni Connect">Alumni Connect</option>
                        <option value="Other">Other Institutional Matter</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                      MESSAGE / DETAILS *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your query in detail..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#040918] border border-white/10 text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider shadow hover:shadow-lg transition-all"
                  >
                    SUBMIT INQUIRY
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Institutional FAQs Accordion */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              Aspirant Guidance FAQs
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#081538] border border-white/5 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 bg-[#050b1d]/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
