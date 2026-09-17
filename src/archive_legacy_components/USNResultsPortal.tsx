"use client";

import React, { useState } from "react";
import { ResultRecord, INITIAL_RESULTS_DATA } from "@/data/results";
import { useClubContent } from "@/data/contentStore";
import { AshokaChakraEmblem } from "./AshokaChakraEmblem";
import {
  Search,
  Award,
  CheckCircle2,
  AlertCircle,
  FileText,
  Printer,
  Copy,
  Check,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Building,
} from "lucide-react";

interface USNResultsPortalProps {
  onOpenAdminModal?: () => void;
}

export const USNResultsPortal: React.FC<USNResultsPortalProps> = ({
  onOpenAdminModal,
}) => {
  const { resultsList } = useClubContent();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedUsn, setSearchedUsn] = useState<string | null>(null);
  const [result, setResult] = useState<ResultRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  const sampleUsns = [
    { usn: "01FE22BCS045", label: "Aditya Patil (GS Mock)" },
    { usn: "01FE22BCS001", label: "Sneha Kulkarni (Quizkaar)" },
    { usn: "01FE21BEC012", label: "Rohan Deshmukh (Gauntlet)" },
    { usn: "01FE23BAI018", label: "Pooja Hegde (Recall)" },
    { usn: "01FE22BME034", label: "Vikram Joshi (Debate)" },
  ];

  const handleSearch = (usnToSearch?: string) => {
    const query = (usnToSearch || searchQuery).trim().toUpperCase();
    if (!query) return;

    setSearchedUsn(query);
    setHasSearched(true);

    const found = resultsList.find(
      (r) => r.usn.toUpperCase() === query
    );
    setResult(found || null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyCertificate = (certId: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(certId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <section id="results" className="py-24 bg-[#050b1d] relative">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-radial-navy opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>EXAMINATION PORTAL & MERIT VERIFICATION</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            SEARCH RESULTS BY USN
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Verify official performance scores, rank cards, and digital participation credentials
            for club mock tests, Quizkaar, and intellectual challenges at KLE Technological University.
          </p>
        </div>

        {/* Search Box Card */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="p-3 sm:p-4 rounded-2xl bg-[#081538] border border-amber-500/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
                onKeyDown={handleKeyDown}
                placeholder="ENTER STUDENT USN (e.g. 01FE22BCS045)"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#040918] border border-white/10 text-white placeholder:text-slate-500 font-mono text-sm tracking-wider uppercase focus:outline-none focus:border-amber-400/80 transition-colors"
              />
            </div>
            <button
              onClick={() => handleSearch()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all shrink-0 hover:-translate-y-0.5"
            >
              SEARCH RESULT
            </button>
          </div>

          {/* Quick Demo Sample USN Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="text-slate-500 text-[11px]">SAMPLE DEMO USNs:</span>
            {sampleUsns.map((s) => (
              <button
                key={s.usn}
                onClick={() => {
                  setSearchQuery(s.usn);
                  handleSearch(s.usn);
                }}
                className="px-2.5 py-1 rounded bg-[#091638] hover:bg-[#0f245a] text-amber-300/90 border border-amber-500/20 text-[11px] transition-colors"
              >
                {s.usn}
              </button>
            ))}
          </div>
        </div>

        {/* Results Presentation */}
        {hasSearched && (
          <div className="max-w-3xl mx-auto">
            {result ? (
              <div
                id="printable-transcript"
                className="rounded-2xl bg-gradient-to-b from-[#0a183d] via-[#071330] to-[#040918] border-2 border-amber-500/40 p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.7)] relative overflow-hidden"
              >
                {/* Ashoka Chakra Background Seal */}
                <div className="absolute right-[-60px] top-[-60px] opacity-[0.06] pointer-events-none">
                  <AshokaChakraEmblem size={300} color="#eab308" />
                </div>

                {/* Institutional Header Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#0d204d] border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                      <AshokaChakraEmblem size={36} color="#eab308" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono font-bold text-amber-400 tracking-wider uppercase">
                        KLE TECHNOLOGICAL UNIVERSITY
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        OFFICIAL PERFORMANCE RECORD
                      </h3>
                      <div className="text-[11px] font-mono text-slate-400">
                        UPSC ASPIRANTS CLUB • ACADEMIC EVALUATION DESK
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      STATUS
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-bold uppercase tracking-wider">
                      {result.status}
                    </span>
                  </div>
                </div>

                {/* Student Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#040918]/80 border border-white/5 mb-8">
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      STUDENT NAME
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {result.studentName}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      USN
                    </div>
                    <div className="text-sm font-bold font-mono text-amber-300 mt-0.5">
                      {result.usn}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      BRANCH
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5 line-clamp-1">
                      {result.branch}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      SEMESTER
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5">
                      {result.semester}
                    </div>
                  </div>
                </div>

                {/* Examination Title & Score Showcase */}
                <div className="mb-8">
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
                    EXAMINATION / INITIATIVE
                  </div>
                  <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                    {result.examName}
                  </h4>
                  <div className="text-xs font-mono text-slate-400 mb-6">
                    DATE: {result.date}
                  </div>

                  {/* Big Metric Scoreboard */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-[#061028] border border-amber-500/20 text-center">
                      <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">
                        TOTAL SCORE
                      </div>
                      <div className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                        {result.score}
                        <span className="text-base text-slate-500 font-light">
                          /{result.totalMarks}
                        </span>
                      </div>
                      <div className="text-[11px] text-amber-400/90 font-mono mt-1 font-semibold">
                        {((result.score / result.totalMarks) * 100).toFixed(1)}% Marks
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#061028] border border-amber-500/20 text-center">
                      <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">
                        CAMPUS STANDING
                      </div>
                      <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber-300">
                        {result.rank}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-1">
                        Merit Category
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#061028] border border-amber-500/20 text-center">
                      <div className="text-[10px] font-mono text-slate-400 uppercase mb-1">
                        PERCENTILE
                      </div>
                      <div className="font-display font-extrabold text-3xl sm:text-4xl text-emerald-400">
                        {result.percentile}
                        <span className="text-lg text-emerald-500">%</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-1">
                        Above Peers
                      </div>
                    </div>
                  </div>

                  {/* Subject Score Breakdown */}
                  {result.subjectBreakdown && result.subjectBreakdown.length > 0 && (
                    <div className="p-5 rounded-xl bg-[#040918]/80 border border-white/5 mb-6">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>SECTIONAL SCORE BREAKDOWN</span>
                      </div>

                      <div className="space-y-3.5">
                        {result.subjectBreakdown.map((s, idx) => {
                          const percentage = Math.round((s.marks / s.maxMarks) * 100);
                          return (
                            <div key={idx}>
                              <div className="flex items-center justify-between text-xs font-semibold mb-1">
                                <span className="text-slate-300">{s.subject}</span>
                                <span className="font-mono text-amber-300">
                                  {s.marks} / {s.maxMarks} ({percentage}%)
                                </span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-amber-500 transition-all duration-700"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Remarks */}
                  {result.remarks && (
                    <div className="p-4 rounded-xl bg-[#0b1739]/60 border border-amber-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                      <span className="font-bold text-amber-400 not-italic font-mono text-xs block mb-1">
                        ACADEMIC COMMITTEE EVALUATION REMARKS:
                      </span>
                      “{result.remarks}”
                    </div>
                  )}

                  {/* Digital Credential & Certificate Verification */}
                  <div className="p-4 rounded-xl bg-[#040918] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">
                        DIGITAL VERIFICATION CREDENTIAL ID
                      </div>
                      <div className="text-sm font-mono font-bold text-amber-300 mt-0.5 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-400" />
                        <span>{result.certificateId}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 no-print">
                      <button
                        onClick={() => handleCopyCertificate(result.certificateId)}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors"
                      >
                        {copiedId ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>COPY ID</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={handlePrint}
                        className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>PRINT RESULT</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer Signature Box */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-500 gap-2">
                  <span>ISSUED BY: UPSC ASPIRANTS CLUB, KLE TECH</span>
                  <span>VERIFIED ELECTRONIC RECORD • B.V. BHOOMARADDI CAMPUS</span>
                </div>
              </div>
            ) : (
              /* Not Found Message */
              <div className="p-8 rounded-2xl bg-[#091535] border border-red-500/30 text-center">
                <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  NO PERFORMANCE RECORD FOUND
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
                  No examination or activity record was located for USN{" "}
                  <span className="font-mono font-bold text-amber-300">{searchedUsn}</span>.
                  Please ensure your USN was typed correctly or that you registered for the test.
                </p>

                <div className="p-4 rounded-xl bg-[#050b1d] border border-white/10 max-w-md mx-auto text-xs text-slate-400 text-left mb-6">
                  <div className="font-bold text-slate-200 mb-1">
                    Need help with your results?
                  </div>
                  <div>
                    Contact the academic coordinator with your college ID card or email{" "}
                    <a
                      href="mailto:upsc.club@kletech.ac.in"
                      className="text-amber-400 underline font-mono"
                    >
                      upsc.club@kletech.ac.in
                    </a>
                    .
                  </div>
                </div>

                {onOpenAdminModal && (
                  <button
                    onClick={onOpenAdminModal}
                    className="text-xs font-mono text-amber-400/80 hover:text-amber-300 underline"
                  >
                    Club Administrator? Add / Update this USN record here
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
