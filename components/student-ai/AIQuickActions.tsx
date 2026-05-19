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
              border border-[#58B947]/10
              bg-white
              px-5 py-4
              text-sm font-semibold
              text-[#2E7D32]
              shadow-md
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-gradient-to-r hover:from-[#2E7D32] hover:to-[#58B947]
              hover:text-white
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