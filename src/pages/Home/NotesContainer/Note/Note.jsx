import React from "react";
import { MdOutlineArchive, MdDeleteOutline } from "react-icons/md";
import parse from "html-react-parser";
import { useUser } from "../../../../context/UserContext";
import { useAuth } from "../../../../context/AuthContext";
import "./Note.css";

const Note = ({ note, setEditNote, setIsEdit }) => {
  const {
    auth: { isAuthenticated, token },
  } = useAuth();
  const { deleteUserNote, addUserNoteToArchive } = useUser();

  const noteDeleteHandler = async (id) => {
    if (isAuthenticated) {
      setEditNote((editNote) => {
        return { ...editNote, isEdit: false };
      });
      await deleteUserNote(id, token);
    }
  };

  const archiveClickHandler = async (note, token) => {
    await addUserNoteToArchive(note, token);
  };
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <div
        className="note-main-container"
        onClick={() => {
          setIsEdit(true);
          setEditNote({ ...note });
        }}
      >
        <div className="note-title">{note.title}</div>
        <div className="note-content">{parse(note.content)}</div>
        <div className="tags-container">
          {note.tags.map((tag, index) => {
            return (
              <span key={index} className="tag">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className="notes-action-container">
        <button
          className="note-action-btn"
          onClick={() => archiveClickHandler(note, token)}
        >
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
