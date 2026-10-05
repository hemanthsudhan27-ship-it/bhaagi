"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FLIPBOOK_URL } from "@/lib/config";

export default function Navbar() {
  const isExternal = FLIPBOOK_URL.startsWith("http");

  return (
    <header className="w-full border-b border-white/[0.08] bg-[#070707]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-[#F5B82E]" />
          <span className="font-display text-xl tracking-[0.18em] text-[#F5F0E8] group-hover:text-[#F5B82E] transition-colors uppercase">
            BHAGI
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[12px] font-body tracking-[0.15em] text-[#9E988F] uppercase">
          <a href="#about" className="hover:text-[#F5F0E8] transition-colors">
            About
          </a>
          <a href="#overview" className="hover:text-[#F5F0E8] transition-colors">
            Highlights
          </a>
          <a href="#features" className="hover:text-[#F5F0E8] transition-colors">
            Editorial
          </a>
          <a href="#union" className="hover:text-[#F5F0E8] transition-colors">
            CEV Union
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={FLIPBOOK_URL}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="
              inline-flex items-center gap-1.5
              px-4 py-2
              bg-[#F5B82E] text-[#070707]
              font-body font-semibold text-[11px] tracking-[0.14em] uppercase
              rounded-sm
              hover:bg-[#FFC94A]
              transition-all duration-150
              active:scale-[0.98]
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F5B82E]
            "
          >
            <span>Read Magazine</span>
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </header>
  );
}
