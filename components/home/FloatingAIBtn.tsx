'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FloatingAIBtn() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="/student-ai">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-3
          rounded-full
          bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B]
          px-5 py-4
          text-white
          shadow-[0_20px_70px_rgba(229,0,109,0.45)]
          border border-white/10
          transition-all duration-300
          hover:scale-105 active:scale-95
        "
      >
        {/* Glow */}
        <div className="absolute -inset-1 rounded-full bg-[#E5006D]/30 blur-xl opacity-70" />

        {/* Icon */}
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#C2185B] text-xl shadow-lg">
          🤖
        </div>

        {/* Text */}
        <span
          className={`
            relative text-sm font-bold tracking-wide transition-all duration-300
            ${hovered ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}
            sm:opacity-100 sm:w-auto
          `}
        >
          Dlamvuzo AI Tutor
        </span>

        {/* Pulse dot */}
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-yellow-300 animate-pulse" />
      </div>
    </Link>
  );
}