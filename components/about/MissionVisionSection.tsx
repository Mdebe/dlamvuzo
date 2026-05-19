export default function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#12040B] via-[#1A0610] to-black py-24 text-white">
      
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#E5006D]/20 blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        
        {/* Mission */}
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-12 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition hover:-translate-y-2 hover:border-[#E5006D]/40">
          
          {/* Glow */}
          <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-[#E5006D]/20 blur-3xl opacity-70"></div>

          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#E5006D] to-[#FF4D94] text-4xl text-white shadow-lg">
            🎯
          </div>

          <h2 className="mb-6 text-4xl font-black">
            Our Mission
          </h2>

          <p className="text-base leading-8 text-white/75">
            To provide quality education that empowers learners with knowledge,
            leadership skills, discipline, innovation, and values needed to
            succeed in an ever-changing world.
          </p>

          <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-[#E5006D] to-[#FF4D94] transition-all duration-300 group-hover:w-24"></div>
        </div>

        {/* Vision */}
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-12 shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition hover:-translate-y-2 hover:border-[#FF4D94]/40">
          
          {/* Glow */}
          <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-pink-500/20 blur-3xl opacity-70"></div>

          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#FF4D94] to-[#E5006D] text-4xl text-white shadow-lg">
            🌟
          </div>

          <h2 className="mb-6 text-4xl font-black">
            Our Vision
          </h2>

          <p className="text-base leading-8 text-white/75">
            To become a leading educational institution recognised for academic
            excellence, integrity, leadership development, and community impact.
          </p>

          <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-[#FF4D94] to-[#E5006D] transition-all duration-300 group-hover:w-24"></div>
        </div>

      </div>
    </section>
  );
}