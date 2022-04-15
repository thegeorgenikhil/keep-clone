import { actionTypes } from "./actionTypes";

const { SET_USER_NOTES } = actionTypes;

export const userNotesReducer = (state, action) => {
  switch (action.type) {
    case SET_USER_NOTES:
      return { ...state, notes: action.payload.notes };
    default:
      return state;
  }
};
