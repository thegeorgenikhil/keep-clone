import React, { useState } from "react";
import "./NavBar.css";
import {
  MdMenu,
  MdLogout,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import NavIcon from "../../assets/nav-icon.png";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import { actionTypes } from "../../reducers/actionTypes";
const { SET_DATE_SORT_VALUE } = actionTypes;
const NavBar = ({ setCollapse }) => {
  const {
    signout,
    auth: { isAuthenticated },
  } = useAuth();
  const { userNoteDispatch } = useUser();
  const [dateSortValue, setDateSortValue] = useState("ASC");
  const dateSortHandler = () => {
    if (dateSortValue === "ASC") {
      setDateSortValue("DESC");
      userNoteDispatch({
        type: SET_DATE_SORT_VALUE,
        payload: { dateSortValue: "DESC" },
      });
    } else {
      setDateSortValue("ASC");
      userNoteDispatch({
        type: SET_DATE_SORT_VALUE,
        payload: { dateSortValue: "ASC" },
      });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-main">
        <li
          className="nav-link"
          onClick={() => setCollapse((collapse) => !collapse)}
        >
          <MdMenu className="nav-icon" />
        </li>
        <li>
          <div className="nav-brand-container">
            <img src={NavIcon} alt="keep-logo" className="nav-logo" />
            <p className="nav-brand">Keep</p>
          </div>
        </li>
      </ul>
      {isAuthenticated && (
        <ul className="nav-right">
          <li className="nav-link no-hover">
            <button
              className="date-sort-btn"
              value={dateSortValue}
              onClick={dateSortHandler}
            >
              Date{" "}
              {dateSortValue === "ASC" ? (
                <MdKeyboardArrowDown />
              ) : (
                <MdKeyboardArrowUp />
              )}
            </button>
          </li>
          <li
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              signout();
            }}
          >
            <MdLogout className="nav-icon" />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
