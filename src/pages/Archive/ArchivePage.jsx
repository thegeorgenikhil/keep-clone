import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import ArchiveContainer from "./ArchiveContainer/ArchiveContainer";

const ArchivePage = () => {
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    setCollapse(false);
  }, []);
  return (
    <div>
      <NavBar setCollapse={setCollapse} />
      <div className="flex">
        <SideBar collapse={collapse} />
        <main className="main-container">
          <ArchiveContainer />
        </main>
      </div>
    </div>
  );
};

export default ArchivePage;
