import React from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdOutlineRedo,
  MdFormatUnderlined,
  MdUndo,
  MdOutlineLabel,
} from "react-icons/md";
import { useAuth } from "../../../context/AuthContext";
import { useUser } from "../../../context/UserContext";
import ColorPalette from "../../ColorPalette/ColorPalette";
import "./MenuBar.css";

const MenuBar = ({ editor, userNote, setIsUserOnInput, setUserNote }) => {
  const { addUserNote } = useUser();
  const {
    auth: { token },
  } = useAuth();
  const closeHandler = async () => {
    try {
      if (userNote.content === "") {
        return setIsUserOnInput(false);
      } else {
        await addUserNote(userNote, token);
        setIsUserOnInput(false);
        setUserNote({
          title: "",
          content: "Enter note here....",
          tags: [],
          color: "#ffffff",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
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
          <ColorPalette setUserNote={setUserNote} />
          <button
            onClick={() => editor.chain().focus().redo().run()}
            className="menu-bar-btn"
          >
            <MdOutlineLabel className="menu-bar-icon" />
          </button>
          <button onClick={closeHandler} className="menu-bar-btn close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
