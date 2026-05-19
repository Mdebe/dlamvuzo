export default function AssignmentsSection() {
  const assignments = [
    'Mathematics Algebra Assignment',
    'Science Practical Report',
    'English Essay Submission',
  ];

  return (
    <section className="rounded-[2rem] bg-white p-8 shadow-lg border border-[#E5006D]/10">

      <h2 className="mb-8 text-3xl font-black text-[#C2185B]">
        Assignments
      </h2>

      <div className="space-y-5">
        {assignments.map((assignment) => (
          <div
            key={assignment}
            className="rounded-2xl border border-[#E5006D]/10 bg-pink-50 p-5 transition hover:bg-pink-100"
          >

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* LEFT */}
              <div>
                <h3 className="text-xl font-bold text-[#C2185B]">
                  {assignment}
                </h3>

                <p className="mt-2 text-gray-600">
                  Due Date: Friday • Grade 11
                </p>
              </div>

              {/* BUTTON */}
              <button className="rounded-xl bg-[#E5006D] px-5 py-3 font-semibold text-white shadow-md transition hover:bg-[#D81B60] hover:scale-[1.02] active:scale-95">
                Submit
              </button>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}