import axios from "axios";

export const signupService = async (userData) => {
  return await axios.post("/api/auth/signup", userData);
};
