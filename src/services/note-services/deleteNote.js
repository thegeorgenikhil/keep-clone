import axios from "axios";

export const deleteNote = async (noteId, encodedToken) => {
  return await axios.delete(`api/notes/${noteId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
