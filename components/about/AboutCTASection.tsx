export default function AboutCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] py-24 text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-pink-300/20 blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4D94]/10 blur-3xl"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl sm:text-sm">
          Join The Dlamvuzo Community
        </div>

        {/* Heading */}
        <h2 className="mx-auto mb-8 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Building A Brighter Future Through
          <span className="mt-2 block bg-gradient-to-r from-pink-200 via-white to-pink-100 bg-clip-text text-transparent">
            Education & Leadership
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
          Become part of a school committed to academic excellence,
          discipline, innovation, leadership, and empowering every learner
          to achieve future success.
        </p>

        {/* Motto Card */}
        <div className="mx-auto mb-10 max-w-2xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-pink-100">
            School Motto
          </div>

          <h3 className="text-3xl font-black text-white sm:text-4xl">
            “Light Is Life”
          </h3>

          <p className="mt-4 text-base leading-8 text-white/80">
            Inspiring knowledge, hope, growth, leadership,
            and opportunity for every learner.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
          
          <button className="rounded-2xl bg-white px-8 py-4 text-base font-bold text-[#D81B60] shadow-2xl transition duration-300 hover:scale-105 hover:bg-pink-50 sm:text-lg">
            Apply For Admission
          </button>

          <button className="rounded-2xl border-2 border-white/80 px-8 py-4 text-base font-bold text-white transition duration-300 hover:bg-white hover:text-[#D81B60] sm:text-lg">
            Contact School
          </button>
        </div>
      </div>
    </section>
  );
}