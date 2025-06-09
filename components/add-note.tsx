"use client";

import { useNotesContext } from "@/provider/notes-context-provider";
import { useState } from "react";

export default function AddNote() {
  const [open, setOpen] = useState(false);
  const { createNote } = useNotesContext();

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const handleAddNote = () => {
    if (!title.trim() || !note.trim()) {
      setError("Both fields are required.");
      return;
    }

    createNote({ note: note, title: title });
   handleClose();
  };
  const handleClose = () => {
    setTitle("");
    setNote("");
    setError("");
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[#F6C59E] text-white w-14 h-14 rounded-full shadow-lg hover:bg-[#CC9F67] transition flex items-center justify-center"
        aria-label="Open Note Dialog"
      >
       
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
          <div className="bg-yellow-100 rounded-xl w-[90%] max-w-md shadow-xl relative">
            <div className="p-3 bg-[#F6C59E] rounded-t-xl">
              <button
                onClick={() => handleClose()}
                className="absolute top-3 right-4 text-xl text-red-500"
              >
                ✕
              </button>
              <h2 className="text-lg font-semibold">Add Notes</h2>
            </div>
            <div className="p-8 space-y-5">
              {error && (
                <p className="text-sm text-red-600 font-medium -mt-3">
                  {error}
                </p>
              )}
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="text"
                name="note"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
              <div className="flex justify-end gap-x-3">
                <button
                  onClick={handleAddNote}
                  type="button"
                  className="w-[100px] bg-green-500 text-white hover:bg-green-600 py-2 rounded-lg transition"
                >
                  Add
                </button>
                <button
                  onClick={() => handleClose()}
                  type="button"
                  className="w-[100px] bg-red-500 text-white hover:bg-red-600 py-2 rounded-lg transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
