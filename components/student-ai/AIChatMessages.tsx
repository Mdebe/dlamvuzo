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
    <div className="flex-1 space-y-6 overflow-y-auto bg-gradient-to-b from-white to-[#F3FFF4] p-4 sm:p-6 lg:p-8">
      
      {/* HEADER NOTE (optional brand touch) */}
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2E7D32]">
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
                ? 'bg-gradient-to-br from-[#2E7D32] to-[#58B947] text-white'
                : 'border border-[#58B947]/15 bg-white text-gray-700'
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