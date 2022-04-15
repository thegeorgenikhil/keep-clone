import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import "./Home.css";
import { TipTap } from "../../components/TipTap/TipTap";
import NotesContainer from "./NotesContainer/NotesContainer";

const MainPage = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <NavBar setCollapse={setCollapse} />
      <div className="flex">
        <SideBar collapse={collapse} />
        <main className="main-container">
          <TipTap />
          <NotesContainer />
        </main>
      </div>
    </div>
  );
};

export default MainPage;
