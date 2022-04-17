import axios from "axios";

export const deleteFromArchive = async (noteId, encodedToken) => {
  return await axios.delete(`/api/archives/delete/${noteId}`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
