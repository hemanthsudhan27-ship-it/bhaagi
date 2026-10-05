"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
}

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function GoldParticles() {
  const particles = useRef<Particle[]>([]);

  if (particles.current.length === 0) {
    for (let i = 0; i < 28; i++) {
      particles.current.push({
        x: randomBetween(30, 75),
        y: randomBetween(5, 95),
        size: randomBetween(1, 2.5),
        opacity: randomBetween(0.05, 0.22),
        duration: randomBetween(6, 14),
        delay: randomBetween(0, 8),
        driftX: randomBetween(-12, 12),
        driftY: randomBetween(-20, -5),
      });
    }
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      {particles.current.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#F5B82E]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, p.driftY, 0],
            x: [0, p.driftX, 0],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
