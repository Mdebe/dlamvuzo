export default function AnnouncementsSection() {
  const announcements = [
    'Mid-year examinations begin next Monday.',
    'Sports practice scheduled for Friday afternoon.',
    'Science Expo registration now open.',
    'Parents meeting this weekend.',
  ];

  return (
    <aside className="rounded-[2rem] bg-white p-8 shadow-lg border border-[#E5006D]/10">

      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-black text-[#C2185B]">
          Announcements
        </h2>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] text-white shadow-lg">
          🔔
        </div>
      </div>

      {/* LIST */}
      <div className="space-y-5">
        {announcements.map((announcement) => (
          <div
            key={announcement}
            className="rounded-2xl border border-[#E5006D]/10 bg-pink-50 p-5 transition hover:bg-pink-100"
          >
            <p className="leading-7 text-gray-700">
              {announcement}
            </p>
          </div>
        ))}
      </div>

    </aside>
  );
}