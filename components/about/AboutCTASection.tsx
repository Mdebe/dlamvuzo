export default function AboutCTASection() {
  return (
    <section className="bg-gradient-to-r from-[#2E7D32] via-[#58B947] to-[#A5D66F] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 font-semibold backdrop-blur">
          Join Our Community
        </div>

        <h2 className="mb-8 text-4xl font-black leading-tight lg:text-6xl">
          Building A Brighter Future Together
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-white/90">
          Become part of an institution dedicated to academic excellence,
          leadership, discipline, and learner empowerment.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <button className="rounded-2xl bg-[#E5B324] px-8 py-4 text-lg font-bold text-white shadow-2xl transition hover:bg-[#C99700]">
            Apply For Admission
          </button>

          <button className="rounded-2xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-[#2E7D32]">
            Contact School
          </button>
        </div>
      </div>
    </section>
  );
}
