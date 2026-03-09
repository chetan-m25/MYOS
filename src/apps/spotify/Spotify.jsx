import Window from "../../components/window/Window";
import "./spotify.scss";

const Spotify = ({ windowName, setWindowsState, bringToFront, zIndex }) => {
  return (
    <Window
      windowName={windowName}
      setWindowsState={setWindowsState}
      bringToFront={bringToFront}
      zIndex={zIndex}
      width="30vw"
    >
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </Window>
  );
};

export default Spotify;
