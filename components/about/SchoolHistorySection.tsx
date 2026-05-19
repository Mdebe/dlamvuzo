export default function SchoolHistorySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#12040B] via-[#1A0610] to-black py-24 text-white">
      
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#E5006D]/20 blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        
        <div className="grid gap-14 lg:grid-cols-[55%_45%] lg:items-center">
          
          {/* Text Content */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-200 backdrop-blur-xl">
              Dlamvuzo Heritage
            </div>

            <h2 className="mb-8 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              A Tradition Of
              <span className="block bg-gradient-to-r from-[#E5006D] via-[#FF4D94] to-white bg-clip-text text-transparent">
                Academic Excellence
              </span>
            </h2>

            <p className="mb-6 text-base leading-8 text-white/80 sm:text-lg">
              Located in Richards Bay under the King Cetshwayo District,
              Dlamvuzo High School has built a strong reputation for academic
              achievement, discipline, leadership, and learner development.
            </p>

            <p className="mb-6 text-base leading-8 text-white/70 sm:text-lg">
              Our institution creates a positive and inspiring environment
              where learners are encouraged to reach their full potential
              academically and socially.
            </p>

            <p className="text-base leading-8 text-white/70 sm:text-lg">
              Through dedication, innovation, and strong values, Dlamvuzo High
              School continues to prepare learners for successful futures.
            </p>
          </div>

          {/* Image/Visual Card */}
          <div className="relative">
            
            {/* Back Layer */}
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.5rem] bg-gradient-to-br from-[#E5006D] to-[#FF4D94] opacity-40 blur-sm"></div>

            {/* Main Card */}
            <div className="relative flex min-h-[520px] items-center justify-center rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
              
              {/* Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#E5006D]/20 blur-3xl"></div>

              <div className="text-center">
                
                <div className="mb-6 text-7xl">🏫</div>

                <h3 className="mb-4 text-4xl font-black">
                  Dlamvuzo High School
                </h3>

                <p className="mx-auto max-w-md text-lg leading-8 text-white/80">
                  Building future leaders through excellence,
                  discipline, innovation, and quality education.
                </p>

                <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#E5006D] to-[#FF4D94]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}