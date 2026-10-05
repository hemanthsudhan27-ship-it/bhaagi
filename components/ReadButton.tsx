"use client";

import { useState } from "react";
import { ArrowUpRight, X, Sparkles } from "lucide-react";
import { FLIPBOOK_URL } from "@/lib/config";

interface ReadButtonProps {
  className?: string;
}

export default function ReadButton({ className = "" }: ReadButtonProps) {
  const [showNotice, setShowNotice] = useState(false);
  const isValidUrl =
    Boolean(FLIPBOOK_URL) &&
    FLIPBOOK_URL !== "YOUR_FLIPBOOK_URL" &&
    FLIPBOOK_URL.startsWith("http");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isValidUrl) {
      e.preventDefault();
      setShowNotice(true);
    }
  };

  return (
    <>
      <a
        href={isValidUrl ? FLIPBOOK_URL : "#"}
        onClick={handleClick}
        target={isValidUrl ? "_blank" : undefined}
        rel={isValidUrl ? "noopener noreferrer" : undefined}
        aria-label="Read BHAGI Magazine online"
        className={`
          group relative inline-flex items-center justify-center
          px-14 sm:px-20 py-5 sm:py-6
          min-h-[68px] sm:min-h-[76px]
          min-w-[280px] sm:min-w-[360px]
          bg-[#F5B82E] text-[#070707]
          font-body font-semibold text-[17px] sm:text-[19px] tracking-wide
          rounded-full
          shadow-[0_14px_45px_rgba(245,184,46,0.38)]
          hover:shadow-[0_20px_60px_rgba(245,184,46,0.55)]
          hover:bg-[#FFC93E]
          hover:scale-[1.025]
          active:scale-[0.98]
          transition-all duration-200 ease-out
          select-none cursor-pointer
          ${className}
        `}
      >
        {/* Perfectly centered text */}
        <span className="whitespace-nowrap text-center">
          Read the Magazine
        </span>

        {/* Clean, right-anchored arrow badge */}
        <div className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#070707]/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-[calc(50%+2px)] flex-shrink-0">
          <ArrowUpRight size={20} strokeWidth={2.5} aria-hidden="true" className="text-[#070707]" />
        </div>
      </a>

      {/* Helpful popup modal if URL is not yet updated in config.ts */}
      {showNotice && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150"
        >
          <div className="bg-[#111111] border border-[#F5B82E]/40 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative">
            <button
              onClick={() => setShowNotice(false)}
              className="absolute top-4 right-4 text-[#A69A86] hover:text-white p-1 rounded-full transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2.5 text-[#F5B82E] mb-3">
              <Sparkles size={20} />
              <span className="font-body text-xs uppercase tracking-widest font-bold">
                Flipbook Ready to Connect
              </span>
            </div>

            <h3 className="font-body text-xl font-bold text-white mb-2">
              Add your Flipbook Link
            </h3>

            <p className="font-body text-sm text-[#A69A86] leading-relaxed mb-5">
              The button is ready! To link your digital magazine or flipbook viewer, paste your link in{" "}
              <code className="bg-[#1A1A1A] text-[#F5B82E] px-2 py-0.5 rounded text-xs font-mono">
                lib/config.ts
              </code>{" "}
              under <code className="text-white text-xs">FLIPBOOK_URL</code>.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowNotice(false)}
                className="px-5 py-2.5 bg-[#F5B82E] text-black font-body font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#FFC93E] transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
