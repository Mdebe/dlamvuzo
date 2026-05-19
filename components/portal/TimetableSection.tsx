export default function TimetableSection() {
  const classes = [
    'Mathematics - 08:00',
    'Physical Sciences - 09:00',
    'English - 10:30',
    'Life Sciences - 12:00',
  ];

  return (
    <section className="rounded-[2rem] bg-white p-8 shadow-lg">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-black text-[#2E7D32]">
          Today’s Timetable
        </h2>

        <div className="rounded-full bg-[#58B947]/10 px-4 py-2 text-sm font-semibold text-[#2E7D32]">
          Monday
        </div>
      </div>

      <div className="space-y-5">
        {classes.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-2xl border border-[#58B947]/10 bg-[#58B947]/5 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#58B947] text-white">
                📘
              </div>

              <div>
                <h3 className="font-bold text-[#2E7D32]">{item}</h3>
                <p className="text-sm text-gray-500">Classroom Session</p>
              </div>
            </div>

            <button className="rounded-xl bg-[#E5B324] px-5 py-3 font-semibold text-white transition hover:bg-[#C99700]">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}