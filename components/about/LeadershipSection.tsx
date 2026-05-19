export default function LeadershipSection() {
  const leaders = [
    {
      name: 'Principal Name',
      role: 'School Principal',
    },
    {
      name: 'Deputy Principal',
      role: 'Deputy Principal',
    },
    {
      name: 'HOD Academics',
      role: 'Head of Academics',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#12040B] via-[#1A0610] to-black py-24 text-white">
      
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#E5006D]/20 blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-pink-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          
          <div className="mb-5 inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-200 backdrop-blur-xl">
            Dlamvuzo Leadership Team
          </div>

          <h2 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Dedicated Educational
            <span className="block bg-gradient-to-r from-[#E5006D] via-[#FF4D94] to-white bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-8 text-white/70">
            Our leadership team is committed to creating a positive,
            disciplined, and high-performing educational environment focused
            on learner success and growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition hover:-translate-y-2 hover:border-[#E5006D]/40"
            >
              
              {/* Glow */}
              <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-[#E5006D]/20 blur-3xl opacity-70"></div>

              {/* Avatar */}
              <div className="mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#E5006D] to-[#FF4D94] text-6xl text-white shadow-2xl transition-transform duration-300 group-hover:scale-105">
                👤
              </div>

              {/* Name */}
              <h3 className="mb-2 text-2xl font-black text-white">
                {leader.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-200">
                {leader.role}
              </p>

              {/* Accent line */}
              <div className="mx-auto mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-[#E5006D] to-[#FF4D94] transition-all duration-300 group-hover:w-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}