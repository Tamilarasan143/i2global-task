"use client";
import { Note, useNotesContext } from "@/provider/notes-context-provider";
import React, { useState } from "react";
import RichTextEditor from "./rich-text-editor/editor";

export const EditNote = ({
  children,
  note,
}: {
  children: React.ReactNode;
  note: Note;
}) => {
  const [open, setOpen] = useState(false);
  const [noteValue, setNoteValue] = useState(note.note);
  const [error, setError] = useState("");
  const { updateNote, deleteNote } = useNotesContext();
  const handleClose = () => {
    setNoteValue("");
    setError("");
    setOpen(false);
  };
  const handleUpdateNote = () => {
    if (!noteValue.trim()) {
      setError("Note field are required.");
      return;
    }
    updateNote({ note: noteValue, title: note.title, id: note.id });

    handleClose();
  };
  const handleDeleteNote = () => {
    deleteNote({ noteId: note.id });

    handleClose();
  };

  React.useEffect(() => {
    setNoteValue(note.note);
  }, [note.note,open]);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer"
        aria-label="Open Edit Note Dialog"
      >
        {children}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-yellow-100 rounded-xl w-[90%] max-w-md shadow-xl relative">
            <div className="p-3 bg-[#F6C59E]  rounded-t-xl">
              <button
                onClick={() => handleClose()}
                className="absolute cursor-pointer top-3 right-4 text-xl  text-red-500"
              >
                ✕
              </button>
              <h2 className="text-lg font-semibold">{note.title}</h2>
            </div>
            <div className="p-8 space-y-5">
              {error && (
                <p className="text-sm text-red-600 font-medium -mt-3">
                  {error}
                </p>
              )}
                <RichTextEditor content={noteValue} setContent={setNoteValue}/>
              <div className="flex justify-end gap-x-3 flex-1">
                <button
                  onClick={() => handleUpdateNote()}
                  type="submit"
                  className="w-[100px] bg-green-500 text-white hover:bg-green-500 py-2 rounded-lg transition"
                >
                  Save
                </button>
                <button
                  onClick={() => handleDeleteNote()}
                  type="submit"
                  className="w-[100px] bg-red-500 text-white hover:bg-red-500   py-2 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
