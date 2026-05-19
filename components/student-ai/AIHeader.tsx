export default function AIHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-[#E5006D]/10 bg-white/90 backdrop-blur-xl lg:left-80">
      
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* AI ICON */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] text-2xl text-white shadow-xl">
            🤖
          </div>

          {/* TITLE */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C2185B]">
              Dlamvuzo AI Assistant
            </p>

            <h1 className="text-2xl font-black text-[#C2185B]">
              Student AI Tutor
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-4 sm:flex">
          
          {/* STATUS CARD */}
          <div className="rounded-2xl border border-[#E5006D]/10 bg-[#FFF0F6] px-5 py-3">
            <p className="text-xs text-[#C2185B]/70">AI Status</p>
            <h3 className="font-bold text-[#C2185B]">Online</h3>
          </div>

          {/* NEW CHAT BUTTON */}
          <button className="rounded-2xl bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B] px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(229,0,109,0.25)] transition hover:scale-105 active:scale-95">
            New Chat
          </button>
        </div>
      </div>
    </header>
  );
}