"use client";
import React, { createContext, useCallback, useContext, useState } from "react";

interface NotesContextProviderProp {
  notes: Note[];

  createNote: ({ note, title }: CreateNote) => void;
  updateNote: ({ note, title, id }: UpdateNote) => void;
  deleteNote: ({ noteId }: { noteId: number }) => void;
}
export interface Note {
  id: number;
  title: string;
  note: string;
  createdAt: number;
  updatedAt?: number;
}
type CreateNote = Omit<Note, "id" | "createdAt">;
type UpdateNote = Omit<Note, "createdAt">;
const CreateNotesProvider = createContext({} as NotesContextProviderProp);
export const NotesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 0,
      note: "Hello world",
      title: "Task",
      createdAt: new Date().getTime(),
    },
  ]);
const createNote = useCallback(
  ({ note, title }: CreateNote) => {
    const newNote: Note = {
      note,
      title,
      id: notes.length + 1,
      createdAt: new Date().getTime(),
    };

    setNotes((prev) => [...prev, newNote]);
  },
  [notes]
);

  const updateNote = useCallback(
    ({ note, title, id }: UpdateNote) => {
      const updatedNote = notes.map((filterNote) => {
        if (filterNote.id === id) {
          return {
            ...filterNote,
            note: note,
            title: title,
          };
        } else {
          return filterNote;
        }
      });
      setNotes(updatedNote);
    },
    [notes]
  );
  const deleteNote = useCallback(
    ({ noteId }: { noteId: Note[`id`] }) => {
      const deletedNote = notes.filter((note) => note.id !== noteId);
      setNotes(deletedNote);
    },
    [notes]
  );
  return (
    <CreateNotesProvider.Provider
      value={{ notes, createNote, updateNote, deleteNote }}
    >
      {children}
    </CreateNotesProvider.Provider>
  );
};

export const useNotesContext = () => {
  const value = useContext(CreateNotesProvider);
  return { ...value };
};
