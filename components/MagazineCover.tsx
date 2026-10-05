"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function MagazineCover() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 22 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateX.set(-dy * 3.5);
    rotateY.set(dx * 3.5);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 900 }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Atmospheric glow behind the cover */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-10%] -z-10 rounded-full blur-[72px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(245,184,46,0.22), rgba(0,0,0,0) 68%)",
        }}
        animate={{ opacity: hovered ? 1 : 0.65 }}
        transition={{ duration: 0.6 }}
      />

      {/* Tilt wrapper */}
      <motion.div
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        animate={{ scale: hovered ? 1.015 : 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9),0_0_0_1px_rgba(245,184,46,0.08)]"
      >
        {/* Cover image — responsive sizing via CSS */}
        <div className="relative w-[80vw] sm:w-[55vw] md:w-[44vw] lg:w-[42vw] xl:w-[480px] max-w-[480px]">
          <Image
            src="/bhagi-cover.jpg"
            alt="BHAGI — College Union Magazine, College of Engineering Vadakara"
            width={640}
            height={896}
            priority
            className="block w-full h-auto"
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 55vw, (max-width: 1024px) 44vw, 480px"
          />

          {/* Inner shadow for depth */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.55)" }}
          />

          {/* Warm sheen on hover */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,184,46,0.07), transparent 60%)",
            }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
