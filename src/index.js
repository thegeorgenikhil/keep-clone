import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { TagProvider } from "./context/TagContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <TagProvider>
          <App />
        </TagProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
