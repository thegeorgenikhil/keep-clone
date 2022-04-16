import React from "react";
import "./SideBar.css";
import {
  MdLightbulbOutline,
  MdOutlineArchive,
  MdOutlineLabel,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useTags } from "../../context/TagContext";
const SideBar = ({ collapse }) => {
  const { tags } = useTags();
  return (
    <aside className={`sidebar ${collapse ? "non-collapse" : "collapse"}`}>
      <ul className="sidebar-group">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "tab-active sidebar-tab-container"
                : "sidebar-tab-container"
            }
          >
            <MdLightbulbOutline className="sidebar-icon" />
            <p className="sidebar-tab-name">Notes</p>
          </NavLink>
        </li>
        {tags.map((tag, index) => {
          return (
            <li key={index}>
              <NavLink
                to={`/tags/${tag}`}
                className={({ isActive }) =>
                  isActive
                    ? "tab-active sidebar-tab-container"
                    : "sidebar-tab-container"
                }
              >
                <MdOutlineLabel className="sidebar-icon" />
                <p className="sidebar-tab-name">{tag}</p>
              </NavLink>
            </li>
          );
        })}
        <li>
          <NavLink
            to="/archive"
            className={({ isActive }) =>
              isActive
                ? "tab-active sidebar-tab-container"
                : "sidebar-tab-container"
            }
          >
            <MdOutlineArchive className="sidebar-icon" />
            <p className="sidebar-tab-name">Archive</p>
          </NavLink>
        </li>
        {/* TRASH TO BE IMPLEMENTED LATER */}
        {/* <li>
          <NavLink
            to="/trash"
            className={({ isActive }) =>
              isActive
                ? "tab-active sidebar-tab-container"
                : "sidebar-tab-container"
            }
          >
            <FiTrash2 className="sidebar-icon" />
            <p className="sidebar-tab-name">Trash</p>
          </NavLink>
        </li> */}
      </ul>
    </aside>
  );
};

export default SideBar;
