import Image from "next/image";
import ReadButton from "@/components/ReadButton";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#050505] text-[#F5F0E8] flex items-center justify-center relative overflow-hidden px-6 py-12 lg:py-0">
      
      {/* ── Atmospheric Spotlight Background (mirrors the spotlight on the cover) ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[600px] h-[600px] -z-10 blur-[140px] rounded-full pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(circle, #F5B82E 0%, transparent 65%)",
        }}
      />
      
      {/* Subtle vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)]"
      />

      {/* ── Main Container: Left Text & Right Cover ── */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ── LEFT: Typography & Apple-Style Button ── */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 order-2 lg:order-1">
          
          {/* Micro Tag */}
          <span className="font-body text-[11px] tracking-[0.3em] text-[#A69A86] uppercase font-medium">
            College Union · CEV
          </span>

          {/* BHAGI Title (using Permanent Marker font matching the cover) */}
          <div className="relative">
            <h1 className="font-marker text-7xl sm:text-8xl md:text-9xl text-[#F5B82E] tracking-normal leading-none select-none drop-shadow-[0_4px_24px_rgba(245,184,46,0.2)]">
              BHAGI
            </h1>
          </div>

          {/* The Quote */}
          <p className="font-body text-lg sm:text-xl md:text-2xl text-[#E8E2D8] font-light italic tracking-wide max-w-md">
            &ldquo;We were never meant to be silent.&rdquo;
          </p>

          {/* Apple-Style Yellow Button */}
          <div className="pt-2">
            <ReadButton />
          </div>

        </div>

        {/* ── RIGHT: The Magazine Cover ── */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative group">
            {/* Soft Ambient Light behind Cover */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 blur-[50px] opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"
              style={{
                background: "radial-gradient(circle, #F5B82E 20%, transparent 70%)",
              }}
            />

            {/* Framed Cover Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0E0E0E] shadow-[0_30px_90px_rgba(0,0,0,0.95)] transition-transform duration-500 ease-out group-hover:scale-[1.015]">
              <Image
                src="/bhagi-cover.jpg"
                alt="BHAGI Magazine Cover — College of Engineering Vadakara"
                width={520}
                height={730}
                priority
                className="block w-[75vw] sm:w-[50vw] md:w-[42vw] lg:w-[380px] xl:w-[420px] h-auto object-cover"
                sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 420px"
              />

              {/* Ultra-subtle glass shine line */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-2xl border border-white/[0.08]"
              />
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
