import AddNote from "@/components/add-note";
import { Metadata } from "next";
import React from "react";
import { NotesIndex } from ".";
export const metadata: Metadata = {
  title: "Notes",
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
