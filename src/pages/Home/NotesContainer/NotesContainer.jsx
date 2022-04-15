import React, { useState } from "react";
import { useUser } from "../../../context/UserContext";
import EditNoteContainer from "./EditNoteContainer/EditNoteContainer";
import Note from "./Note/Note";
import "./NotesContainer.css";

const NotesContainer = () => {
  const {
    userNoteState: { notes },
  } = useUser();
  const [editNote, setEditNote] = useState({ isEdit: false, note: {} });
  const { isEdit } = editNote;
  return (
    <>
      <div className="notes-container">
        {notes &&
          notes.map((note) => (
            <Note key={note._id} note={note} setEditNote={setEditNote} />
          ))}
      </div>
      {isEdit && (
        <EditNoteContainer setEditNote={setEditNote} editNote={editNote} />
      )}
    </>
  );
};

export default NotesContainer;
