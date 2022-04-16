import axios from "axios";

export const addToArchive = async (note, encodedToken) => {
  return await axios.post(
    `/api/notes/archives/${note._id}`,
    { note },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
};
