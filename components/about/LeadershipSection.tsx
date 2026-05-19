export default function LeadershipSection() {
  const leaders = [
    {
      name: 'Principal Name',
      role: 'School Principal',
    },
    {
      name: 'Deputy Principal',
      role: 'Deputy Principal',
    },
    {
      name: 'HOD Academics',
      role: 'Head of Academics',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <div className="mb-4 inline-block rounded-full bg-[#58B947]/10 px-5 py-2 font-semibold text-[#2E7D32]">
          Leadership Team
        </div>

        <h2 className="mb-6 text-4xl font-black text-[#2E7D32] lg:text-5xl">
          Dedicated Educational Leadership
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-700">
          Our leadership team is committed to creating a positive educational
          environment focused on learner success and development.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="rounded-[2rem] border border-[#58B947]/10 bg-white p-10 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#58B947] to-[#2E7D32] text-6xl text-white shadow-2xl">
              👤
            </div>

            <h3 className="mb-2 text-2xl font-black text-[#2E7D32]">
              {leader.name}
            </h3>

            <p className="font-semibold text-[#C99700]">{leader.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
 