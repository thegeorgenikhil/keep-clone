import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {
  MdFormatBold,
  MdFormatItalic,
  MdOutlineRedo,
  MdFormatUnderlined,
  MdUndo,
  MdOutlineColorLens,
  MdOutlineLabel,
} from "react-icons/md";
import React, { useState } from "react";
import "./TipTap.css";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="menu-bar">
      <div className="menu-bar-options-container">
        <div>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className="menu-bar-btn"
          >
            <MdFormatBold
              className={`menu-bar-icon ${
                editor.isActive("bold") ? "is_active" : ""
              }`}
            />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className="menu-bar-btn"
          >
            <MdFormatItalic
              className={`menu-bar-icon ${
                editor.isActive("italic") ? "is_active" : ""
              }`}
            />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className="menu-bar-btn"
          >
            <MdFormatUnderlined
              className={`menu-bar-icon ${
                editor.isActive("underline") ? "is_active" : ""
              }`}
            />
          </button>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            className="menu-bar-btn"
          >
            <MdUndo
              className={`menu-bar-icon ${
                editor.isActive("undo") ? "is_active" : ""
              }`}
            />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            className="menu-bar-btn"
          >
            <MdOutlineRedo
              className={`menu-bar-icon ${
                editor.isActive("redo") ? "is_active" : ""
              }`}
            />
          </button>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => editor.chain().focus().redo().run()}
            className="menu-bar-btn"
          >
            <MdOutlineColorLens className="menu-bar-icon" />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            className="menu-bar-btn"
          >
            <MdOutlineLabel className="menu-bar-icon" />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            className="menu-bar-btn close-btn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const TipTap = ({ setDescription }) => {
  const [isUserOnInput, setIsUserOnInput] = useState(false);
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "Take a note...",

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });

  return (
    <div className="text-editor">
      <input
        placeholder={isUserOnInput ? "Title" : "Take a note..."}
        className="take-a-note-input"
        onClick={() => setIsUserOnInput(true)}
      />
      {isUserOnInput && (
        <>
          <EditorContent editor={editor} className="content-input" />
          <MenuBar editor={editor} />
        </>
      )}
    </div>
  );
};
