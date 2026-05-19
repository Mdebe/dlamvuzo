export default function StudentWelcomeCard() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] text-white shadow-[0_20px_60px_rgba(229,0,109,0.35)]">

      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-10 top-10 hidden h-40 w-40 rounded-full border border-white/10 lg:block" />
      </div>

      {/* CONTENT */}
      <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[65%_35%] lg:items-center lg:p-10 xl:p-14">

        {/* LEFT CONTENT */}
        <div className="min-w-0">

          {/* BADGE */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur sm:px-5 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-white" />
            Dlamvuzo Student Portal
          </div>

          {/* TITLE */}
          <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            Welcome Back,
            <span className="mt-2 block text-white">
              Learner 👋
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8 lg:text-lg">
            Stay updated with your academic progress, assignments,
            announcements, timetable schedules, and school activities through
            the Dlamvuzo High School Student Portal.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              className="rounded-2xl bg-white px-6 py-4 text-sm font-bold text-[#C2185B] shadow-2xl transition hover:scale-[1.02] hover:bg-pink-50 active:scale-95 sm:text-base"
            >
              View Results
            </button>

            <button
              type="button"
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 active:scale-95 sm:text-base"
            >
              Open Timetable
            </button>
          </div>

          {/* QUICK STATS */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-white/60">
                Attendance
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                96%
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-white/60">
                Average
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                78%
              </h3>
            </div>

            <div className="hidden rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur sm:block">
              <p className="text-xs uppercase tracking-wide text-white/60">
                Assignments
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                12
              </h3>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl" />

            {/* MAIN CIRCLE */}
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[10px] border-white bg-white/10 text-7xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur sm:h-52 sm:w-52 sm:text-8xl lg:h-64 lg:w-64">
              🎓
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur">
              ⭐ Light Is Life
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}