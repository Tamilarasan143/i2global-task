"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import "./editor.css";
const RichTextEditor = ({
  content,
  setContent,
}: {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
      }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: content,
    
    editorProps: {
      attributes: {
        class: " dark:format-invert focus:outline-none format-blue max-w-none",
      },
    },
    onUpdate: ({ editor }) => setContent(editor.getHTML()),
  });

  if (!editor) return null;
  const buttonClass = (isActive: boolean) =>
    `px-2 py-1 text-xs rounded border ${
      isActive ? "bg-yellow-300 text-black" : "hover:bg-gray-100"
    }`;
  const editorButtons = [
    {
      name: "Bold",
      onClick: () => editor?.chain().focus().toggleBold().run(),
      selected: editor?.isActive("bold"),
    },
    {
      name: "Italic",
      onClick: () => editor?.chain().focus().toggleItalic().run(),
      selected: editor?.isActive("italic"),
    },
    {
      name: "Underline",
      onClick: () => editor?.chain().focus().toggleUnderline().run(),
      selected: editor?.isActive("underline"),
    },
    {
      name: "Left",
      onClick: () => {
        editor?.chain().focus().setTextAlign("left").run();
      },
      selected: editor?.isActive({ textAlign: "left" }),
    },
    {
      name: "Center",
      onClick: () => {
        editor?.chain().focus().setTextAlign("center").run();
      },
      selected: editor?.isActive({ textAlign: "center" }),
    },
    {
      name: "Right",
      onClick: () => {
        editor?.chain().focus().setTextAlign("right").run();
      },
      selected: editor?.isActive({ textAlign: "right" }),
    },
    {
      name: "1. List",
      onClick: () => {
        editor?.chain().focus().toggleOrderedList().run();
      },
      selected: editor?.isActive("orderedList"),
    },
    {
      name: "• Bullet",
      onClick: () => {
        editor?.chain().focus().toggleBulletList().run();
      },
      selected: editor?.isActive("bulletList"),
    },
  ];
  return (
    <div className="w-full bg-white border rounded-md p-2">
      <div className="flex flex-wrap gap-2 mb-2">
        {editorButtons.map((button, i) => (
          <button
            onClick={button.onClick}
            className={buttonClass(button.selected)}
            key={i}
          >
            {button.name}
          </button>
        ))}
      </div>

      <EditorContent
        editor={editor}
        placeholder="Notes"
        className="h-[100px] overflow-y-auto border border-gray-300 rounded p-2 text-sm"
      />
    </div>
  );
};

export default RichTextEditor;
