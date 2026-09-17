"use client";

import React from "react";
import { BrandLogo } from "./BrandLogo";
import { AshokaChakraEmblem } from "./AshokaChakraEmblem";
import { useClubContent } from "@/data/contentStore";
import {
  Mail,
  Instagram,
  MessageCircle,
  Linkedin,
  MapPin,
  ArrowUp,
  Shield,
  Award,
} from "lucide-react";

interface FooterProps {
  onOpenAdminModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminModal }) => {
  const { identity } = useClubContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Pillars", href: "#pillars" },
    { label: "Journey", href: "#journey" },
    { label: "Activities", href: "#activities" },
    { label: "Results (USN)", href: "#results" },
    { label: "Alumni in Service", href: "#alumni" },
    { label: "Knowledge Hub", href: "#knowledge-hub" },
    { label: "Events", href: "#events" },
    { label: "Team", href: "#team" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#030712] text-slate-400 border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Background Watermark */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none select-none">
        <AshokaChakraEmblem size={400} color="#eab308" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="lg" />

            <div className="pt-2">
              <p className="font-display text-lg text-white font-bold tracking-wide italic">
                “FROM CAMPUS TO CIVIL SERVICES.”
              </p>
              <p className="text-xs text-amber-400/90 font-mono tracking-wider mt-1 uppercase">
                Discover. Prepare. Learn. Aspire. Serve.
              </p>
            </div>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-md">
              A university-backed student organization at KLE Technological University
              Hubballi, dedicated to creating awareness, providing structured guidance,
              and nurturing future administrative leaders committed to nation-building.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500/70" />
              <span>B. V. Bhoomaraddi Campus • Vidyanagar, Hubballi - 580031</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-4">
              SITE MAP & PORTALS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-amber-300 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-slate-600">•</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Social & Admin Access */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-4">
              COMMUNITY CHANNELS
            </h4>

            <div className="flex items-center gap-2">
              <a
                href={identity.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-colors border border-white/5"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={identity.whatsappCommunityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors border border-white/5"
                title="WhatsApp Community"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={identity.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-colors border border-white/5"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${identity.contactEmail}`}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors border border-white/5"
                title="Email Official Desk"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href="#results"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold hover:bg-amber-900/40 transition-colors"
              >
                <Award className="w-3.5 h-3.5" />
                <span>USN Result Verification</span>
              </a>
            </div>

            {/* Back to top & Admin Modal button */}
            <div className="pt-3 flex items-center gap-3">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>BACK TO TOP</span>
              </button>

              <span className="text-slate-700">•</span>

              <button
                onClick={onOpenAdminModal}
                className="flex items-center gap-1 text-[11px] font-mono text-slate-500 hover:text-amber-400"
              >
                <Shield className="w-3 h-3" />
                <span>Admin Portal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & University Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} KLE Technological University UPSC Aspirants Club. All rights reserved.
          </div>
          <div>
            Official Student Body • Hubballi, Karnataka, India
          </div>
        </div>
      </div>
    </footer>
  );
};
