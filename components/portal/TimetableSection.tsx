export default function TimetableSection() {
  const classes = [
    'Mathematics - 08:00',
    'Physical Sciences - 09:00',
    'English - 10:30',
    'Life Sciences - 12:00',
  ];

  return (
    <section className="rounded-[2rem] bg-white p-8 shadow-lg border border-[#E5006D]/10">

      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-black text-[#C2185B]">
          Today’s Timetable
        </h2>

        <div className="rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-[#C2185B] border border-[#E5006D]/10">
          Monday
        </div>
      </div>

      {/* CLASSES */}
      <div className="space-y-5">
        {classes.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-2xl border border-[#E5006D]/10 bg-pink-50 p-5 hover:bg-pink-100 transition"
          >
            <div className="flex items-center gap-4">

              {/* ICON */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] text-white shadow-lg">
                📘
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-bold text-[#C2185B]">
                  {item}
                </h3>
                <p className="text-sm text-gray-500">
                  Classroom Session
                </p>
              </div>
            </div>

            <button className="rounded-xl bg-[#E5006D] px-5 py-3 font-semibold text-white shadow-md transition hover:bg-[#D81B60]">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}