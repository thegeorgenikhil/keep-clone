import React, { useState } from "react";
import { MdOutlineColorLens } from "react-icons/md";
import { colors } from "./colors";
import "./ColorPalette.css";

const ColorPalette = ({ setUserNote }) => {
  const [isPaletteActive, setIsPaletteActive] = useState(false);
  return (
    <div className="color-palette-container">
      {isPaletteActive && (
        <div className="color-palette">
          {colors.map((color, index) => {
            return (
              <span
                key={index}
                className="color-palette-rounds"
                style={{ backgroundColor: color }}
                onClick={() => {
                  setUserNote((userNote) => {
                    return { ...userNote, color: color };
                  });
                  setIsPaletteActive(false);
                }}
              ></span>
            );
          })}
        </div>
      )}
      <button
        className="note-action-btn"
        onClick={() => setIsPaletteActive(!isPaletteActive)}
      >
        <MdOutlineColorLens className="menu-bar-icon" />
      </button>
    </div>
  );
};

export default ColorPalette;
