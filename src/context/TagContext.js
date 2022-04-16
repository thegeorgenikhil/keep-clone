import React, { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";
const TagContext = createContext();

const tagReducer = (tagArr, currNote) => {
  const { tags } = currNote;
  tags.map((tag) => {
    if (tagArr.includes(tag)) return null;
    return tagArr.push(tag);
  });
  return tagArr;
};

export const TagProvider = ({ children }) => {
  const {
    userNoteState: { notes },
  } = useUser();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const uniqueTags = notes.reduce(tagReducer, []);
    setTags(uniqueTags);
  }, [notes]);
  return <TagContext.Provider value={{ tags }}>{children}</TagContext.Provider>;
};

export const useTags = () => useContext(TagContext);
