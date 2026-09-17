"use client";

import React, { useState } from "react";
import {
  KNOWLEDGE_CATEGORIES,
  KNOWLEDGE_ARTICLES,
  KnowledgeCategory,
  KnowledgeArticle,
} from "@/data/knowledgeHub";
import {
  Search,
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  X,
  FileText,
  Download,
  CheckCircle2,
} from "lucide-react";

export const KnowledgeHubSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<KnowledgeCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<KnowledgeArticle | null>(null);

  const filteredArticles = KNOWLEDGE_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "ALL" || article.category === selectedCategory;
    const matchesQuery =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="knowledge-hub" className="py-24 bg-[#060e24] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              ACADEMIC REPOSITORY
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              KNOWLEDGE HUB
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light">
            Curated analyses, syllabus breakdowns, answer-writing frameworks, and foundational study
            resources authored for university aspirants.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search syllabus, articles & frameworks..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#081538] border border-white/10 text-white placeholder:text-slate-500 text-xs font-mono focus:outline-none focus:border-amber-400/80 transition-colors"
            />
          </div>

          {/* Categories Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {KNOWLEDGE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-wider whitespace-nowrap uppercase transition-all ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                    : "bg-[#091535] text-slate-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="institutional-card p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/30 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                    <Clock className="w-3 h-3 text-amber-500/80" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="font-display font-bold text-lg text-white tracking-wide mb-3 group-hover:text-amber-300 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6 line-clamp-3">
                  {article.shortDescription}
                </p>

                {/* Key Takeaways Preview */}
                <div className="mb-4 pt-3 border-t border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                    KEY INSIGHTS:
                  </div>
                  <ul className="space-y-1.5">
                    {article.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                      <li
                        key={idx}
                        className="text-[11px] text-slate-400 flex items-start gap-2 line-clamp-1"
                      >
                        <span className="text-amber-400">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="text-[10px] font-mono text-slate-500">
                  {article.author}
                </div>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 tracking-wider uppercase transition-colors"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#091535] border border-white/10">
            <p className="text-slate-400 text-sm">
              No articles match the selected category or search keyword.
            </p>
          </div>
        )}
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#081436] border border-amber-500/40 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[92vh]">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                {activeArticle.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {activeArticle.readTime}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-slate-400">
                {activeArticle.publishedDate}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wide mb-3 leading-snug">
              {activeArticle.title}
            </h3>

            <div className="text-xs font-mono text-amber-400/90 mb-6">
              AUTHORED BY: {activeArticle.author}
            </div>

            {/* Key Takeaways Box */}
            <div className="p-5 rounded-xl bg-[#040a1d] border border-amber-500/25 mb-8">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>EXECUTIVE SUMMARY & KEY TAKEAWAYS</span>
              </div>
              <ul className="space-y-2">
                {activeArticle.keyTakeaways.map((k, i) => (
                  <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Markdown/Article Content */}
            <div className="prose prose-invert prose-sm sm:prose-base max-w-none text-slate-300 leading-relaxed font-light space-y-4 whitespace-pre-line border-t border-white/10 pt-6">
              {activeArticle.content}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-6 mt-8 border-t border-white/10">
              <span>KLE TECH UPSC ASPIRANTS CLUB ACADEMIC ARCHIVES</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-amber-400 hover:text-amber-300 font-bold"
              >
                CLOSE [ESC]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
