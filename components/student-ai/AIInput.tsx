'use client';

import { useState } from 'react';

export default function AIInput() {
  const [message, setMessage] = useState('');

  return (
    <div className="border-t border-[#E5006D]/10 bg-white p-4 sm:p-5 lg:p-6">
      
      {/* INPUT ROW */}
      <div className="flex items-end gap-3">
        
        {/* TEXTAREA */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          placeholder="Ask Dlamvuzo AI Tutor anything..."
          className="
            min-h-[56px]
            flex-1
            resize-none
            rounded-2xl
            border border-[#E5006D]/10
            bg-[#F5F5F5]
            px-5 py-4
            text-sm
            outline-none
            transition
            focus:border-[#D81B60]
            focus:bg-white
            focus:shadow-[0_0_0_4px_rgba(216,27,96,0.08)]
            sm:text-base
          "
        />

        {/* SEND BUTTON */}
        <button
          type="button"
          disabled={!message.trim()}
          className="
            flex h-14 w-14 items-center justify-center
            rounded-2xl
            bg-gradient-to-br from-[#E5006D] via-[#D81B60] to-[#C2185B]
            text-2xl text-white
            shadow-[0_15px_40px_rgba(229,0,109,0.35)]
            transition
            hover:scale-105
            active:scale-95
            disabled:opacity-40 disabled:cursor-not-allowed
          "
        >
          ➤
        </button>
      </div>

      {/* FOOTER HINT */}
      <p className="mt-3 text-xs text-center text-gray-500">
        Dlamvuzo AI Tutor • Math • Science • English • Exam Help • Study Support
      </p>
    </div>
  );
}