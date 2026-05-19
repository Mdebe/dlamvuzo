export default function ValuesSection() {
  const values = [
    {
      title: 'Academic Excellence',
      icon: '📚',
    },
    {
      title: 'Discipline',
      icon: '🛡️',
    },
    {
      title: 'Leadership',
      icon: '🔑',
    },
    {
      title: 'Knowledge',
      icon: '🕯️',
    },
    {
      title: 'Growth',
      icon: '🌱',
    },
    {
      title: 'Achievement',
      icon: '🏆',
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
            Dlamvuzo Core Values
          </div>

          <h2 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Values That Shape Our
            <span className="block bg-gradient-to-r from-[#E5006D] via-[#FF4D94] to-white bg-clip-text text-transparent">
              School Culture
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-white/70">
            At Dlamvuzo High School, we believe education is built on strong values that guide learners toward success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/30 hover:bg-white/10"
            >
              
              {/* Glow */}
              <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-[#E5006D]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              {/* Icon */}
              <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-110">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-white sm:text-2xl">
                {value.title}
              </h3>

              {/* Accent line */}
              <div className="mx-auto mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-[#E5006D] to-[#FF4D94] transition-all duration-300 group-hover:w-16"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}