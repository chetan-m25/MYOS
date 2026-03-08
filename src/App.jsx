import { useState } from "react";
import "./styles/global.scss";
import Dock from "./system/dock/Dock";
import Nav from "./system/menubar/Nav";
import Github from "./apps/github/Github";
import Notes from "./apps/notes/Notes";
import Resume from "./apps/resume/Resume";
import Spotify from "./apps/spotify/Spotify";
import Terminal from "./apps/terminal/Terminal";

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    terminal: false,
  });

  return (
    <main>
      <Nav />
      <Dock setWindowsState={setWindowsState} />
      {windowsState.github && (
        <Github windowName="github" setWindowsState={setWindowsState} />
      )}
      {windowsState.notes && (
        <Notes windowName="notes" setWindowsState={setWindowsState} />
      )}
      {windowsState.resume && (
        <Resume windowName="resume" setWindowsState={setWindowsState} />
      )}
      {windowsState.spotify && (
        <Spotify windowName="spotify" setWindowsState={setWindowsState} />
      )}
      {windowsState.terminal && (
        <Terminal windowName="terminal" setWindowsState={setWindowsState} />
      )}
    </main>
  );
}

export default App;
