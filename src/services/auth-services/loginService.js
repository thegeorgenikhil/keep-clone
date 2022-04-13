import axios from "axios";

export const loginService = async (userData) => {
  return await axios.post("/api/auth/login", userData);
};
