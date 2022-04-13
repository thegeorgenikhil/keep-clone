import React, { createContext, useContext } from "react";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{state:1}}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
