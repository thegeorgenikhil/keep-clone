import React from "react";
import {
  MdOutlineColorLens,
  MdOutlineArchive,
  MdDeleteOutline,
} from "react-icons/md";
import "./EditNoteContainer.css";
import { EditNoteTipTap } from "../EditNoteTipTap/EditNoteTipTap";
import { useUser } from "../../../../context/UserContext";

const EditNoteContainer = ({ setEditNote, editNote }) => {
  const {
    note: { title },
  } = editNote;
  const { updateUserNote } = useUser();

  const closeHandler = async () => {
    await updateUserNote(editNote.note);
    setEditNote({ isEdit: false, note: {} });
  };
  return (
    <div className="notes-edit-container">
      <div
        className="notes-edit-blur"
        onClick={() => setEditNote({ isEdit: false, note: {} })}
      ></div>
      <div className="note-edit-container">
        <div className="note-main-container">
          <div>
            <input
              type="text"
              value={title}
              className="note-edit-title"
              onChange={(e) =>
                setEditNote({
                  ...editNote,
                  note: { ...editNote.note, title: e.target.value },
                })
              }
            />
          </div>
          <EditNoteTipTap
            setEditNote={setEditNote}
            editNoteContent={editNote.note.content}
          />
        </div>
        <div className="edit-note-action-container">
          <button className="note-action-btn">
            <MdOutlineColorLens className="menu-bar-icon" />
          </button>
          <button className="note-action-btn">
            <MdOutlineArchive className="note-action-icon" />
          </button>
          <button className="note-action-btn">
            <MdDeleteOutline className="note-action-icon" />
          </button>
          <button className="note-action-btn" onClick={closeHandler}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNoteContainer;
