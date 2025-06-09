"use client";
import { EditNote } from "@/components/edit-note";
import { useNotesContext } from "@/provider/notes-context-provider";
import React from "react";

export const NotesIndex = () => {
  const { notes } = useNotesContext();

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col pt-22 bg-gradient-to-br">
      {notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-20 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mb-4 text-gray-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 5a2 2 0 012-2h6a1 1 0 010 2H5v14h14v-6a1 1 0 112 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm14.293 1.293a1 1 0 011.414 0l2 2a1 1 0 01-1.414 1.414L17 7.414l-7.293 7.293a1 1 0 01-1.414 0L7 13.414a1 1 0 011.414-1.414l1.586 1.586L17 6.707z" />
          </svg>
          <p className="text-xl font-semibold">No notes yet</p>
          <p className="mt-2">To create a note, click the bottom-left note button.</p>
        </div>
      ) : (
        notes.map((note, id) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md p-6 mb-6 transition hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl text-black font-bold">{note.title}</h2>
              <EditNote note={note}>
                <button
                  type="button"
                  className="text-gray-600 cursor-pointer hover:text-green-600 transition"
                  title="Edit Note"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M290.74 93.24L382.76 185.3 144 424H52V331.94L290.74 93.24zM497.94 74.17L437.5 13.74c-18.32-18.32-48.04-18.32-66.36 0l-46.1 46.1 92.02 92.02 46.1-46.1c18.32-18.32 18.32-48.04-.02-66.36z" />
                  </svg>
                </button>
              </EditNote>
            </div>
            <p className="text-gray-700 mt-2 whitespace-pre-line">{note.note}</p>
          </div>
        ))
      )}
    </div>
  );
};
