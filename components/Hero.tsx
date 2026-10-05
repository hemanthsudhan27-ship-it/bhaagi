"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles, Globe } from "lucide-react";
import ReadButton from "./ReadButton";
import { FLIPBOOK_URL } from "@/lib/config";

export default function Hero() {
  const isExternal = FLIPBOOK_URL.startsWith("http");

  return (
    <section aria-label="BHAGI Hero Section" className="w-full relative overflow-hidden pt-8 pb-16 md:pb-24">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] -z-10 blur-[130px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #F5B82E 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── TOP: Giant Display Title (Like "INFINITY" in reference) ── */}
        <div className="relative border-b border-white/[0.08] pb-4 md:pb-6">
          <div className="flex items-start justify-between">
            <h1 className="font-display text-[clamp(4.5rem,15vw,13.5rem)] leading-[0.85] tracking-[-0.02em] text-[#F5F0E8] select-none">
              BHAGI
            </h1>
            <div className="pt-2 md:pt-4 text-[#F5B82E]">
              <Sparkles size={28} strokeWidth={1.5} className="animate-pulse" />
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT GRID: Left Info + Right Magazine Cover ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start pt-10 md:pt-14 relative">
          
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* The Quote (User requested: "WE WERE NEVER MEANT TO BE SILENT") */}
            <div className="space-y-3">
              <span className="font-body text-[11px] tracking-[0.25em] text-[#F5B82E] uppercase font-semibold">
                Official College Union Magazine
              </span>
              <h2 className="font-body font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#FFFFFF] leading-[1.08] max-w-xl">
                WE WERE NEVER MEANT TO BE SILENT.
              </h2>
            </div>

            {/* Description */}
            <p className="font-body text-[14px] md:text-[15px] leading-relaxed text-[#9E988F] max-w-lg">
              The official union magazine of College of Engineering Vadakara. A living archive
              of unfiltered student voices, literary revolt, poetic chronicles, and the shared
              stories that refuse to remain in the margins.
            </p>

            {/* Action Links & Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <ReadButton size="large" />

              <a
                href="#overview"
                className="
                  inline-flex items-center gap-1.5
                  px-4 py-3
                  text-[#9E988F] hover:text-[#F5F0E8]
                  font-body text-[11px] tracking-[0.16em] uppercase
                  border border-white/[0.1] hover:border-white/[0.25]
                  rounded-sm transition-colors duration-150
                "
              >
                <span>Explore Details</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* The Highlight Card (Inspired by the cobalt "Orbital 07" card in the reference) */}
            <div className="mt-4 p-5 sm:p-6 bg-[#0E0E0E] border border-[#F5B82E]/30 rounded-sm relative overflow-hidden max-w-md group hover:border-[#F5B82E]/60 transition-colors">
              {/* Subtle top corner gold badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-[9px] tracking-[0.22em] text-[#F5B82E] uppercase font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5B82E] animate-ping" />
                  CURRENT RELEASE
                </span>
                <span className="text-[10px] text-[#9E988F] font-mono">2025–2026</span>
              </div>

              <div className="text-xl sm:text-2xl font-body font-bold text-[#F5F0E8] tracking-tight mb-4">
                EDITION VOL. 01
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/[0.08]">
                <div>
                  <div className="font-display text-lg text-[#F5B82E]">120+</div>
                  <div className="text-[9px] font-body tracking-[0.16em] text-[#9E988F] uppercase">PAGES</div>
                </div>
                <div>
                  <div className="font-display text-lg text-[#F5B82E]">45+</div>
                  <div className="text-[9px] font-body tracking-[0.16em] text-[#9E988F] uppercase">ARTICLES</div>
                </div>
                <div>
                  <div className="font-display text-lg text-[#F5B82E]">CEV</div>
                  <div className="text-[9px] font-body tracking-[0.16em] text-[#9E988F] uppercase">UNION</div>
                </div>
              </div>
            </div>

            {/* Sub-tag with globe icon */}
            <div className="flex items-center gap-2 text-[#9E988F] text-[11px] font-body tracking-[0.18em] uppercase pt-2">
              <Globe size={13} className="text-[#F5B82E]" />
              <span>College of Engineering Vadakara · Calicut</span>
            </div>

          </div>

          {/* Right Column: Prominent Magazine Cover (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            
            {/* The Cover Card */}
            <div className="relative group">
              {/* Ambient Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 blur-[45px] rounded-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, #F5B82E 10%, transparent 70%)",
                }}
              />

              <div className="relative rounded-md overflow-hidden border border-white/[0.12] bg-[#0E0E0E] shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
                <Image
                  src="/bhagi-cover.jpg"
                  alt="BHAGI College Union Magazine Cover"
                  width={560}
                  height={780}
                  priority
                  className="block w-full max-w-[380px] h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 380px"
                />

                {/* Bottom Overlay Pill on Cover */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#070707]/80 backdrop-blur-md px-3 py-2 border border-white/[0.1] rounded flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F5B82E]" />
                    <span className="font-body text-[10px] tracking-[0.16em] text-[#F5F0E8] uppercase font-medium">
                      Official Flipbook
                    </span>
                  </div>
                  <a
                    href={FLIPBOOK_URL}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-[#F5B82E] hover:underline font-body text-[10px] tracking-[0.14em] uppercase flex items-center gap-0.5"
                  >
                    Open <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </div>

            {/* Vertical "SCROLL TO DISCOVER" indicator on desktop (like right edge of reference) */}
            <div className="hidden xl:flex flex-col items-center gap-3 absolute -right-10 top-1/2 -translate-y-1/2 text-[#9E988F]">
              <span className="text-[9px] font-body tracking-[0.28em] uppercase rotate-90 origin-center whitespace-nowrap select-none">
                SCROLL TO EXPLORE
              </span>
              <div className="w-px h-16 bg-white/[0.15] mt-6" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
