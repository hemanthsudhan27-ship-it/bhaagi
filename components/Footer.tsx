"use client";

import { ArrowUpRight } from "lucide-react";
import { FLIPBOOK_URL } from "@/lib/config";

export default function Footer() {
  const isExternal = FLIPBOOK_URL.startsWith("http");

  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-white/[0.08] bg-[#070707] py-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5B82E]" />
            <span className="font-display text-lg tracking-[0.2em] text-[#F5F0E8] uppercase">
              BHAGI
            </span>
          </div>
          <span className="font-body text-[11px] tracking-[0.16em] text-[#9E988F] uppercase">
            Official Magazine of College Union · College of Engineering Vadakara · 2026
          </span>
        </div>

        {/* Footer Links & CTA */}
        <div className="flex items-center gap-6">
          <a
            href={FLIPBOOK_URL}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label="Read BHAGI digital flipbook edition"
            className="
              inline-flex items-center gap-2
              px-4 py-2.5
              bg-[#F5B82E] text-[#070707]
              font-body font-bold text-[11px] tracking-[0.14em] uppercase
              rounded-sm
              hover:bg-[#FFC94A]
              transition-colors duration-150
            "
          >
            <span>Open Flipbook</span>
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </footer>
  );
}
