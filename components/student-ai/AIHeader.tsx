export default function AIHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-[#58B947]/10 bg-white/90 backdrop-blur-xl lg:left-80">
      
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* AI ICON */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#58B947] to-[#2E7D32] text-2xl text-white shadow-xl">
            🤖
          </div>

          {/* TITLE */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E7D32]">
              Dlamvuzo AI Assistant
            </p>

            <h1 className="text-2xl font-black text-[#2E7D32]">
              Student AI Tutor
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-4 sm:flex">
          
          {/* STATUS CARD */}
          <div className="rounded-2xl border border-[#58B947]/10 bg-[#F5F5F5] px-5 py-3">
            <p className="text-xs text-gray-500">AI Status</p>
            <h3 className="font-bold text-[#2E7D32]">Online</h3>
          </div>

          {/* NEW CHAT BUTTON */}
          <button className="rounded-2xl bg-gradient-to-r from-[#2E7D32] to-[#58B947] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 active:scale-95">
            New Chat
          </button>
        </div>
      </div>
    </header>
  );
}