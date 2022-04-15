import React, { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes } from "../reducers/actionTypes";
import { userNotesReducer } from "../reducers/userNotesReducer";
import {
  addNote,
  getNotes,
  deleteNote,
  updateNote,
} from "../services/note-services";
import { useAuth } from "./AuthContext";

const { SET_USER_NOTES } = actionTypes;

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const {
    auth: { isAuthenticated, token },
  } = useAuth();
  const [userNoteState, userNoteDispatch] = useReducer(userNotesReducer, {
    notes: [],
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
        tags: [],
        color: "#FFFFFF",
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

  useEffect(() => {
    getUserNotesOnInitialLoad(isAuthenticated, token);
  }, [isAuthenticated, token]);
  return (
    <UserContext.Provider
      value={{
        userNoteState,
        userNoteDispatch,
        addUserNote,
        updateUserNote,
        deleteUserNote,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
