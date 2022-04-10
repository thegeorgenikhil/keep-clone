import React, { useState } from "react";
import Note from "../../../components/Note/Note";
import { TipTap } from "../../../components/TipTap/TipTap";
import "./MainInput.css";

const MainInput = () => {
  const [description, setDescription] = useState("");
  return (
    <div className="main-editor">
      <TipTap setDescription={setDescription} />
      {/* <Note description={description} /> */}
    </div>
  );
};

export default MainInput;
