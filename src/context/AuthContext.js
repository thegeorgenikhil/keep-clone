import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { loginService } from "../services/auth-services/loginService";
import { signupService } from "../services/auth-services/signupService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return {
        isAuthenticated: true,
        token: token,
        isLoading: false,
      };
    }
    return {
      isAuthenticated: false,
      token: "",
      isLoading: false,
    };
  });

  const signup = async (userData) => {
    try {
      setAuth({ ...auth, isLoading: true });
      const res = await signupService({ ...userData });
      const data = await res.data;
      if (data.createdUser) {
        toast.success("Successfully signed up!");
        localStorage.setItem("token", data.encodedToken);
        setAuth({
          isAuthenticated: true,
          token: data.encodedToken,
          isLoading: false,
        });
      }
    } catch (error) {
      toast.error("Error Occured. Please try again!");
      setAuth({ ...auth, isLoading: false });
      console.log(error);
    }
  };

  const login = async (userData) => {
    try {
      setAuth({ ...auth, isLoading: true });
      const res = await loginService({ ...userData });
      const data = await res.data;
      if (data.foundUser) {
        toast.success("Successfully signed in!");
        localStorage.setItem("token", data.encodedToken);
        setAuth({
          isAuthenticated: true,
          token: data.encodedToken,
          isLoading: false,
        });
      }
    } catch (error) {
      toast.error("Error Occured. Please try again!");
      setAuth({ ...auth, isLoading: false });
      console.log(error);
    }
  };

  const signout = () => {
    toast.success("Successfully signed out!");
    localStorage.removeItem("token");
    setAuth({
      isAuthenticated: false,
      token: "",
      isLoading: false,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, signup, login, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
