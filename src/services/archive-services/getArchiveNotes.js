import axios from "axios";

export const getArchiveNotes = async (encodedToken) => {
  return await axios.get("/api/archives", {
    headers: {
      authorization: encodedToken,
    },
  });
};
