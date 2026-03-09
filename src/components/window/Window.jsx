import { Rnd } from "react-rnd";
import { useState } from "react";
import "./window.scss";

let highestZ = 10;
let spawnOffset = 0;

const Window = ({
  children,
  width = "40vw",
  height = "60vh",
  windowName,
  setWindowsState,
}) => {
  const [zIndex, setZIndex] = useState(++highestZ);

  const offset = spawnOffset;
  spawnOffset += 40;
  if (spawnOffset > 160) spawnOffset = 0;

  const bringToFront = () => {
    highestZ += 1;
    setZIndex(highestZ);
  };

  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 300 + offset,
        y: 180 + offset,
      }}
      style={{ zIndex }}
      onMouseDown={bringToFront}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              onClick={() =>
                setWindowsState((state) => ({
                  ...state,
                  [windowName]: false,
                }))
              }
              className="dot red"
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>chetanmangalagatti - zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default Window;
