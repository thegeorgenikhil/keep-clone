import React from "react";
import { MdOutlineArchive, MdDeleteOutline } from "react-icons/md";
import "./EditNoteContainer.css";
import { EditNoteTipTap } from "../EditNoteTipTap/EditNoteTipTap";
import { useUser } from "../../../../context/UserContext";
import ColorPalette from "../../../../components/ColorPalette/ColorPalette";
import Tags from "../../../../components/Tags/Tags";

const EditNoteContainer = ({ setEditNote, editNote, setIsEdit }) => {
  const { title } = editNote;
  const { updateUserNote } = useUser();

  const closeHandler = async () => {
    await updateUserNote(editNote);
    setIsEdit(false);
    setEditNote({});
  };
  return (
    <div className="notes-edit-container">
      <div
        className="notes-edit-blur"
        onClick={() => {
          setIsEdit(false);
          setEditNote({});
        }}
      ></div>
      <div
        className="note-edit-container"
        style={{ backgroundColor: editNote.color }}
      >
        <div className="note-main-container">
          <div>
            <input
              type="text"
              value={title}
              className="note-edit-title"
              onChange={(e) =>
                setEditNote({
                  ...editNote,
                  title: e.target.value,
                })
              }
            />
          </div>
          <EditNoteTipTap
            setEditNote={setEditNote}
            editNoteContent={editNote.content}
          />
        </div>
        <div className="mt-1">
          <Tags tags={editNote.tags} setNote={setEditNote} />
        </div>
        <div className="edit-note-action-container">
          <ColorPalette setUserNote={setEditNote} />
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
