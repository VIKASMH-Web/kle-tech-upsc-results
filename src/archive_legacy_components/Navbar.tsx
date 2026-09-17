"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { Menu, X, ArrowRight, Award, Search, Shield, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenJoinModal: () => void;
  onOpenAdminModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenJoinModal,
  onOpenAdminModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = [
        "home",
        "about",
        "pillars",
        "journey",
        "activities",
        "results",
        "alumni",
        "knowledge-hub",
        "events",
        "team",
        "gallery",
        "contact",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PILLARS", href: "#pillars" },
    { label: "JOURNEY", href: "#journey" },
    { label: "ACTIVITIES", href: "#activities" },
    {
      label: "RESULTS",
      href: "#results",
      badge: "USN",
      highlight: true,
    },
    { label: "ALUMNI", href: "#alumni" },
    { label: "KNOWLEDGE HUB", href: "#knowledge-hub" },
    { label: "EVENTS", href: "#events" },
    { label: "TEAM", href: "#team" },
    { label: "GALLERY", href: "#gallery" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2 bg-[#060e24]/95 backdrop-blur-md border-b border-amber-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            : "py-3.5 bg-gradient-to-b from-[#060e24]/90 via-[#060e24]/70 to-transparent backdrop-blur-sm border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Crest */}
          <Link href="#home" className="hover:opacity-95 transition-opacity">
            <BrandLogo size={isScrolled ? "sm" : "md"} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-3 text-xs font-semibold tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-2.5 py-1.5 rounded transition-colors duration-200 flex items-center gap-1 ${
                  link.highlight
                    ? "text-amber-300 font-bold bg-amber-950/40 border border-amber-500/30 hover:bg-amber-900/40 hover:text-amber-200"
                    : activeSection === link.href.replace("#", "")
                    ? "text-amber-400 font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#journey"
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-300 hover:text-white border border-slate-700/60 rounded-md hover:border-slate-500 transition-colors"
            >
              EXPLORE OUR JOURNEY
            </a>

            <button
              onClick={onOpenJoinModal}
              className="relative group overflow-hidden px-4 py-2 rounded-md bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-[#060e24] font-bold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(217,119,6,0.35)] hover:shadow-[0_0_25px_rgba(217,119,6,0.6)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                JOIN THE CLUB
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Subtle Admin trigger icon */}
            <button
              onClick={onOpenAdminModal}
              title="Admin Content Manager"
              className="p-1.5 text-slate-500 hover:text-amber-400 hover:bg-white/5 rounded transition-colors"
              aria-label="Admin settings"
            >
              <Shield className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="#results"
              className="px-2.5 py-1 text-[11px] font-bold tracking-wider rounded bg-amber-950/60 text-amber-300 border border-amber-500/40 flex items-center gap-1"
            >
              <Search className="w-3 h-3" />
              USN RESULT
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-md bg-slate-900/60 border border-slate-700/50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-16 right-0 bottom-0 w-5/6 max-w-sm bg-[#07112c] border-l border-amber-500/20 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
                  NAVIGATION SITEMAP
                </span>
                <button
                  onClick={onOpenAdminModal}
                  className="text-[11px] font-mono text-slate-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <Shield className="w-3 h-3" /> Admin
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-sm font-semibold tracking-wide flex items-center justify-between ${
                      link.highlight
                        ? "bg-amber-950/50 border border-amber-500/40 text-amber-300 font-bold"
                        : "text-slate-200 hover:bg-white/5 hover:text-amber-400"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge ? (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/30 text-amber-200 font-mono">
                        {link.badge} SEARCH
                      </span>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                JOIN THE CLUB
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#journey"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-md border border-slate-700 text-slate-300 font-semibold text-xs tracking-wider uppercase text-center hover:border-slate-500"
              >
                EXPLORE OUR JOURNEY
              </a>

              <p className="text-center text-[10px] text-slate-500 font-mono mt-2">
                KLE Technological University • Hubballi
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
