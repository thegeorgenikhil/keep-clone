import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import MainInput from "./MainInput/MainInput";
import "./Home.css";

const MainPage = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <NavBar setCollapse={setCollapse} />
      <div className="flex">
        <SideBar collapse={collapse} />
        <main className="main-container">
          <MainInput />
        </main>
      </div>
    </div>
  );
};

export default MainPage;
