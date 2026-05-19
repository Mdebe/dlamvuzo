'use client';

import { useEffect, useState } from 'react';

export default function StatsSection() {
  const stats = [
    {
      label: 'Students',
      target: 1000,
      suffix: '+',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: 'Teachers',
      target: 50,
      suffix: '+',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5a8.38 8.38 0 0 1 8-4.5 8.38 8.38 0 0 1 8 4.5" />
          <path d="M12 3L4 7l8 4 8-4-8-4z" />
          <path d="M4 7v6c0 4 4 6 8 6s8-2 8-6V7" />
        </svg>
      ),
    },
    {
      label: 'Subjects',
      target: 30,
      suffix: '+',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20" />
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5V4.5z" />
          <path d="M8 2v20" />
        </svg>
      ),
    },
    {
      label: 'Pass Rate',
      target: 95,
      suffix: '%',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l3 6 6 .8-4.5 4.3 1.3 6-5.8-3-5.8 3 1.3-6L3 8.8 9 8z" />
        </svg>
      ),
    },
  ];

  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const duration = 1400;
    const intervalTime = 16;
    const steps = Math.ceil(duration / intervalTime);

    let frame = 0;

    const interval = setInterval(() => {
      frame += 1;

      setCounts((prev) =>
        prev.map((_, index) => {
          const target = stats[index].target;

          return Math.min(
            target,
            Math.round((target * frame) / steps)
          );
        })
      );

      if (frame >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff0f6] via-white to-[#fff5f9] py-20">
      
      {/* Background Glow Effects */}
      <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-pink-200/40 blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-[#E5006D]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#C2185B]">
            Light Is Life
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Dlamvuzo By The Numbers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Building a future of academic excellence, leadership,
            innovation, and community empowerment.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-[2rem] border border-pink-100 bg-white/80 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* Card Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-pink-200/40 to-transparent blur-3xl transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Top Gradient Line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B]"></div>

              <div className="relative p-8">
                
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E5006D] to-[#C2185B] text-white shadow-lg shadow-pink-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-pink-500/50">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="mt-8">
                  <h3 className="text-5xl font-black tracking-tight text-slate-900">
                    {counts[index]}
                    <span className="text-[#D81B60]">
                      {stat.suffix}
                    </span>
                  </h3>

                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C2185B]">
                    {stat.label}
                  </p>
                </div>

                {/* Decorative Bottom Accent */}
                <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-[#E5006D] to-[#C2185B] transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}