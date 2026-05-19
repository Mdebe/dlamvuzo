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
    <section className="rounded-[2rem] bg-white p-8 shadow-lg">
      <h2 className="mb-8 text-3xl font-black text-[#2E7D32]">
        Latest Results
      </h2>

      <div className="space-y-4">
        {results.map((result) => (
          <div
            key={result.subject}
            className="flex items-center justify-between rounded-2xl border border-[#58B947]/10 bg-[#58B947]/5 p-5"
          >
            <div>
              <h3 className="text-xl font-bold text-[#2E7D32]">
                {result.subject}
              </h3>

              <p className="text-gray-500">Term 2 Results</p>
            </div>

            <div className="rounded-full bg-[#58B947] px-6 py-3 text-xl font-black text-white shadow-lg">
              {result.mark}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}