import React from "react";
import "./NavBar.css";
import { MdMenu, MdPersonOutline } from "react-icons/md";
import NavIcon from "../../assets/nav-icon.png";
const NavBar = ({ setCollapseMenu }) => {
  return (
    <nav className="navbar">
      <ul className="nav-main">
        <li className="nav-link" onClick={() => setCollapseMenu(collapse => !collapse)}>
          <MdMenu className="nav-icon" />
        </li>
        <li>
          <div className="nav-brand-container">
            <img src={NavIcon} alt="keep-logo" className="nav-logo" />
            <p className="nav-brand">Keep</p>
          </div>
        </li>
      </ul>
      <ul className="nav-right">
        <li className="nav-link">
          <MdPersonOutline className="nav-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
