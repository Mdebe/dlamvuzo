export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2E7D32] via-[#58B947] to-[#A5D66F] py-32 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F4D03F] blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
          About Lizwi Secondary School
        </div>

        <h1 className="mb-8 text-5xl font-black leading-tight lg:text-7xl">
          Shaping Futures Through
          <span className="block text-[#F4D03F]">Education & Leadership</span>
        </h1>

        <p className="mx-auto max-w-4xl text-lg leading-8 text-white/90 lg:text-xl">
          Lizwi Secondary School is dedicated to providing quality education,
          fostering discipline, inspiring leadership, and empowering learners
          to achieve academic and personal excellence.
        </p>
      </div>
    </section>
  );
}
