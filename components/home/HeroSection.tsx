'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const slides = [
    '/dlavuzo.jpg',
    '/dlavuzo (2).jpg',
    '/d.jpg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B]"
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide}
              alt={`Hero Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-[#E5006D]/60 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/55 lg:to-[#E5006D]/50"></div>

      {/* Glow Effects */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-pink-400/20 blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl"></div>

      {/* MOBILE HERO */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-center px-5 py-24 lg:hidden">
        
        {/* Logo */}
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
          <Image
            src="/logo.png"
            alt="Dlamvuzo High School Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Badge */}
        <div className="mx-auto mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-xl">
          Light Is Life
        </div>

        {/* Heading */}
        <h1 className="text-center text-4xl font-black leading-[1.05] text-white sm:text-5xl">
          Education Is
          <span className="mt-2 block bg-gradient-to-r from-pink-200 via-white to-pink-100 bg-clip-text text-transparent">
            The Future
          </span>
        </h1>

        {/* Paragraph */}
        <p className="mx-auto mt-6 max-w-md text-center text-sm leading-7 text-white/85 sm:text-base">
          Dlamvuzo High School empowers learners through
          innovation, discipline, leadership, and academic excellence.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          
          <button className="rounded-2xl bg-white px-6 py-4 text-sm font-bold text-[#D81B60] shadow-2xl transition duration-300 hover:scale-[1.02] hover:bg-pink-50">
            Apply Now
          </button>

          <button className="rounded-2xl border-2 border-white/80 px-6 py-4 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-[#D81B60]">
            Explore School
          </button>
        </div>

        {/* Mobile Stats */}
        <div className="mt-10 grid grid-cols-3 gap-3">
          
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-black text-white">
              95%
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/70">
              Pass Rate
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-black text-white">
              20+
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/70">
              Programs
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-black text-white">
              100%
            </h3>

            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/70">
              Support
            </p>
          </div>
        </div>
      </div>

      {/* DESKTOP HERO */}
      <div className="relative mx-auto hidden max-w-7xl gap-14 px-6 py-28 lg:grid lg:grid-cols-2 lg:items-center">
        
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl">
            Richards Bay • Excellence • Leadership
          </div>

          <h1 className="mb-8 text-6xl font-black leading-[1.05] text-white xl:text-7xl">
            Education Is
            <span className="block bg-gradient-to-r from-pink-200 via-white to-pink-100 bg-clip-text text-transparent">
              The Light
            </span>
            Of The Future
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-white/90">
            Dlamvuzo High School is a modern academic institution focused on
            empowering learners through innovation, discipline, leadership,
            and educational excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5">
            <button className="rounded-2xl bg-white px-8 py-4 font-bold text-[#D81B60] shadow-2xl transition duration-300 hover:scale-105 hover:bg-pink-50">
              Apply Now
            </button>

            <button className="rounded-2xl border-2 border-white/80 px-8 py-4 font-bold text-white transition duration-300 hover:bg-white hover:text-[#D81B60]">
              Explore School
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10">
            <div>
              <h3 className="text-4xl font-black text-white">
                95%
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-white/70">
                Pass Rate
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                20+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-white/70">
                Academic Programs
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                100%
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wider text-white/70">
                Student Support
              </p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative flex justify-center">
          
          <div className="absolute h-96 w-96 rounded-full bg-pink-300/20 blur-3xl"></div>

          <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-pink-300/20 blur-2xl"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              
              <div className="mb-8 flex h-52 w-52 items-center justify-center rounded-full border-[10px] border-white/20 bg-gradient-to-br from-[#E5006D] to-[#C2185B] shadow-2xl">
                
                <div className="rounded-full bg-white/10 p-6 backdrop-blur-xl">
                  <Image
                    src="/logo.png"
                    alt="Dlamvuzo High School Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Light Is Life
              </div>

              <h2 className="mb-4 text-4xl font-black text-white">
                Dlamvuzo H.S.
              </h2>

              <p className="max-w-sm text-base leading-7 text-white/85">
                Inspiring academic excellence, leadership,
                innovation, and community growth through modern education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'w-10 bg-white'
                : 'w-3 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}