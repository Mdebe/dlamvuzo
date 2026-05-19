"use client"
import React from 'react'
import Link from 'next/link'

export default function FloatingBot() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="/student-ai" aria-label="Open Student AI" className="group block bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center w-14 h-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M12 3C7.03 3 3 6.58 3 11c0 2.38 1.19 4.52 3.19 6.04L6 21l4.03-1.88C11.02 19.08 11.5 19 12 19c4.97 0 9-3.58 9-8s-4.03-8-9-8z" />
        </svg>
      </Link>
    </div>
  )
}
