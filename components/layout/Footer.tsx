export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#12040B] via-[#1A0610] to-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#E5006D]/20 blur-3xl"></div>

      <div className="absolute bottom-[-140px] right-[-140px] h-[320px] w-[320px] rounded-full bg-pink-500/10 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand Section */}
        <div className="space-y-6">
          
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-pink-200 backdrop-blur-xl">
              Light Is Life
            </div>

            <h3 className="text-3xl font-black leading-tight">
              Dlamvuzo
              <span className="block bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#FF4D94] bg-clip-text text-transparent">
                High School
              </span>
            </h3>
          </div>

          <p className="max-w-sm leading-8 text-slate-300">
            Empowering learners through academic excellence,
            leadership, innovation, discipline, and
            community-centered education.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            
            <a
              href="#"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-200 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#E5006D]"
            >
              <span className="text-lg font-black group-hover:text-white">
                F
              </span>
            </a>

            <a
              href="#"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-200 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#D81B60]"
            >
              <span className="text-lg font-black group-hover:text-white">
                T
              </span>
            </a>

            <a
              href="#"
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-200 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-[#C2185B]"
            >
              <span className="text-lg font-black group-hover:text-white">
                I
              </span>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-200">
            Explore
          </div>

          <ul className="space-y-5">
            {[
              'Home',
              'About',
              'Admissions',
              'Academics',
              'News',
              'Gallery',
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 text-slate-300 transition-all duration-300 hover:text-white"
                >
                  <span className="h-2 w-2 rounded-full bg-[#E5006D] transition-all duration-300 group-hover:w-6"></span>

                  <span className="font-medium">{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-200">
            Contact
          </div>

          <ul className="space-y-5 text-slate-300">
            
            <li className="flex items-start gap-4">
              <div className="mt-1 rounded-xl bg-pink-500/10 p-2 text-pink-300">
                📍
              </div>

              <div>
                <p className="font-semibold text-white">
                  Address
                </p>

                <p className="mt-1 leading-7 text-slate-400">
                  Block H, Richards Bay, 3887
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="mt-1 rounded-xl bg-pink-500/10 p-2 text-pink-300">
                ✉️
              </div>

              <div>
                <p className="font-semibold text-white">
                  Email
                </p>

                <a
                  href="mailto:info@dlamvuzohigh.co.za"
                  className="mt-1 inline-block text-slate-400 transition hover:text-white"
                >
                  info@dlamvuzohigh.co.za
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="mt-1 rounded-xl bg-pink-500/10 p-2 text-pink-300">
                ☎️
              </div>

              <div>
                <p className="font-semibold text-white">
                  Phone
                </p>

                <a
                  href="tel:+27727982299"
                  className="mt-1 inline-block text-slate-400 transition hover:text-white"
                >
                  072 798 2299
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Values Card */}
        <div>
          
          <div className="mb-6 inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-200">
            Our Values
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-pink-500/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            
            {/* Glow */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#E5006D]/10 blur-3xl"></div>

            <div className="relative">
              
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-200">
                Dlamvuzo
              </p>

              <h3 className="mt-4 bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#FF4D94] bg-clip-text text-4xl font-black text-transparent">
                Excellence
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Leadership, discipline, innovation, respect,
                and academic growth remain at the heart
                of everything we do.
              </p>

              {/* Accent */}
              <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[#E5006D] to-[#FF4D94]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          
          <p className="text-sm text-slate-500">
            © 2026 Dlamvuzo High School. All Rights Reserved.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-slate-500 sm:justify-end">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}