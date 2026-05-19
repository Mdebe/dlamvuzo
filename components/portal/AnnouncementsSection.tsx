export default function AnnouncementsSection() {
  const announcements = [
    'Mid-year examinations begin next Monday.',
    'Sports practice scheduled for Friday afternoon.',
    'Science Expo registration now open.',
    'Parents meeting this weekend.',
  ];

  return (
    <aside className="rounded-[2rem] bg-white p-8 shadow-lg">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-black text-[#2E7D32]">
          Announcements
        </h2>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5B324] text-white shadow-lg">
          🔔
        </div>
      </div>

      <div className="space-y-5">
        {announcements.map((announcement) => (
          <div
            key={announcement}
            className="rounded-2xl border border-[#58B947]/10 bg-[#58B947]/5 p-5"
          >
            <p className="leading-7 text-gray-700">{announcement}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
