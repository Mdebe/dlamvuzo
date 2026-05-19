export default function SchoolHistorySection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:items-center">
          <div>
            <h2 className="mb-8 text-4xl font-black text-[#2E7D32] lg:text-5xl">
              A Tradition Of Academic Excellence
            </h2>

            <p className="mb-6 text-lg leading-8 text-gray-700">
              Located in Richards Bay under the King Cetshwayo District,
              Lizwi Secondary School has built a reputation for academic
              achievement, discipline, leadership, and learner development.
            </p>

            <p className="mb-6 text-lg leading-8 text-gray-700">
              Our institution focuses on creating a positive and inspiring
              environment where learners are encouraged to reach their full
              potential both academically and socially.
            </p>

            <p className="text-lg leading-8 text-gray-700">
              Through dedication, innovation, and community values, Lizwi
              Secondary continues to prepare learners for successful futures.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[2rem] bg-[#E5B324]"></div>

            <div className="relative flex min-h-[500px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#2E7D32] via-[#58B947] to-[#A5D66F] p-10 shadow-2xl">
              <div className="text-center text-white">
                <div className="mb-6 text-7xl">🏫</div>

                <h3 className="mb-4 text-4xl font-black">
                  Lizwi Secondary
                </h3>

                <p className="max-w-md text-lg leading-8 text-white/90">
                  Building future leaders through quality education,
                  discipline, and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}