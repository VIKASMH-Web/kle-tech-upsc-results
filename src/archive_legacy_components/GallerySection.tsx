"use client";

import React, { useState } from "react";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GalleryCategory,
  GalleryItem,
} from "@/data/gallery";
import {
  Image as ImageIcon,
  X,
  Maximize2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("ALL");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredGallery =
    selectedCategory === "ALL"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === selectedCategory);

  const currentIndex = activeItem
    ? filteredGallery.findIndex((g) => g.id === activeItem.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveItem(filteredGallery[currentIndex - 1]);
    } else {
      setActiveItem(filteredGallery[filteredGallery.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredGallery.length - 1) {
      setActiveItem(filteredGallery[currentIndex + 1]);
    } else {
      setActiveItem(filteredGallery[0]);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#060e24] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              CAMPUS ARCHIVES
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              VISUAL GALLERY
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light">
            Glimpses into our intellectual assemblies, debate floors, mapping sessions, and annual
            mentorship conventions at KLE Technological University.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                  : "bg-[#091535] text-slate-400 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-amber-500/50 transition-all duration-300 shadow-lg bg-[#081538]"
            >
              {/* Image Frame Placeholder with Institutional Ambient Gradient */}
              <div
                className={`h-56 w-full bg-gradient-to-br ${item.accentColor} p-6 flex flex-col justify-between group-hover:scale-105 transition-transform duration-500`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/40 text-amber-300 border border-white/10 uppercase">
                    {item.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-black/40 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-amber-400 mb-2">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-slate-300 line-clamp-2">
                    {item.placeholderDescription}
                  </div>
                </div>
              </div>

              {/* Caption Bar */}
              <div className="p-4 bg-[#060e24] border-t border-white/5">
                <h4 className="font-display font-bold text-sm text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{item.date}</span>
                  <span className="text-amber-400 text-[10px] uppercase font-bold">
                    VIEW PHOTO
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors hidden sm:flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors hidden sm:flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="relative max-w-4xl w-full rounded-2xl bg-[#091535] border border-amber-500/40 overflow-hidden shadow-2xl">
            {/* Expanded Visual Frame */}
            <div
              className={`w-full h-80 sm:h-96 bg-gradient-to-br ${activeItem.accentColor} p-8 flex flex-col justify-between items-center text-center relative`}
            >
              <div className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-black/50 text-amber-300 border border-white/10 uppercase">
                {activeItem.category} • {activeItem.date}
              </div>

              <div className="max-w-lg mx-auto">
                <Camera className="w-16 h-16 text-amber-400/70 mx-auto mb-4" />
                <p className="text-base sm:text-lg text-white font-medium">
                  {activeItem.placeholderDescription}
                </p>
              </div>

              <div className="text-[11px] font-mono text-slate-400">
                KLE TECH CAMPUS ARCHIVE RECORD #{activeItem.id.toUpperCase()}
              </div>
            </div>

            {/* Lightbox Info Bar */}
            <div className="p-6 bg-[#060e24] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  {activeItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {activeItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 sm:hidden"
                >
                  PREV
                </button>
                <button
                  onClick={handleNext}
                  className="px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 sm:hidden"
                >
                  NEXT
                </button>
                <span className="text-xs font-mono text-slate-500">
                  {currentIndex + 1} / {filteredGallery.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
