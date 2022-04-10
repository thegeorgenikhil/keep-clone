import React, { useState } from "react";
import "./SideBar.css";
import { MdLightbulbOutline, MdOutlineArchive } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
const SideBar = ({ collapseMenu }) => {
  return (
    <aside className={`sidebar ${collapseMenu ? "" : "collapse"}`}>
      <ul className="sidebar-group">
        <li className="sidebar-tab-container tab-active">
          <MdLightbulbOutline className="sidebar-icon" />
          <p className="sidebar-tab-name">Notes</p>
        </li>
        <li className="sidebar-tab-container">
          <MdOutlineArchive className="sidebar-icon" />
          <p className="sidebar-tab-name">Archive</p>
        </li>
        <li className="sidebar-tab-container">
          <FiTrash2 className="sidebar-icon" />
          <p className="sidebar-tab-name">Trash</p>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
