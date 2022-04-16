import axios from "axios";

export const restoreNote = async (noteId, encodedToken) => {
  return await axios.post(
    `/api/archives/restore/${noteId}`,
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
