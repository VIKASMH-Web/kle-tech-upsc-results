"use client";

import React, { useState, FormEvent } from "react";
import { portalConfig } from "@/config/portalConfig";
import { generateResultCardBlob } from "@/utils/generateCard";
import {
  Search,
  CheckCircle2,
  AlertCircle,
  Clock,
  RotateCcw,
  Shield,
  Award,
  ChevronRight,
  School,
  FileText,
  Download,
  Share2,
  ArrowLeft,
} from "lucide-react";

interface ResultData {
  rank: number;
  name: string;
  usn: string;
  score: number;
  status: string;
}

export default function ResultsPortalPage() {
  const [usnInput, setUsnInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchStatus, setSearchStatus] = useState<"idle" | "found" | "not_found">("idle");
  const [candidateResult, setCandidateResult] = useState<ResultData | null>(null);
  const [isGeneratingCard, setIsGeneratingCard] = useState(false);
  const [shareNotification, setShareNotification] = useState<string | null>(null);

  // Results published toggle from config
  const isPublished = portalConfig.resultsPublished;

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmed = usnInput.trim();
    if (!trimmed) {
      setErrorMessage("Please enter your USN.");
      return;
    }

    setIsLoading(true);
    setSearchStatus("idle");
    setCandidateResult(null);

    try {
      // Primary search via secure internal API
      const response = await fetch("/api/result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usn: trimmed }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.found && data.result) {
          setCandidateResult(data.result);
          setSearchStatus("found");
        } else {
          setSearchStatus("not_found");
        }
      } else {
        // Fallback to client-side search in case static hosting is used without server API
        await fallbackClientSearch(trimmed);
      }
    } catch {
      // Fallback in case of fetch network error or purely static deployment
      await fallbackClientSearch(trimmed);
    } finally {
      setIsLoading(false);
    }
  };

  const fallbackClientSearch = async (usnQuery: string) => {
    try {
      const res = await fetch("/results.json");
      if (!res.ok) {
        setSearchStatus("not_found");
        return;
      }
      const data = await res.json();
      if (!Array.isArray(data)) {
        setSearchStatus("not_found");
        return;
      }

      const normalizedInput = usnQuery.trim().toUpperCase().replace(/\s+/g, "");
      const match = data.find((item: { usn?: string; rank: number; name: string; score: number }) => {
        const candidateUsn = (item.usn || "").toString().trim().toUpperCase().replace(/\s+/g, "");
        return candidateUsn === normalizedInput;
      });

      if (match) {
        setCandidateResult({
          rank: match.rank,
          name: match.name,
          usn: match.usn,
          score: match.score,
          status: portalConfig.qualificationStatus,
        });
        setSearchStatus("found");
      } else {
        setSearchStatus("not_found");
      }
    } catch {
      setSearchStatus("not_found");
    }
  };

  const handleResetSearch = () => {
    setUsnInput("");
    setCandidateResult(null);
    setSearchStatus("idle");
    setErrorMessage(null);
    setShareNotification(null);
  };

  const handleDownloadCard = async () => {
    if (!candidateResult) return;
    setIsGeneratingCard(true);
    try {
      const blob = await generateResultCardBlob(candidateResult);
      const url = URL.createObjectURL(blob);
      const sanitizedUsn = candidateResult.usn.replace(/[^a-zA-Z0-9_-]/g, "");
      const a = document.createElement("a");
      a.href = url;
      a.download = `UPSC_Round1_Result_${sanitizedUsn}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating card:", error);
    } finally {
      setIsGeneratingCard(false);
    }
  };

  const handleShareCard = async () => {
    if (!candidateResult) return;
    setIsGeneratingCard(true);
    setShareNotification(null);
    try {
      const blob = await generateResultCardBlob(candidateResult);
      const sanitizedUsn = candidateResult.usn.replace(/[^a-zA-Z0-9_-]/g, "");
      const filename = `UPSC_Round1_Result_${sanitizedUsn}.png`;
      const file = new File([blob], filename, { type: "image/png" });
      const shareText = "I have qualified for Round 2 of the UPSC Aspirants Club Office Bearer Recruitment.";

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: "UPSC Mock Prelims Round 1 Result",
          text: shareText,
          files: [file],
        });
      } else if (navigator.share) {
        await navigator.share({
          title: "UPSC Mock Prelims Round 1 Result",
          text: shareText,
          url: window.location.href,
        });
      } else {
        // Fallback: Download card & copy announcement text
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        if (navigator.clipboard) {
          await navigator.clipboard.writeText(shareText);
        }
        setShareNotification("Result card downloaded! Share text copied to clipboard.");
        setTimeout(() => setShareNotification(null), 4000);
      }
    } catch (err: unknown) {
      if ((err as { name?: string })?.name !== "AbortError") {
        console.error("Share error:", err);
      }
    } finally {
      setIsGeneratingCard(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050b1d] text-slate-100 flex flex-col justify-between selection:bg-amber-500/25 selection:text-amber-100 font-sans relative overflow-x-hidden">
      {/* Background Campus Image with Institutional Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{
          backgroundImage: "url('/assets/campus-bg.png')",
        }}
      />
      {/* Deep Navy Gradient Overlay for perfect text contrast and institutional prestige */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#050b1d]/90 via-[#061028]/85 to-[#040817]/95 backdrop-blur-[1px]" />

      {/* Main Content Area */}
      <main className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex-1 flex flex-col justify-center relative z-10">
        
        {/* ============================================================ */}
        {/* LOGO PLACEHOLDERS & INSTITUTIONAL HEADER */}
        {/* ============================================================ */}
        <header className="text-center mb-6 sm:mb-8">
          {/* Logo Section: FIRST KLE TECH, THEN UPSC ASPIRANTS CLUB */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-5 sm:mb-6">
            
            {/* 1. FIRST: KLE TECHNOLOGICAL UNIVERSITY LOGO */}
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-2 shadow-lg shadow-black/40 border-2 border-amber-500/40 flex items-center justify-center overflow-hidden hover:border-amber-400 transition-colors"
                title="KLE Technological University"
              >
                <img
                  src="/assets/kle-tech-logo.png"
                  alt="KLE Technological University Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-1.5 text-[9px] sm:text-[10px] text-amber-400/80 font-bold tracking-wider uppercase">
                KLE TECH UNIVERSITY
              </span>
            </div>

            {/* Subtle Divider between logos */}
            <div className="h-14 w-[1px] bg-gradient-to-b from-transparent via-amber-500/40 to-transparent" />

            {/* 2. SECOND: UPSC ASPIRANTS CLUB LOGO */}
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-1.5 shadow-lg shadow-black/40 border-2 border-amber-500/40 flex items-center justify-center overflow-hidden hover:border-amber-400 transition-colors"
                title="UPSC Aspirants Club"
              >
                <img
                  src="/assets/upsc-club-logo.jpg"
                  alt="UPSC Aspirants Club Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-1.5 text-[9px] sm:text-[10px] text-amber-400/80 font-bold tracking-wider uppercase">
                UPSC ASPIRANTS CLUB
              </span>
            </div>
          </div>

          {/* Academic Headings Hierarchy */}
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white uppercase leading-snug">
            {portalConfig.clubName}
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg font-medium text-slate-300 tracking-wide uppercase mt-1">
            {portalConfig.institutionName}
          </h2>

          {/* Institutional Divider */}
          <div className="flex items-center justify-center gap-3 my-3 sm:my-4">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-500/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>

          {/* Event & Round Badge */}
          <div className="inline-block">
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-300">
              {portalConfig.recruitmentTitle}
            </div>
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-emerald-400 mt-0.5">
              {portalConfig.roundTitle}
            </div>
          </div>

          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wide uppercase mt-2">
            {portalConfig.examTitle}
          </h3>
        </header>

        {/* ============================================================ */}
        {/* CONDITIONAL CONTENT: RESULTS PUBLISHED VS NOT YET ANNOUNCED */}
        {/* ============================================================ */}
        {!isPublished ? (
          /* UNANNOUNCED STATE (resultsPublished = false) */
          <section className="bg-[#091535] border border-amber-500/30 rounded-2xl p-6 sm:p-8 text-center shadow-xl shadow-black/50">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center mx-auto mb-4 text-amber-400">
              <Clock className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-lg sm:text-xl font-bold uppercase tracking-wider text-amber-300">
              {portalConfig.unannouncedNotice}
            </h4>
            <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
              {portalConfig.unannouncedSubtitle}
            </p>
            <div className="mt-6 pt-5 border-t border-white/10 text-xs text-slate-400">
              Please check back shortly or await official club notification via WhatsApp.
            </div>
          </section>
        ) : searchStatus === "found" && candidateResult ? (
          /* ============================================================ */
          /* RESULT DISPLAY CARD (When matching USN found) */
          /* ============================================================ */
          <section className="bg-[#081432] border-2 border-amber-500/50 rounded-2xl p-5 sm:p-8 shadow-2xl shadow-black/60 relative overflow-hidden animate-fadeIn">
            {/* Subtle corner watermark accent */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            
            {/* Card Official Top Bar */}
            <div className="text-center pb-4 border-b border-amber-500/20">
              <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                {portalConfig.recruitmentTitle}
              </div>
              <div className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-amber-400 uppercase mt-0.5">
                {portalConfig.roundTitle}
              </div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-widest text-white uppercase mt-1">
                RESULT
              </div>
            </div>

            {/* Candidate Result Fields */}
            <div className="py-6 space-y-5">
              
              {/* RANK */}
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold font-serif text-amber-300 tracking-tight">
                  {String(candidateResult.rank).padStart(2, "0")}
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mt-0.5">
                  RANK
                </div>
              </div>

              {/* NAME & USN */}
              <div className="text-center pt-2 border-t border-white/5">
                <div className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  {candidateResult.name}
                </div>
                <div className="text-xs sm:text-sm font-bold text-blue-300 tracking-wider mt-0.5">
                  USN: {candidateResult.usn.toUpperCase()}
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mt-0.5">
                  CANDIDATE NAME
                </div>
              </div>

              {/* SCORE */}
              <div className="text-center pt-2 border-t border-white/5">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {candidateResult.score} <span className="text-base sm:text-lg font-medium text-slate-400">/ 100</span>
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mt-0.5">
                  SCORE
                </div>
              </div>

              {/* STATUS: QUALIFIED FOR ROUND 2 */}
              <div className="pt-3">
                <div className="bg-emerald-950/60 border-2 border-emerald-500/70 rounded-xl py-3 px-4 text-center shadow-inner">
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-emerald-400/90 uppercase">
                    STATUS
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-emerald-300 tracking-wider uppercase mt-0.5 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{candidateResult.status}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Interview Notification Message */}
              <div className="bg-[#0b1b42] border border-amber-500/30 rounded-xl p-4 text-center">
                <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-normal">
                  “{portalConfig.interviewMessage}”
                </p>
              </div>

            </div>

            {/* ACTION BUTTONS: DOWNLOAD, SHARE, and CHECK ANOTHER USN */}
            <div className="pt-5 border-t border-white/10 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {/* 1. DOWNLOAD RESULT CARD (Prominent) */}
                <button
                  type="button"
                  onClick={handleDownloadCard}
                  disabled={isGeneratingCard}
                  className="w-full sm:flex-1 py-3.5 px-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 active:from-amber-700 text-slate-950 font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Download className="w-4 h-4 text-slate-950 shrink-0" />
                  <span>{isGeneratingCard ? "PREPARING CARD..." : "DOWNLOAD RESULT CARD"}</span>
                </button>

                {/* 2. SHARE RESULT */}
                <button
                  type="button"
                  onClick={handleShareCard}
                  disabled={isGeneratingCard}
                  className="w-full sm:w-auto py-3.5 px-6 bg-[#0d2256] hover:bg-[#122e75] active:bg-[#0a1b44] text-amber-300 border border-amber-500/40 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Share2 className="w-4 h-4 shrink-0" />
                  <span>SHARE RESULT</span>
                </button>
              </div>

              {/* Share Feedback Toast */}
              {shareNotification && (
                <div className="text-center text-xs text-amber-300 font-medium py-1.5 px-3 bg-amber-500/10 rounded-lg border border-amber-500/20 animate-fadeIn">
                  {shareNotification}
                </div>
              )}

              {/* 3. ← CHECK ANOTHER USN (Clean secondary button) */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleResetSearch}
                  className="inline-flex items-center justify-center gap-2 py-2 px-4 text-slate-400 hover:text-amber-300 text-xs sm:text-sm font-semibold tracking-wider transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>CHECK ANOTHER USN</span>
                </button>
              </div>
            </div>
          </section>
        ) : searchStatus === "not_found" ? (
          /* ============================================================ */
          /* RESULT NOT FOUND CARD */
          /* ============================================================ */
          <section className="bg-[#081432] border border-rose-500/40 rounded-2xl p-6 sm:p-8 text-center shadow-xl shadow-black/50 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/40 flex items-center justify-center mx-auto mb-3 text-rose-400">
              <AlertCircle className="w-6 h-6" />
            </div>

            <h4 className="font-serif text-lg sm:text-xl font-bold text-rose-200 uppercase tracking-wide">
              {portalConfig.notFoundTitle}
            </h4>
            <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
              {portalConfig.notFoundSubtitle}
            </p>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={handleResetSearch}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0d2256] hover:bg-[#122e75] active:bg-[#0a1b44] text-slate-100 border border-slate-600 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>TRY AGAIN</span>
              </button>
            </div>
          </section>
        ) : (
          /* ============================================================ */
          /* INITIAL STATE: USN SEARCH BOX */
          /* ============================================================ */
          <section className="bg-[#081432] border border-amber-500/30 rounded-2xl p-5 sm:p-8 shadow-xl shadow-black/50">
            <div className="text-center mb-5">
              <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium tracking-wide">
                {portalConfig.searchInstruction}
              </p>
            </div>

            <form onSubmit={handleSearch} className="space-y-4">
              {/* USN Input Box */}
              <div>
                <label htmlFor="usnInput" className="sr-only">
                  Candidate USN
                </label>
                <div className="relative">
                  <input
                    id="usnInput"
                    type="text"
                    value={usnInput}
                    onChange={(e) => {
                      setUsnInput(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    placeholder="Enter your USN"
                    autoCapitalize="characters"
                    autoCorrect="off"
                    spellCheck="false"
                    disabled={isLoading}
                    className="w-full bg-[#040c20] border-2 border-slate-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white placeholder-slate-500 text-center text-base sm:text-lg tracking-wider font-semibold rounded-xl py-3.5 px-4 outline-none transition-all disabled:opacity-50"
                  />
                </div>

                {/* Validation Error Message */}
                {errorMessage && (
                  <p className="text-rose-400 text-xs sm:text-sm font-medium mt-2 text-center flex items-center justify-center gap-1.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </p>
                )}
              </div>

              {/* View Result Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 active:from-amber-700 active:to-amber-700 text-slate-950 font-extrabold text-sm sm:text-base tracking-widest uppercase rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-150 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>VERIFYING...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
                    <span>VIEW RESULT</span>
                  </>
                )}
              </button>
            </form>
          </section>
        )}
      </main>

      {/* ============================================================ */}
      {/* MINIMAL FOOTER WITH OFFICIAL SOCIAL LINKS */}
      {/* ============================================================ */}
      <footer className="w-full border-t border-white/10 bg-[#040918] py-5 px-4 text-center mt-6 relative z-10">
        <div className="max-w-md mx-auto space-y-2.5">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-slate-200 uppercase">
            {portalConfig.clubName}
          </div>
          <div className="text-[11px] sm:text-xs text-slate-400 tracking-wide uppercase">
            {portalConfig.institutionName}
          </div>
          <div className="text-[10px] sm:text-[11px] font-semibold text-amber-400/80 tracking-widest uppercase pt-0.5">
            {portalConfig.recruitmentTitle} • {portalConfig.roundTitle}
          </div>

          {/* Official Social & Community Links */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {/* WhatsApp Community */}
            <a
              href={portalConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0a1532] border border-emerald-500/30 hover:border-emerald-500/70 text-emerald-300 hover:text-emerald-100 text-[11px] sm:text-xs font-semibold tracking-wide transition-all shadow-sm group cursor-pointer"
              title="Join Official WhatsApp Community"
            >
              <svg className="w-3.5 h-3.5 shrink-0 fill-current text-emerald-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.585 1.961.954 2.791.955h.005c3.181 0 5.767-2.586 5.768-5.766 0-1.541-.601-2.99-1.691-4.08-1.09-1.091-2.54-1.691-4.082-1.691zm0-2.172c4.378 0 7.94 3.562 7.94 7.938 0 2.119-.824 4.11-2.325 5.61s-3.491 2.328-5.615 2.328c-1.348 0-2.671-.344-3.843-.996l-5.188 1.358 1.385-5.053c-.718-1.229-1.098-2.637-1.098-4.247 0-4.376 3.562-7.938 7.944-7.938zm-3.666 5.176c-.198-.44-.407-.449-.596-.457-.154-.007-.33-.007-.506-.007s-.462.066-.704.33c-.242.264-.924.903-.924 2.201s.946 2.553 1.078 2.729c.132.176 1.826 2.899 4.498 3.968 2.221.888 2.673.711 3.157.667.484-.044 1.562-.638 1.782-1.254.22-.616.22-1.144.154-1.254-.066-.11-.242-.176-.506-.308s-1.562-.77-1.804-.858c-.242-.088-.418-.132-.594.132-.176.264-.682.858-.836 1.034-.154.176-.308.198-.572.066-.264-.132-1.114-.41-2.122-1.309-.785-.699-1.315-1.563-1.469-1.827-.154-.264-.016-.407.116-.538.119-.118.264-.308.396-.462.132-.154.176-.264.264-.44.088-.176.044-.33-.022-.462-.066-.132-.594-1.431-.814-1.96z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href={portalConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0a1532] border border-pink-500/30 hover:border-pink-500/70 text-pink-300 hover:text-pink-100 text-[11px] sm:text-xs font-semibold tracking-wide transition-all shadow-sm group cursor-pointer"
              title="Official Instagram"
            >
              <svg className="w-3.5 h-3.5 shrink-0 fill-current text-pink-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            {/* LinkedIn */}
            <a
              href={portalConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0a1532] border border-blue-500/30 hover:border-blue-500/70 text-blue-300 hover:text-blue-100 text-[11px] sm:text-xs font-semibold tracking-wide transition-all shadow-sm group cursor-pointer"
              title="Official LinkedIn"
            >
              <svg className="w-3.5 h-3.5 shrink-0 fill-current text-blue-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
