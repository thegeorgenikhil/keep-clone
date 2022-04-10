import parse from "html-react-parser";

const Note = ({ description }) => {
  return (
    <>
      <div className="ProseMirror">{parse(description)}</div>
    </>
  );
};

export default Note;
