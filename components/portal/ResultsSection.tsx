export default function ResultsSection() {
  const results = [
    {
      subject: 'Mathematics',
      mark: '82%',
    },
    {
      subject: 'Physical Sciences',
      mark: '75%',
    },
    {
      subject: 'English',
      mark: '80%',
    },
  ];

  return (
    <section className="rounded-[2rem] bg-white p-8 shadow-lg border border-[#E5006D]/10">

      <h2 className="mb-8 text-3xl font-black text-[#C2185B]">
        Latest Results
      </h2>

      <div className="space-y-4">
        {results.map((result) => (
          <div
            key={result.subject}
            className="flex items-center justify-between rounded-2xl border border-[#E5006D]/10 bg-pink-50 p-5 transition hover:bg-pink-100"
          >

            {/* LEFT */}
            <div>
              <h3 className="text-xl font-bold text-[#C2185B]">
                {result.subject}
              </h3>

              <p className="text-gray-500">
                Term 2 Results
              </p>
            </div>

            {/* MARK BADGE */}
            <div className="rounded-full bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] px-6 py-3 text-xl font-black text-white shadow-lg">
              {result.mark}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}