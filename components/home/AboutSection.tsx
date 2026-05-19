'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AboutSection() {
  const slides = [
    '/dlavuzo.jpg',
    '/dlavuzo (2).jpg',
     
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5f9] via-white to-[#fff0f6] py-20">
      
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-pink-200/40 blur-3xl"></div>

      <div className="absolute bottom-[-140px] right-[-140px] h-[320px] w-[320px] rounded-full bg-[#E5006D]/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[55%_45%] lg:items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-4 rounded-full border border-pink-100 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-xl">
              <div className="rounded-full bg-gradient-to-br from-[#E5006D] to-[#C2185B] p-2">
                <Image
                  src="/logo.png"
                  alt="Dlamvuzo High School Logo"
                  width={36}
                  height={36}
                  className="rounded-full object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-black tracking-wide text-[#C2185B]">
                  Dlamvuzo High School
                </p>

                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                  Light Is Life
                </p>
              </div>
            </div>

            {/* Heading */}
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#C2185B]">
                About Our School
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Building A Future
                <span className="block bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B] bg-clip-text text-transparent">
                  Through Education
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Dlamvuzo High School combines academic excellence,
                leadership, innovation, and community values to empower
                learners for a brighter future.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              
              <div className="group overflow-hidden rounded-[2rem] border border-pink-100 bg-white/90 p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-[#E5006D] to-[#C2185B] p-4 text-white shadow-lg">
                  🎓
                </div>

                <h3 className="text-4xl font-black text-slate-900">
                  98%
                </h3>

                <p className="mt-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C2185B]">
                  Pass Rate
                </p>
              </div>

              <div className="group overflow-hidden rounded-[2rem] border border-pink-100 bg-white/90 p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-[#E5006D] to-[#C2185B] p-4 text-white shadow-lg">
                  👩🏽‍🎓
                </div>

                <h3 className="text-4xl font-black text-slate-900">
                  1500+
                </h3>

                <p className="mt-3 text-sm font-bold uppercase tracking-[0.25em] text-[#C2185B]">
                  Active Learners
                </p>
              </div>
            </div>

            {/* Brand Promise */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] p-10 text-white shadow-[0_20px_80px_rgba(229,0,109,0.35)]">
              
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-pink-100">
                  Our Brand Promise
                </p>

                <h3 className="mt-4 text-3xl font-black">
                  “Light Is Life”
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                  We create a modern learning environment where
                  knowledge inspires leadership, innovation drives
                  growth, and every learner is empowered to succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Slider */}
          <div className="space-y-6">
            
            {/* Main Image Card */}
            <div className="relative h-[360px] overflow-hidden rounded-[2.5rem] border border-pink-100 bg-white shadow-2xl sm:h-[460px]">
              
              {/* Slide Image */}
              <Image
                src={slides[currentSlide]}
                alt={`Dlamvuzo High School Image ${currentSlide + 1}`}
                fill
                priority
                className="object-cover transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              {/* Branding Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-xl">
                  Dlamvuzo High School
                </div>

                <h3 className="mt-4 text-3xl font-black text-white">
                  Academic Excellence & Leadership
                </h3>
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide
                        ? 'h-3 w-10 rounded-full bg-white'
                        : 'h-3 w-3 rounded-full bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Previous Button */}
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide(
                    (currentSlide - 1 + slides.length) % slides.length
                  )
                }
                className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-xl transition hover:bg-white hover:text-[#D81B60]"
                aria-label="Previous Slide"
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((currentSlide + 1) % slides.length)
                }
                className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white backdrop-blur-xl transition hover:bg-white hover:text-[#D81B60]"
                aria-label="Next Slide"
              >
                ›
              </button>
            </div>

            {/* Bottom Identity Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-pink-100 bg-white/90 p-8 shadow-lg backdrop-blur-xl">
              
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-pink-100/40 blur-3xl"></div>

              <div className="relative">
                <div className="mb-4 inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C2185B]">
                  Our Identity
                </div>

                <h3 className="text-2xl font-black text-slate-900">
                  A Modern African Institution
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Dlamvuzo High School reflects strength, growth,
                  leadership, and educational excellence through
                  modern branding and community-centered learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}