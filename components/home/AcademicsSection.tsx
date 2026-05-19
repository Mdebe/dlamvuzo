'use client';

export default function AcademicsSection() {
  const programs = [
    {
      name: 'Science & Technology',
      description:
        'Modern science laboratories and technology-driven learning designed to prepare learners for future innovation.',
      icon: '🧪',
    },
    {
      name: 'Mathematics',
      description:
        'Strong mathematical foundations focused on problem-solving, analytical thinking, and academic excellence.',
      icon: '📐',
    },
    {
      name: 'Languages',
      description:
        'Empowering communication through English, isiZulu, and additional language development programs.',
      icon: '📚',
    },
    {
      name: 'Humanities',
      description:
        'History, Geography, and Social Sciences that build leadership, critical thinking, and global awareness.',
      icon: '🌍',
    },
  ];

  return (
    <section
      id="academics"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff5f9] to-[#fff0f6] py-20"
    >
      {/* Background Glow Effects */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-pink-200/40 blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#E5006D]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          
          <div className="mb-5 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#C2185B]">
            Academic Excellence
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Our Academic
            <span className="block bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B] bg-clip-text text-transparent">
              Programs
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Dlamvuzo High School provides a modern learning environment
            focused on innovation, leadership, academic achievement,
            and preparing learners for future success.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => (
            <div
              key={program.name}
              className="group relative overflow-hidden rounded-[2rem] border border-pink-100 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* Card Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-pink-100/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Top Accent Line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B]"></div>

              <div className="relative">
                
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E5006D] to-[#C2185B] text-3xl shadow-lg shadow-pink-500/30 transition-transform duration-300 group-hover:scale-110">
                  {program.icon}
                </div>

                {/* Program Number */}
                <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C2185B]">
                  Program {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black leading-tight text-slate-900">
                  {program.name}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-7 text-slate-600">
                  {program.description}
                </p>

                {/* Hover Accent */}
                <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-[#E5006D] to-[#C2185B] transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Banner */}
        <div className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B] px-8 py-12 text-white shadow-[0_20px_80px_rgba(229,0,109,0.35)] sm:px-12">
          
          {/* Decorative Glow */}
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-100 backdrop-blur-xl">
                Light Is Life
              </div>

              <h3 className="text-3xl font-black sm:text-4xl">
                Inspiring Future Leaders Through Education
              </h3>

              <p className="mt-5 text-lg leading-8 text-white/90">
                Our mission is to provide learners with knowledge,
                leadership skills, innovation, and confidence to
                succeed in the modern world.
              </p>
            </div>

            {/* CTA */}
            <div>
              <button className="rounded-2xl bg-white px-8 py-4 font-bold text-[#D81B60] shadow-2xl transition duration-300 hover:scale-105 hover:bg-pink-50">
                Explore Academics
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}