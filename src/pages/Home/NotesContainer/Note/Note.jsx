import React from "react";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdDeleteOutline,
} from "react-icons/md";
import parse from "html-react-parser";
import { useUser } from "../../../../context/UserContext";
import { useAuth } from "../../../../context/AuthContext";
import "./Note.css";

const Note = ({ note, setEditNote }) => {
  const {
    auth: { isAuthenticated, token },
  } = useAuth();
  const { deleteUserNote } = useUser();

  const noteDeleteHandler = async (id) => {
    if (isAuthenticated) {
      setEditNote((editNote) => {
        return { ...editNote, isEdit: false };
      });
      await deleteUserNote(id, token);
    }
  };
  return (
    <div className="note">
      <div
        className="note-main-container"
        onClick={() => setEditNote({ isEdit: true, note: note })}
      >
        <div className="note-title">{note.title}</div>
        <div className="note-content">{parse(note.content)}</div>
      </div>
      <div className="notes-action-container">
        <button className="note-action-btn">
          <MdOutlineColorLens className="menu-bar-icon" />
        </button>
        <button className="note-action-btn">
          <MdOutlineArchive className="note-action-icon" />
        </button>
        <button
          className="note-action-btn"
          onClick={() => noteDeleteHandler(note._id)}
        >
          <MdDeleteOutline className="note-action-icon" />
        </button>
      </div>
    </div>
  );
};

export default Note;
