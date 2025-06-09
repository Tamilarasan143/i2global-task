import AddNote from "@/components/add-note";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Notes",
};
const NotesPage = () => {
  return (
    <div>
      <AddNote />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ">
        <div>notes page</div>
      </div>
    </div>
  );
};
export default NotesPage;
