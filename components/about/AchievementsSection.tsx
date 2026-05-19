export default function AchievementsSection() {
  const achievements = [
    'Consistent Academic Excellence',
    'Top Performing Learners',
    'Leadership Development Programs',
    'Sports & Cultural Achievements',
    'Community Engagement Initiatives',
    'Technology & Innovation Focus',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#12040B] via-[#1A0610] to-black py-24 text-white">
      
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#E5006D]/20 blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left Content */}
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-200 backdrop-blur-xl">
              Dlamvuzo Achievements
            </div>

            <h2 className="mb-10 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Excellence Beyond
              <span className="block bg-gradient-to-r from-[#E5006D] via-[#FF4D94] to-white bg-clip-text text-transparent">
                The Classroom
              </span>
            </h2>

            <div className="space-y-5">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-[#E5006D]/40 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#E5006D] to-[#FF4D94] text-white shadow-lg transition-transform group-hover:scale-110">
                    ✓
                  </div>

                  <p className="text-base font-semibold text-white/80">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="relative">
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-[#E5006D]/10 blur-2xl"></div>

            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-14 text-center shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
              
              <div className="mb-6 text-7xl">🏆</div>

              <h3 className="mb-6 text-4xl font-black">
                Inspiring Future Success
              </h3>

              <p className="text-base leading-8 text-white/75">
                Dlamvuzo High School continues to inspire learners to pursue
                excellence, leadership, innovation, and meaningful impact in
                society through education.
              </p>

              <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#E5006D] to-[#FF4D94]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}