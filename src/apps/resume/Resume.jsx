import Window from "../../components/window/Window";
import "./resume.scss";

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <Window windowName={windowName} setWindowsState={setWindowsState}>
      <div className="resume-window">
        <embed src="/resume.pdf" frameBorder="0" />
      </div>
    </Window>
  );
};

export default Resume;
