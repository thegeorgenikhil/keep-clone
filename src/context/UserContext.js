import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes } from "../reducers/actionTypes";
import { userNotesReducer } from "../reducers/userNotesReducer";
import { addToArchive } from "../services/archive-services/addToArchive";
import { deleteFromArchive } from "../services/archive-services/deleteFromArchive";
import { getArchiveNotes } from "../services/archive-services/getArchiveNotes";
import { restoreNote } from "../services/archive-services/restoreNote";
import {
  addNote,
  getNotes,
  deleteNote,
  updateNote,
} from "../services/note-services";
import { useAuth } from "./AuthContext";

const { SET_USER_NOTES, SET_ARCHIVE_NOTES, SET_NOTES_AND_ARCHIVE_NOTES } =
  actionTypes;

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const {
    auth: { isAuthenticated, token },
  } = useAuth();
  const [userNoteState, userNoteDispatch] = useReducer(userNotesReducer, {
    notes: [],
    archives: [],
  });

  const getUserNotesOnInitialLoad = async (isAuthenticated, token) => {
    try {
      if (isAuthenticated) {
        const res = await getNotes(token);
        const data = await res.data;
        if (data.notes) {
          userNoteDispatch({
            type: SET_USER_NOTES,
            payload: { notes: data.notes },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addUserNote = async (note, token) => {
    try {
      const userNote = {
        ...note,
      };
      const res = await addNote(userNote, token);
      const data = await res.data;
      if (data.notes) {
        userNoteDispatch({
          type: SET_USER_NOTES,
          payload: { notes: data.notes },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserNote = async (updatedNote) => {
    try {
      const res = await updateNote(updatedNote, token);
      const data = await res.data;
      if (data.notes) {
        userNoteDispatch({
          type: SET_USER_NOTES,
          payload: { notes: data.notes },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserNote = async (noteId, token) => {
    try {
      const res = await deleteNote(noteId, token);
      const data = await res.data;
      if (data.notes) {
        userNoteDispatch({
          type: SET_USER_NOTES,
          payload: { notes: data.notes },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserArchiveNotes = async (isAuthenticated, token) => {
    try {
      if (isAuthenticated) {
        const res = await getArchiveNotes(token);
        const data = await res.data;
        if (data.archives) {
          userNoteDispatch({
            type: SET_ARCHIVE_NOTES,
            payload: { archives: data.archives },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addUserNoteToArchive = async (note, token) => {
    try {
      const res = await addToArchive(note, token);
      const data = await res.data;
      if (data.archives && data.notes) {
        userNoteDispatch({
          type: SET_NOTES_AND_ARCHIVE_NOTES,
          payload: { archives: data.archives, notes: data.notes },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const restoreUserNoteFromArchive = async (noteId, token) => {
    try {
      const res = await restoreNote(noteId, token);
      const data = res.data;
      if (data.notes && data.archives) {
        userNoteDispatch({
          type: SET_NOTES_AND_ARCHIVE_NOTES,
          payload: { archives: data.archives, notes: data.notes },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserNoteFromArchive = async (noteId, token) => {
    try {
      const res = await deleteFromArchive(noteId, token);
      const data = await res.data;
      if (data.archives) {
        userNoteDispatch({
          type: SET_ARCHIVE_NOTES,
          payload: { archives: data.archives },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserNotesOnInitialLoad(isAuthenticated, token);
    getUserArchiveNotes(isAuthenticated, token);
  }, [isAuthenticated, token]);
  return (
    <UserContext.Provider
      value={{
        userNoteState,
        userNoteDispatch,
        addUserNote,
        updateUserNote,
        deleteUserNote,
        addUserNoteToArchive,
        restoreUserNoteFromArchive,
        deleteUserNoteFromArchive,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
