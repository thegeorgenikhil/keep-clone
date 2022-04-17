import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import React, { useState } from "react";
import "./TipTap.css";
import MenuBar from "./MenuBar/MenuBar";
import Tags from "../Tags/Tags";

export const TipTap = () => {
  const [isUserOnInput, setIsUserOnInput] = useState(false);
  const [userNote, setUserNote] = useState({
    title: "",
    content: "",
    tags: [],
    color: "#ffffff",
  });

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Enter note here",
      }),
      Underline,
    ],
    content: "",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setUserNote((userNote) => ({ ...userNote, content: html }));
    },
  });

  return (
    <div className="text-editor" style={{ backgroundColor: userNote.color }}>
      <input
        placeholder={isUserOnInput ? "Title" : "Take a note..."}
        className="take-a-note-input"
        onClick={() => setIsUserOnInput(true)}
        onChange={(e) => setUserNote({ ...userNote, title: e.target.value })}
        value={userNote.title}
      />
      {isUserOnInput && (
        <>
          <EditorContent editor={editor} className="content-input" />
          <Tags tags={userNote.tags} setNote={setUserNote} />
          <MenuBar
            editor={editor}
            userNote={userNote}
            setUserNote={setUserNote}
            setIsUserOnInput={setIsUserOnInput}
          />
        </>
      )}
    </div>
  );
};
