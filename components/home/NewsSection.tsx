'use client';

import Image from 'next/image';

export default function NewsSection() {
  const news = [
    {
      title: 'Science & Innovation Fair Success',
      date: 'Oct 15, 2025',
      excerpt:
        'Dlamvuzo learners showcased groundbreaking science and technology projects focused on innovation and future leadership.',
      image: '/dlavuzo.jpg',
      category: 'Academics',
    },
    {
      title: 'Dlamvuzo Wins Sports Championship',
      date: 'May 10, 2026',
      excerpt:
        'Our athletes delivered outstanding performances, bringing home championship victories and community pride.',
      image: '/dlavuzo (2).jpg',
      category: 'Sports',
    },
    {
      title: 'Class of 2025 Graduation Ceremony',
      date: 'Nov 5, 2025',
      excerpt:
        'Celebrating excellence, achievement, and the next chapter for our graduating learners and future leaders.',
      image: '/dlavuzo.jpg',
      category: 'Events',
    },
  ];

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff5f9] to-[#fff0f6] py-24"
    >
      {/* Background Glow Effects */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-pink-200/40 blur-3xl"></div>

      <div className="absolute bottom-[-140px] right-[-140px] h-[320px] w-[320px] rounded-full bg-[#E5006D]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          
          <div className="mb-5 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#C2185B]">
            Latest Updates
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            School News
            <span className="block bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B] bg-clip-text text-transparent">
              & Events
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Stay connected with the latest achievements, academic
            milestones, sporting victories, and events at Dlamvuzo High School.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-pink-100 bg-white/90 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* Card Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-pink-100/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute right-5 top-5">
                  <span className="rounded-full bg-gradient-to-r from-[#E5006D] to-[#C2185B] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                
                {/* Date */}
                <div className="mb-4 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C2185B]">
                  {item.date}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#C2185B]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-7 text-slate-600">
                  {item.excerpt}
                </p>

                {/* Read More */}
                <button className="mt-8 inline-flex items-center gap-2 font-bold text-[#D81B60] transition-all duration-300 hover:gap-4 hover:text-[#C2185B]">
                  Read More
                  <span>→</span>
                </button>

                {/* Bottom Accent */}
                <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-[#E5006D] to-[#C2185B] transition-all duration-500 group-hover:w-full"></div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Highlight Banner */}
        <div className="relative mt-24 overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B] px-8 py-14 text-white shadow-[0_20px_80px_rgba(229,0,109,0.35)] sm:px-12">
          
          {/* Decorative Glow */}
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            
            <div className="max-w-2xl">
              
              <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-100 backdrop-blur-xl">
                Light Is Life
              </div>

              <h3 className="text-3xl font-black sm:text-4xl">
                Celebrating Excellence, Leadership & Growth
              </h3>

              <p className="mt-5 text-lg leading-8 text-white/90">
                Explore more stories, achievements, and inspiring moments
                from the Dlamvuzo High School community.
              </p>
            </div>

            {/* CTA */}
            <div>
              <button className="rounded-2xl bg-white px-8 py-4 font-bold text-[#D81B60] shadow-2xl transition duration-300 hover:scale-105 hover:bg-pink-50">
                View All News
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}