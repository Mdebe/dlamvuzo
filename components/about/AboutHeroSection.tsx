export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] py-24 text-white lg:py-32">
      
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-pink-300/20 blur-3xl"></div>

        <div className="absolute bottom-[-140px] right-[-140px] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4D94]/10 blur-3xl"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl sm:text-sm">
          About Dlamvuzo High School
        </div>

        {/* Heading */}
        <h1 className="mx-auto mb-8 max-w-5xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
          Shaping The Future Through
          <span className="mt-2 block bg-gradient-to-r from-pink-200 via-white to-pink-100 bg-clip-text text-transparent">
            Education & Leadership
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mx-auto max-w-4xl text-base leading-8 text-white/85 sm:text-lg lg:text-xl">
          Dlamvuzo High School is committed to academic excellence,
          leadership, discipline, and empowering learners to become
          confident future leaders in their communities and beyond.
        </p>

        {/* Motto Card */}
        <div className="mx-auto mt-12 max-w-2xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-pink-100">
            School Motto
          </div>

          <h2 className="text-3xl font-black text-white sm:text-4xl">
            “Light Is Life”
          </h2>

          <p className="mt-4 text-base leading-8 text-white/80">
            Representing knowledge, growth, hope, opportunity,
            and a brighter future through quality education.
          </p>
        </div>
      </div>
    </section>
  );
}