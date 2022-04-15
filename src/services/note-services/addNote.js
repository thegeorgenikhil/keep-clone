import axios from "axios";

export const addNote = async (note, encodedToken) => {
  return await axios.post(
    "/api/notes",
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
