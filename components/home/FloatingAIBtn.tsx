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
          bg-gradient-to-r from-[#2E7D32] to-[#58B947]
          px-5 py-4
          text-white
          shadow-2xl
          transition-all duration-300
          hover:scale-105
          active:scale-95
        "
      >
        {/* Icon */}
        <div className="text-2xl">🤖</div>

        {/* Text (hidden on small screens unless hovered) */}
        <span
          className={`
            text-sm font-bold transition-all duration-300
            ${hovered ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}
            sm:opacity-100 sm:w-auto
          `}
        >
          Student AI
        </span>
      </div>
    </Link>
  );
}