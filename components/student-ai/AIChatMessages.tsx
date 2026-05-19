const messages = [
  {
    role: 'assistant',
    text: 'Hello 👋 I am the Dlamvuzo AI Study Helper. Ask me anything about your subjects, homework, quizzes, or exams.',
  },
  {
    role: 'student',
    text: 'Explain photosynthesis in simple terms.',
  },
  {
    role: 'assistant',
    text: 'Photosynthesis is the process where plants use sunlight, water, and carbon dioxide to make food and oxygen.',
  },
];

export default function AIChatMessages() {
  return (
    <div className="flex-1 space-y-6 overflow-y-auto bg-gradient-to-b from-white via-[#FFF0F6] to-[#FCE4EC] p-4 sm:p-6 lg:p-8">
      
      {/* HEADER NOTE */}
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C2185B]">
          Dlamvuzo AI Learning Assistant
        </p>
      </div>

      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.role === 'student'
              ? 'justify-end'
              : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[90%] rounded-[2rem] px-5 py-4 shadow-lg sm:max-w-[75%] transition-all duration-300 ${
              message.role === 'student'
                ? 'bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B] text-white shadow-[0_15px_40px_rgba(229,0,109,0.25)]'
                : 'border border-[#E5006D]/10 bg-white text-gray-700'
            }`}
          >
            <p className="text-sm leading-7 sm:text-base">
              {message.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}