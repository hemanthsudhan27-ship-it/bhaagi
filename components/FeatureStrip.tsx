"use client";

import Image from "next/image";

export default function FeatureStrip() {
  const steps = [
    {
      num: "01",
      title: "UNFILTERED VOICES",
      desc: "Prose, fearless campus debates, and poems written without compromise.",
    },
    {
      num: "02",
      title: "VISUAL ANTHOLOGY",
      desc: "Thoughtful illustrations, photo essays, and brutalist graphic layouts.",
    },
    {
      num: "03",
      title: "DIGITAL FLIPBOOK",
      desc: "Smooth responsive flipbook edition ready to read on phone, tablet or desktop.",
    },
  ];

  return (
    <section id="overview" className="w-full border-y border-white/[0.08] bg-[#0A0A0A]/50 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 items-center">
          
          {/* 3 Step columns */}
          {steps.map((item, idx) => (
            <div
              key={item.num}
              className={`flex flex-col gap-2 ${
                idx < steps.length - 1 ? "md:border-r md:border-white/[0.08] md:pr-6" : ""
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl text-[#F5B82E] tracking-wider">
                  {item.num}
                </span>
                <span className="font-body text-[12px] font-bold tracking-[0.16em] text-[#F5F0E8] uppercase">
                  {item.title}
                </span>
              </div>
              <p className="font-body text-[12px] text-[#9E988F] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* 4th Column: Framed mini photo (like the astronaut mini photo in reference!) */}
          <div className="hidden md:flex justify-end">
            <div className="relative w-28 h-20 rounded border border-white/[0.15] overflow-hidden bg-[#111111] group">
              <Image
                src="/bhagi-cover.jpg"
                alt="BHAGI detail"
                fill
                sizes="112px"
                className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[#F5B82E]/10 mix-blend-overlay" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
