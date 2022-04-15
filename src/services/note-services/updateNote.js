import axios from "axios";

export const updateNote = async (note, encodedToken) => {
  return await axios.post(
    `api/notes/${note._id}`,
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
