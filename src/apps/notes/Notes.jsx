import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Window from "../../components/window/Window";
import "./notes.scss";

const Notes = ({ windowName, setWindowsState }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Window windowName={windowName} setWindowsState={setWindowsState}>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Window>
  );
};

export default Notes;
