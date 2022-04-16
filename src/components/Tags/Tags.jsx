import React, { useState } from "react";
import "./Tags.css";

const Tags = ({ tags, setNote }) => {
  const [tag, setTag] = useState("");
  const changeHandler = (e) => {
    setTag(e.target.value);
  };
  const keyDownHandler = (e) => {
    if (e.keyCode === 8 && tag === "") {
      setNote((prev) => ({ ...prev, tags: tags.slice(0, tags.length - 1) }));
    }
    if (tag === "" || tag === " ") return;
    if (tags.includes(tag.trim())) return setTag("");
    if (e.keyCode === 13 || e.keyCode === 32) {
      setNote((prev) => {
        return {
          ...prev,
          tags: [...prev.tags, tag.trim()],
        };
      });
      setTag("");
    }
  };
  return (
    <div className="tag-main-container">
      <div className="tags-container">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="tag">
              {tag}
            </span>
          );
        })}
      </div>
      <input
        type="text"
        className="tag-input"
        placeholder="Add tags"
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        value={tag}
      />
    </div>
  );
};

export default Tags;
