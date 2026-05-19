const actions = [
  'Generate Quiz',
  'Summarize Notes',
  'Solve Math',
  'Study Planner',
  'Explain Topic',
  'Past Papers',
];

export default function AIQuickActions() {
  return (
    <section className="overflow-x-auto">
      
      {/* SCROLL ROW */}
      <div className="flex gap-4 pb-2 px-4 sm:px-0">
        {actions.map((action) => (
          <button
            key={action}
            type="button"
            className="
              flex-shrink-0
              rounded-2xl
              border border-[#E5006D]/10
              bg-white
              px-5 py-4
              text-sm font-semibold
              text-[#C2185B]
              shadow-md
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-gradient-to-r
              hover:from-[#E5006D]
              hover:via-[#D81B60]
              hover:to-[#C2185B]
              hover:text-white
              hover:shadow-[0_15px_40px_rgba(229,0,109,0.25)]
              active:scale-95
            "
          >
            {action}
          </button>
        ))}
      </div>

      {/* MOBILE HINT */}
      <p className="mt-3 text-center text-xs text-gray-500 sm:hidden">
        Swipe to see more AI tools →
      </p>
    </section>
  );
}