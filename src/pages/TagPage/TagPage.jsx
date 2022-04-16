import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import parse from "html-react-parser";
import { MdOutlineArchive, MdDeleteOutline } from "react-icons/md";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";

const TagPage = () => {
  const [collapse, setCollapse] = useState(false);
  const { tag } = useParams();
  const {
    auth: { token },
  } = useAuth();
  const {
    deleteUserNote,
    addUserNoteToArchive,
    userNoteState: { notes },
  } = useUser();

  const tagFilter = (note) => note.tags.includes(tag);

  const noteDeleteHandler = async (id) => {
    await deleteUserNote(id, token);
  };

  const archiveClickHandler = async (note, token) => {
    await addUserNoteToArchive(note, token);
  };
  return (
    <div>
      <NavBar setCollapse={setCollapse} />
      <div className="flex">
        <SideBar collapse={collapse} />
        <main className="main-container mt-1">
          <div className="notes-container">
            {notes.filter(tagFilter).map((note) => {
              return (
                <div
                  className="note"
                  style={{ backgroundColor: note.color }}
                  key={note._id}
                >
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
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TagPage;
