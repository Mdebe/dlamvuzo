'use client';

import { useState } from 'react';

const tools = [
  'AI Homework Help',
  'Math Solver',
  'Quiz Generator',
  'Study Notes',
  'Essay Assistant',
  'Exam Preparation',
];

export default function AISidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE OPEN BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#58B947] text-3xl text-white shadow-2xl lg:hidden"
      >
        ☰
      </button>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition lg:hidden ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[85%] max-w-[320px] flex-col bg-gradient-to-b from-[#1F5E25] via-[#2E7D32] to-[#58B947] text-white shadow-2xl transition-transform duration-300 lg:static lg:w-80 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* HEADER */}
        <div className="border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#F4D03F] bg-white/10 text-2xl shadow-xl">
                🤖
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Dlamvuzo AI
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  Student Tutor
                </h2>
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="rounded-xl bg-white/10 p-2 text-xl lg:hidden"
            >
              ✕
            </button>
          </div>
        </div>

        {/* TOOLS */}
        <div className="flex-1 overflow-y-auto p-6">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            AI Learning Tools
          </h3>

          <div className="space-y-3">
            {tools.map((tool) => (
              <button
                key={tool}
                type="button"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-left text-sm font-semibold transition hover:bg-white/15 hover:scale-[1.02]"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-white/10 p-6">
          <div className="rounded-[2rem] bg-white/10 p-5 backdrop-blur-xl">
            <h3 className="font-black text-[#F4D03F]">
              PRIORITISE
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/80">
              Dlamvuzo AI is built to support learners with smart tools for academic success, revision, and exam preparation.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}