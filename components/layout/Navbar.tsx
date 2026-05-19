'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-pink-200/30 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo + Branding */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-[#E5006D]/20 bg-white shadow-lg sm:h-20 sm:w-20"
          >
            <Image
              src="/logo.png"
              alt="Dlamvuzo High School Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </Link>

          {/* Desktop Branding */}
          <div className="hidden sm:block">
            <h1 className="bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B] bg-clip-text text-xl font-extrabold tracking-tight text-transparent lg:text-2xl">
              Dlamvuzo High School
            </h1>

            <p className="mt-1 text-sm font-medium tracking-wide text-gray-600">
              Light Is Life • Education • Leadership • Excellence
            </p>
          </div>
        </div>

        {/* Mobile Branding */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 text-center sm:hidden">
          <h1 className="bg-gradient-to-r from-[#E5006D] to-[#C2185B] bg-clip-text text-sm font-extrabold text-transparent">
            Dlamvuzo H.S.
          </h1>

          <p className="text-[10px] font-medium text-gray-500">
            Light Is Life
          </p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Academics', href: '#academics' },
            { label: 'News', href: '#news' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative font-semibold text-gray-700 transition duration-300 hover:text-[#E5006D]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-[#E5006D] to-[#C2185B] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/portal"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#E5006D] to-[#C2185B] px-6 py-3 font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-pink-300/40"
          >
            <span className="relative z-10">Student Portal</span>

            <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-pink-200 bg-pink-50 p-2 text-[#E5006D] shadow-sm transition hover:bg-pink-100 lg:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-pink-100 bg-white/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2 px-5 py-5">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Academics', href: '#academics' },
              { label: 'News', href: '#news' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-gray-700 transition hover:bg-pink-50 hover:text-[#E5006D]"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/portal"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-2xl bg-gradient-to-r from-[#E5006D] to-[#C2185B] px-5 py-4 text-center font-bold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Student Portal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}