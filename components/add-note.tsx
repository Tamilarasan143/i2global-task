// components/SpeedDial.tsx
"use client";

import { useState } from "react";

export default function AddNote() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-amber-400 text-white w-14 h-14 rounded-full shadow-lg hover:bg-amber-400 transition flex items-center justify-center"
        aria-label="Open Note Dialog"
      >
        {/* Note SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 8h10M7 12h6m-6 4h4m5 4H6a2 2 0 01-2-2V6a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2z"
          />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Add Notes</h2>
            <p className="text-gray-700">
              This is a dialog opened from a floating action button using only
              Tailwind CSS.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
