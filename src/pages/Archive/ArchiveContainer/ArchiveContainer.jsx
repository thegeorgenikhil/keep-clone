import React from "react";
import parse from "html-react-parser";
import { MdOutlineRestore, MdDeleteOutline } from "react-icons/md";
import "./ArchiveContainer.css";
import { useUser } from "../../../context/UserContext";
import { useAuth } from "../../../context/AuthContext";
import { sortByDate } from "../../../utils/sortByDate";

const ArchiveNote = ({ note }) => {
  const {
    auth: { token },
  } = useAuth();
  const { restoreUserNoteFromArchive, deleteUserNoteFromArchive } = useUser();
  const restoreClickHandler = async (noteId, token) => {
    await restoreUserNoteFromArchive(noteId, token);
  };
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <div className="note-main-container">
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
          onClick={() => restoreClickHandler(note._id, token)}
        >
          <MdOutlineRestore className="menu-bar-icon" />
        </button>
        <button
          className="note-action-btn"
          onClick={() => deleteUserNoteFromArchive(note._id, token)}
        >
          <MdDeleteOutline className="menu-bar-icon" />
        </button>
      </div>
    </div>
  );
};

const ArchiveContainer = () => {
  const {
    userNoteState: { archives, dateSort },
  } = useUser();
  return (
    <div className="archives-container">
      {archives.sort(sortByDate(dateSort)).map((note) => (
        <ArchiveNote note={note} key={note._id} />
      ))}
    </div>
  );
};

export default ArchiveContainer;
