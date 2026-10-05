"use client";

import Image from "next/image";
import { ArrowUpRight, Compass, Layers, Users, Globe } from "lucide-react";
import { FLIPBOOK_URL } from "@/lib/config";

export default function EditorialSection() {
  const isExternal = FLIPBOOK_URL.startsWith("http");

  return (
    <section id="about" className="w-full py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          
          {/* ── LEFT COLUMN: Mission & Coordinates (Span 4) ── */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-10">
            <div className="space-y-4">
              <span className="font-body text-[10px] tracking-[0.24em] text-[#F5B82E] uppercase font-bold">
                OUR MISSION
              </span>
              
              <h3 className="font-body font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#FFFFFF] leading-snug">
                PRESERVING THE STORIES THAT DEFINE OUR GENERATION.
              </h3>

              <p className="font-body text-[13px] md:text-[14px] leading-relaxed text-[#9E988F]">
                At BHAGI, we believe student expression is the genuine heartbeat of College of
                Engineering Vadakara. Every page stands as an unapologetic record of who we are,
                what we questioned, and what we stood for.
              </p>

              <div>
                <a
                  href={FLIPBOOK_URL}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-[#F5B82E] hover:text-[#FFC94A] font-body text-[11px] tracking-[0.16em] uppercase font-bold underline underline-offset-4"
                >
                  <span>Read Digital Edition</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Coordinates / Polaroid Card (Modeled after reference image bottom-left card) */}
            <div className="p-3 bg-[#101010] border border-white/[0.1] rounded-sm max-w-[240px]">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-[#181818] mb-3">
                <Image
                  src="/bhagi-cover.jpg"
                  alt="CEV Campus Coordinates"
                  fill
                  sizes="240px"
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#F5F0E8] border-t border-white/[0.08] pt-2">
                <span>11.6025° N, 75.5907° E</span>
                <Globe size={12} className="text-[#F5B82E]" />
              </div>
              <div className="text-[9px] font-body tracking-[0.18em] text-[#9E988F] uppercase mt-0.5">
                VADAKARA · KERALA
              </div>
            </div>
          </div>

          {/* ── CENTER COLUMN: Tall Feature Banner (Span 4) ── */}
          <div className="lg:col-span-4 flex">
            <div className="w-full relative min-h-[420px] lg:min-h-[520px] rounded-md overflow-hidden border border-[#F5B82E]/30 bg-[#0C0C0C] group shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-end p-6">
              {/* Background Cover Image with Stylized Overlay */}
              <Image
                src="/bhagi-cover.jpg"
                alt="BHAGI Edition Feature"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-top opacity-55 group-hover:opacity-75 transition-opacity duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/40 to-transparent" />

              <div className="relative z-10 space-y-2">
                <span className="font-body text-[9px] tracking-[0.24em] text-[#F5B82E] uppercase font-bold">
                  ARCHIVAL EDITION
                </span>
                <h4 className="font-display text-3xl text-[#FFFFFF] tracking-wide">
                  CEV 2025–26
                </h4>
                <p className="font-body text-[12px] text-[#A69A86] leading-relaxed">
                  A high-definition print and digital milestone published by the College Union.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Curated Feature Items (Span 4) ── */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6" id="features">
            
            {/* Feature 1 */}
            <div className="p-5 bg-[#0E0E0E]/80 border border-white/[0.08] hover:border-[#F5B82E]/40 transition-colors rounded-sm flex flex-col gap-3">
              <div className="w-8 h-8 rounded bg-[#1A1A1A] flex items-center justify-center text-[#F5B82E]">
                <Compass size={16} />
              </div>
              <div>
                <h4 className="font-body font-bold text-[13px] tracking-[0.14em] text-[#F5F0E8] uppercase mb-1">
                  CURATED PERSPECTIVES
                </h4>
                <p className="font-body text-[12px] text-[#9E988F] leading-relaxed">
                  Handpicked student essays, opinion editorials, creative fiction, and campus memoirs.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-5 bg-[#0E0E0E]/80 border border-white/[0.08] hover:border-[#F5B82E]/40 transition-colors rounded-sm flex flex-col gap-3">
              <div className="w-8 h-8 rounded bg-[#1A1A1A] flex items-center justify-center text-[#F5B82E]">
                <Layers size={16} />
              </div>
              <div>
                <h4 className="font-body font-bold text-[13px] tracking-[0.14em] text-[#F5F0E8] uppercase mb-1">
                  BRUTALIST VISUAL DESIGN
                </h4>
                <p className="font-body text-[12px] text-[#9E988F] leading-relaxed">
                  Designed with sharp typography, authentic photography, and an uncompromising layout.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-5 bg-[#0E0E0E]/80 border border-white/[0.08] hover:border-[#F5B82E]/40 transition-colors rounded-sm flex flex-col gap-3" id="union">
              <div className="w-8 h-8 rounded bg-[#1A1A1A] flex items-center justify-center text-[#F5B82E]">
                <Users size={16} />
              </div>
              <div>
                <h4 className="font-body font-bold text-[13px] tracking-[0.14em] text-[#F5F0E8] uppercase mb-1">
                  COLLEGE UNION TEAM
                </h4>
                <p className="font-body text-[12px] text-[#9E988F] leading-relaxed">
                  Authored, curated, and produced by the student editorial collective of CE Vadakara.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
