"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import "./editor.css";
const RichTextPreview = ({ content }: { content: string }) => {
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
    editable: false,
  });
  React.useEffect(() => {
    if (!editor) return;
    setTimeout(() => {
      editor.commands.setContent(content);
    }, 0);
  }, [content, editor]);
  if (!editor) return null;

  return (
    <div className="w-full bg-white rounded-md">
      <EditorContent editor={editor} className=" rounded text-sm" />
    </div>
  );
};

export default RichTextPreview;
