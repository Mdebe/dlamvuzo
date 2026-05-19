export default function PortalTopbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#58B947]/10 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="px-4 py-4 sm:px-6 lg:px-10">
        
        {/* MOBILE + DESKTOP LAYOUT */}
        <div className="flex items-center justify-between gap-4">
          
          {/* LEFT CONTENT */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              
              {/* MOBILE INDICATOR */}
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#58B947] to-[#2E7D32] text-xl text-white shadow-lg lg:hidden">
                🎓
              </div>

              <div className="min-w-0">
                <h1 className="truncate text-xl font-black text-[#2E7D32] sm:text-2xl lg:text-3xl">
                  Student Dashboard
                </h1>

                <p className="mt-1 hidden text-sm text-gray-600 sm:block">
                  Welcome back to Lizwi Secondary School Portal.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex items-center gap-3 sm:gap-5">
            
            {/* ACADEMIC YEAR CARD */}
            <div className="hidden rounded-2xl border border-[#58B947]/10 bg-[#F5F5F5] px-4 py-3 sm:block">
              <p className="text-xs text-gray-500 lg:text-sm">
                Academic Year
              </p>

              <h3 className="font-bold text-[#2E7D32]">
                2026
              </h3>
            </div>

            {/* NOTIFICATION BUTTON */}
            <button
              type="button"
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#58B947]/10 bg-[#F5F5F5] text-xl shadow-sm transition hover:bg-[#58B947]/10"
            >
              🔔

              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
            </button>

            {/* PROFILE */}
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#58B947] to-[#2E7D32] text-xl text-white shadow-xl transition hover:scale-105"
            >
              👤
            </button>
          </div>
        </div>

        {/* MOBILE SUBTEXT */}
        <div className="mt-3 block sm:hidden">
          <p className="text-sm text-gray-600">
            Welcome back to Lizwi Secondary School Portal.
          </p>
        </div>
      </div>
    </header>
  );
}