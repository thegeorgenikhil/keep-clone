import { actionTypes } from "./actionTypes";

const {
  SET_USER_NOTES,
  SET_ARCHIVE_NOTES,
  SET_NOTES_AND_ARCHIVE_NOTES,
  SET_DATE_SORT_VALUE,
} = actionTypes;

export const userNotesReducer = (state, action) => {
  switch (action.type) {
    case SET_USER_NOTES:
      return { ...state, notes: action.payload.notes };
    case SET_ARCHIVE_NOTES:
      return { ...state, archives: action.payload.archives };
    case SET_NOTES_AND_ARCHIVE_NOTES:
      return {
        ...state,
        archives: action.payload.archives,
        notes: action.payload.notes,
      };
    case SET_DATE_SORT_VALUE:

      return {
        ...state,
        dateSort: action.payload.dateSortValue,
      };
    default:
      return state;
  }
};
