import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import React from "react";

export const EditNoteTipTap = ({ setEditNote, editNoteContent }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: editNoteContent,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setEditNote((editNote) => {
        return { ...editNote, note: { ...editNote.note, content: html } };
      });
    },
  });

  return (
    <div className="">
      <EditorContent editor={editor} />
    </div>
  );
};
