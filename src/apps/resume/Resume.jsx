import Window from "../../components/window/Window";
import "./resume.scss";

const Resume = ({ windowName, setWindowsState, bringToFront, zIndex }) => {
  return (
    <Window
      windowName={windowName}
      setWindowsState={setWindowsState}
      bringToFront={bringToFront}
      zIndex={zIndex}
    >
      <div className="resume-window">
        <embed src="/resume.pdf" frameBorder="0" />
      </div>
    </Window>
  );
};

export default Resume;
