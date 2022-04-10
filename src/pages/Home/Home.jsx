import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import MainInput from "./MainInput/MainInput";
import "./Home.css";

const MainPage = () => {
  const [collapseMenu, setCollapseMenu] = useState(false);
  return (
    <div>
      <NavBar setCollapseMenu={setCollapseMenu} />
      <div className="flex">
        <SideBar collapseMenu={collapseMenu} />
        <main className="main-container">
          <MainInput />
        </main>
      </div>
    </div>
  );
};

export default MainPage;
