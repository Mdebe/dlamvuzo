export default function ValuesSection() {
  const values = [
    {
      title: 'Academic Excellence',
      icon: '📚',
    },
    {
      title: 'Discipline',
      icon: '🛡️',
    },
    {
      title: 'Leadership',
      icon: '🔑',
    },
    {
      title: 'Knowledge',
      icon: '🕯️',
    },
    {
      title: 'Growth',
      icon: '🌱',
    },
    {
      title: 'Achievement',
      icon: '🏆',
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#E5B324]/10 px-5 py-2 font-semibold text-[#C99700]">
            Our Core Values
          </div>

          <h2 className="mb-6 text-4xl font-black text-[#2E7D32] lg:text-5xl">
            Values That Shape Our School
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[2rem] bg-white p-10 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 text-6xl">{value.icon}</div>

              <h3 className="text-2xl font-black text-[#2E7D32]">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

