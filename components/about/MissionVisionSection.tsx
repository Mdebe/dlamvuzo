export default function MissionVisionSection() {
  return (
    <section className="bg-[#F5F5F5] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-[#58B947]/10 bg-white p-12 shadow-xl">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#58B947] text-4xl text-white shadow-lg">
            🎯
          </div>

          <h2 className="mb-6 text-4xl font-black text-[#2E7D32]">
            Our Mission
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            To provide quality education that empowers learners with knowledge,
            leadership skills, discipline, innovation, and values needed to
            succeed in an ever-changing world.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#E5B324]/10 bg-white p-12 shadow-xl">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#E5B324] text-4xl text-white shadow-lg">
            🌟
          </div>

          <h2 className="mb-6 text-4xl font-black text-[#C99700]">
            Our Vision
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            To become a leading educational institution recognised for academic
            excellence, integrity, leadership development, and community impact.
          </p>
        </div>
      </div>
    </section>
  );
}