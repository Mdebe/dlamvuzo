'use client';

import { useState } from 'react';

export default function PortalSidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { title: 'Dashboard', icon: '🏠' },
    { title: 'My Results', icon: '📊' },
    { title: 'Assignments', icon: '📝' },
    { title: 'Timetable', icon: '📅' },
    { title: 'Attendance', icon: '✅' },
    { title: 'Announcements', icon: '🔔' },
    { title: 'Profile', icon: '👤' },
    { title: 'Settings', icon: '⚙️' },
  ];

  return (
    <>
      {/* Mobile Button */}
      <div className="fixed right-4 top-4 z-[60] lg:hidden">
        <button
          type="button"
          aria-label="Open Menu"
          onClick={() => setOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] text-3xl text-white shadow-2xl transition active:scale-95"
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[88%] max-w-[340px] flex-col overflow-hidden bg-gradient-to-b from-[#12040B] via-[#1A0610] to-black text-white shadow-[0_20px_80px_rgba(0,0,0,0.5)] transition-transform duration-300 lg:static lg:w-80 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              
              {/* Logo */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#E5006D] bg-white/10 text-2xl font-black shadow-xl">
                DH
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                  Student Portal
                </p>

                <h1 className="mt-1 text-2xl font-black leading-tight">
                  Dlamvuzo H.S
                </h1>
              </div>
            </div>

            <button
              type="button"
              aria-label="Close Menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl transition hover:bg-white/20 lg:hidden"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Profile */}
        <div className="m-6 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E5006D] to-[#FF4D94] text-3xl shadow-xl">
              👤
            </div>

            <div>
              <h3 className="text-lg font-black">Welcome Back</h3>
              <p className="text-sm text-white/60">Dlamvuzo Learner</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 p-3 text-center">
              <p className="text-xs text-white/60">Attendance</p>
              <h4 className="mt-1 text-xl font-black text-[#FF4D94]">
                96%
              </h4>
            </div>

            <div className="rounded-2xl bg-white/10 p-3 text-center">
              <p className="text-xs text-white/60">Average</p>
              <h4 className="mt-1 text-xl font-black text-[#FF4D94]">
                78%
              </h4>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setOpen(false)}
                className={`group flex w-full items-center gap-4 rounded-3xl border px-5 py-4 text-left transition-all duration-300 ${
                  index === 0
                    ? 'border-[#E5006D]/40 bg-white/10 text-white shadow-xl'
                    : 'border-white/10 bg-white/5 text-white/80 hover:border-[#E5006D]/30 hover:bg-white/10'
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl shadow-lg ${
                    index === 0
                      ? 'bg-gradient-to-br from-[#E5006D] to-[#FF4D94] text-white'
                      : 'bg-white/10'
                  }`}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-xs text-white/50">Open Section</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        
      </aside>
    </>
  );
}