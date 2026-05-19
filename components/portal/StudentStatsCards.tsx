export default function StudentStatsCards() {
  const stats = [
    {
      label: 'Current Average',
      value: '78%',
      icon: '📈',
    },
    {
      label: 'Assignments',
      value: '12',
      icon: '📝',
    },
    {
      label: 'Attendance',
      value: '96%',
      icon: '✅',
    },
    {
      label: 'Subjects',
      value: '7',
      icon: '📚',
    },
  ];

  return (
    <section className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      
      {/* HORIZONTAL MOBILE SCROLL */}
      <div className="flex gap-4 pb-2 sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              min-w-[240px]
              flex-shrink-0
              rounded-[2rem]
              border border-[#58B947]/10
              bg-white
              p-5
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
              sm:min-w-0
              sm:p-6
              lg:p-8
            "
          >
            {/* CARD TOP */}
            <div className="flex items-center gap-4">
              
              {/* ICON */}
              <div className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-[#58B947]
                to-[#2E7D32]
                text-2xl
                text-white
                shadow-xl
                sm:h-16
                sm:w-16
                sm:text-3xl
              ">
                {stat.icon}
              </div>

              {/* CONTENT */}
              <div className="min-w-0 flex-1">
                <h3 className="
                  text-3xl
                  font-black
                  leading-none
                  text-[#2E7D32]
                  sm:text-4xl
                ">
                  {stat.value}
                </h3>

                <p className="
                  mt-2
                  truncate
                  text-sm
                  font-semibold
                  text-gray-600
                  sm:text-base
                ">
                  {stat.label}
                </p>
              </div>
            </div>

            {/* OPTIONAL PROGRESS BAR */}
            <div className="mt-5">
              <div className="h-2 overflow-hidden rounded-full bg-[#58B947]/10">
                <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-[#58B947] to-[#A5D66F]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE SCROLL HINT */}
      <div className="mt-3 flex justify-center sm:hidden">
        <div className="rounded-full bg-[#58B947]/10 px-4 py-2 text-xs font-semibold text-[#2E7D32]">
          ← Swipe for more →
        </div>
      </div>
    </section>
  );
}