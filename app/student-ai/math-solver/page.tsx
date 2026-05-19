'use client';

import { useState } from 'react';
import AISidebar from '@/components/student-ai/AISidebar';
import AIHeader from '@/components/student-ai/AIHeader';

export default function MathSolverPage() {
  const [question, setQuestion] = useState('');
  const [solution, setSolution] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const handleSolve = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setSolution(null);

    // simulate AI delay (replace with API / Ollama / DeepSeek later)
    setTimeout(() => {
      const result = `Step 1: Identify the equation
Step 2: Rearrange terms
Step 3: Solve step-by-step

Answer: x = 12`;

      setSolution(result);
      setHistory((prev) => [question, ...prev]);
      setLoading(false);
    }, 1200);
  };

  const clearAll = () => {
    setQuestion('');
    setSolution(null);
  };

  const copySolution = () => {
    if (solution) navigator.clipboard.writeText(solution);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-white via-[#F3FFF4] to-white">

      {/* SIDEBAR */}
      <AISidebar />

      {/* MAIN WRAPPER */}
      <div className="flex-1 lg:ml-80">

        {/* HEADER */}
        <AIHeader />

        {/* CONTENT */}
        <main className="pt-24 p-4 sm:p-8 lg:p-12">

          {/* HERO */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-black text-[#2E7D32] sm:text-5xl">
              Dlamvuzo AI Math Solver
            </h1>
            <p className="mt-3 text-gray-600">
              Step-by-step AI-powered problem solving for learners
            </p>
          </div>

          {/* GRID */}
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">

            {/* INPUT CARD */}
            <div className="lg:col-span-2 rounded-[2rem] border border-[#E5006D]/10 bg-white p-6 shadow-xl sm:p-8">

              {/* HEADER */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] text-white text-xl">
                    ∑
                  </div>
                  <h2 className="text-xl font-black text-[#2E7D32]">
                    Enter Problem
                  </h2>
                </div>

                <button
                  onClick={clearAll}
                  className="text-sm text-gray-500 hover:text-red-500"
                >
                  Clear
                </button>
              </div>

              {/* INPUT */}
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g. Solve: 2x + 5 = 25"
                className="h-40 w-full resize-none rounded-2xl border border-gray-200 bg-[#F5F5F5] p-4 text-sm outline-none focus:border-[#E5006D]"
              />

              {/* ACTIONS */}
              <div className="mt-5 flex gap-3">
                <button
                  onClick={handleSolve}
                  disabled={loading}
                  className="flex-1 rounded-2xl bg-gradient-to-r from-[#E5006D] via-[#D81B60] to-[#C2185B] py-4 font-bold text-white shadow-lg transition hover:scale-[1.02] disabled:opacity-50"
                >
                  {loading ? 'Solving...' : 'Solve Problem'}
                </button>

                <button
                  onClick={() => setQuestion('2x + 5 = 25')}
                  className="rounded-2xl border border-[#2E7D32]/20 px-4 text-sm text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                >
                  Example
                </button>
              </div>

              {/* QUICK EXAMPLES */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['2x + 5 = 25', 'x² + 5x + 6 = 0', '√144 + 12'].map((ex) => (
                  <button
                    key={ex}
                    onClick={() => setQuestion(ex)}
                    className="rounded-full bg-[#F3FFF4] px-3 py-2 text-xs font-semibold text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                  >
                    {ex}
                  </button>
                ))}
              </div>
            </div>

            {/* OUTPUT + HISTORY */}
            <div className="space-y-6">

              {/* OUTPUT */}
              <div className="rounded-[2rem] border border-[#2E7D32]/10 bg-white p-6 shadow-xl sm:p-8">

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2E7D32] text-white text-xl">
                      🧠
                    </div>
                    <h2 className="text-xl font-black text-[#2E7D32]">
                      Solution
                    </h2>
                  </div>

                  {solution && (
                    <button
                      onClick={copySolution}
                      className="text-xs text-gray-500 hover:text-[#2E7D32]"
                    >
                      Copy
                    </button>
                  )}
                </div>

                {loading ? (
                  <div className="flex h-40 items-center justify-center text-[#2E7D32]">
                    <div className="animate-pulse">AI is thinking...</div>
                  </div>
                ) : !solution ? (
                  <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed text-gray-400">
                    Solution will appear here
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap rounded-2xl bg-[#F3FFF4] p-4 text-sm leading-7 text-gray-700">
                    {solution}
                  </pre>
                )}
              </div>

              {/* HISTORY */}
              <div className="rounded-[2rem] border border-[#E5006D]/10 bg-white p-6 shadow-xl">
                <h3 className="mb-4 text-sm font-bold text-gray-500">
                  RECENT PROBLEMS
                </h3>

                {history.length === 0 ? (
                  <p className="text-sm text-gray-400">
                    No history yet
                  </p>
                ) : (
                  <div className="space-y-2">
                    {history.map((h, i) => (
                      <button
                        key={i}
                        onClick={() => setQuestion(h)}
                        className="w-full rounded-xl bg-[#F5F5F5] p-3 text-left text-sm hover:bg-[#2E7D32] hover:text-white"
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}