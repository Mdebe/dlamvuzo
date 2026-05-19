export default function AssignmentsSection() {
  const assignments = [
    'Mathematics Algebra Assignment',
    'Science Practical Report',
    'English Essay Submission',
  ];

  return (
    <section className="rounded-[2rem] bg-white p-8 shadow-lg">
      <h2 className="mb-8 text-3xl font-black text-[#2E7D32]">
        Assignments
      </h2>

      <div className="space-y-5">
        {assignments.map((assignment) => (
          <div
            key={assignment}
            className="rounded-2xl border border-[#E5B324]/10 bg-[#E5B324]/5 p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#2E7D32]">
                  {assignment}
                </h3>

                <p className="mt-2 text-gray-600">
                  Due Date: Friday • Grade 11
                </p>
              </div>

              <button className="rounded-xl bg-[#58B947] px-5 py-3 font-semibold text-white transition hover:bg-[#2E7D32]">
                Submit
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}