"use client";

import React, { useState } from "react";
import { useClubContent } from "@/data/contentStore";
import { AlumniProfile } from "@/data/alumni";
import { ResultRecord } from "@/data/results";
import {
  X,
  Save,
  RotateCcw,
  Download,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Shield,
  Layers,
  Award,
  Users,
  Calendar,
  Sparkles,
} from "lucide-react";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const {
    stats,
    identity,
    alumniList,
    featuredEvent,
    resultsList,
    updateStats,
    updateIdentity,
    addAlumni,
    deleteAlumni,
    updateFeaturedEvent,
    addResult,
    resetToDefaults,
  } = useClubContent();

  const [activeTab, setActiveTab] = useState<
    "stats" | "results" | "alumni" | "event" | "identity"
  >("stats");
  const [saveNotification, setSaveNotification] = useState(false);

  // Local state for editing stats
  const [statsForm, setStatsForm] = useState({ ...stats });

  // Local state for editing identity
  const [identityForm, setIdentityForm] = useState({ ...identity });

  // Local state for featured event
  const [eventForm, setEventForm] = useState({ ...featuredEvent });

  // Local state for adding USN Result
  const [newResult, setNewResult] = useState<ResultRecord>({
    id: `res-${Date.now()}`,
    usn: "",
    studentName: "",
    branch: "Computer Science & Engineering",
    semester: "6th Semester",
    examName: "KLE Tech UPSC Prelims GS Mock Test 2025",
    date: "March 2025",
    score: 120,
    totalMarks: 200,
    percentile: 90.0,
    rank: "Rank 10 / 250+",
    status: "Qualified",
    certificateId: `KLE-UPSC-2025-${Math.floor(100 + Math.random() * 900)}`,
    subjectBreakdown: [
      { subject: "Indian Polity & Governance", marks: 30, maxMarks: 40 },
      { subject: "Indian Economy", marks: 25, maxMarks: 40 },
      { subject: "History & Art & Culture", marks: 25, maxMarks: 40 },
      { subject: "Geography & Environment", marks: 20, maxMarks: 40 },
      { subject: "Current Events & S&T", marks: 20, maxMarks: 40 },
    ],
    remarks: "Good conceptual clarity. Practice answer timing for Mains.",
  });

  // Local state for adding Alumni
  const [newAlumni, setNewAlumni] = useState<AlumniProfile>({
    id: `alumni-${Date.now()}`,
    name: "",
    batch: "2020",
    branch: "Computer Science & Engineering",
    service: "IAS",
    designation: "Assistant Commissioner / SDO",
    currentRole: "Sub-Divisional Magistrate",
    isVerified: true,
    advice: "Focus intensely on revisions and answer consistency.",
    journey: {
      kleTechJourney: "Undergraduate engineering at B.V. Bhoomaraddi Campus.",
      thePreparation: "Balanced rigorous coursework with newspaper and NCERT revisions.",
      theBreakthrough: "Cleared Civil Services Examination with distinction.",
      theService: "Serving public welfare and district governance.",
      messageToAspirants: "Stay disciplined, consistent, and patient.",
    },
  });

  if (!isOpen) return null;

  const triggerSaveNotification = () => {
    setSaveNotification(true);
    setTimeout(() => setSaveNotification(false), 2500);
  };

  const handleSaveStats = (e: React.FormEvent) => {
    e.preventDefault();
    updateStats(statsForm);
    triggerSaveNotification();
  };

  const handleSaveIdentity = (e: React.FormEvent) => {
    e.preventDefault();
    updateIdentity(identityForm);
    triggerSaveNotification();
  };

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    updateFeaturedEvent(eventForm);
    triggerSaveNotification();
  };

  const handleAddResult = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newResult.usn || !newResult.studentName) return;
    addResult({
      ...newResult,
      id: `res-${Date.now()}`,
      usn: newResult.usn.toUpperCase().trim(),
    });
    triggerSaveNotification();
    setNewResult({
      ...newResult,
      usn: "",
      studentName: "",
      certificateId: `KLE-UPSC-2025-${Math.floor(100 + Math.random() * 900)}`,
    });
  };

  const handleAddAlumni = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAlumni.name) return;
    addAlumni({
      ...newAlumni,
      id: `alumni-${Date.now()}`,
    });
    triggerSaveNotification();
    setNewAlumni({
      ...newAlumni,
      name: "",
    });
  };

  const exportConfigJson = () => {
    const configData = {
      identity,
      stats,
      featuredEvent,
      alumniList,
      resultsList,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(configData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `kletech_upsc_content_backup_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#091535] border-2 border-amber-500/50 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          aria-label="Close admin modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-1">
              <Shield className="w-4 h-4" />
              <span>CONTENT ARCHITECTURE & ADMIN MANAGER</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              KLE Tech UPSC Administration Portal
            </h3>
            <p className="text-xs text-slate-400 font-light">
              Live in-browser content manager. Changes persist automatically in browser storage.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportConfigJson}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-200 hover:text-white flex items-center gap-1.5 border border-white/5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>EXPORT JSON</span>
            </button>

            <button
              onClick={resetToDefaults}
              className="px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/40 text-xs font-mono text-red-300 border border-red-500/30 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET DEFAULTS</span>
            </button>
          </div>
        </div>

        {/* Notification Pill */}
        {saveNotification && (
          <div className="mb-6 p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-bold flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>CHANGES PERSISTED SUCCESSFULLY TO LIVE WEBSITE</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 border-b border-white/10 no-scrollbar">
          {[
            { id: "stats", label: "STATISTICS & METRICS" },
            { id: "results", label: "USN RESULTS DATABASE" },
            { id: "alumni", label: "ALUMNI IN SERVICE" },
            { id: "event", label: "FEATURED EVENT" },
            { id: "identity", label: "LINKS & CONTACT" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-amber-500 text-slate-950 shadow"
                  : "bg-white/5 text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Statistics */}
        {activeTab === "stats" && (
          <form onSubmit={handleSaveStats} className="space-y-6">
            <div className="text-xs text-slate-300 font-mono mb-4">
              Update large animated statistics displayed on homepage:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  SESSIONS COUNT (e.g. 25+)
                </label>
                <input
                  type="text"
                  value={statsForm.sessionsCount}
                  onChange={(e) =>
                    setStatsForm({ ...statsForm, sessionsCount: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  STUDENT PARTICIPATIONS (e.g. 650+)
                </label>
                <input
                  type="text"
                  value={statsForm.participationsCount}
                  onChange={(e) =>
                    setStatsForm({ ...statsForm, participationsCount: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  MENTOR INTERACTIONS (e.g. 15+)
                </label>
                <input
                  type="text"
                  value={statsForm.mentorsCount}
                  onChange={(e) =>
                    setStatsForm({ ...statsForm, mentorsCount: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  ACTIVITIES & CHALLENGES (e.g. 12+)
                </label>
                <input
                  type="text"
                  value={statsForm.activitiesCount}
                  onChange={(e) =>
                    setStatsForm({ ...statsForm, activitiesCount: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>SAVE STATISTICS</span>
            </button>
          </form>
        )}

        {/* Tab 2: USN Results Database */}
        {activeTab === "results" && (
          <div className="space-y-8">
            {/* Add Result Form */}
            <form onSubmit={handleAddResult} className="p-5 rounded-xl bg-[#050b1d] border border-white/10 space-y-4">
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                ADD / UPDATE STUDENT RESULT BY USN
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    USN *
                  </label>
                  <input
                    type="text"
                    required
                    value={newResult.usn}
                    onChange={(e) =>
                      setNewResult({ ...newResult, usn: e.target.value.toUpperCase() })
                    }
                    placeholder="01FE22BCS..."
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs font-mono uppercase focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    STUDENT NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={newResult.studentName}
                    onChange={(e) =>
                      setNewResult({ ...newResult, studentName: e.target.value })
                    }
                    placeholder="Student Name"
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    BRANCH
                  </label>
                  <input
                    type="text"
                    value={newResult.branch}
                    onChange={(e) =>
                      setNewResult({ ...newResult, branch: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    SCORE (MARKS)
                  </label>
                  <input
                    type="number"
                    value={newResult.score}
                    onChange={(e) =>
                      setNewResult({ ...newResult, score: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    TOTAL MARKS
                  </label>
                  <input
                    type="number"
                    value={newResult.totalMarks}
                    onChange={(e) =>
                      setNewResult({ ...newResult, totalMarks: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    PERCENTILE (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={newResult.percentile}
                    onChange={(e) =>
                      setNewResult({ ...newResult, percentile: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    RANK / STANDING
                  </label>
                  <input
                    type="text"
                    value={newResult.rank}
                    onChange={(e) =>
                      setNewResult({ ...newResult, rank: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                  EXAM / INITIATIVE TITLE
                </label>
                <input
                  type="text"
                  value={newResult.examName}
                  onChange={(e) =>
                    setNewResult({ ...newResult, examName: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                  EVALUATION REMARKS
                </label>
                <input
                  type="text"
                  value={newResult.remarks}
                  onChange={(e) =>
                    setNewResult({ ...newResult, remarks: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>SAVE / UPDATE THIS USN RESULT</span>
              </button>
            </form>

            {/* List of Registered Results */}
            <div>
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                CURRENT VERIFIED USN ENTRIES ({resultsList.length} Records)
              </div>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {resultsList.map((r) => (
                  <div
                    key={r.usn}
                    className="p-3 rounded-lg bg-[#050b1d] border border-white/5 flex items-center justify-between text-xs font-mono"
                  >
                    <div>
                      <span className="font-bold text-amber-300 mr-3">{r.usn}</span>
                      <span className="text-white font-semibold">{r.studentName}</span>
                      <span className="text-slate-500 ml-2">({r.branch})</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-bold">
                        {r.score}/{r.totalMarks}
                      </span>
                      <span className="text-slate-400">{r.rank}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Alumni Management */}
        {activeTab === "alumni" && (
          <div className="space-y-8">
            <form onSubmit={handleAddAlumni} className="p-5 rounded-xl bg-[#050b1d] border border-white/10 space-y-4">
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                ADD VERIFIED ALUMNI PROFILE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    ALUMNI NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={newAlumni.name}
                    onChange={(e) =>
                      setNewAlumni({ ...newAlumni, name: e.target.value })
                    }
                    placeholder="Full Name"
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    SERVICE *
                  </label>
                  <select
                    value={newAlumni.service}
                    onChange={(e) =>
                      setNewAlumni({ ...newAlumni, service: e.target.value as any })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                  >
                    <option value="IAS">IAS (Administrative)</option>
                    <option value="IPS">IPS (Police)</option>
                    <option value="IFS">IFS (Foreign)</option>
                    <option value="IRS">IRS (Revenue)</option>
                    <option value="OTHER SERVICES">OTHER SERVICES (State / Allied)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    BATCH / YEAR
                  </label>
                  <input
                    type="text"
                    value={newAlumni.batch}
                    onChange={(e) =>
                      setNewAlumni({ ...newAlumni, batch: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    DESIGNATION / SERVICE TITLE
                  </label>
                  <input
                    type="text"
                    value={newAlumni.designation}
                    onChange={(e) =>
                      setNewAlumni({ ...newAlumni, designation: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                    CURRENT POSTING / ROLE
                  </label>
                  <input
                    type="text"
                    value={newAlumni.currentRole}
                    onChange={(e) =>
                      setNewAlumni({ ...newAlumni, currentRole: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">
                  COUNSEL & ADVICE FOR STUDENTS
                </label>
                <textarea
                  rows={2}
                  value={newAlumni.advice}
                  onChange={(e) =>
                    setNewAlumni({ ...newAlumni, advice: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-[#081538] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>ADD ALUMNI RECORD</span>
              </button>
            </form>

            {/* Existing List */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                EXISTING ALUMNI RECORDS ({alumniList.length})
              </div>
              {alumniList.map((a) => (
                <div
                  key={a.id}
                  className="p-3 rounded-lg bg-[#050b1d] border border-white/5 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold text-amber-400 mr-2 font-mono">
                      [{a.service}]
                    </span>
                    <span className="text-white font-semibold">{a.name}</span>
                    <span className="text-slate-500 ml-2">({a.batch})</span>
                  </div>
                  <button
                    onClick={() => deleteAlumni(a.id)}
                    className="text-red-400 hover:text-red-300 p-1"
                    title="Delete profile"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Featured Event */}
        {activeTab === "event" && (
          <form onSubmit={handleSaveEvent} className="space-y-4">
            <div className="text-xs text-slate-300 font-mono mb-2">
              Update the dominant featured event card on the homepage:
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                EVENT TITLE
              </label>
              <input
                type="text"
                value={eventForm.title}
                onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs font-display font-bold focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  DATE & TIME
                </label>
                <input
                  type="text"
                  value={eventForm.date}
                  onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  VENUE
                </label>
                <input
                  type="text"
                  value={eventForm.venue}
                  onChange={(e) => setEventForm({ ...eventForm, venue: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  SPEAKER / DIGNITARY
                </label>
                <input
                  type="text"
                  value={eventForm.speaker || ""}
                  onChange={(e) =>
                    setEventForm({ ...eventForm, speaker: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                DESCRIPTION
              </label>
              <textarea
                rows={3}
                value={eventForm.description}
                onChange={(e) =>
                  setEventForm({ ...eventForm, description: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                REGISTRATION FORM URL
              </label>
              <input
                type="url"
                value={eventForm.registrationUrl || ""}
                onChange={(e) =>
                  setEventForm({ ...eventForm, registrationUrl: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>UPDATE FEATURED EVENT</span>
            </button>
          </form>
        )}

        {/* Tab 5: Links & Contact */}
        {activeTab === "identity" && (
          <form onSubmit={handleSaveIdentity} className="space-y-4">
            <div className="text-xs text-slate-300 font-mono mb-2">
              Update official contact email, registration form, and community URLs:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  OFFICIAL CONTACT EMAIL
                </label>
                <input
                  type="email"
                  value={identityForm.contactEmail}
                  onChange={(e) =>
                    setIdentityForm({ ...identityForm, contactEmail: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  WHATSAPP COMMUNITY URL
                </label>
                <input
                  type="url"
                  value={identityForm.whatsappCommunityUrl}
                  onChange={(e) =>
                    setIdentityForm({
                      ...identityForm,
                      whatsappCommunityUrl: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  INSTAGRAM URL
                </label>
                <input
                  type="url"
                  value={identityForm.instagramUrl}
                  onChange={(e) =>
                    setIdentityForm({ ...identityForm, instagramUrl: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  LINKEDIN URL
                </label>
                <input
                  type="url"
                  value={identityForm.linkedinUrl}
                  onChange={(e) =>
                    setIdentityForm({ ...identityForm, linkedinUrl: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                  ASPIRANT REGISTRATION FORM URL (GOOGLE FORM)
                </label>
                <input
                  type="url"
                  value={identityForm.registrationFormUrl}
                  onChange={(e) =>
                    setIdentityForm({
                      ...identityForm,
                      registrationFormUrl: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#050b1d] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>SAVE OFFICIAL CHANNELS</span>
            </button>
          </form>
        )}

        {/* Modal Footer */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-6 mt-6 border-t border-white/10">
          <span>ADMIN CREDENTIALS ENFORCED • CLIENT REPOSITORY</span>
          <button
            onClick={onClose}
            className="text-amber-400 hover:text-amber-300 font-bold"
          >
            CLOSE PORTAL [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
