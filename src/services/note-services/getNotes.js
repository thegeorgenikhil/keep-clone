import axios from "axios";

export const getNotes = async (encodedToken) => {
  return await axios.get(`/api/notes`, {
    headers: {
      authorization: encodedToken,
    },
  });
};
