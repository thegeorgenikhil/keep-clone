import React from "react";
import "./Input.css";

const Input = ({ name, type, changeHandler, placeholder, value }) => {
  return (
    <div className="input-group">
      <label className="input-label" htmlFor={name}>
        {name.toUpperCase()}
      </label>
      <input
        id={name}
        type={type || "text"}
        name={name}
        className="input"
        value={value}
        onChange={changeHandler}
        placeholder={placeholder || ""}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
