import { Rnd } from "react-rnd";
import "./window.scss";

const Window = ({
  children,
  width = "40vw",
  height = "60vh",
  windowName,
  setWindowsState,
  bringToFront,
  zIndex = 1,
}) => {
  return (
    <Rnd
      default={{ width: width, height: height, x: 300, y: 200 }}
      style={{ zIndex }}
      onMouseDown={() => bringToFront(windowName)}
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
