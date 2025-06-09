import AddNote from "@/components/add-note";
import { Metadata } from "next";
import React from "react";
import { NotesIndex } from ".";
export const metadata: Metadata = {
  title: "Keep Notes - Create and Manage Your Personal Notes",
  description:
    "Keep Notes is a simple and efficient note-taking app. Create, edit, and organize your notes with ease using rich text features.",
  keywords: ["notes", "keep notes", "note taking", "rich text editor", "nextjs notes app"],
  openGraph: {
    title: "Keep Notes - Note App",
    description:
      "Create, edit, and manage your notes with a clean, intuitive interface. Perfect for organizing tasks and ideas.",
  },

};
const NotesPage = () => {
  return (
    <div>
      <AddNote />
     <NotesIndex/>
    </div>
  );
};
export default NotesPage;
