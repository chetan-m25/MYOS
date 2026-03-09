import { useState } from "react";
import "./styles/global.scss";
import Dock from "./system/dock/Dock";
import Nav from "./system/menubar/Nav";
import Github from "./apps/github/Github";
import Notes from "./apps/notes/Notes";
import Resume from "./apps/resume/Resume";
import Spotify from "./apps/spotify/Spotify";
import Terminal from "./apps/terminal/Terminal";
import BootScreen from "./core/boot/BootScreen";
import LiveWallpaper from "./core/wallpaper/LiveWallpaper";

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    terminal: false,
  });

  const [bootComplete, setBootComplete] = useState(false);

  const [zIndexMap, setZIndexMap] = useState({});
  const [topZIndex, setTopZIndex] = useState(10);

  const bringToFront = (windowName) => {
    setTopZIndex((prev) => {
      const newZ = prev + 1;

      setZIndexMap((map) => ({
        ...map,
        [windowName]: newZ,
      }));

      return newZ;
    });
  };

  if (!bootComplete) {
    return <BootScreen onFinish={() => setBootComplete(true)} />;
  }

  return (
    <main>
      <LiveWallpaper />

      <Nav />
      <Dock setWindowsState={setWindowsState} />

      {windowsState.github && (
        <Github
          windowName="github"
          setWindowsState={setWindowsState}
          bringToFront={bringToFront}
          zIndex={zIndexMap.github}
        />
      )}

      {windowsState.notes && (
        <Notes
          windowName="notes"
          setWindowsState={setWindowsState}
          bringToFront={bringToFront}
          zIndex={zIndexMap.notes}
        />
      )}

      {windowsState.resume && (
        <Resume
          windowName="resume"
          setWindowsState={setWindowsState}
          bringToFront={bringToFront}
          zIndex={zIndexMap.resume}
        />
      )}

      {windowsState.spotify && (
        <Spotify
          windowName="spotify"
          setWindowsState={setWindowsState}
          bringToFront={bringToFront}
          zIndex={zIndexMap.spotify}
        />
      )}

      {windowsState.terminal && (
        <Terminal
          windowName="terminal"
          setWindowsState={setWindowsState}
          bringToFront={bringToFront}
          zIndex={zIndexMap.terminal}
        />
      )}
    </main>
  );
}

export default App;
