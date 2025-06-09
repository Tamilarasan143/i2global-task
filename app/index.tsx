"use client";
import { EditNote } from "@/components/edit-note";
import { useNotesContext } from "@/provider/notes-context-provider";
import React from "react";

export const NotesIndex = () => {
  const { notes } = useNotesContext();

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col pt-22 bg-gradient-to-br ">
      {notes.map((note, id) => (
        <div
          key={id}
          className="bg-white rounded-xl shadow-md p-6 mb-6 transition hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-black font-bold">{note.title}</h2>
            <EditNote note={note}>
              <button
                type="button"
                className="text-gray-600 hover:text-green-600 transition"
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
      ))}
    </div>
  );
};
