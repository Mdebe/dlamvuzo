export default function AchievementsSection() {
  const achievements = [
    'Consistent Academic Excellence',
    'Top Performing Learners',
    'Leadership Development Programs',
    'Sports & Cultural Achievements',
    'Community Engagement Initiatives',
    'Technology & Innovation Focus',
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-4 inline-block rounded-full bg-[#58B947]/10 px-5 py-2 font-semibold text-[#2E7D32]">
            School Achievements
          </div>

          <h2 className="mb-8 text-4xl font-black text-[#2E7D32] lg:text-5xl">
            Excellence Beyond The Classroom
          </h2>

          <div className="space-y-5">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="flex items-center gap-4 rounded-2xl border border-[#58B947]/10 bg-[#58B947]/5 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#58B947] text-white">
                  ✓
                </div>

                <p className="text-lg font-semibold text-gray-700">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-[#2E7D32] via-[#58B947] to-[#A5D66F] p-14 text-white shadow-2xl">
          <div className="mb-6 text-7xl">🏆</div>

          <h3 className="mb-6 text-4xl font-black">
            Inspiring Future Success
          </h3>

          <p className="text-lg leading-8 text-white/90">
            Lizwi Secondary School continues to inspire learners to pursue
            excellence, leadership, innovation, and meaningful contributions to
            society.
          </p>
        </div>
      </div>
    </section>
  );
}
